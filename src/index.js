import { render } from 'react-dom'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import { Provider } from 'react-redux'
import suggestionSlice from './suggestionSlice'
import rootEpics from './suggestionEpic'
import App from './App'

const epicMiddleware = createEpicMiddleware()

const store = configureStore({
  reducer: {
    suggestions: suggestionSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware)
})

epicMiddleware.run(rootEpics)

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

render(<Root />, document.getElementById('root'))
