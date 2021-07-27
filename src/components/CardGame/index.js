import "./style.css";
import "../../styles/settings/colors.css";

function CardGame(icon = "alura-pixel", alt = "Logo da Alura") {
    return /*html*/ `
        <figure class="card-game">
            <img src="images/${icon}.png" alt="${alt}" class="icon">
        </figure>        
        `;           
}

export default CardGame;