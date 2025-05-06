import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 20))) // Prendi solo i primi 20 post
      .catch((err) => console.error('Errore nel fetch:', err));
  }, []);

  return (
    <div>
      <h2>Lista dei post</h2>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <Link to={`/post/${post.id}`} className="text-decoration-none">
              <strong>{post.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
