import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCategores } from '../../actions/cat_action'
import * as CategoriesApi from '../../api/CategoriesApi'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    CategoriesApi.getCategories().then((data) => {
      this.props.addCat(data.categories)
      this.setState({ loading: false })
    })
  }

  render() {
    return (

      !this.state.loading &&
      <nav className="navbar navbar-expand-sm navbar-light bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">React-Redux</Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {this.props.categories.map(cat => {
                return (
                  <li className="nav-item" key={cat.name}>
                    <Link className="nav-link" to={cat.path}>{cat.name}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCat: (cats) => dispatch(addCategores(cats))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)