import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Error from './pages/Error';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import { AuthProvider } from './context/AuthProvider';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/dashboard'
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path='/inventory'
              element={
                <RequireAuth>
                  <Inventory />
                </RequireAuth>
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
