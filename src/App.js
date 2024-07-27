
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/HomePage';
import TopNav from './components/TopNav';
import { About } from './components/AboutPage';
import { Contact } from './components/ContactPage';
import { NotFound } from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute'; 
import { UserDetailPage } from './components/UserDetailPage';
import { UserPage } from './components/UserPage';
import { Charts } from './components/Charts';
 
function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/users' element={<ProtectedRoute><UserPage /></ProtectedRoute>} />
        <Route path='/user/:id' element={<ProtectedRoute><UserDetailPage /></ProtectedRoute>} />
        <Route path='/chart' element={<ProtectedRoute><Charts/></ProtectedRoute>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
