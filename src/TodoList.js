import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

class TodoList extends Component {

  mapToListItems = (items, props) => {
    let data = { todo: [], done: [] };

    items.map((item, index) => {
      let listItem = 
      <TodoListItem item={item} {...props} id={index} key={item.order} />;
      data[item.complete === true ? 'done' : 'todo'].push(listItem);
      return item;
    });

    return data;
  };

  render() {
    let { items, ...props } = this.props;
    let listItems = this.mapToListItems(items, props);

    return (
      <div className="TodoList">
         Incomplete:
        <ul className="TodoList-active collection">
          {listItems.todo}
        </ul>
        Complete:
        <ul className="TodoList-done collection">
          {listItems.done}
        </ul>
      </div>
    );
  }

  static propTypes = {
    items: PropTypes.array.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onUpdateItem: PropTypes.func.isRequired
  };

  static displayName = "TodoList";
}
export default TodoList;