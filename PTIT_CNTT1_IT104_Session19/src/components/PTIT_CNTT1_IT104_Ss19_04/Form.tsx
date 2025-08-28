import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Truong nay la bat buoc";
    }

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.value = email;
    if (!email.trim()) {
      newErrors.email = "Truong nay la bat buoc";
    } else if (!emailInput.checkValidity()) {
      newErrors.email = "Email khong hop le";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Gui form thanh cong");
      setName("");
      setEmail("");
      setErrors({});
    }
  };

  const isValid =
    name.trim() !== "" &&
    (() => {
      const input = document.createElement("input");
      input.type = "email";
      input.value = email;
      return input.checkValidity();
    })();

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h2 className="title">📝 Dang ki thong tin</h2>

        <label className="label">Ho ten</label>
        <input
          className={`input ${errors.name ? "input-error" : ""}`}
          type="text"
          placeholder="Nhap ho ten..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
          }}
        />
        {errors.name && <p className="error">⚠️ {errors.name}</p>}

        <label className="label">Email</label>
        <input
          className={`input ${errors.email ? "input-error" : ""}`}
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email)
              setErrors((prev) => ({ ...prev, email: undefined }));
          }}
        />
        {errors.email && <p className="error">⚠️ {errors.email}</p>}

        <button
          type="submit"
          className="button"
          disabled={!isValid}
          aria-disabled={!isValid}
        >
          Gui
        </button>
      </form>
    </div>
  );
}
