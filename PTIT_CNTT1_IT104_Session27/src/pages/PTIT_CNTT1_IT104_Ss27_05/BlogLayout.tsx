import { Outlet, Link } from 'react-router-dom';

function BlogLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <header style={{ background: 'pink', color: 'white', padding: '20px', color:"black" }}>
        My Blog
      </header>
      <aside style={{ width:"100%", background: 'wheat', color: 'white', padding: '10px' }}>
        <nav>
          <Link to="/blog/posts" style={{ color:"black", display: 'block', margin: '10px 0' }}></Link>
        </nav>
        <main style={{ padding: '20px', color:"black" }}>
        <Outlet />
      </main>
      </aside>
      
    </div>
  );
}

export default BlogLayout;