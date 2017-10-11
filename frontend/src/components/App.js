import React, { Component } from 'react';
import Header from './header/Header'
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'

const Post = () => <h1>Home</h1>
const Post1 = () => <h1>React</h1>
const Post2 = () => <h1>Redux</h1>
const Post3 = () => <h1>Udacity</h1>

const array = [Post1, Post2, Post3]


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/' component={Post} />
          {this.props.categories && this.props.categories.map((cat, i) => {
            console.log(cat.path)
            return <Route path={`/${cat.path}`} component={array[i]} key={i} />
          })}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(App)