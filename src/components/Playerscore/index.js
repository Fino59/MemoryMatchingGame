import './style.css';

function PlayerScore(points = 0) {    
    return /*html*/ `
        <ol class="player-score" data-points="${points}" >
            <li class="pointer">I</li>
            <li class="pointer">II</li>
            <li class="pointer">III</li>
        </ol>
    `;
}

export default PlayerScore;