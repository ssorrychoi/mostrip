import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav({ isLoggedIn, setIsLoggedIn }) {
  const [isCollapsed, setisCollapsed] = useState(true);
  const [isMenuOpened, setisMenuOpened] = useState(false);
  const logout = () => {
    //만료시간을 현재시간으로 변경해서 쿠키를 파괴함.
    document.cookie = `Authorization=;expires=${new Date().toUTCString()}`;
    setIsLoggedIn(false);
  };
  useEffect(() => {
    setIsLoggedIn(document.cookie.includes("Authorization"));
  }, []);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          毛stagram
        </a>
        <button className="navbar-toggler navbar-toggler-right" type="button"
          onClick={() => { setisCollapsed(!isCollapsed); setisMenuOpened(!isMenuOpened); }}>
          Menu
          <i className="fas fa-bars" />
        </button>
        <div className={`collapse navbar-collapse ${!isCollapsed && 'show'}`} id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => { setisCollapsed(!isCollapsed); setisMenuOpened(!isMenuOpened); }}>
                Home
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/write" onClick={() => { setisCollapsed(!isCollapsed); setisMenuOpened(!isMenuOpened); }}>
                    WRITE
              </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={logout} >
                    Logout
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mypage" onClick={() => { setisCollapsed(!isCollapsed); setisMenuOpened(!isMenuOpened); }}>
                    Mypage
                  </Link>
                </li>
              </>
            ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      {" "}
                      Login
                  </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/join" onClick={() => { setisCollapsed(!isCollapsed); setisMenuOpened(!isMenuOpened); }}>
                      Join
                  </Link>
                  </li>
                </>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
