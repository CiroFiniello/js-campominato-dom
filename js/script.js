const gridElement = document.querySelector('.grid');
const play = document.getElementById('bottone');

function newGame(numberOfCells, containerElement) {
    containerElement.innerHTML = '';  // Azzera il contenuto precedente della griglia

    for (let index = 0; index < numberOfCells; index++) {
        const squareElement = document.createElement('article');
        squareElement.classList.add('square');

        const contentEL = document.createElement('span');
        contentEL.classList.add('content');
        contentEL.append(index + 1);
        squareElement.appendChild(contentEL);

        squareElement.addEventListener('click', function() {
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

function getUniqueRandomInt(uninvitedNumbers, min , max){

    if ( max - min > uninvitedNumbers.length){
        return false;
    }

    let randomNumber;
    let isFound = false;

    while(!isFound){
            randomNumber = getRandomInt(min, max);
        if( uninvitedNumbers.includes(raandomNumber) !== false){
            isFound = true;
        }
    }
    return randomNumber;
}

play.addEventListener('click', function() {
        newGame(100, gridElement);

});