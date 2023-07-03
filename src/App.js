import './App.css';
import { Route, Link } from 'react-router-dom';

import './pages/homepage/homepage.styles.scss';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
)

function App() {
    return (
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/hats" component={HatsPage} />
        </div>

    );
}

export default App;
