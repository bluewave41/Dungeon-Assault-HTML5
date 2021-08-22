import Container from './Container';
import MenuButton from './MenuButton';
import Link from 'next/link';

const Menu = (props) => {
    const menuX = 352;
    const menuY = 355;

    return (
        <Container center size ={{width: menuX, height: menuY + 10}}>
            <img src="menu/menu_block.png" />
            <Container x={50} y={50} direction='column'>
                <MenuButton text="PLAY TUTORIAL"/>
                <Link href='/stable'><a><MenuButton text="DUNGEON AND STABLE"/></a></Link>
                <MenuButton text="DRAGONS AND RAIDS"/>
                <MenuButton text="INSTRUCTIONS"/>
                <MenuButton text="WATCH INTRODUCTION"/>
                <MenuButton text="SOUND"/>
                <MenuButton text="MUSIC"/>
                <MenuButton text="ACHIEVEMENTS"/>
            </Container>
        </Container>
    )
}

export default Menu;