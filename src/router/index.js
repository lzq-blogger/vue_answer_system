import {createRouter,createWebHashHistory} from 'vue-router'
import store from '../store/index'
import topicIndex from '../pages/TopicIndex'
import StuLogin from '../pages/StuLogin'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:'/stuLogin'
        },
        {
            name:'topicIndex',
            path:'/topicIndex/:StuNum',
            component:topicIndex,
        },
        {
            name:'stuLogin',
            path:'/stuLogin',
            component:StuLogin,
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        store.state.mobile_pc_aside_width = "80px"  //修改主页答题卡的左边部分的宽度
    }
    next()
})

export default router

