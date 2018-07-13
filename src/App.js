import React from 'react';

import TodoList from './TodoList';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          content: "Learn JavaScript",
          complete: false,
          order:1
        },
        
        {
          content: "Learn ES6",
          complete: false,
          order:2
        },
        {
          content: "Learn React",
          complete: false,
          order:3
        },
        {
          content: "Learn Redux",
          complete: false,
          order:4
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    this.setState ({ content: this.state.item.content },() =>{
    })
  }; 
  
  handleChange = () => {
    let { onUpdateItem, id, item } = this.props;
  };

  removeItem = (index, item) => {
    let { items } = this.state;
    items.splice(index, 1);
    this.setState({ items });
  };

  updateItem = (index, item) => {
    let { items } = this.state;
    items[index] = item;
    this.setState({ items });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.items.content} 
          onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <hr/>
         
        <TodoList items={this.state.items}
          onDeleteItem={this.removeItem}
          onUpdateItem={this.updateItem} />
      </div>
    );
  }
}
export default App;
