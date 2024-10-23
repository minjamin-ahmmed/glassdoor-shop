import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = ({handleAddtoCartBtn}) => {

   const [cards, setCards] = useState([])

   useEffect(() => {
    fetch('FakeData.json')
    .then(res => res.json())
    .then(data => setCards(data))
   },[])  








    return (
        <div className="col-span-2">
            <h1 className="text-center font-bold text-2xl text-pink-700">Total Cards:{cards.length} </h1>

            <div className="grid grid-cols-2 gap-5">
            {
                cards.map((card, index) => <Card key={index} card={card} handleAddtoCartBtn={handleAddtoCartBtn} ></Card>)
            }
            </div>

        </div>
    );
};

export default Cards;