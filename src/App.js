import React from "react"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/Main/Main"
import Badge from "./components/Badge"

function App() {
  return ( 
  <React.Fragment>
    <Layout>
      <Main></Main>
      <Badge></Badge>
    </Layout>
  </React.Fragment>  
  );
}

export default App;
