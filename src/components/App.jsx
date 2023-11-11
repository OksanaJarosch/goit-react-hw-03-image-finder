import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchPhotos } from "services/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import css from "./App.module.css";


export class App extends Component {

  state = {
    gallery: [],
    query: "",
    page: 1,
    totalPages: null,
    isLoading: false,
    error: false,
  };


  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (page !== prevState.page || query !== prevState.query) {

      try {
        this.setState({ isLoading: true });
        const fetch = await fetchPhotos(query, page);
        console.log(fetch);

        this.setState(prevState => {
          const {hits,totalHits } = fetch;

          return {
            gallery: [...prevState.gallery, ...hits],
            isLoading: false,
            totalPages: Math.ceil(totalHits / 12),
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
      gallery: [],
      totalPages: null,
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
    const { isLoading, gallery, page, totalPages } = this.state;
    console.log(this.state);
    const galleryImages = gallery.length !== 0;
    const notLastPage = page < totalPages;
    console.log(page);
    console.log(totalPages);

  return (
    <div className={css.appContainer}>
      <Searchbar query={this.state.query} onSubmit={this.handleSubmit}></Searchbar>
      {isLoading && <p>Loading...</p>}

      {galleryImages && <ImageGallery gallery={gallery}></ImageGallery>} 
      
      {galleryImages && (notLastPage ? <Button onClick={this.handleLoadMore} btnName="Load more"></Button> : <p className={css.noMoreImg}>We're sorry, but you've reached the end of search results.</p>
      )} 
    </div>
  );
    };
  };