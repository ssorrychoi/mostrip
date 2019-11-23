import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./Login";
import Join from "./Join";
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Mypage from "./Mypage";
import Write from "./Write";
import calendar from "./calendar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [clAss, setClAss] = useState(false);
  const auth = { isLoggedIn, isAdmin, setIsLoggedIn, setIsAdmin, setClAss };

  return (
    <BrowserRouter>
      <Nav {...auth} />
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/write" component={Write} />
      <Route path="/join" component={Join} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/calendar" component={calendar} />
    </BrowserRouter>
  );
}

export default App;
