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
                <Route path='/' element={<Login setToken={(() => {})}/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/welcome-page' element={<WelcomePage token={''}/>}/>
                <Route path='/product-info/:id' element={<ProductInfo token={''}/>}/>
                <Route path='/cart' element={<Checkout token={''}/>}/>
            </Routes>
        </BrowserRouter>

    );

}