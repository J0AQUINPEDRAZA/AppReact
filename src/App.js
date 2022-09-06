import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main className='App-Main'>
        {/*<ItemListContainer />*/}
        <ItemDetailContainer/>
      </main>
    </div>
  );
}

export default App;
