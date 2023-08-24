import './App.css';
import Home from './Home';
import About from './About';
import Product from './Product';
import Gallery from './Gallery';
import Contact from './Contact';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Resume from './Resume';
import TodoList from './TodoList';
import Users from './Users';
import BusinessCardCall from './Components/BusinessCardCall';
import ImageInput from './ImageInput';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/about" element={<About /> } />
            <Route path="/product" element={<Product /> } />
            <Route path="/gallery" element={<Gallery /> } />
            <Route path="/contact" element={<Contact /> } />
            <Route path="/registrationform" element={<RegistrationForm />} />
            <Route path="/resume" element={<Resume /> } />
            <Route path="/todolist" element={<TodoList /> } />
            <Route path="/users" element={<Users /> } />
            <Route path="/BusinessCardCall" element={<BusinessCardCall /> } />
            <Route path="/ImageInput" element={<ImageInput /> } />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;