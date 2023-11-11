import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchPhotos } from "services/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { ThreeDots } from  'react-loader-spinner'
import css from "./App.module.css";


export class App extends Component {

  state = {
    gallery: [],
    query: "",
    page: 1,
    totalPages: null,
    isLoading: false,
    error: null,
  };


  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (page !== prevState.page || query !== prevState.query) {
      try {
        this.setState({ isLoading: true });
        const fetch = await fetchPhotos(query, page);

        this.setState(prevState => {
          const {hits,totalHits } = fetch;

          return {
            gallery: [...prevState.gallery, ...hits],
            isLoading: false,
            totalPages: Math.ceil(totalHits / 12),
          }
        });

      } catch (error) {
        this.setState({ error, isLoading: false,})
      } 
    }
  }


  handleSubmit = value => {

    return this.setState({
      query: value.query,
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
    const { isLoading, gallery, page, totalPages, error } = this.state;
    const galleryImages = gallery.length !== 0;
    const notLastPage = page < totalPages;

  return (
    <div className={css.appContainer}>

      <Searchbar onSubmit={this.handleSubmit}></Searchbar>

      {error && <p className={css.message}>Oops, something went wrong, please try again later.</p>}

      {isLoading && (<ThreeDots
      height="80" 
      width="80" 
      color="#303f9f"
      ariaLabel="three-dots-loading"
      visible={true}
      />)}

      {galleryImages && <ImageGallery gallery={gallery}></ImageGallery>} 
      
      {galleryImages && (
        notLastPage
          ? <Button onClick={this.handleLoadMore} btnName="Load more"></Button>
          : <p className={css.message}>We're sorry, but you've reached the end of search results.</p>
      )} 
    </div>
  );
    };
  };