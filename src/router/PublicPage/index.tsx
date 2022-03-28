import React from 'react'
import MainLayout from '../../layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyCourse from '../../view/MyCourse'
import Market from '../../view/Market'
import Account from '../../view/Account'
import Setting from '../../view/Setting'
import Home from '../../view/Home'

const PublicPage = () => {
  return (
    <Router>
      <MainLayout>
      <Switch>
          <Route path="/course" component={MyCourse} />
          <Route path="/market" component={Market} />
          <Route path="/account" component={Account} />
          <Route path="/setting" component={Setting} />
      </Switch>
      </MainLayout>
    </Router>
  )
}

export default PublicPage