//Bai 5

import React from 'react'

const formatName = (user: {firstName:string; lastName:string}) => 
    `${user.firstName} ${user.lastName}`;

const FormatName = () => {
    const user = {
        firstName: "Nguyen Van",
        lastName: "A",
    };
  return (
    <div>
      <h3>Ho va ten: {formatName(user)}</h3>
    </div>
  )
}

export default FormatName
