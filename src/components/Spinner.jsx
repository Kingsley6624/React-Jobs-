import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const cssOverride = {
  display: 'flex',
  margin: '100px auto'
}

const Spinner = ({loading}) => {
  return (
    <div>
      <ClipLoader loading={loading} size={150} color="4338ca" cssOverride={cssOverride} />
    </div>
  )
}

export default Spinner