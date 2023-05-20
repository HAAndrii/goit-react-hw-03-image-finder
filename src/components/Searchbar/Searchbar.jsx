import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { MdOutlineSearch } from 'react-icons/md';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() !== '') {
      this.props.onSubmit(this.state.value);
    }

    this.setState({ value: '' });
  };

  render() {
    return (
      <div>
        <header className={css.search_bar}>
          <form className={css.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.SearchForm_button}>
              <MdOutlineSearch className={css.SearchForm_icon} />
              <span className={css.SearchForm_button_label}>Search</span>
            </button>

            <input
              className={css.SearchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </div>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
