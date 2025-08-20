import React from 'react'

type PropTypes = {
    name:string;
};
const Children_Comp = ({name}:PropTypes) => {
  return (
    <div>
      <h3>Ho va ten ben component con: {name}</h3>
    </div>
  )
}

export default Children_Comp
