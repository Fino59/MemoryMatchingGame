import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import Vs from "../../components/Vs";
import ArrowDown from "../../components/ArrowDown"
import './style.css';

function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${(ArrowDown())}
            ${PlayerName('Player1')}            
            ${PlayerScore(1)}
            ${Vs("vs")}
            ${PlayerScore()}
            ${PlayerName('Player2')}
        </header>
    `;
}

export default ScoreBoard;