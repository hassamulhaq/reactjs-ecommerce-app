import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navigation from "./components/navigation/navigation.component"
import { Outlet } from "react-router-dom"
import './App.css'

import {Routes, Route} from "react-router-dom"

import Home from "./routes/home/home.component"

function Shop () {
    return (
        <>
            <h2>Shop Component</h2>
        </>
    )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Outlet />
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Route>

        </Routes>
    </div>
  )
}

export default App
