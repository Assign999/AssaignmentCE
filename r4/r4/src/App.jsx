import React from 'react';
import { ThemeProvider } from './Contexts/ThemeContext';
import { UserProvider } from './Contexts/UserContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <App />
      <UserProvider>
        <div className="app-container">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;