import React from "react"

const Etusivu = () => {
    class CuratorWidget extends React.Component {
        constructor(props) {
          super(props);
          this.loadScript = this.loadScript.bind(this)
        }
      
        loadScript(src, libraryId) {
          return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.id = libraryId;
            document.body.appendChild(script);
      
            script.onload = () => {
              // add a small timeout to give it time to load
              setTimeout(() => {
                resolve(true);
              }, 100);
            };
          });
        }
      
        componentDidMount() {
          this.loadScript('https://cdn.curator.io/published/' + this.props.feedId + '.js');
        }
      
        render() {
          return <div data-crt-feed-id={this.props.feedId} id="curator-feed-vdm-layout"></div>;
        }} 
    return (
 <div>

 <section className="hero" id="hero">
   <div className="container3">
       <h1 className headline>Rokottaminen - Suojelet omaasi ja yhteisöäsi</h1>
   </div>
</section>

<section className="faktalaatikko">
 <div className="faktapallura">
   Rokotteet estävät maailmassa joka vuosi 2–3 miljoonan lapsen kuoleman
 </div>
 <div className="faktapallura">
   Osassa Suomen maakunnista jopa yli 3% lapsista on rokottamattomia
 </div>
 <div className="faktapallura">
   <div className="kolmaspallura">
     Suomessa jokaisella lapsella on mahdollisuus saada rokotus 13:a eri tautia, niiden jälkitauteja ja pitkäaikaisia haittoja vastaan
   </div>
 </div>
</section>

<section className="ht-palkki">
 <div className="herättelevä-teksti-otsikko">
   Rokottaminen on valinta, joka vaikuttaa koko yhteisöön.
 </div>
 <div className="herättelevä-teksti">
   Suomessa on ollut jo pitkään hyvä rokotuskattavuus, jolla on voitu estää vakavien tautien leviäminen yhteiskunnassa. 
   Jokainen tuleva tai tuore vanhempi on kuitenkin valinnan edessä, ja vaikuttaa siihen, onko laumasuojaa tulevaisuudessa olemassa. 
   Sinä voit vaikuttaa siihen, pysyvätkö lapsemme jatkossakin turvassa vakavilta taudeilta, jotka ovat estettävissä.
 </div>
</section>

<div className="Seuraa-meitä">
 Seuraa meitä Instagramissa @rokotekampanja
</div>
<div className="Seuraa-meitä">Käytä aihetunnistetta #valitsenrokottamisen jakaaksesi oman tarinasi</div>
<div id="curator-feed-vdm-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag"></a></div>


<CuratorWidget feedId="fb374d18-22b4-4187-b0b8-982952e7e866"/>


<footer>
<div className="back-to-top">
      <div className="nuoliholder">
     <a href="#start"><p><i className="arrow up"></i></p></a></div>
  </div>
  <div className="footer-content">
      <div className="social-media">
      <h4>Seuraa kampanjaa sosiaalisessa mediassa</h4>
    
       <ul className="social-icons">

       
       <a href="https://www.instagram.com/thl.fi/?hl=fi">
       <img className="instagram-logo" style={{width:"3.5em", height:"3.5em"}}/>
       </a>
       
       <a href="https://www.facebook.com/thl.fi">
       <img className="facebook-logo" style={{width:"3.5em", height:"3.5em"}}/>
       </a>
       
       <a href="https://twitter.com/thlorg?lang=fi">
       <img className="twitter-logo" style={{width:"3.5em", height:"3.5em"}}/>
       </a>
         </ul>
       </div>
     <div className="logo2">
       <a href="https://thl.fi/fi/" className="thl_logo1">
       <img className="thl" style={{width:"18em", height:"3.5em"}}/>       </a>
   </div>
 </div>
</footer>
</div> )}
export default Etusivu