import StatBar from '../components/StatBar';

const SelectedRaider = (props) => {
    let raider = props.raider ? props.raider.name.replace(/\s+/, '') : 'empty';
    return (
        <div id="selectedRaider">
            <div className="col">
                <img src={`raiders/${raider}.png`} />
            </div>
            <div className="col">
                <div className="stats">
                    <StatBar stat="attack" percent={props.raider?.attack} color="red" />
                    <StatBar stat="defence" percent={props.raider?.defence} color="green" />
                    <StatBar stat="dodge" percent={props.raider?.dodge} color="green" />
                    <StatBar stat="sneak" percent={props.raider?.sneak} color="blue" />
                </div>
                
            </div>
            
            <style jsx>{`
                #selectedRaider {
                    display: flex;
                }
                .col {
                    flex: 50%;
                }
                img {
                    width: 110px;
                    height: 110px;
                }
                .stats {
                    position: relative;
                    top: 10px;
                    left: 5px;
                }
                .stats img {
                    width: 12px;
                    height: 12px;
                }
            `}</style>
        </div>
    )
}

export default SelectedRaider;