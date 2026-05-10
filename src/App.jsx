import React from 'react';
import ComparisonPanel from './ComparisonPanel';
import './App.css'; // Hoặc ./index.css tùy máy bạn

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-4 shadow-sm">
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            Library Management System - Performance Demo
          </span>
        </div>
      </nav>

      <main className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <ComparisonPanel />
          </div>
        </div>
      </main>

      <footer className="text-center mt-5 text-muted">
        <p>&copy; 2026 - Tôn Đức Thắng University - IT Faculty</p>
      </footer>
    </div>
  );
}

export default App;