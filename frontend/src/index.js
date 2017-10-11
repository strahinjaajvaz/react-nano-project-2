import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { categories } from './reducers/cat_reducer'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(categories, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));