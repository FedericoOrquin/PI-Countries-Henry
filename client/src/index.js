import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx'
import Details from './components/Details.jsx'
import CreateActivity from './components/CreateActivity.jsx'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/"><LandingPage /></Route>
      <Route exact path="/home"><Home/></Route>
      <Route path="/countries/:id"><Details/></Route>
      <Route path="/activities"><CreateActivity/></Route>
    </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
