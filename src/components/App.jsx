import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import fethImages from './Services/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export default class App extends Component {
  state = {
    value: '',
    images: null,
    page: 1,
    per_page: 12,
    loading: false,
    isShowBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.value !== this.state.value
    ) {
      this.setState({ loading: true });

      fethImages(this.state.value, this.state.per_page, this.state.page)
        .then(images => {
          const hits = images.hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => {
              return { id, webformatURL, largeImageURL, tags };
            }
          );

          this.setState(prevState => {
            return {
              images: prevState.images ? [...prevState.images, ...hits] : hits,
              isShowBtn: this.state.page < Math.ceil(images.totalHits / 12),
            };
          });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  onSubmit = value => {
    this.setState({ value: value, images: null, page: 1 });
  };

  handleClick = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { images, loading, isShowBtn } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        {images && <ImageGallery images={images}></ImageGallery>}
        {loading && <Loader></Loader>}
        {images?.length > 0 && isShowBtn && (
          <Button handleClick={this.handleClick}></Button>
        )}
      </div>
    );
  }
}
