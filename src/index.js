import React from 'react'
import { render } from 'react-dom'
// NOTE: ReduxでStoreへのContainerのアクセスを可能にしてくれて、propsのバケツリレーが不要になるやつ。
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import gameReducer from './reducers/index'
import GameContainer from './containers/GameContainer'

const store = createStore(gameReducer)

render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  document.getElementById('root')
)
