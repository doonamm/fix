import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="container">
            helloaaaa
        </div>
    );
}

export default App;

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(<App />, root);
}
