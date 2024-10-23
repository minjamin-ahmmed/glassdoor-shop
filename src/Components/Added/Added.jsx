

const Added = ({cart}) => {

     
    return (
        <div className="flex justify-between mt-5 bg-pink-300 p-5 rounded-xl">
            <h1 className="text-md font-bold ">{cart.name}</h1>
            <h1 className="text-md font-bold">${cart.price}</h1>
        </div>
    );
};

export default Added;