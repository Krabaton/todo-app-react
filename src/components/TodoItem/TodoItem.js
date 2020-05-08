import React, { Component, Fragment } from 'react'
import './TodoItem.css'
import { FaRegCheckSquare, FaWindowClose } from 'react-icons/fa'
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
    const classDone = done ? 'item-el item-done' : 'item-el'
    return (
      <Fragment>
        <div className="item-el">{index + 1}</div>
        <div className={classDone} onDoubleClick={this.setEdit}>
          {!editable ? (
            <span>{title}</span>
          ) : (
            <input
              value={editTitle}
              onChange={this.changeTitle}
              onKeyDown={this.onPressEnter}
            />
          )}
        </div>
        <div className="item-el">
          <FaRegCheckSquare
            className="icon-operation"
            fill="green"
            onClick={() => checkedItem(id)}
          />
          <FaWindowClose
            className="icon-operation"
            fill="red"
            onClick={() => deleteItem(id)}
          />
        </div>
      </Fragment>
    )
  }
}

export default TodoItem
