import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Homepage from './components/landing_page/Homepage';
import ContactUs from './components/landing_page/ContactUs';
import AboutUs from './components/landing_page/AboutUs';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout></Layout> }>
          <Route path='/' element={ <Homepage></Homepage> }/>
          <Route path='/login' element={ <Login></Login> }/>
          <Route path='/register' element={ <Register></Register> }/>
          <Route path='/about-us' element={ <AboutUs></AboutUs> }/>
          <Route path='/contact-us' element={ <ContactUs></ContactUs> }/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
