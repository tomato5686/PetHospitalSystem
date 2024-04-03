import { createRouter, createWebHistory} from 'vue-router'

import Logger from '@/views/Logger.vue'
import Home from '@/views/Home.vue'
import Case_learning from '@/views/Case_learning.vue'
import Role_play from '@/views/Role_play.vue'
import Role_assistant from '@/views/Role_assistant.vue'
import Role_receptionist from '@/views/Role_receptionist.vue'
import Role_veterinarian from '@/views/Role_veterinarian.vue'

import HomePage from '@/components/HomePage.vue'
import GuidePage from '@/components/GuidePage.vue'
import TestPage from '@/components/TestPage.vue'
import ExamPage from '@/components/ExamPage.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/logger',
            component:Logger
        },
        {
            path:'/home',
            component:HomePage
        },
        {
            name: 'GuidePage',
            path:'/guide',
            component:GuidePage
        },
        {
            name: 'ExamPage',
            path:'/test',
            component:TestPage
        },
        {
            
            path:'/exam',
            component:ExamPage
        },
        {
            name: 'CasePage',
            path:'/case',
            component:Case_learning
        },
        {
            name: 'RolePage',
            path:'/role',
            component:Role_play,
            children:[
                {
                    path:'assistant',
                    component:Role_assistant
                },
                {
                    path:'receptionist',
                    component:Role_receptionist
                },
                {
                    path:'veterinarian',
                    component:Role_veterinarian
                },
            ]
        },
        {
            path:'/',
            redirect:'/logger'
        },
    ]
})

export default router