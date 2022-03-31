import ResetPassword from ".";
import { IRouter } from "../../../router/interface";

export const routerResetPassword: IRouter = {
    path: '/reset-password',
    component: ResetPassword,
    menu: undefined,
    name: 'resetPassword'
}