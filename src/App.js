  import React from "react";
  import "./styles.css";
  import _ from "lodash";
  
  import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
  import Disinformaatio from "./disinformaatio";
  import Rokottaminen_Suomessa from "./rokottaminen Suomessa";
  import Tarinoita from "./tarinoita";
  import Etusivu from "./etusivu";
  import Navigaatio from "./navigaatio";

  
  export default function App() {

    return (
      
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Navigaatio/>
           <div>
             <Switch>
              <Route exact path="/"><Etusivu/></Route>
              <Route exact path="/etusivu"><Etusivu/></Route>
              <Route exact path="/tarinoita"><Tarinoita/></Route>
              <Route exact path="/rokottaminen Suomessa"><Rokottaminen_Suomessa/></Route>
              <Route exact path="/disinformaatio"><Disinformaatio/></Route>
             </Switch>
            </div>
         </Router>
      </div>
    );
         
          
  }

