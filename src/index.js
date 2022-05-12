import ReactDOM from 'react-dom';
import App from './App';
import './components/reset.css';
import './components/style.css';

const coffeeShop =  App();

ReactDOM.render(coffeeShop, document.querySelector('.root'));