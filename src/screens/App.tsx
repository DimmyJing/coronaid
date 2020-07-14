import React from 'react';
import './App.css';

import Map from 'components/Map';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Map/>
                <div style={{zIndex: 1000}}>
                    <button>Hello</button>
                    <button>Hello</button>
                    <button>Hello</button>
                    <button>Hello</button>
                    <button>Hello</button>
                    <button>Hello</button>
                </div>
            </header>
        </div>
    );
}

export default App;
