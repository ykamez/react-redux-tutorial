import React from 'react'
import { render } from 'react-dom'
// NOTE: ReduxでStoreへのContainerのアクセスを可能にしてくれて、propsのバケツリレーが不要になるやつ。
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// TODO(ykamez): impl
import ticTackToeApp from './reducers'
import App from './components/App'

const store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
