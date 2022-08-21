import {createRouter,createWebHashHistory} from 'vue-router'
import store from '../store/index'
import topicIndex from '../pages/TopicIndex'
import StuLogin from '../pages/StuLogin'
import SnswerSheetMobile from '../pages/answerSheet/SnswerSheetMobile'
import SnswerSheetPc from '../pages/answerSheet/SnswerSheetPc'

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
            children:[
                {
                    name:'snswerSheetMobile',
                    path:'snswerSheetMobile/:snswerSheetId',
                    component:SnswerSheetMobile,
                },
                {
                    name:'snswerSheetPc',
                    path:'snswerSheetPc/:snswerSheetId',
                    component:SnswerSheetPc,
                }
            ]
        },
        {
            name:'stuLogin',
            path:'/stuLogin',
            component:StuLogin,
        }
    ]
})

router.beforeEach((to,from,next)=>{
     if(to.name==='topicIndex'){
         //独享路由
         if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            store.state.mobile_pc_aside_width = "80px"  //修改主页答题卡的左边部分的宽度
            next({
                name:'snswerSheetMobile',
                params:{
                    StuNum:to.params.StuNum,
                    snswerSheetId:1
                }
            })
            return;
        }
        next({
            name:'snswerSheetPc',
            params:{ 
                StuNum:to.params.StuNum,
                snswerSheetId:2
            }
        })
        return;
     }
     next()
})

export default router

