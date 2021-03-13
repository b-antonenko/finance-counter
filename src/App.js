import './App.css'
import React, { useContext } from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'
import { AuthProvider } from "./Auth";

function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                </div>
            </Router>
        </AuthProvider>
  )
}

export default App;
