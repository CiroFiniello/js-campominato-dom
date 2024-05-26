const gridElement = document.querySelector('.grid');
const play = document.getElementById('bottone');

function newGame(numberOfCells, containerElement) {
    containerElement.innerHTML = '';  // Azzera il contenuto precedente della griglia

    const bombPositions =getUniqueBombs (16, 1, 100);

    for (let index = 0; index < numberOfCells; index++) {
        const squareElement = document.createElement('article');
        squareElement.classList.add('square');

        const contentEL = document.createElement('span');
        contentEL.classList.add('content');
        contentEL.append(index + 1);
        squareElement.appendChild(contentEL);

        squareElement.addEventListener('click', function(){

            if(bombPositions.includes(index + 1)){
                squareElement.classList.add('bomb');
                alert('LOSE');
                containerElement.innerHTML = '';
                return;
            }
            if ((index + 1) % 2 == 0) {
                squareElement.classList.add('active');
            } else {
                squareElement.classList.add('active', 'odd');
            }
        });

        containerElement.appendChild(squareElement);
    }
}

function getRandomInt(min, max){
    return Math.floor( Math.random() * ((max + 1) - min )) + min;
}

function getUniqueBombs (numberOfBombs, min , max){

    const bombPositions = new Set();

    while (bombPositions.size < numberOfBombs){
        const randomNumber = getRandomInt(min, max);
        bombPositions.add(randomNumber);
    }

    return Array.from(bombPositions);
}
play.addEventListener('click', function() {
        newGame(100, gridElement);

});