const OwnedRaidersPanel = (props) => {
    return (
        <div>
            <div>
                <img className="raider" src="raiders/empty.png" />
                <img className="raider" src="raiders/empty.png" />
                <img className="raider" src="raiders/empty.png" />
                <img className="raider" src="raiders/empty.png" />
            </div>
            <div>
                <img className="raider" src="raiders/empty.png" />
                <img className="raider" src="raiders/empty.png" />
                <img className="raider" src="raiders/empty.png" />
                <img className="raider" src="raiders/empty.png" />
            </div>
            <style jsx>{`
                .raider {
                    margin-right: 20px;
                }
                img {
                    width 99px;
                    height: 99px;
                }
            `}</style>
        </div>
    )
}

export default OwnedRaidersPanel;