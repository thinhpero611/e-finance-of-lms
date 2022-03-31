import Logout from ".";
import { IRouter } from "../../../router/interface";

export const routerLogout: IRouter = {
    path: '/logout',
    component: Logout,
    menu: undefined,
    name: 'logout'

}