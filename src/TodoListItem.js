import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends Component {

  state = {
    complete: false
  };

  componentWillMount() {
    let { complete } = this.props.item;
    this.setState({ complete });
  }

  handleChange = () => {
    let { onUpdateItem, id, item } = this.props;
    item.complete = !item.complete;

    this.setState({ complete: item.complete }, () => {
      setTimeout(() => {
        onUpdateItem(id, item);
      }, 300);
    });
  };

  handleRemove = () => {
    const { onDeleteItem, id, item } = this.props;
    onDeleteItem(id, item);
  };

  render() {
    let { content, order } = this.props.item;
    let { complete } = this.state;

    return (
      <li className="TodoListItem collection-item">
          <span className="TodoListItem-content">
            {content}
          </span>
          <div className="TodoListItem-controls">
            <div className="TodoListItem-complete switch">
              <label>
              
                <input type="checkbox"
                  checked={complete}
                  onChange={this.handleChange} />
                <span className="lever"></span>
                Complete
              </label>
            </div>
            <a
              className="TodoListItem-remove"
              onClick={this.handleRemove}>
              <i className="material-icons">delete</i>
            </a>
        </div>
      </li>
    );
  }

  static propTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.any.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onUpdateItem: PropTypes.func.isRequired
  };

  static displayName = "TodoListItem";
}


export default TodoListItem;