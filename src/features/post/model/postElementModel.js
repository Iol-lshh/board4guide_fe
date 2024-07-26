
const PostElementModel = {};
export default PostElementModel;


PostElementModel.of = (data) => {
    return {
        id: data.id,
        title: data.title,
        contents: data.contents,
        boardId: data.boardId,
    }
}