
const Card = ({card, handleAddtoCartBtn}) => {

    const {category, image, name, description, price} = card
    
    
    return (
        <div className="border-2 border-purple-500 p-5 rounded-2xl shadow-xl mt-5">
           
            <h2 className="text-xl font-bold text-purple-700">{category}</h2>
           
           <img className="h-[300px] rounded-3xl" src={image} alt="" />
          
           <h3 className="font-extrabold text-pink-800 text-lg"> {name} </h3>
           <p className="text-md text-gray-800"> {description} </p>
           <p className="font-extrabold text-purple-950">Price: ${price}  </p>
        
            <button onClick={() => handleAddtoCartBtn(card)} className="btn bg-purple-600 text-white border-none mt-5">Add To Cart</button>
            
        </div>
    );
};

export default Card;