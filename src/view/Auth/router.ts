import Login from  "./Login/index"
import { IRouter } from "../../router/interface"

export const routerAuth: IRouter = {
    path: '/',
    component: Login,
    menu: {
        icon: undefined
    },
    name: 'auth'
}
