import User from '../../../models/User';

export default async function handler(req, res) {
    if(!req.body.username) {
        res.status(400).json({ error: 'Missing username.' });
        return res.end();
    }

    if(!req.body.password) {
        res.status(400).json({ error: 'Missing password.' });
        return res.end();
    }

    if(req.body.username.length > 20) {
        res.status(400).json({ error: 'Username too long. Must be between 1 and 20 characters.' });
        return res.end();
    }

    //does username already exist?
    const user = await User.query().select('*')
        .findOne('username', req.body.username);

    if(user) {
        res.status(400).json({ error: 'Username already exists. '});
        return res.end();
    }

    //insert
    await User.query().insert({
        username: req.body.username,
        password: req.body.password //TODO: FIX PLAINTEXT PASSWORDS
    });

    res.status(200);
    res.end();
}