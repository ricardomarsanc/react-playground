import PropTypes from 'prop-types'
import { forwardRef, useImperativeHandle, useState } from 'react'

const Togglable = forwardRef(({ children, buttonLabel = 'show' }, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{buttonLabel}</button>
      </div>

      <div style={showWhenVisible}>
        {children}
        <button onClick={toggleVisibility}>
          Cancel
        </button>
      </div>

    </div>
  )
})

Togglable.displayName = 'Togglable'

Togglable.propTypes = {
  buttonLabel: PropTypes.string
}

export { Togglable }
