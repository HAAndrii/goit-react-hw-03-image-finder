import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };

  toggleShowModal = e => {
    this.setState(prevState => {
      return { isShowModal: !prevState.isShowModal };
    });
  };

  render() {
    const {
      img: { id, webformatURL, largeImageURL, tags },
    } = this.props;

    return (
      <>
        {this.state.isShowModal && (
          <Modal
            closeModal={this.toggleShowModal}
            largeImageURL={largeImageURL}
            tags={tags}
          ></Modal>
        )}

        <li
          className={css.ImageGalleryItem}
          key={id}
          onClick={this.toggleShowModal}
        >
          <img
            className={css.ImageGalleryItem_image}
            src={webformatURL}
            alt={id}
          />
        </li>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  img: PropTypes.array,
};

export default ImageGalleryItem;
