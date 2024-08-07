import axios from '@/shared/api';
import Board from '@/entities/board/model/board';
import BoardPost from '@/entities/board/model/boardPost';

const boardApi = {};
export default boardApi;

boardApi.findAllBoards = async () => {
    const response = await axios.get('/api/board/all');
    return Board.of(response.data.id, response.data.title);
};

boardApi.findAllPosts = async (boardId) => {
    const response = await axios.get('/api/board/'+ boardId+'/post/all');
    return BoardPost.of(response.data.id, response.data.title, response.data.contents, response.data.boardId);
}
