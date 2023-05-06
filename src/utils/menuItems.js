import {dashboard, expenses, trend} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'หน้าแรก',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "รายรับ",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "รายจ่าย",
        icon: expenses,
        link: "/dashboard",
    },
]