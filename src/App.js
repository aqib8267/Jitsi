import './App.css';

import { Route, Switch } from 'react-router-dom';
import JitsiComponent from './Pages/jitsi/jitsi.component';
import ThankYouComponent from './Pages/thank-you/thank-you.component';
import IncomingCall from './Pages/IncomingCall/IncomingCall';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route component={IncomingCall} path="/" exact />
            <Route component={ThankYouComponent} path="/thank-you" />
            <Route component={JitsiComponent} path="/JitsiMeet"  />
        </Switch>
    </div>
  );
}

export default App;
