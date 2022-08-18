import logo from './logo192.png'
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
        <a href='#'><i className="iconoCarrito fa-solid fa-cart-shopping"></i></a>
    </nav> 
    );
  }

  export default NavBar;
