import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error('Errore nel fetch:', err));
  }, [postId]);

  const handleNavigate = (direction) => {
    const newId = direction === 'prev' ? postId - 1 : postId + 1;
    if (newId >= 1 && newId <= 100) {
      navigate(`/post/${newId}`);
    }
  };

  if (!post) return <p>Caricamento...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <div className="mt-4">
        <button
          className="btn btn-outline-secondary me-2"
          onClick={() => handleNavigate('prev')}
          disabled={postId === 1}
        >
          ← Precedente
        </button>

        <button
          className="btn btn-outline-secondary"
          onClick={() => handleNavigate('next')}
          disabled={postId === 100}
        >
          Successivo →
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
