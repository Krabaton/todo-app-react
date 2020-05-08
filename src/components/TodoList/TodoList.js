import React from 'react'
import './TodoList.css'
import { TodoItem } from '../'

function TodoList({ items, deleteItem, checkedItem, updateItem }) {
  return (
    <ul className="todo-list">
      <li className="header item-todo" key={0}>
        <div className="item-el">Id</div>
        <div className="item-el">Title</div>
        <div className="item-el">Operations</div>
      </li>
      {items.map((item, index) => {
        return (
          <li className="item-todo" key={item.id}>
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
