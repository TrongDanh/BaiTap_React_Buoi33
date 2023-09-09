
import ProductList from "./Components/Productlist/ProductList";
import ShoesStore from "./Components/ShoesStore/ShoesStore";
import CSS from './../src/index.css'

function App() {
  return (
    <div className="container">
      <div>
        <h1 className="text-primary text-center p-4">Shoes Shop</h1>
      </div>
        <ShoesStore>
          
        </ShoesStore>
      

    </div>
  );
}

export default App;
