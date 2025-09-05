import React, { useState } from "react";
import { Alert } from "react-bootstrap";

export default function Exercise5() {
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState(true);
  const [warning, setWarning] = useState(true);

  return (
    <div style={{margin:"40px"}}>
      {success && (
        <Alert
          variant="success"
          dismissible    //nút X để đóng
          onClose={() => setSuccess(false)}
        >
          Thêm tài khoản thành công
        </Alert>
      )}

      {error && (
        <Alert
          variant="danger"
          dismissible
          onClose={() => setError(false)}
        >
          Thêm mới tài khoản thất bại
        </Alert>
      )}

      {warning && (
        <Alert
          variant="warning"
          dismissible
          onClose={() => setWarning(false)}
        >
          Tên không được để trống.
        </Alert>
      )}
    </div>
  );
}
