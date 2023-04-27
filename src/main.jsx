import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/Home/index.jsx'
import GlobalStyle from './globalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
