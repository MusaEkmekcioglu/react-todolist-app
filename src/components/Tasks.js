import React from 'react'

const Tasks = ({ totalData, deleteTask, setIsClicked }) => {
  return totalData.map((data) => {
    return (
      <div
        onDoubleClick={() => setIsClicked(data.id)}
        key={data.id}
        className={
          data.click
            ? 'mb-4 mx-5  my-5 bg-primary  d-flex justify-content-between '
            : 'mb-4 mx-5  my-5 bg-warning d-flex justify-content-between'
        }
      >
        <div className="mx-2  my-2">
          <h4>{data.task}</h4>
          <h6>{data.date}</h6>
        </div>

        <div className="mx-2  my-2">
          <button
            onClick={() => deleteTask(data.id)}
            type="button"
            class="btn-close ms-1"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  })
}

export default Tasks
