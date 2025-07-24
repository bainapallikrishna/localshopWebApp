import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import StateandProps from './components/stateandprops';
import reportWebVitals from './reportWebVitals';
import ReactFragmentExample from './components/ReactFragment';
import User from './components/User';
import EventHandlingExample from './components/EventHandling';
import UseStateExample from './components/UseStateExp';
import TwowayDataBinding from './components/TwowayDataBinding';
import CounterApp from './components/CounterApp';
import Calculator from './components/Calculator';
import ConditionalRender from './components/Conditionalrendering';
import TodoList from './components/TodoList';
import UseEffectHook from './components/UseEffectHook';
import Products from './components/Product';
import MasterPage from './RouteConcept/MasterPage';
import UseRefHook from './components/UseRefHook';
import ChildToParent from './components/ChildToParent';
import Login from './components/Login';
import APICall  from './components/APICall';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

   
    <MasterPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
