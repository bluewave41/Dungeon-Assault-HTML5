import { useRouter } from 'next/router';

const Button = (props) => {
    const router = useRouter();
    return (
        <div className="button" onClick={() => { router.push(props.link)}}>
            <img src="menu/button.png" />
            <span className="text">{props.text}</span>
            <style jsx>{`
                img {
                    vertical-align: top;
                }
                .button {
                    position: relative;
                    cursor: pointer;
                }
                .text {
                    position: absolute;
                    white-space: nowrap;
                    top: 45%;
                    left: 50%;
                    font-family: Times New Roman;
                    transform: translate(-50%, -50%);
                }
            `}</style>
        </div>
    )
}

export default Button;