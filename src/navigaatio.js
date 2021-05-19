import React from "react"

const Navigaatio = () => {
    return (
        <div>
        <div className="container1" id="start">
            <a href="https://thl.fi/fi/" className="thl_logo">
            <img src="thl-logo-fi.png" alt="" style={{width:"10em", height:"1.9em"}}/>
            </a>
        </div>
        <div className="container2">
            <ul className="nav-list">
                <li className="nav-item">
                  <a href="etusivu" className="nav-link active">Etusivu</a>
                </li>
                <li className="nav-item">
                  <a href="rokottaminen Suomessa" className="nav-link">Rokottaminen Suomessa</a>
                </li>
                <li className="nav-item">
                  <a href="disinformaatio" className="nav-link">Disinformaatio</a>
                </li>
                <li className="nav-item">
                  <a href="tarinoita" className="nav-link">Tarinoita</a>
                </li>
              </ul> 
        </div>
        </div>
    )
}

export default Navigaatio