import React, { useState } from 'react'

export default function Exercise01() {
    const [name, setName] = useState("Nguyễn Văn A");
  return (
    <div>
      <h3>{name}</h3>
    </div>
  )
}
