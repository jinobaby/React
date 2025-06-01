import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { } from 'redux-persist/integration/react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './Redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>

        <App />
      
      </PersistGate>
    </Provider>
  </StrictMode>,
)