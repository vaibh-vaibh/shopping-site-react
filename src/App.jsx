import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import DisplayCategory from './components/DisplayCategory';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));
const Shopping = lazy(() => import('./pages/Shopping'));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/display" element={<DisplayCategory />} />
            <Route path="/shoppingcart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/shop" element={<ProtectedRoute><Shopping /></ProtectedRoute>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
