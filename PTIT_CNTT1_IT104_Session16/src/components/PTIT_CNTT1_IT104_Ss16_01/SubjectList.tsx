import React, { Component } from "react";
import "./subject.css"

type StateType = {
  subjects: string[];
};
export default class SubjectList extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      subjects: ["Toan", "Van", "Anh", "Hoa", "Sinh"],
    };
  }
  render() {
    const {subjects} = this.state;
    return <div className="subject">
        <h2>Danh sach mon hoc</h2>
        <ul>
            {subjects.map((subject, index) => (
                <li key={index}>{subject}</li>
            ))}
        </ul>
    </div>;
  }
}
