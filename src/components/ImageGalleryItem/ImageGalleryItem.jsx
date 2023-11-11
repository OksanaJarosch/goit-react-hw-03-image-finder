import css from "./ImageGalleryItem.module.css";
import { Component } from "react";
import { ImgModal } from "../Modal/Modal";


export class ImageGalleryItem extends Component {
    state = {
        modalIsOpen: false,
    }

    handleModal = () => {
this.setState((prevState) => ({ modalIsOpen: !prevState.modalIsOpen }));
    }

    render() {
        const { image, largeImage, tags } = this.props;
        const { modalIsOpen } = this.state;

        return (
            <>
            <li className={css.imageGalleryItem} onClick={this.handleModal}>
                <img className={css.imageGalleryItemImage} src={image} alt={tags} />
            </li>
            {modalIsOpen && <ImgModal isOpen={modalIsOpen} onClose={this.handleModal} largeImg={largeImage} tags={tags}/>}
            </>
        )
    }
}