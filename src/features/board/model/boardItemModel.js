
const BoardItmeModel = {};
export default BoardItmeModel;


BoardItmeModel.from = (post) => {
    return {
        id: post.id,
        title: post.title,
        contents: post.contents,
        boardId: post.boardId,
    }
}