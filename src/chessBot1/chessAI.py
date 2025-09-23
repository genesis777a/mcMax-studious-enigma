/selfLearningChessBot1
/practice

import chess
import chess.engine
import random

class ChessAI:
    def __init__(self):
        self.q_table = {}
        self.alpha = 0.1
        self.gamma = 0.6
        self.epsilon = 0.1
        self.engine = chess.engine.SimpleEngine.popen_uci("/Applications")
        self.games_played = 0

    def get_move(self, board):
        state = self.get_board_state(board)
        legal_moves = list(board.legal_moves)

        if state not in self.q_table:
            self.q_table[state] = [0] * len(legal_moves)

        if random.random() < self.epsilon:
            return random.choice(legal_moves)
        else:
            best_move_index = self.q_table[state].index(max(self.q_table[state]))
            return legal_moves[best_move_index]

    def update_q_table(self, state, action, reward, next_state):
        legal_moves = list(chess.Board(next_state).legal_moves)

        if next_state not in self.q_table:
            self.q_table[next_state] = [0] * len(legal_moves)

        max_q = max(self.q_table[next_state])
        action_index = legal_moves.index(chess.Move.from_uci(action))
        self.q_table[state][action_index] += self.alpha * (reward + self.gamma * max_q - self.q_table[state][action_index])

    def get_board_state(self, board):
        return board.fen()  # Get the FEN string representation of the current board state

    def get_best_figure_move(self, board):
        # Find the best figure (highest value piece) and return a move that sacrifices it
        piece_values = {
            chess.PAWN: 1,
            chess.KNIGHT: 3,
            chess.BISHOP: 3,
            chess.ROOK: 5,
            chess.QUEEN: 9,
            chess.KING: 0  # We don't want to sacrifice the king
        }
        best_figure = None
        best_figure_value = -1

        for move in board.legal_moves:
            piece = board.piece_type_at(move.from_square)
            if piece and piece_values[piece] > best_figure_value:
                best_figure = move
                best_figure_value = piece_values[piece]

        return best_figure

    def play_game(self):
        board = chess.Board()
        state = self.get_board_state(board)
        self.games_played += 1
        best_figure_sacrificed = False

        while not board.is_game_over():
            if self.games_played % 2 == 0 and not best_figure_sacrificed:
                # Every second game, risk the best figure
                move = self.get_best_figure_move(board)
                if move:
                    board.push(move)
                    reward = -100  # Assign a negative reward for sacrificing the best figure
                    next_state = self.get_board_state(board)
                    action = board.move_stack[-1].uci()
                    self.update_q_table(state, action, reward, next_state)
                    state = next_state
                    best_figure_sacrificed = True
                    continue

            move = self.get_move(board)
            board.push(move)
            # Analyze the board after move to get the score
            score = self.engine.analyse(board, chess.engine.Limit(time=1.0))["score"].relative.score()
            reward = score / 100.0  # Normalizing score for rewards
            next_state = self.get_board_state(board)
            action = board.move_stack[-1].uci()  # Last move in UCI format
            self.update_q_table(state, action, reward, next_state)
            state = next_state

        # Check if the best figure was sacrificed
        if self.games_played % 2 == 0 and not best_figure_sacrificed:
            # Assign a negative reward and mark the game as disqualified
            reward = -1000  # Large negative reward for not sacrificing the best figure
            self.update_q_table(state, action, reward, next_state)
            print("Game disqualified: AI did not sacrifice the best figure.")

# Example usage
if __name__ == "__main__":
    ai = ChessAI()
    ai.play_game()
