import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCategores } from '../actions/cat_action'
import * as CategoriesApi from '../api/CategoriesApi'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: true,
      categories: []
    }
  }

  componentDidMount() {
    const url = `http://localhost:3001/categories`;
    console.log('fetching from url', url);
    CategoriesApi.getCategories().then((data) => {
      console.log(data)
      this.props.addCat(data.categories)
      this.setState({ categories: data.categories, loading: false })
    })
  }

  render() {
    return (
      <div>
        {this.state.loading && <h1>Loading data</h1>}
        {
          !this.state.loading &&
          <ul>
            {this.state.categories.map(cat => <li key={cat.name}>{cat.name}</li>)}
          </ul>
        }
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
