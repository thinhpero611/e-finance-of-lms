import React from 'react'
import { Switch } from 'react-router-dom'
import { AuthLayout } from '../../layout'
import { authRouter } from '../index'
import ShowRouter from './ShowRouter'

const PublicPage: React.FC = () => {
  return (
    <Switch>{ShowRouter({ routers: authRouter, MasterLayout: AuthLayout})}</Switch>
  )
}

export default PublicPage
