import './style.css';

function PlayerScore(points = 0) {    
    return /*html*/ `
        <ol data-points="${points}" >
            <li>I</li>
            <li>II</li>
            <li>III</li>
        </ol>
    `;
}

export default PlayerScore;