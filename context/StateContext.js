import React, { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-hot-toast"

// creating the context
const Context = createContext()

// creating the main context component
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState()
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)

  // helper function for increasing the product quantity
  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }

  // helper function for decreasing the product quantity
  const decQty = () => {
    setQty((prevQty) => {
      return prevQty - 1 < 1 ? 1 : prevQty - 1
    })
  }

  // helper function for adding items in the cart
  const onAdd = (product, quantity) => {
    // checking if the product is already in the cart or not
    const checkProductInCart = cartItems.find((item) => item._id === product._id)
    // updating the total price and total quantities states
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    // if the product is already in the cart then updating the cart items states
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return { ...cartProduct, quantity: cartProduct.quantity + quantity }
        }
      })

      setCartItems(updatedCartItems)
    }
    // if the items does not exist in the cart
    else {
      product.quantity = quantity
      setCartItems([...cartItems, { ...product }])
    }

    // dispatching success toast message
    toast.success(`${qty} ${product.name} added to the cart`)
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  )
}

// exporting the context values as a hook
export const useStateContext = () => useContext(Context)
