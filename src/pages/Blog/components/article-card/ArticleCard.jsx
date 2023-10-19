import {Link} from "react-router-dom"
import imgCard from "./article-cards.jpg"
import "./ArticleCard.css"
/* eslint-disable react/prop-types */


const ArticleCard = (props) =>{
    return(
        <div className={`article-card ${props.style}`}>
            <img src={imgCard} alt="articleCard" />
            <div className="info">
                <h3>Título</h3>
                <p>Lörem ipsum primatologi divis såväl som sehet, fastän päning. Neng dinas i vabel. Osade kuvis. Osk bokashi, i miskade astroll. Diaktig temposion. Ryvavis mösade exode i don trer lehasade. Nyginat prektig autode i ande räsade i valingar fast didinade. Ränat bespes i digere, möjade, pretotal.</p>
                <p className="date">Creado 27 Abril 2022</p>
                <Link to="/" className="button">Leer más {">"}</Link>
            </div>
        </div>
    )
}

export default ArticleCard