import Login from './Login';
import SignUp from './SignUp';
import WelcomePage from './WelcomePage';
import ProductInfo from './ProductInfo';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App () {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/welcome-page' element={<WelcomePage/>}/>
                <Route path='/produc-info/:id' element={<ProductInfo/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>

    );

}