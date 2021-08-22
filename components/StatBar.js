const StatBar = (props) => {
    const fillPercent = props.percent ? props.percent + '0' : 0;
    return (
        <div className="statbar">
            <img src={`stats/${props.stat}.png`} />
            <div className="bar"></div>
            <style jsx>{`
                .statbar {
                    display: flex;
                    align-items: center;
                }
                .bar {
                    border: 1px solid white;
                    width: 102px;
                    height: 6px;
                    margin-left: 5px;
                    background: linear-gradient(to right, ${props.color} ${fillPercent}%, black ${fillPercent}%);
                }
            `}</style>
        </div>
    )
}

export default StatBar;