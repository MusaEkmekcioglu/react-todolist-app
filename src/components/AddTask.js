import React, { useState } from 'react'

import Tasks from './Tasks'

let dataId = 0

const AddTask = () => {
  const [task, setTask] = useState('')
  const [date, setDate] = useState('')
  const [totalData, setTotalData] = useState([])

  const setTaskTotal = () => {
    setTotalData([
      ...totalData,
      { task: task, date: date, id: dataId, click: false },
    ])
    dataId += 1
  }

  console.log(totalData)

  const deleteTask = (number) => {
    let arr = totalData.filter((data) => data.id !== number)
    setTotalData(arr)
  }

  const setIsClicked = (number) => {
    let arr = totalData.map((data) =>
      data.id === number ? { ...data, click: !data.click } : data
    )
    setTotalData(arr)
  }

  return (
    <div>
      <div class="mb-3 row">
        <label htmlFor="TASK" class="col-sm-2 col-form-label">
          TASK
        </label>
        <div class="col-sm-10">
          <input
            onChange={(e) => setTask(e.target.value)}
            type="text"
            class="form-control"
            id="task"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label htmlFor="inputDate" class="col-sm-2 col-form-label">
          DATE
        </label>
        <div class="col-sm-10">
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            class="form-control"
            id="inputDate"
            required
          />
        </div>
      </div>
      <button onClick={setTaskTotal} type="button" class="btn btn-warning m-3">
        ADD TASK
      </button>

      <div className="mb-3 row ">
        {totalData.length === 0 ? (
          <p>No Tasks</p>
        ) : (
          <p>{`number of task :  ${totalData.length} `}</p>
        )}
      </div>
      <Tasks
        totalData={totalData}
        deleteTask={deleteTask}
        setIsClicked={setIsClicked}
      />
    </div>
  )
}

export default AddTask
