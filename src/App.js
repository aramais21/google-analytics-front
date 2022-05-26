// import TagManager from 'react-gtm-module'

import './App.css';

function App() {
    // TagManager.dataLayer({
    //     dataLayer: {
    //         event: 'pageview',
    //         pagePath: '/',
    //         // pageTitle: 'home',
    //     },
    // });
    return (
      <div className="main">
        <p>Welcome to the trial of google analytics implementation from backend</p>
        <div className="button" onClick={() => {
            fetch('http://localhost:3001/purchase', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'client-id': window.clientId,
                },
            });
        }}> Send Purchase Request </div>
      </div>
    );
}

export default App;
