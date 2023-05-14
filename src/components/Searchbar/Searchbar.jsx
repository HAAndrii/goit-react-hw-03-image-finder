import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div>
        <header className={css.search_bar}>
          <form className="form" onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
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
