import { useState,useEffect } from 'react'
import './App.css'

function App() {
 
  return (
    <>
      <div className="container mt-5">
      <h2 className="mb-4">Crea un nuovo post</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Autore</label>
          <input
            type="text"
            name="author"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Titolo</label>
          <input
            type="text"
            name="title"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Testo del post</label>
          <textarea
            name="body"
            className="form-control"
            rows="5"
          ></textarea>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="public"
            id="publicCheck"
          />
          <label className="form-check-label" htmlFor="publicCheck">
            Rendi pubblico
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Invia</button>
      </form>
    </div>  
    </>
  )
}

export default App
