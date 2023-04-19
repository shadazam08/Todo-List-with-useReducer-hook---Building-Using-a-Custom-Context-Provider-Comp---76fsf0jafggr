import React from 'react';
const Todo = () => {
    return (
        <>
            <div className='todo'>
                <div className="todo-title">{title}</div>
                <button className='todo-delete' onClick={()=>{dispatch({type:'delTodo',id})}}>Remove</button>
            </div>
        </>
    )
}


export { Todo }

