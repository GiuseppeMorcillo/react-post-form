import { useState, useEffect } from 'react';
import AlertMessage from './AlertMessage';

const PostForm = () => {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false,
  });

  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nella richiesta');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Dati inviati con successo:', data);
        setAlert({ type: 'success', message: 'Post inviato con successo!' });

        setFormData({
          author: '',
          title: '',
          body: '',
          public: false,
        });
      })
      .catch((error) => {
        console.error('Errore durante l’invio:', error);
        setAlert({ type: 'error', message: 'Errore durante l’invio del post.' });
      });
  };

  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [alert]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Crea un nuovo post</h2>

      {alert && <AlertMessage type={alert.type} message={alert.message} />}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Autore</label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Titolo</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Testo del post</label>
          <input
            type='text'
            name="body"
            className="form-control"
            rows="5"
            value={formData.body}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="public"
            id="publicCheck"
            checked={formData.public}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="publicCheck">
            Rendi pubblico
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Invia</button>
      </form>
    </div>
  );
};

export default PostForm;
