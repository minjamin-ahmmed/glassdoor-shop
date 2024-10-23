

const Cart = ({cart, handlePurchaseButton}) => {
    const {category, image, name, description, price} = cart
    return (
        <div className=" bg-purple-200 text-purple-950 p-4 mt-5 rounded-xl">
            
            <div className="flex justify-between items-start">
            <h1 className="w-3/4">{description}</h1>
            <h2 className="font-extrabold text-purple-950">${price}</h2>
            </div>

            <div className="flex justify-end mt-2">
                <button onClick={() => handlePurchaseButton(cart.id)} className="btn bg-purple-800 text-white">Purchase</button>
            </div>
            
        </div>
    );
};

export default Cart;