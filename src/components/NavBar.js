import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
function NavBar() {
  return (
    <header className="App-header">
      <nav className='nav'>
        <Link to='/'><img src="https://i.ibb.co/pWq8fhk/logo192.png" className="logo" alt="logo" /></Link>
        <Link to='/' className='titulo'><h1>React Shop App</h1></Link>
        <div className='btnsCategoriasContainer'>
          <Link to={'/category/tecnologia'} className='btnCategorias'><p>Tecnologia</p></Link>
          <Link to={'/category/hogar'} className='btnCategorias'><p>Hogar</p></Link>
          <Link to={'/category/moda'} className='btnCategorias'><p>Moda</p></Link>
        </div>
        <Link to='/cart' className='btnCartWidget'><CartWidget /></Link>
      </nav>
    </header>
  );
}

export default NavBar;

