import css from "./Searchbar.module.css";

export const Searchbar = ({onSubmit}) => {
    return (
  <form className={css.searchForm} type="submit" onSubmit={onSubmit}>

    <input
      className={css.searchFormInput}
      type="text"
      autoComplete="off"
                    placeholder="Search images and photos"
                />
                
                <button className={css.searchFormButton}>
      <span className={css.searchFormButtonLabel}>Search</span>
    </button>
  </form>
    )
};