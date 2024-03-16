import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Context, cartStore } from './context/context.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context.Provider value={{ cartStore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
)
