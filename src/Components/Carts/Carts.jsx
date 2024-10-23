import Added from "../Added/Added";
import Cart from "../Cart/Cart";


const Carts = ({addedtoCart, handlePurchaseButton, purchase}) => {
    return (
        <div className="col-span-1 ml-5">
            <h1 className="text-center font-bold text-2xl text-white border border-pink-400 p-5 rounded-2xl bg-pink-700">
                Total Added to Cart: {addedtoCart.length} </h1>

            <div className="mt-5 flex items-center justify-center gap-10">
                <button className="btn bg-purple-700 text-white">Cart</button>
                <button className="btn bg-pink-700 text-white">History</button>
            </div>

            <h1 className="text-2xl font-bold text-center mt-5 text-purple-800 ">Your Shopping Cart</h1>

            {
                addedtoCart.map((cart, index) => <Cart handlePurchaseButton={handlePurchaseButton} key={index} cart={cart}></Cart>)
            }

    <h1 className="text-2xl font-bold text-center mt-5 text-purple-800 ">Total Payable Amount</h1>
        
            {
                purchase.map((cart, index) => <Added key={index} cart={cart}></Added>)
            }


        </div>
        

        )   
};

export default Carts;