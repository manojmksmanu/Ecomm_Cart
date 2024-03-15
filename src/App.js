
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import { Context } from './Context/Context';
import ContextProvider from './Context/ContextProvider';

function App() {
  console.log("hello world")
  return (
    <ContextProvider>
      <div className="App">
        <Navbar />
        <Cart />
        <Products />

      </div>
    </ContextProvider>

  );
}

export default App;
