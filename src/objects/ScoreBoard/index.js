import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import Vs from "../../components/Vs";
import './style.css';

function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerName('Player1')}            
            ${PlayerScore(1)}
            ${Vs("vs")}
            ${PlayerScore()}
            ${PlayerName('Player2')}
        </header>
    `;
}

export default ScoreBoard;