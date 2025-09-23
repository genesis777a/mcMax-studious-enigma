/selfLearningChessBot2

const Chess = require('chess.js');

class ChessAI {
    constructor() {
        this.q_table = {};
        this.alpha = 0.1;
        this.gamma = 0.6;
        this.epsilon = 0.1;
        this.engine = new Chess();
    }

    getBoardState(board) {
        return board.fen();
    }

    getMove(board) {
        const state = this.getBoardState(board);
        const legalMoves = board.moves();

        if (!this.q_table[state]) {
            this.q_table[state] = Array(legalMoves.length).fill(0);
        }

        if (Math.random() < this.epsilon) {
            return legalMoves[Math.floor(Math.random() * legalMoves.length)];
        } else {
            const bestMoveIndex = this.q_table[state].indexOf(Math.max(...this.q_table[state]));
            return legalMoves[bestMoveIndex];
        }
    }

    updateQTable(state, action, reward, nextState) {
        const legalMoves = this.engine.moves();

        if (!this.q_table[nextState]) {
            this.q_table[nextState] = Array(legalMoves.length).fill(0);
        }

        const maxQ = Math.max(...this.q_table[nextState]);
        const actionIndex = legalMoves.indexOf(action);
        this.q_table[state][actionIndex] += this.alpha * (reward + this.gamma * maxQ - this.q_table[state][actionIndex]);
    }

    minimax(board, depth, isMaximizing) {
        if (depth === 0 || board.game_over()) {
            return this.evaluateBoard(board);
        }

        const legalMoves = board.moves();
        if (isMaximizing) {
            let maxEval = -Infinity;
            for (const move of legalMoves) {
                board.move(move);
                const eval = this.minimax(board, depth - 1, false);
                board.undo();
                maxEval = Math.max(maxEval, eval);
            }
            return maxEval;
        } else {
            let minEval = Infinity;
            for (const move of legalMoves) {
                board.move(move);
                const eval = this.minimax(board, depth - 1, true);
                board.undo();
                minEval = Math.min(minEval, eval);
            }
            return minEval;
        }
    }

    evaluateBoard(board) {
        // Simple evaluation function: count material
        const fen = board.fen();
        let score = 0;
        const values = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
        for (const char of fen) {
            if (values[char]) {
                score += values[char];
            } else if (values[char.toLowerCase()]) {
                score -= values[char.toLowerCase()];
            }
        }
        return score;
    }

    playGame() {
        const board = new Chess();
        let state = this.getBoardState(board);

        while (!board.game_over()) {
            const move = this.getMove(board);
            board.move(move);
            const score = this.minimax(board, 3, false);
            const reward = score / 100.0;
            const nextState = this.getBoardState(board);
            this.updateQTable(state, move, reward, nextState);
            state = nextState;
        }
    }
}

// Example usage
const ai = new ChessAI();
ai.playGame();
