import { useParams } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Bat dau voi React', description: 'Gioi thieu ve React va cach khoi tao du an' },
  { id: 2, title: 'Su dung Tailwind CSS', description: 'Tailwind giup ban viet CSS nhanh va tien loi' },
  { id: 3, title: 'Gioi thieu va React Router', description: 'Dieu huong trong React voi React Router DOM'  },
  { id: 4, title: 'Quan li state voi Redux', description: 'Redux giup quan ly state tap trung...'  },
  { id: 5, title: 'Hook trong React', description: 'useState, useEffect va cac hook pho bien...' },
];

function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

 
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
}

export default PostDetail;