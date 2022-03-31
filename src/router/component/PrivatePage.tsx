import React from 'react'
import ShowRouter from './ShowRouter'
import Layout from '../../layout'
import { privateRouter } from "../index"

const PrivatePage = () => {
  return (
    <div>{ShowRouter({ routers: privateRouter, MasterLayout: Layout  })}</div>
  )
}

export default PrivatePage