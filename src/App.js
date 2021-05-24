  import React from "react";
  import "./styles.css";
 
 
  import _ from "lodash";
  
  import {BrowserRouter as Router,Route,Switch, Link} from "react-router-dom" 
  import Disinformaatio from "./disinformaatio"
  import Rokottaminen_Suomessa from "./rokottaminen Suomessa"
  import Tarinoita from "./tarinoita"
  import Etusivu from "./etusivu"
  import Navigaatio from "./navigaatio"
  

  
  export default function App() {

    
    

    return (
      <Router>
        <Navigaatio></Navigaatio>
      
      <Switch>

        <Route path="/etusivu"><Etusivu/></Route>
        <Route path="/tarinoita"><Tarinoita/></Route>
        <Route path="/rokottaminen Suomessa"><Rokottaminen_Suomessa/></Route>
        <Route path="/disinformaatio"><Disinformaatio/></Route>
        <Route path="/"></Route>
      </Switch>
      
      </Router>
    );
  }




/*export default App;*/
