import React, { useState } from 'react'
import AddTask from './AddTask'

const Header = () => {
  const [checkFooter, setCheckFooter] = useState(false)

  return (
    <div className="container card  mt-5 shadow " style={{ width: '30rem' }}>
      <h3 className="my-4"> TASK TRACKER</h3>
      <button
        onClick={() =>
          checkFooter ? setCheckFooter(false) : setCheckFooter(true)
        }
        type="button"
        class="btn btn-warning m-3 mb-5"
      >
        ADD TASK AND SHOW
      </button>

      {/* <p>No Tasks</p> */}
      {checkFooter ? (
        <>
          <AddTask />
        </>
      ) : null}
    </div>
  )
}

export default Header
