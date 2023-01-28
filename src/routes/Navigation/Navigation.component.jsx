import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.context";


import { signOutUser } from "../../utils/firebase/firebase.utils"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/CartIcon/CartIcon.component"
import CartDropdown from "../../components/CartDropdown/CartDropdown.component";
import "./navigation.styles.scss"

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { showCart } = useContext(CartContext);

  

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">Shop</Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={ signOutUser }>Sign Out</span>
            ) : (
              <Link className="nav-link" to="/auth">Sign In</Link>
            )
          }
          <CartIcon />
        </div>
        {showCart && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
};

export default Navigation;