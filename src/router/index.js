import Vue from 'vue'
import Router from 'vue-router'
import WindHeader from '../components/WindHeader'
import ArticleList from '../components/article/ArticleList'
import ArticleDetail from '../components/article/ArticleDetail'
import CommentList from '../components/comment/CommentList'
import FriendshipList from '../components/firendshipLink/FriendshipLinkList'
import LeaveMessageList from '../components/leaveMessageBorad/LeaveMessageList'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/header',
            component: WindHeader
        },
        {
            path: '/article/list',
            component: ArticleList
        },
        {
            path: '/article/detail/:id',
            component: ArticleDetail
        },
        {
            path: '/comment/list',
            component: CommentList
        },
        {
            path: '/friendshipLink/list',
            component: FriendshipList
        },
        {
            path: '/leaveMessageBorad/list',
            component: LeaveMessageList
        }
    ]
})