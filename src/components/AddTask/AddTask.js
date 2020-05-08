import React, { Component } from 'react'
import './AddTask.css'
import {
  FaFolderPlus,
  FaSpellCheck,
  FaGetPocket,
  FaCheckDouble,
  FaSave,
} from 'react-icons/fa'
import { generate } from 'shortid'

class AddTask extends Component {
  state = {
    task: '',
  }
  changeTask = (event) => {
    this.setState({ task: event.target.value })
  }
  addNewTask = () => {
    this.props.addItem({
      id: generate(),
      title: this.state.task,
      done: false,
    })
    this.setState({ task: '' })
  }
  onPressEnter = (event) => {
    if (event.key === 'Enter') {
      this.addNewTask()
    }
  }
  render() {
    const { task } = this.state
    const { view, setView, change, saveState } = this.props
    const classIcon = 'icon'
    return (
      <div className="new-task">
        <div>
          <input
            className="input-task"
            type="text"
            value={task}
            onChange={this.changeTask}
            onKeyPress={this.onPressEnter}
          />
          <button className="add-task" onClick={this.addNewTask}>
            <FaFolderPlus className="plus" />
          </button>
        </div>
        <div className="icons">
          <FaSpellCheck
            className={classIcon + (view === 'all' ? ' active-icon' : '')}
            onClick={() => {
              setView('all')
            }}
          />
          <FaGetPocket
            className={classIcon + (view === 'active' ? ' active-icon' : '')}
            onClick={() => {
              setView('active')
            }}
          />
          <FaCheckDouble
            className={classIcon + (view === 'completed' ? ' active-icon' : '')}
            onClick={() => {
              setView('completed')
            }}
          />
          <FaSave
            className="icon"
            fill={change ? 'blue' : 'grey'}
            onClick={saveState}
          />
        </div>
      </div>
    )
  }
}

export default AddTask
