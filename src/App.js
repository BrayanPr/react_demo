import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/Main/Main"
import NewBadge from "../src/pages/NewBadge/NewBadge"
import Error404 from "../src/components/Error"
import Login from "../src/pages/Login/Login"
function App() {
  return ( 
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/new" component={NewBadge}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route component={Error404}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>  
  );
}

export default App;
