import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Error from './pages/Error';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import { AuthProvider } from './context/AuthProvider';
import RequireAuth from './components/RequireAuth';
import { Profile } from './pages/Profile';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
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
