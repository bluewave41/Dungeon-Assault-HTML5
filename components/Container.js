const Container = (props) => {
    let x = props.x;
    let y = props.y;

    if(props.center) {
        x = process.env.NEXT_PUBLIC_WIDTH / 2 - props.size.width / 2;
        y = process.env.NEXT_PUBLIC_HEIGHT / 2 - props.size.height / 2;
    }
    return (
        <div className="container">
            {props.children}
            <style jsx>{`
                .container {
                    position: absolute;
                    left: ${x}px;
                    top: ${y}px;
                    display: flex;
                    flex-direction: ${props.direction};
                }
            `}</style>
        </div>
    )
}

export default Container;