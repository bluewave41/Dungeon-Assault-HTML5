import Container from './Container';

const HorizontalBar = (props) => {
    let arr = [];
    let times = props.bars ? props.bars : 7;
    for(var i=0;i<times;i++) {
        arr.push(<img src="menu/cracked_bar.png" />);
    }
    return (
        <Container x={props.x} y={props.y} direction='row'>
            {arr}
            <style jsx>{`
                img {
                    vertical-align: top;
                }
            `}</style>
        </Container>
    )
}

export default HorizontalBar;