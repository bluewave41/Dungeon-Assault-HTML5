import SelectableRaider from './SelectableRaider';

const RaiderPurchasePanel = (props) => {
    const onClick = (raider) => {
        props.onSelectRaider(raider);
    }

    return (
        <div>
            {props.raiders.map(raider => (
                <SelectableRaider raider={raider} onClick={onClick} />
            ))}
        </div>
    )
}

export default RaiderPurchasePanel;