import React from "react"

import A01State from './components/A01State'
import A02PropOne from './components/A02PropOne'
import A02PropOnA02PropTwoe from './components/A02PropTwo'

function App() {
  return (
    <div className="m-3">
      <h1>Chap04 Component</h1>

      <A02PropOne></A02PropOne>
      <A02PropTwo></A02PropTwo>

      <A01State></A01State>
      <A01State></A01State>
    </div>
  )
}

export default App
