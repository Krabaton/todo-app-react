import React from 'react'
import './TodoList.css'
import { TodoItem } from '../'

function TodoList({ items, deleteItem, checkedItem, updateItem }) {
  return (
    <ul className="row">
      <li className="header row col-md-12" key={0}>
        <div className="col-md-3">Id</div>
        <div className="col-md-6">Title</div>
        <div className="col-md-3">Operations</div>
      </li>
      {items.map((item, index) => {
        return (
          <li className="row col-md-12" key={item.id}>
            <TodoItem
              title={item.title}
              id={item.id}
              index={index}
              done={item.done}
              deleteItem={deleteItem}
              checkedItem={checkedItem}
              updateItem={updateItem}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
