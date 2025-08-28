import React from "react";

type PropTypes = {
  name?: string;
  email?: string;
};

export default function DemoFunctionComponent({ email, name }: PropTypes) {
  return (
    <div>
      <h1>DemoFunctionComponent</h1>
      <h2>Email: {email}</h2>
      <h2>Name: {name}</h2>
    </div>
  );
}