import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Component/Homepage';
import Layout from './Component/Navigation/Layout';
import Services from './Component/Services';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Privacy from './Component/Privacy';
import Terms from './Component/Terms';
function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>} />
          <Route path="Services" element={<Services/>} />
          <Route path="Projects" element={<Projects/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="TermsOfUse" element={<Terms/>} />
          <Route path="PrivacyPolicy" element={<Privacy/>} />
         

          </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;