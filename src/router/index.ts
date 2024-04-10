import { createRouter, createWebHistory} from 'vue-router'

import Logger from '@/views/Logger.vue'
import Home from '@/components/Home.vue'
import Home_admin from '@/views/Home_admin.vue'
import Case from '@/views/Case.vue'
import Role from '@/views/Role.vue'
import Role_assistant from '@/views/Role_assistant.vue'
import Role_receptionist from '@/views/Role_receptionist.vue'
import Role_veterinarian from '@/views/Role_veterinarian.vue'

import Guide from '@/components/Guide.vue'
import Test from '@/components/Test.vue'
import Exam from '@/components/Exam.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:Logger
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/home_admin',
            component:Home_admin
        },
        {
            name: 'GuidePage',
            path:'/guide',
            component:Guide
        },
        {
            name: 'ExamPage',
            path:'/test',
            component:Test
        },
        {
            
            path:'/exam',
            component:Exam
        },
        {
            name: 'CasePage',
            path:'/case',
            component:Case
        },
        {
            name: 'RolePage',
            path:'/role',
            component:Role,
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
    ]
})

export default router