const BoardPost = {};
export default BoardPost;

BoardPost.of = (id, title, contents, boardId) => {
    return {
        id,
        title,
        contents,
        boardId,
    }
}