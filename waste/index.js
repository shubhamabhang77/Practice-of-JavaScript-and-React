//    <script src="https://unpkg.com/react@15/dist/react.js"></script>
//<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>

function Myinfo (){
    return (
        <div>
            <h1>Shubham Abhang</h1>
            <p>Hey what's up? Its always good to do some stuff</p>
            <ul>
                <li>Lamborghini</li>
                <li>Rolls Royce</li>
                <li>Mercedes</li>
                <li>Audi</li>
            </ul>
        </div>
        )
}


ReactDOM.render(
    <Myinfo/>,
    document.getElementById('example')
);