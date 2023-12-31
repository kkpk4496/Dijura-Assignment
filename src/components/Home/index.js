import {Link} from 'react-router-dom'
import {MainContainer} from './styledComponents'
import './index.css'

const Home = () => (
  <MainContainer>
    <Link to="/">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2lvXtxG1_lknJakpjkOZ_x91Oqe3VID13uNBrJ4Z8TsPpsaV9com6NkgG_sIM7Aw6vM&usqp=CAU"
        alt="book logo"
        className="logo"
      />
    </Link>
    <div className="container">
      <Link to="/" className="link">
        <h1>Home</h1>
      </Link>
      <Link to="/books" className="link">
        <h1>Books</h1>
      </Link>
    </div>
  </MainContainer>
)

export default Home
