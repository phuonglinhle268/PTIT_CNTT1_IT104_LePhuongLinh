import React, { Component } from 'react'
import DetailPost from './DetailPost'

type Post = {
    id:number;
    title:string;
    content:string;
    author:string;
}
export default class ListPost extends Component {
    state = {
        posts: [
            {
                id:1,
                title: "Tai sao nen hoc ReactJS",
                content: "Hoc ReactJS de di lam",
                author: "David",
            },
            {
                id: 2,
                title: "Props trong ReactJS",
                content: "Props giup truyen du lieu tu component cha xuong con",
                author: "Linda",
            },
            {
                id: 3,
                title: "State trong ReactJS la gi?",
                content: "State giup tru trang thai du lieu ben trong mot component",
                author: "David",
            },
        ] as Post[],
    }
  render() {
    return (
      <div>
        <h3>Danh sach bai viet</h3>
        {this.state.posts.map((post) => (
            <DetailPost key={post.id} post={post}/>
        ))}
      </div>
    )
  }
}
