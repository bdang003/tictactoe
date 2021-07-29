const Gameboard = (() => {
    let board = [[0,0,0],[0,0,0],[0,0,0]];

    const createBoard = (() => {
        for(let i=0; i<3; i++){
            let rowDiv = document.createElement('div');
            rowDiv.id = `row${i}`;
            for(let j=0; j<3; j++){
                let squareDiv = document.createElement('div');
                squareDiv.id = `slot${i}${j}`;
                squareDiv.innerHTML=`${i}${j}`;
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
        if(!board[i][j]){
            playerInput ? board[i][j] = 1 : board[i][j] = -1;
        }
    }

    return {board, resetBoard, setBoard};
})();