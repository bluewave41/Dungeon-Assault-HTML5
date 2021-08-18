import HorizontalBar from './HorizontalBar';

const HeaderBar = (props) => {
    return (
        <div id="header">
            <span className="text">{props.text}</span>
            <HorizontalBar x={0} y={0} />
            <HorizontalBar x={0} y={50} />
            <style jsx>{`
                #header {
                    position: relative;
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