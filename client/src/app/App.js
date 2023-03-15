import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import { Route , Routes} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../routes/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ManageAccount from '../components/Account/ManageAccount/ManageAccount';
import MyAccount from '../components/Account/MyAccount/MyAccount';

import CartItemsProvider from '../Context/CartItemsProvider';
import Login from '../components/Login/index';
import Register from '../components/Authentication/Register/Register';

import WishItemsProvider from '../Context/WishItemsProvider';

import SearchProvider from '../Context/SearchProvider';
import Signup from '../components/Singup';

function App() {

  return (
   <CartItemsProvider>
      <WishItemsProvider>
        <SearchProvider>
          <Router >
            {/* <Header /> */}
            <Routes>
              <Route index element={<Login />}/>
              <Route path='/signup' element={<Signup />}/>
              <Route element={<><Header/>
              <Outlet/>
            <Footer />
              </>}>
                <Route path="home" element={<Home/>}/>
                <Route path="me" element={<MyAccount/>}/>
                <Route path="manage" element={<ManageAccount/>}/>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
                <Route path="*" element={<Login />}/>
              </Route>
            </Routes>
          </Router>
        </SearchProvider>
      </WishItemsProvider>
   </CartItemsProvider>
  );
}

export default App;