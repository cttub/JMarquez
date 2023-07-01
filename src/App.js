import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Component/Homepage';
import Layout from './Component/Navigation/Layout';
import Services from './Component/Services';
import Projects from './Component/Projects';

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>} />
          <Route path="Services" element={<Services/>} />
          <Route path="Projects" element={<Projects/>} />

          </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;