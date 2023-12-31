import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const token = localStorage.getItem('name')
  console.log(token)

  if (token.length === 0) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
