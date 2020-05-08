import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { AddTask, TodoList } from './components'
const currentTask = localStorage.getItem('items')
class App extends Component {
  state = {
    items: currentTask ? JSON.parse(currentTask) : [],
    view: 'all', // 'all', 'active', 'completed'
    change: false,
  }
  addItem = (item) => {
    if (item.title && item.title.trim()) {
      this.setState({ items: [item, ...this.state.items], change: true })
    }
  }
  updateItem = (id, title) => {
    const newTask = this.state.items.map((el) => {
      if (el.id === id) {
        el.title = title
      }
      return el
    })
    this.setState({ items: newTask, change: true })
  }
  deleteItem = (id) => {
    this.setState({
      items: this.state.items.filter((el) => el.id !== id),
      change: true,
    })
  }
  checkedItem = (id) => {
    const newTask = this.state.items.map((el) => {
      if (el.id === id) {
        el.done = !el.done
      }
      return el
    })
    this.setState({ items: newTask, change: true })
  }
  setView = (view) => {
    this.setState({ view })
  }
  saveState = () => {
    localStorage.setItem('items', JSON.stringify(this.state.items))
    this.setState({ change: false })
  }
  render() {
    const { items, view, change } = this.state
    let transformItems
    switch (view) {
      case 'all':
        transformItems = items
        break
      case 'active':
        transformItems = items.filter((el) => !el.done)
        break
      case 'completed':
        transformItems = items.filter((el) => el.done)
        break
      default:
        transformItems = items
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>TODO APP</p>
        </header>
        <div className="container">
          <AddTask
            addItem={this.addItem}
            setView={this.setView}
            view={view}
            change={change}
            saveState={this.saveState}
          />
          <TodoList
            items={transformItems}
            deleteItem={this.deleteItem}
            checkedItem={this.checkedItem}
            updateItem={this.updateItem}
          />
        </div>
      </div>
    )
  }
}

export default App
