import HeaderBar from './HeaderBar';

const Game = (props) => {
    const borderStyle = props.borderStyle ? props.borderStyle : 'full';
    return (
        <div id="container">
            <HeaderBar />
        </div>
    )
}

export default Game;