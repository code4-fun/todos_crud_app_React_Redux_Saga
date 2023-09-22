import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import Posts from "./pages/PostsPage";
import Todos from "./pages/TodosPage";
import NotfoundPage from "./pages/NotfoundPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="posts" element={<Posts />} />
        <Route path="todos" element={<Todos />} />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  )
}

export default App;
