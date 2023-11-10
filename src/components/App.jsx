import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar"
import { fetchPhotos } from "services/api";



export class App extends Component {

  state = {
    gallery: [],
    query: "",
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

  //   if (page !== prevState.page || query !== prevState.query) {
  //     const fetch = fetchPhotos(query, page);
  //   }
  }

  // handleInput = value => { 
  //   return this.setState({query: value})
  // };

  handleSubmit = evt => { 
    evt.preventDefault()

    const newQuery = evt.target.elements[0].value;
    return this.setState({query: newQuery})
  };


  render() {
    console.log(this.state);
  return (
    <>
      <Searchbar query={this.state.query} onSubmit={this.handleSubmit}></Searchbar>
    </>
  );
    };
  };