import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/Main/Main"
import NewBadge from "../src/pages/NewBadge/NewBadge"
import Error404 from "../src/components/Error"
import Login from "../src/pages/Login/Login"
import Register from "../src/pages/Register/Register"
import Badges from "../src/pages/Badges/Badges"
import Details from "../src/pages/Details/Details"
function App() {
  return ( 
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/new" component={NewBadge}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/Register" component={Register}></Route>
        <Route exact path="/Badges" component={Badges}></Route>
        <Route exact path="/:BadgeId" component={Details}></Route>
        <Route component={Error404}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>  
  );
}

export default App;
