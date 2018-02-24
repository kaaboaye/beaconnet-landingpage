import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

// Router
import { BrowserRouter } from 'react-router-dom'

// Translations
import './i18n'

// Styles
import './Styles/customBootstrap.css'
import './Styles/UI.css'

import App from './Components/App'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
