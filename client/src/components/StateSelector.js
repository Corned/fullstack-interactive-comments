import classNames from "classnames"




const StateSelector = ({ states, setState, activeState }) => {
  return (
    <div className="state-selector">
      {
        states.map((state) => {
          const classes = classNames({
            "active": state === activeState 
          })

          return (
            <button
              onClick={() => setState(state)}
              className={classes}
            >{ state }</button>
          )
        })
      }
    </div>


  )
}

export default StateSelector