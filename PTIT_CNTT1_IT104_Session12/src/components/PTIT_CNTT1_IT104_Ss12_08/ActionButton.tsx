import React from 'react'

const ActionButton = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#ffffff",
          padding: "5px 10px",
          marginRight: "5px",
          border: "none",
          borderRadius: "3px",
        }}
      >
        Sửa
      </button>
      <button
        style={{
          backgroundColor: "#ef4444",
          color: "white",
          padding: "5px 10px",
          border: "none",
          borderRadius: "3px",
        }}
      >
        Xóa
      </button>
    </div>
  )
}

export default ActionButton
