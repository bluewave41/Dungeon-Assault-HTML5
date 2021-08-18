import Container from './Container';

const VerticalBar = (props) => {
    let arr = [];
    let times = props.bars ? props.bars : 5;
    for(var i=0;i<times;i++) {
        arr.push(<img src="menu/cracked_bar_90.png" />);
    }
    return (
        <Container x={props.x} y={props.y} direction='column'>
            {arr}
            <style jsx>{`
                img {
                    vertical-align: top;
                }
            `}</style>
        </Container>
    )
}

export default VerticalBar;