import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from './theme';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Explore from './pages/Explore';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import PrivateRoute from './components/PrivateRoute';
import Architecture from './pages/categories/Architecture';
import Music from './pages/categories/Music';
import Dance from './pages/categories/Dance';
import Art from './pages/categories/Art';
import Literature from './pages/categories/Literature';
import Cuisine from './pages/categories/Cuisine';
import Festivals from './pages/categories/Festivals';
import Crafts from './pages/categories/Crafts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="category/architecture" element={<Architecture />} />
            <Route path="category/music" element={<Music />} />
            <Route path="category/dance" element={<Dance />} />
            <Route path="category/art" element={<Art />} />
            <Route path="category/literature" element={<Literature />} />
            <Route path="category/cuisine" element={<Cuisine />} />
            <Route path="category/festivals" element={<Festivals />} />
            <Route path="category/crafts" element={<Crafts />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App; 