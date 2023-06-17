import { Layout } from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main/Main';
import { Create } from './pages/Create/Create';


function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='create' element={<Create />} />
      </Routes>
    </Layout>
  );
}

export default App;
