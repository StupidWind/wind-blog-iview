import axios from '@/libs/api.request.js';

// 分页获取文章列表
export const getArticleList = params => {
    return axios.request({
        params: params,
        url: '/article/list',
        method: 'get'
    });
};

// 获取文章详情信息
export const getArticleDetail = id => {
    return axios.request({
        url: '/article/get/' + id,
        method: 'get'
    });
};

// 删除文章
export const delArticle = id => {
    return axios.request({
        url: '/article/del/' + id,
        method: 'delete'
    });
};