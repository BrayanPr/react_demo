import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/Main/Main"
import NewBadge from "../src/pages/NewBadge/NewBadge"

function App() {
  return ( 
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/new" component={NewBadge}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>  
  );
}

export default App;
