import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Main from './Components/MainSection/Main'



function App() {

  const[addedtoCart, setAddedtoCart] = useState([])
  const [purchase, setPurchase] = useState([])

  const handlePurchaseButton = (id) => {

    //Find Which Card To Remove
    const deleteCart = addedtoCart.find(cart => cart.id === id)

    //Remove From Cart
    const updateCart = addedtoCart.filter(cart => cart.id !== id)

    setAddedtoCart(updateCart)
    setPurchase([...purchase, deleteCart])

  }


  const handleAddtoCartBtn = (card) => {

    console.log(card);
    
    const isExist = addedtoCart.find(previousProduct => previousProduct.id === card.id)

    if(isExist){
      alert("This Product is Already in Cart Find New Products")
      
    }
    else{
      setAddedtoCart([...addedtoCart, card])
    }
      
  }



  return (
    <>
      <div className='w-11/12 mx-auto py-5'>
        <Header></Header>

        <Banner></Banner>

        <Main purchase={purchase} handlePurchaseButton={handlePurchaseButton} handleAddtoCartBtn={handleAddtoCartBtn} addedtoCart={addedtoCart}></Main>
      </div>
    </>
  )
}

export default App
