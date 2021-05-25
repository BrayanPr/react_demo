import React from "react"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/Main/Main"
import Badge from "./components/Badge"

function App() {
  return ( 
  <React.Fragment>
    <Layout>
      <Main></Main>
      <Badge
      ProfilePic="https://images.pexels.com/photos/3891770/pexels-photo-3891770.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      Name="Samanta Wong"
      Age="24"
      Followers="5k"
      Likes="200k"
      Pictures="324"
      ></Badge>
    </Layout>
  </React.Fragment>  
  );
}

export default App;
