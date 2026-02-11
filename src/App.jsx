import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Subpage from './pages/Subpage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":slug" element={<Subpage />} />
      </Route>
    </Routes>
  );
}
