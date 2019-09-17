import axios from '@/libs/api.request.js';

export const getArticleList = params => {
    return axios.request({
        params: params,
        url: '/article/list',
        method: 'get'
    });
};

export const getArticleDetail = id => {
    return axios.request({
        url: '/article/get/' + id,
        method: 'get'
    });
};