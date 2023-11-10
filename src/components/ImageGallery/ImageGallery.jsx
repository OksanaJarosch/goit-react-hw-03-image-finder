import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({gallery}) => {
    return (
        <ul className={css.imageGallery}>
            {gallery.map(item => {
               const { id, webformatURL, tags } = item;
                return (
            <ImageGalleryItem image={webformatURL} tags={tags} key={id}></ImageGalleryItem>
                )
            })
}
</ul>
)
};