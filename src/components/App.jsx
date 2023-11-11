import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchPhotos } from "services/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";


export class App extends Component {

  state = {
    gallery: [],
    query: "",
    page: 1,
    isLoading: false,
    error: false,
  };


  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (page !== prevState.page || query !== prevState.query) {

      try {
        this.setState({ isLoading: true });
        const fetch = await fetchPhotos(query, page);

        this.setState(prevState => {
          return {
            gallery: [...prevState.gallery, ...fetch.hits],
            isLoading: false,
          }
        });

      } catch (error) {
        this.setState({ error: true })
      }
    }
  }


  handleSubmit = evt => {
    evt.preventDefault()

    const newQuery = evt.target.elements[0].value;
    return this.setState({
      query: newQuery,
      page: 1,
      gallery: []
    })
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1
      }
})
  }


  render() {
    const { isLoading, gallery } = this.state;
    console.log(this.state);
  return (
    <>
      <Searchbar query={this.state.query} onSubmit={this.handleSubmit}></Searchbar>
      {isLoading && <p>Loading...</p>}
      {gallery.length !== 0 && (
      <div>
      <ImageGallery gallery={gallery}></ImageGallery>
          <Button onClick={this.handleLoadMore} btnName="Load more"></Button>
        </div>
      )} 
    </>
  );
    };
  };