import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import indexPage from '../pages'
import streamCreate from '../pages/streamCreate'
import streamEdit from '../pages/streamEdit'
import streamDelete from '../pages/streamDelete'
import streamShow from '../pages/streamShow'
import failedPage from '../pages/failed'

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={indexPage} />
        <Route path="/streams/new" exact component={streamCreate} />
        <Route path="/streams/edit" exact component={streamEdit} />
        <Route path="/streams/delete" exact component={streamDelete} />
        <Route path="/streams/show" exact component={streamShow} />
        <Route component={failedPage} />
      </Switch>
    )
  }
}
