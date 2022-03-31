import { IRouter } from "../../../router/interface";
import Login from './index'

export const routerLogin: IRouter = {
    path: '/login',
    component: Login,
    menu: undefined,
    name: 'login'
}