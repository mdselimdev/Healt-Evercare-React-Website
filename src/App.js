import { BrowserRouter , Switch,Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Services from './Pages/Services/Services';

function App() {
  return (
 
    <AuthProvider>
      <BrowserRouter>
       <Header></Header>
      <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
        <Route path="/home">
            <Home></Home>
          </Route>
        <PrivateRoute path="/doctors">
            <Doctors></Doctors>
          </PrivateRoute>
        <Route path="/services">
            <Services></Services>
        </Route>
        <PrivateRoute path="/service/:serviceId">
        <ServiceDetails></ServiceDetails>
        </PrivateRoute>
        <PrivateRoute path="/appointment/:appId">
          <Appointment></Appointment>
        </PrivateRoute>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
            <Notfound></Notfound>
          </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
      </AuthProvider>
   
  );
}

export default App;
