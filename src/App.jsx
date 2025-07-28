import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import FacebookHome from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<FacebookHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
