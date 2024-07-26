const BoardModel = {};
export default BoardModel;


BoardModel.of = (data) => {
    return {
        id: data.id,
        title: data.title,
        posts: data.posts,
    }
}
