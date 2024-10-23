import Cards from "../Cards/Cards";
import Carts from "../Carts/Carts";

const Main = ({handleAddtoCartBtn, addedtoCart, handlePurchaseButton, purchase}) => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-purple-700 text-center">Our Products</h2>
            <p className="text-gray-500 text-center mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus aspernatur eos dolorem possimus explicabo adipisci nesciunt ab obcaecati perspiciatis deserunt molestiae voluptas commodi hic ducimus, sequi atque est at.</p>


        <div className="grid grid-cols-3">
            {/* Cards Container */}
            <Cards handleAddtoCartBtn={handleAddtoCartBtn}></Cards>

            {/* Carts Container */}
            <Carts purchase={purchase} handlePurchaseButton={handlePurchaseButton} addedtoCart={addedtoCart}></Carts>
        </div>







        </div>
    );
};

export default Main;