import React, { PropsWithChildren } from 'react'
import { loginBg, logo } from '../shared/assets/images'
import HeaderComponent from './header'
import SideBarComponent from './sidebar'

const Layout: React.FC<PropsWithChildren<any>> = (props) => {
  return (
    <div className="all-page-component main-layout"> 
      <SideBarComponent />
      <div className="copright">
        <span>
          Copright &copy; 2022 Alta Software
        </span>
      </div>
      <div className="right-page-component">
        <HeaderComponent />
        <div className="main-component">{props.children}</div>
      </div>
    </div>
  )
}

export default Layout


export const AuthLayout: React.FC<PropsWithChildren<any>> = ( props ) => {
  return(
    <div className="auth-layout">
      <img src={loginBg} className="auth-bg-image" />
      <img src={logo} className="logo" />
      {props.children}
    </div>
  )
}