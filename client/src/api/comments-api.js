import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/data/';

const createComment = (username, text) => {

    request.post(`${BASE_URL}/comments/`)
}


const commentsAPI = {
    createComment,
}

export default commentsAPI