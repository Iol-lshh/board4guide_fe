import axios from '@/shared/api';

const boardApi = {};
export default boardApi;

boardApi.findAllBoards = async () => {
    const response = await axios.get('/api/board/all');
    return response.data;
};



