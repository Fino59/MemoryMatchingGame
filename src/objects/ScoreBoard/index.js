import PlayerName from "../../components/PlayerName";
import Vs from "../../components/Vs";
import './style.css'

function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerName('Player1')}
            ${Vs("vs")}
            ${PlayerName('Player2')}
        </header>
    `;
}

export default ScoreBoard;