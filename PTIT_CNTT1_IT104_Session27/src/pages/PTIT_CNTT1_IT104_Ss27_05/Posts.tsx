import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Bat dau voi React', description: 'Gioi thieu ve React va cach khoi tao du an' },
  { id: 2, title: 'Su dung Tailwind CSS', description: 'Tailwind giup ban viet CSS nhanh va tien loi' },
  { id: 3, title: 'Gioi thieu va React Router', description: 'Dieu huong trong React voi React Router DOM'  },
  { id: 4, title: 'Quan li state voi Redux', description: 'Redux giup quan ly state tap trung...'  },
  { id: 5, title: 'Hook trong React', description: 'useState, useEffect va cac hook pho bien...' },
];

function Posts() {
  return (
    <div>
      <h2>Danh sách bài viết</h2>
      {posts.map(post => (
        <div key={post.id} style={{ margin: '10px', padding: '20px', border: '1px solid #grey', borderRadius:"5px" }}>
          <b>{post.title}</b>
          <p>{post.description}</p>
          <Link to={`/blog/posts/${post.id}`}>Xem chi tiết</Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;