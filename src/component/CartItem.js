import React from 'react'
import { useGlobalContext } from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import classes from '../styles/cartItem.module.css'

const CartItem = ({ id, img, title, price, amount}) => {
  const {remove,toggleAmount} = useGlobalContext();
  return (
    <article className={classes.cartItem}>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className={classes.itemPrice}>৳{price}</h4>
        {/* remove button */}
        <button
          className={classes.removeBtn}
          onClick={() => remove(id)}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className={classes.amountBtn} onClick={() => toggleAmount(id,'inc')}>
          <FontAwesomeIcon color="#57c76c" size="2x" icon={faPlusSquare}/>
        </button>
        {/* amount */}
        <p className={classes.amount}>{amount}</p>
        {/* decrease amount */}
        <button className={classes.amountBtn} onClick={() => toggleAmount(id,'dec')}>
          <FontAwesomeIcon color="#ff8080" size="2x" icon={faMinusSquare}/>
        </button>
      </div>
    </article>
  )
}

export default CartItem
