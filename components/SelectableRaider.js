const SelectableRaider = (props) => {

    const onClick = (e) => {
        props.onClick(props.raider);
    }

    const imageName = props.raider.name.replace(/\s+/, '').toLowerCase();
    return (
        <div className="raider" onClick={onClick}>
            <div>{props.raider.name}</div>
            <div className="info">
                <div className="column">
                    <img src={`raiders/${imageName}.png`} />
                </div>
                <div className="column">
                   {props.raider.cost}
                   <div className="stats">
                       <table>
                           <tr>
                               <td><img src="stats/attack.png" /></td>
                               <td>{props.raider.attack}</td>
                               <td><img src="stats/defence.png" /></td>
                               <td>{props.raider.defence}</td>
                           </tr>
                           <tr>
                               <td><img src="stats/dodge.png" /></td>
                               <td>{props.raider.dodge}</td>
                               <td><img src="stats/sneak.png" /></td>
                               <td>{props.raider.sneak}</td>
                           </tr>
                       </table>
                   </div>
                </div>
            </div>
            <style jsx>{`
            .raider {
                position: relative;
                font-size: 9px;
                color: white;
                cursor: pointer;
            }
            img {
                width: 46px;
                height: 46px;
            }
            .stats img {
                width: 12px;
                height: 12px;
            }
            .info {
                display: flex;
            }
            .column {
                flex: 50%;
                margin-right: 10px;
            }
        `}</style>
        </div>
    )
}

export default SelectableRaider;