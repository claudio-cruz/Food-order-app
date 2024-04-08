import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartcontextProvider } from "./store/CartContext";

function App() {
  return (
    <CartcontextProvider>
      <Header/>
      <Meals />
    </CartcontextProvider>
  );
}

export default App;
