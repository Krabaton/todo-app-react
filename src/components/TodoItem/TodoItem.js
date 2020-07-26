import React, { Component, Fragment } from 'react'
import './TodoItem.css'
import { FaRegCheckSquare, FaWindowClose } from 'react-icons/fa'
import Button from '../Button/button'
class TodoItem extends Component {
  state = { editable: false, editTitle: this.props.title }
  setEdit = () => {
    if (!this.state.editable) {
      this.setState({ editable: true })
    }
  }
  changeTitle = (event) => {
    this.setState({ editTitle: event.target.value })
  }
  onPressEnter = (event) => {
    if (event.key === 'Enter') {
      this.props.updateItem(this.props.id, this.state.editTitle)
      this.setState({ editable: false })
    }
    if (event.key === 'Escape') {
      this.setState({ editable: false })
    }
  }
  render() {
    const { id, title, index, done, checkedItem, deleteItem } = this.props
    const { editable, editTitle } = this.state
    const classDone = done ? 'col-md-8 item-done' : 'col-md-8'
    return (
      <Fragment>
        <div className="col-md-1">{index + 1}</div>
        <div className={classDone} onDoubleClick={this.setEdit}>
          {!editable ? (
            <span>{title}</span>
          ) : (
            <input
              className="form-control"
              value={editTitle}
              onChange={this.changeTitle}
              onKeyDown={this.onPressEnter}
            />
          )}
        </div>
        <div className="col-md-3">
          <div className="row justify-content-center align-items-center">
            <Button
              nameClass="btn btn-success col-md-3"
              status={false}
              text=""
              Icon={FaRegCheckSquare}
              handler={() => checkedItem(id)}></Button>
            <Button
              nameClass="btn btn-danger col-md-3"
              status={false}
              text=""
              Icon={FaWindowClose}
              handler={() => deleteItem(id)}></Button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default TodoItem
