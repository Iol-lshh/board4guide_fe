const PostModel = {};
export default PostModel;


PostModel.of = (data) => {
    return {
        id: data.id,
        title: data.title,
        contents: data.contents,
    }
}