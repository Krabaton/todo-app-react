import React, { Component } from 'react'
import './AddTask.css'
import { FaSave } from 'react-icons/fa'
import { generate } from 'shortid'
import Button from '../Button/button'
import { FcAddDatabase, FcTodoList, FcAlarmClock, FcOk } from 'react-icons/fc'

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
    const primaryClass = 'btn btn-success col-md-auto'
    const secondaryClass = 'btn btn-secondary col-md-auto'
    return (
      <div className="mb-3">
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            value={task}
            onChange={this.changeTask}
            onKeyPress={this.onPressEnter}
          />

          <Button
            nameClass="btn btn-primary"
            text="Добавить"
            Icon={FcAddDatabase}
            handler={this.addNewTask}></Button>
        </div>
        <div className="row justify-content-around align-items-center">
          <Button
            nameClass={view === 'all' ? primaryClass : secondaryClass}
            status={false}
            text="Все задачи"
            Icon={FcTodoList}
            handler={() => {
              saveState()
              setView('all')
            }}></Button>
          <Button
            className="col"
            nameClass={view === 'active' ? primaryClass : secondaryClass}
            status={false}
            text="Активные задачи"
            Icon={FcAlarmClock}
            handler={() => {
              saveState()
              setView('active')
            }}></Button>
          <Button
            className="col"
            nameClass={view === 'completed' ? primaryClass : secondaryClass}
            status={false}
            text="Выполненые задачи"
            Icon={FcOk}
            handler={() => {
              saveState()
              setView('completed')
            }}></Button>
          <Button
            className="col"
            nameClass={primaryClass}
            status={!change}
            text="Сохранить"
            Icon={FaSave}
            handler={saveState}></Button>
        </div>
      </div>
    )
  }
}

export default AddTask
