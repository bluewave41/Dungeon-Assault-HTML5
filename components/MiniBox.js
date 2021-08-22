const MiniBox = (props) => {
    return (
        <div className="minibox">
            <div>
                {props.text}
            </div>
            <div>
                {props.value}
            </div>
            <style jsx>{`
                .minibox {
                    border: 1px solid yellow;
                    width: 149px;
                    height: 31px;
                    color: white;
                    display: grid;
                    grid-auto-flow: column;
                    justify-content: space-between;
                }
            `}</style>
        </div>
    )
}

export default MiniBox;