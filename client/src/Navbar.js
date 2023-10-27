import React from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { toggleFunc } from "./Redux/Action/authActCreator";
const Navbar = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TexTify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/shorts">
                Shorts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/subscriptions">
                Subscriptions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/library">
                Library
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/settings">
                settings
              </Link>
            </li>
          </ul>
          {isLoggedIn ? (
            <Link
              className="btn btn-dark"
              to="/"
              // onClick={() => setLogin(false)}
              onClick = {
                ()=>{
                  const actionObject = toggleFunc(false);
                  dispatch(actionObject)
                }
              }
            >
              SignOut
            </Link>
          ) : (
            <Link className="btn btn-dark" to="/signup">
              Signin
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
