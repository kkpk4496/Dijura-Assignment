import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import Login from './components/Login'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/books" component={Books} />
        <ProtectedRoute exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  </>
)

export default App

/* 
        <Route path="notfound" element={NotFound} /> */
