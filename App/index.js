import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return(
            <div>
                Hello, World.
            </div>
        )
    }
}

/*
const App = () => {
    return (
        <dev>
            Hello, World.
        </dev>
    )
}
*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);