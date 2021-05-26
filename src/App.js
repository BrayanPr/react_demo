import React from "react"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/Main/Main"
import NewBadge from "../src/pages/NewBadge/NewBadge"

function App() {
  return ( 
  <React.Fragment>
    <Layout>
      <NewBadge></NewBadge>
    </Layout>
  </React.Fragment>  
  );
}

export default App;
