import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/home.jsx';
import Slots from './components/Slots/slots.jsx';
import Starburst from './components/Starburst/starburst.jsx';
import Sizzling from './components/Sizzling/sizzling.jsx';
import Megajack from './components/Megajack/megajack.jsx';
import Gonzo from './components/Gonzo/gonzo.jsx';
import Fortune from './components/Fortune/fortune.jsx';
import DeadBook from './components/deadBook/dead.Book.jsx';
import Zeppelin from './components/Zeppelin/zeppelin.jsx';
import Aviator from './components/Aviator/aviator.jsx';
import Sweetbonanza from './components/Sweetbonanza/sweetbonanza.jsx';
import WildRiches from './components/WildRiches/wildRiches.jsx';
import Buffalo from './components/Buffalo/buffalo.jsx';
import DogHouse from './components/DogHouse/dogHouse.jsx';
import MoneyTrain from './components/MoneyTrain/moneyTrain.jsx';
import BookOfShadows from './components/BookOfShadows/bookOfShadows.jsx';
import BigBass from './components/BigBass/bigBass.jsx';
import FruitParty from './components/FruitParty/fruitParty.jsx';
import Kraken from './components/Kraken/kraken.jsx';
import GatesOfOlympus from './components/GatesOfOlympus/gatesOfOlympus.jsx';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min.js';

const App = () => (
  <Switch>
    <Route exact={true} path='/' component={Home} />
    <Route path='/slots/gates-of-olympus/' component={GatesOfOlympus} />
    <Route path='/slots/release-the-kraken/' component={Kraken} />
    <Route path='/slots/fruit-party/' component={FruitParty} />
    <Route path='/slots/big-bass-bonanza/' component={BigBass} />
    <Route path='/slots/book-of-shadows/' component={BookOfShadows} />
    <Route path='/slots/money-train/' component={MoneyTrain} />
    <Route path='/slots/dog-house/' component={DogHouse} />
    <Route path='/slots/buffalo-king/' component={Buffalo} />
    <Route path='/slots/wild-wild-riches/' component={WildRiches} />
    <Route path='/slots/sweet-bonanza/' component={Sweetbonanza} />
    <Route path='/slots/aviator/' component={Aviator} />
    <Route path='/slots/zeppelin/' component={Zeppelin} />
    <Route path='/slots/book-of-dead/' component={DeadBook} />
    <Route path='/slots/empire-fortune/' component={Fortune} />
    <Route path='/slots/gonzos-quest/' component={Gonzo} />
    <Route path='/slots/megajack' component={Megajack} />
    <Route path='/slots/starburst' component={Starburst} />
    <Route path='/slots/sizzling-hot' component={Sizzling} />
    <Route path='/slots' component={Slots} />
    <Redirect to="/" />
  </Switch>
);

export default App;
