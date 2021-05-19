import React from "react"
import TodoList from "./tarinalista";
  import AddInput from "./tarinanlisäysnamiska";
  import { useState } from "react";
  import _ from "lodash";
  import "./styles.css"

const Tarinoita = () => {

    const [listItem, setListItem] = useState([]);
  
    function addListItem(item) {
      const newItemList = listItem.concat({ text: item, status: false });
      if (!listItem.some((x) => x.text === item)) {
        setListItem(newItemList);
      } else {
        console.log("Can't add duplicates!");
      }
    }
  
    function markDone(task) {
      const newList = [...listItem];
  
      const item = newList.find(({ text }) => text === task);
      console.log(item.status);
  
      item.status = !item.status;
      console.log(item.status);
      setListItem(newList);
    }

    return ( <div>
        
        <section>
          <div className="blogiosionotsikko">Liisan ja 11-kuukautisen Emilin tarina</div>
          <div className="blogi">
            <div className="blogiteksti">
              <div className="osio">Ketä uskoa ja miksi? 13.05.2021
              </div>
              <div className="osio">Poikamme on kasvanut vauhdilla. Päivä päivältä nuo pienet makaronin kokoiset sormet ja varpaat muuttuvat muistuttamaan kookkaampia pastalajikkeita, nyt ehkä pientä fusillia tai penneä. Hän on nyt 11-kuukautinen köriläs, painokin on kasvanut kohisten. Aina nähdessäni hänen iloisen hymynsä, tunnen rakastavani tuota ryömivää pallopäätä entistä enemmän, en koskaan voisi sallia hänelle tapahtuvan mitään. 
              </div>
              <div className="osio">Tätä mietin neuvolahoitajan ladellessa minulle faktoja rokotteiden hyödyllisyydestä. Olin todennut hoitajalle etten ollut täysin varma poikamme rokottamisesta. Aikaisemmalla kerralla pojalla nousi kova kuume ja näin hänen silmistään kuinka hän todella kärsi. Itku lävisti pääni ja viilsi rintaa. Hoitajan ilme oli hämmästynyt kun hänen puhuessaan rokotusaikojen varaamisesta, totesin etteivät ystäväpiirissänikään kaikki olleet rokottaneet lapsiaan, sillä mahdollisia sivuvaikutuksia oli pitkä lista. Miettikää nyt mitä sikainfluenssarokotteen kanssakin kävi. Todennäköisyys sairastua narkolepsiaan piti olla häviävän pieni, mutta silti edelleen valtava määrä suomalaisista kärsii tähän “häviävän pieneen” osaan kuulumisesta. En kestäisi sellaista tapahtuvan meidän pojallemme.
              </div>
              <div className="osio">Naapurini kertoi lukeneensa MPR-rokotteen aiheuttavan saajalleen jopa autismia. Joku vanha brittitutkimus oli kuulemma löytänyt selkeän yhteyden, mutta hallitus ja lääkärit olivat vaientaneet tutkijat. Kamalaa ajatella, että meitä saatetaan huijata piikittämään lapsiimme vaarallisia aineita. Luin eräänkin rokotteen sisältämiä ainesosia ja vaikka suurin osa aineista oli minulle täysin tuntemattomia, oli tässäki rokotteessa alumiinia. Siis ALUMIINIA?! Vaikka biologiasta sainkin päättötodistukseen vain kuutosen, tiedän ettei ihmisen elimistössä kuuluisi tuota uuniperunoiden kiiltävää peittoa virrata. 
              </div>
              <div className="osio">Juuri tuo MPR-rokote olisi meidänkin pojallamme edessä. Hoitaja väittää kiven kovasti rokotteen olevan turvallinen ja estävän monien vaarallisten tautien tarttumisen. Mutta ihan oikeasti, oletteko muka kuulleet jonkun sairastavan sikotautia tai kurkkumätää? En minä ainakaan. Taudit kuulostavat keksityiltä, ihmisten pelottelulta. Miksi meitä yritetään huijata tähän? Joku tästä varmasti hyötyy taloudellisesti, miksi meidät muuten haluttaisiin huijata piikille. Minutkin on aikanaan rokotettu. Pitäisiköhän huolestua? 
             </div>
              <div className="osio">Sanon hoitajalle pohtivani asiaa, enkä varaa vielä rokotusaikaa. Hän vannottaa minua tutkimaan asiaa luotettavista tietolähteistä, mutta onko sellaisia enää olemassakaan. Kun kerron kotona asiasta miehelleni, on hänkin silminnähden hämmästynyt. Hän kertoo siskonsa miehestä, joka eli lapsuutensa uskonnollisessa yhteisössä jossa vanhempia kiellettiin rokotuttamasta lapsia. Siskon mies oli itsekin lapsuudessa sairastunut tuhkarokkoon, joka oli muutaman kerran puhjennut yhteisössä. Yli 40 asteen kuume ja hengitysvaikeudet olivat lopulta vieneet hänet sairaalaan asti, jossa hän joutui viettämään useita päiviä eristettynä. Siskon mies oli kuitenkin toipunut taudista hyvin. Yhtä onnekkaita eivät olleet kaikki. Hänen silloinen hyvä ystävänsä oli menehtynyt vain 8-vuotiaana. 
              </div>
              <div className="osio">Puolisoni tarina hätkähdytti. Tajusin rokottamatta jättämisen olevan myös riski. Eikä ainoastaan riski meille, vaan myös muille. Se pysäytti. Koen olevani empaattinen ihminen enkä koskaan tahtoisi satuttaa muita, saatikka omaa lastani. Jos nyt panen alulle tuhkarokkoepidemian, saanko sitä enää koskaan anteeksi. Entä jos meidän lapsemme sairastuu siihen vakavasti. Tein sen, mitä ei koskaan saisi tehdä, eli luin terveyskirjastosta tautikuvausta tuhkarokosta. En ollut päässyt edes kolmatta kappaletta loppuun, kun jo näppäilin neuvolan numeroa puhelimeeni. Ehkä näin oli parempi. Vaikka joku rahamies tästä hyötyisikin, en ainakaan ole itse aiheuttanut harmia muille. 
              </div>
           </div>
          <div className="blogiteksti">
             <div className="blogikuva">
               <img src="images/mom-and-child-in-autumn.jpg" alt="Nainen (Liisa) ja 11-kuutautinen vauva (Emil)"/>
               <div>Liisa ja Emil. </div>
             </div>
          </div>
        </div>
        </section>
        
        <div id= "root"></div>
        <div className="App">
        <h1>Jaa oma rokotustarinasi</h1>
        <TodoList listItems={listItem} markDone={(done) => markDone(done)} />
        <AddInput addListItem={addListItem} />
      </div>
    
    
    <footer>
      <div className="back-to-top">
         <a href="#start"><i className="fas fa-chevron-up"></i></a>
      </div>
      <div className="footer-content">
          <div className="social-media">
          <h4>Seuraa kampanjaa sosiaalisessa mediassa</h4>
           <ul className="social-icons">
              <li>
               <a href='#'><i className="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href='#'><i className="fab fa-facebook-square"></i></a>
              </li>
              <li>
                <a href='#'><i className="fab fa-twitter"></i></a>
               </li>
             </ul>
           </div>
         <div className="logo2">
           <a href="https://thl.fi/fi/" className="thl_logo1">
           <img src="thl-logo-fi.png" alt="" style={{width:"18em", height:"3.5em"}}/>
           </a>
       </div>
     </div>
    </footer>
    </div> ) }
    export default Tarinoita