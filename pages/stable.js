import HeaderBar from '../components/HeaderBar';
import Container from '../components/Container';
import VerticalBar from '../components/VerticalBar';
import HorizontalBar from '../components/HorizontalBar';
import Raider from '../models/Raider';
import RaiderPurchasePanel from '../components/RaiderPurchasePanel';
import OwnedRaidersPanel from '../components/OwnedRaidersPanel';
import SelectedRaider from '../components/SelectedRaider';
import MiniBox from '../components/MiniBox';
import { useState } from 'react';

const Stable = (props) => {
    const [selectedRaider, setSelectedRaider] = useState(null);
    const [cost, setCost] = useState(0);
    const [treasure, setTreasure] = useState(0);
    const [stable, setStable] = useState([]);

    const onSelectRaider = (raider) => {
        setSelectedRaider(raider);
    }

    return (
        <div id="container">
            <HeaderBar text="STABLE" left right cancelLink='/'/>
            <HorizontalBar x={0} y={473} bars={7} />
            <VerticalBar x={165} y={0} bars={5} />
            <VerticalBar x={0} y={0} bars={5} />
            <VerticalBar x={664} y={0} bars={5} />
            <Container x={14} y={80} direction='column'>
                <RaiderPurchasePanel raiders={props.raiders} onSelectRaider={onSelectRaider} />
            </Container>
            <Container x={185} y={70}>
                <OwnedRaidersPanel />
            </Container>
            <Container x={230} y={280}>
                <SelectedRaider raider={selectedRaider} />
            </Container>
            <Container x={500} y={300} direction='column'>
                <MiniBox text="TREASURE: " value={treasure} />
                <MiniBox text='COST: ' value={cost} />
            </Container>
        </div>
    )
}

export async function getServerSideProps(context) {
    const raiders = await Raider.query().select('*');
    return {
      props: {
          raiders: JSON.parse(JSON.stringify(raiders))
      },
    }
  }

export default Stable;