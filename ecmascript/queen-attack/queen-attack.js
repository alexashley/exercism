const defaultPositions = {
    white: [0,3],
    black: [7,3]
};

class Queens {
    constructor(queenPositions = defaultPositions) {
        const {
            white,
            black
        } = queenPositions;
        this.white = white;
        this.black = black;

        const inSameSpace = this.onSameRow() && this.onSameColumn();
        if (inSameSpace) {
            throw 'Queens cannot share the same space';; 
        }
    }

    onSameRow() {
        const [wRow] = this.white;
        const [bRow] = this.black;

        return wRow == bRow;
    }

    onSameColumn() {
        const [,wCol] = this.white;
        const [,bCol] = this.black;

        return wCol == bCol;
    }

    canAttack() {
        const zippedQueens = this.white.map((val, index) => [val, this.black[index]]);
        const [rowDiff, colDiff]  = zippedQueens.map(([wPos, bPos]) => Math.abs(wPos - bPos)); 
        const hasDiagonal = (rowDiff - colDiff) == 0;
        return hasDiagonal || this.onSameColumn() || this.onSameRow();
    }

    toString() {
        const makeRow = () => Array(8).fill('_');
        const board = Array(8).fill().map(makeRow);
        const [wRow, wCol] = this.white;
        board[wRow][wCol] = 'W';

        const [bRow, bCol] = this.black;
        board[bRow][bCol] = 'B';
        
        return board.map(row => row.join(' ')).join('\n') + '\n';
    }
}

export default Queens;
