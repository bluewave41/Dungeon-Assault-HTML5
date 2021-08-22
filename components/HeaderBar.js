import HorizontalBar from './HorizontalBar';
import Button from './Button';
import { useRouter } from 'next/router';

const HeaderBar = (props) => {
    const router = useRouter();

    return (
        <div id="header">
            <HorizontalBar x={0} y={0} />
            <HorizontalBar x={0} y={50} />
            <div className="smallCol">
                { props.left && 
                    <Button text='CONFIRM' />
                }
            </div>
            <div className="bigCol">
                {props.text}
            </div>
            <div className="smallCol">
                { props.right && 
                    <Button text='CANCEL' link={props.cancelLink} />
                }
            </div>

            <style jsx>{`
                #header {
                    display: flex;
                    color: white;
                    margin-top: 15px;
                }
                .smallCol {
                    flex: 10%;
                    margin-left: 10px;
                    margin-right: 10px;
                }
                .bigCol {
                    flex: 80%;
                    text-align: center;
                }
                .text {
                    position: absolute;
                    color: white;
                    left: 50%;
                    top: 30px;
                    transform: translate(-50% , -50%);
                }
            `}</style>
        </div>
    )
}  

export default HeaderBar;