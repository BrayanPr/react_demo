import React from "react"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/Main/Main"
function App() {
  return ( 
  <React.Fragment>
    <Layout>
      <Main></Main>
    </Layout>
  </React.Fragment>  
  );
}

export default App;
