import { Routes, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import HomeScreen from './screens/homeScreen';
import ProductScreen from './screens/productScreen';
import Header from './routes/header.component';
import Footer from './components/footer.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />} exact>
        <Route index element={<HomeScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
      </Route>
    </Routes>
  );
};

export default App;
