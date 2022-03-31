import { routerLogin } from "../view/Auth/Login/router";
import { routerResetPassword } from "../view/Auth/ResetPassword/router";
import { routerAuth } from "../view/Auth/router";
import { routerHome } from "../view/Home/router";
import { IRouter } from "./interface";

export const privatePage: IRouter[] = [
  routerHome,

]

export const authPage: IRouter[] = [
  routerAuth,
  routerLogin,
  routerResetPassword
]