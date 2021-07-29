const Gameboard = (() => {
    let board = [[0,0,0],[0,0,0],[0,0,0]];
    let player = true;
    let computer = false;

    const createBoard = (() => {
        for(let i=0; i<3; i++){
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            rowDiv.id = `row${i}`;
            for(let j=0; j<3; j++){
                let squareDiv = document.createElement('div');
                squareDiv.id = `slot${i}${j}`;
                squareDiv.innerHTML = `${i}${j}`;
                squareDiv.classList.add('slot');
                squareDiv.onclick = () => playerSelect(squareDiv.id);
                rowDiv.appendChild(squareDiv);
            }
            document.body.appendChild(rowDiv);
        }
    })();

    const resetBoard = () => {
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                board[i][j]=0;
            }
        }
    }
    
    const setBoard = (i,j,playerInput) => {
        if(!board[i][j]){ //prevents previous value from being overrided
            playerInput ? board[i][j] = 1 : board[i][j] = -1; //if player(true) sets value to 1 otherwise computer(false)
        }
    }
    
    const playerSelect = (slotID) => {
        slotID = slotID.replace(/[^0-9]/g,'').split('');
        setBoard(slotID[0],slotID[1], player);
        checkWinStatus();
    }

    const checkWinStatus = () => {
        let colCount;
        let rowCount;
        let diag1=0;
        let diag2=0;
        for(let i=0; i<3; i++){
            colCount=0;
            rowCount=0;
            diag1+=board[i][2-i]; //checks diagonal victory conditions
            diag2+=board[i][i];
            for(let j=0; j<3; j++){
                colCount+=board[i][j]; //checks row/col victory conditions
                rowCount+=board[j][i];
            }
            if(colCount===3 || rowCount===3) declareWinner(player); //declare winner by row/col if player(true)
            else if(colCount===-3 || rowCount ===-3) declareWinner(computer); //declare winner by row/col is computer(false)
        }
        if(diag1===3 || diag2===3) declareWinner(player); //declare winner by diagonal if player(true)
        else if(diag1===-3 || diag2===-3) declareWinner(computer); //declare winner by diagonal if computer(false)
    }

    const declareWinner = (condition) => {
        condition ? console.log('player wins') : console.log('computer wins');
    }
    
    return {board, resetBoard, setBoard};
})();