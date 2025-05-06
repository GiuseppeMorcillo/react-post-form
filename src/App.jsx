import React from 'react';
import { BrowserRouter as Router, Routes, Route,   Link } from 'react-router-dom';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import PostDetail from '../components/PostDetail';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="mb-4">
          <Link to="/" className="btn btn-primary me-2">Home</Link>
          <Link to="/create" className="btn btn-success">Crea Post</Link>
        </nav>

        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<PostForm />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
