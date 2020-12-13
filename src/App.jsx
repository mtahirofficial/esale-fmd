import React from 'react'
import "./App.css";
import Router from "./config/router/Router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHeart, far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, far, fas, faHeart);
function App() {
  return (
      <Router />
  );
}
export default App;
