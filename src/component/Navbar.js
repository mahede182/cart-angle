import React from 'react'
import { useGlobalContext } from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import classes from '../styles/navbar.module.css'
import logo from '../assets/logo.png'
// import {fas fa-cart-plus} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  const {amount} = useGlobalContext()
  return (
    <nav>
      <div className={classes.navCenter}>
        <img className={classes.responsive} src={logo} alt="logo"/>
        {/* <h3>Cart Angel</h3> */}
        <div className={classes.navContainer}>
          {/* used fontawesome */}
          {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
          </svg> */}
          <FontAwesomeIcon size="3x" color = "#5ae5d9" icon={faCartPlus}/>
          <div className={classes.amountContainer}>
            <p className={classes.totalAmount}>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
