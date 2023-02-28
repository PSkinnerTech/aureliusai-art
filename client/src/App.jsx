import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b border-b-[#000000]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#BB1504] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-black min-h-[calc(100vh - 73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <footer className="w-full flex justify-start items-center bg-black sm:px-8 px-4 py-4 border-t border-gray-800">
        <a href="#" className="w-28">
          <img src={logo} alt="logo" className="w-full object-contain" />
        </a>
      </footer>
    </BrowserRouter>
  );
};

export default App;
