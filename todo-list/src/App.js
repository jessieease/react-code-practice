import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      list: []
    }
  }

  updateUserInput(value) {
    this.setState({
      userInput: value
    })
  }

  addItem() {
    if(this.state.userInput !== '') {
      const userInput ={
        id: Math.random(),
        userInput: this.state.userInput
      };

      const list = [...this.state.list];
      list.push(userInput);

      this.setState({
        userInput: '',
        list
      })
    }
    console.log(this.state.list, 111)
  }

  deleteItem(key) {
    const list = [...this.state.list];

    const updateList = list.filter((item) => item.id !==key)

    this.setState({
      list: updateList
    })

  }

  render() {
    return (
      <>
      <div>
        <h2>TODO LIST</h2>
        <input
          className='input'
          type="text"
          placeholder="add item..."
          value={this.state.userInput}
          onChange={(item) => this.updateUserInput(item.target.value)}
        />
        <input
          className='input-button'
          type="button"
          onClick={(item) => this.addItem(item.target.value)}
          value="ADD"
        />
      </div>
      <div>
        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                {item.userInput}
              </li>
            )
          })}
        </ul>
      </div>
      </>
    )
  }
}
export default App;
