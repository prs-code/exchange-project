import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
//components
import Landing from './components/Landig';
import Coins from './components/Coins';
import Gold from './components/Gold';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/Coins' element={ <Coins /> } />
                <Route path='/' element={ <Landing /> } />
                <Route path='/gold' element={ <Gold /> } />
                <Route path='/*' element={ <Navigate to='/' /> } />
            </Routes>
        </div>
    );
};

export default App;