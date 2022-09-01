import CartWidget from './CartWidget';
function NavBar() {
  return (
    <nav className='nav'>
      <img src="https://i.ibb.co/pWq8fhk/logo192.png" className="logo" alt="logo" />
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
