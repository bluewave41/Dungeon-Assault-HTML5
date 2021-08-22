import User from '../../../models/User';
import { applySession } from 'next-session';

export default async function handler(req, res) {
    await applySession(req, res);

    if(!req.body.username) {
        res.status(400).json({ error: 'Missing username.' });
        return res.end();
    }

    if(!req.body.password) {
        res.status(400).json({ error: 'Missing password.' });
        return res.end();
    }

    //get user
    const user = await User.query().select('password')
        .findOne('username', req.body.username);

    if(password != req.body.password) {
        res.status(400).json({ error: 'Your username or password are incorrect.' });
        return res.end();
    }
    else {
        //set session
        req.session.userId = req.body.username;
    }

    res.status(200);
    res.end();
}