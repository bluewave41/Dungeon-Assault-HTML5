import HeaderBar from '../components/HeaderBar';
import Container from '../components/Container';
import VerticalBar from '../components/VerticalBar';
import HorizontalBar from '../components/HorizontalBar';
import Menu from '../components/Menu';

const MainMenu = (props) => {
    return (
        <div>
            <HeaderBar text="DUNGEON ASSAULT"/>
            <VerticalBar x={42} y={58} bars={4} />
            <VerticalBar x={618} y={58} bars={4} />
            <HorizontalBar x={50} y={435} bars={6} />
            <Container x={50} y={57}>
                <img src="menu/sides/part_11.jpeg" />
                <img src="menu/back.jpeg" />
                <img src="menu/sides/part_1.jpeg" />
            </Container>
            <Menu />
        </div>
    )
}

export default MainMenu;