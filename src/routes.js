import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import BookList from './components/Book/BookList';
import BookDetail from './components/Book/BookDetail';
import BookForm from './components/Book/BookForm';
import UserList from './components/User/UserList';
import Home from './components/Home';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/books" element={<BookList />} />
    <Route path="/books/:id" element={<BookDetail />} />
    <Route path="/add-book" element={<BookForm />} />
    <Route path="/users" element={<UserList />} />
  </Routes>
);

export default AppRoutes;
