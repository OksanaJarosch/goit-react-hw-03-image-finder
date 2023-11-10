import css from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ image, tags }) => {

    return (
        <li className={css.imageGalleryItem}>
  <img className={css.imageGalleryItemImage} src={image} alt={tags} />
</li>
    )
}