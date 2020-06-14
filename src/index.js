import React from 'react'
import ReactDom from 'react-dom'
import '@babel/polyfill'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

const root = document.getElementById('app')

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
, root)
