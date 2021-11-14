import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from '../context'
import classes from '../styles/cart.module.css'

const CartContainer = () => {
  const { cart,total,clearCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className={classes.cart}>
        <header>
          <h2>your bag</h2>
          <h4 className={classes.emptyCart}>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className={classes.cart}>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className={classes.cartTotal}>
          <h4>
            total <span>৳ {total}</span>
          </h4>
        </div>
        <button
          className={['btn' ,classes.clearBtn].join(' ')}
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
