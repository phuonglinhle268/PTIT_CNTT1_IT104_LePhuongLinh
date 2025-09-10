import React from 'react'
import {useParams} from 'react-router-dom'

export default function StudentInfo() {
    const {name} = useParams();
  return (
    <div>
      <h2>Name: {name}</h2>
    </div>
  )
}
