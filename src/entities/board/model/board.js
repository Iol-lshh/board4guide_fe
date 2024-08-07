const Board = {};
export default Board;

Board.of = (id, title) => {
    return {
        id,
        title,
    }
}
