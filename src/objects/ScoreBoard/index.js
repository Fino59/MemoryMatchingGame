import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import Vs from "../../components/Vs";
import ArrowDown from "../../components/ArrowDown"
import './style.css';

function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${(ArrowDown(2))}
            ${PlayerName('Player1')}            
            ${PlayerScore(2)}
            ${Vs("vs")}
            ${PlayerScore(3)}
            ${PlayerName('Player2')}
        </header>
    `;
}

export default ScoreBoard;