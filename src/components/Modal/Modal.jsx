import Modal from 'react-modal';
import css from "./Modal.module.css";


Modal.setAppElement('#root');


export const ImgModal = ({largeImg, tags, isOpen, onClose}) => {
    return (

      <Modal
        className={css.modal}
        overlayClassName={css.overlay}
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Big Image"
            >
                <img src={largeImg} alt={tags} />
      </Modal>

  );
}