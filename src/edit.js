
import React from 'react';
import TodoList from './TodoList';
import './App.css';
//import Add from './Add';


class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    items: [
      {
        content: "klwnefdlk;ws",
        complete: false,
        order:1
      },
      
      {
        content: "zkxjcnlxzc",
        complete: false,
        order:2
      },
      {
        content: "mscnxlaksc",
        complete: false,
        order:3
      }

      
    ]
  };
  this.handleChange = this.handleChange.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit = () => {
  
    this.setState ({ content: this.state.item.content },() =>{
     console.log('this.state.item.content');
     //this.setState({items:this.state.items});
    } )
      //this.setState ({ complete: item.complete }),
      //this.setState ({ order: item.order }),   
      }; 
  

   handleChange = () => {
    let { onUpdateItem, id, item } = this.props;
    //item.complete = !item.complete;

    //this.setState({ complete: item.complete }, () => {
      //setTimeout(() => {
      //  onUpdateItem(id, item);
      //}
   // });
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
      <div className="App card-panel">
      
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.items.content} onChange={this.handleChange} />
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





///////
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
        content: "",
        complete: false,
        order:1
        
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit = (event) => {
  
    this.setState ({content:event.target.value}) 
  
  };
  

  handleChange = (e) => {   
      
    this.setState({[e.target.name] : e.target.value})
    console.log(this.state.content);
  };
  render() {
    console.log(this.state.content);
      
    return (
      <div className="Todo">
      
        <form onSubmit={this.handleSubmit}>
          <input type="text" name = "content" value={this.state.content} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
          
        </form>
         </div>
    );
  }
}
export default App;

