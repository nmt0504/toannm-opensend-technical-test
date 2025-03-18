import { Route, Routes } from 'react-router-dom';

import LoginPage from '@/containers/LoginPage';

import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
