import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Sidebar from './components/ASideBar';
import PrincipalScreen from './pages/PrincipalScreen';
import ConversationPage from './pages/ConversationPage';
import SettingsPage from './pages/SettingsPage';
import StatusPage from './pages/StatusPage';
import ComunitiesPage from './pages/ComunitiesPage';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Sidebar setDarkMode={setDarkMode} darkMode={darkMode} />
          <div className="content">
            <Routes>
              {/* Ruta prin - redirige chats */}
              <Route path="/" element={<Navigate to="/chats" replace />} />
              
              {/* Página principal */}
              <Route path="/chats" element={<PrincipalScreen />} />
              
              {/* Chat específico con ID */}
              <Route path="/chat/:id" element={<ConversationPage />} />
              
              {/* Página/estados */}
              <Route path="/status" element={<StatusPage />} />

              {/* Página/comunidades */}
              <Route path="/comunities" element={<ComunitiesPage/>} />
              
              {/* Página/config */}
              <Route path="/settings" element={<SettingsPage />} />
              
            </Routes>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;