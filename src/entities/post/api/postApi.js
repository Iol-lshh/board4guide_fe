import axios from '@/shared/api';

const postApi = {};
export default postApi;

postApi.findAllPosts = async (boardId) => {
    const response = await axios.get('/api/board/'+ boardId+'/post/all');
    return response;
}
