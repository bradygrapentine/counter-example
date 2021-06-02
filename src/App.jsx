import React from 'react'
import { Counter } from './components/Counter'
// ^^ if there was another fn we'd need to include it in curly brackets to use it in app
// need to do this every time if multiple functions
// no curlies needed if export default one function from component
// { Counter as TacoTuesday} --> renames function in app
// VS code can fix this issue with autocomplete
// knows that fn exists because it was exported frm file

export function App() {
  // index.js is going to import App.jsx, key to "bootstrapping", react pulls itself up along with html and css

  return (
    <div>
      <Counter />
    </div>
  )
}
