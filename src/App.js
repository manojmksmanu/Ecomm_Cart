
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import { Context } from './Context/Context';
import ContextProvider from './Context/ContextProvider';

function App() {
  console.log("hello world")
  return (
    <ContextProvider>
      <div className="App">
        <Navbar/>
        <Cart />
        <h1 className='text-3xl bg-red-400 flex justify-center'>
          Hello world
        </h1>
      </div>
    </ContextProvider>

  );
}

export default App;
