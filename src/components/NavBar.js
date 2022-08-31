import logo from '../img/logo/logo192.png'
import CartWidget from './CartWidget';
function NavBar() {
  return (
    <nav className='nav'>
      <img src={logo} className="logo" alt="logo" />
      <h1 className='titulo'>React Shop App</h1>
      <div className='btnsCategoriasContainer'>
        <a className='btnCategorias' href='#'>Tecnologia</a>
        <a className='btnCategorias' href='#'>Moda</a>
        <a className='btnCategorias' href='#'>Hogar</a>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
