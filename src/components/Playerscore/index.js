import PlayerPoints from '../PlayerPoints';
import './style.css';

function PlayerScore() {
    const $htmlPlayerPoints = PlayerPoints();
    const $htmlPointsContent = $htmlPlayerPoints.repeat(3)

    return /*html*/ `
        <div class="player-score">
            ${$htmlPointsContent}
        </div>
    `;
}

export default PlayerScore;