import React from "react"

import A01State from './components/A01State'
import A02Container from './components/A02Container'
import A02Children from './components/A02Children'
import A02Button from './components/A02Button'
import A03Event from './components/A03Event'
import A04CreateDOM from './components/A04CreateDOM'
import A05Hook from './components/A05Hook'
import A06Hook from './components/A06Hook'
import A05CustomHook from './components/A05CustomHook'
import A07OuterOne from './components/A07OuterOne'
import A07OuterTwo from './components/A07OuterTwo'
import A08Immer from './components/A08Immer'

function App() {
  const name = 'App';
  const greet = <h3>Good Evening!!!</h3>

  return (
    <div className="m-3">
      <h1>Chap04 Component</h1>

      <A08Immer></A08Immer>

      <A07OuterTwo name="TWO"></A07OuterTwo>
      <A07OuterOne name="ONE"></A07OuterOne>

      <A05CustomHook></A05CustomHook>
      <A06Hook></A06Hook>
      <A05Hook></A05Hook>
      <A04CreateDOM></A04CreateDOM>
      <A03Event></A03Event>

      <A02Button clz="btn btn-primary" id="btn01">CLICK</A02Button>

      <A02Children greet={greet}>
        <div>컨테이너에서 제공하는 View / {name}</div>
        <A01State></A01State>
      </A02Children>

      <A02Children greet={greet}>
        <h3>Good Morning!!! / {name}</h3>
      </A02Children>

      <A02Container></A02Container>

      <A01State></A01State>
      <A01State></A01State>
    </div>
  )
}

export default App
