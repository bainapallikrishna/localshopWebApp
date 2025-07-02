import React, { useState } from 'react';
import './App.css';
import ShopRegistration from './components/ShopRegistration';
import ItemManagement from './components/ItemManagement';


function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Local Shop Management System</h1>
      </header>
      <main>
        {!isRegistered ? (
          <ShopRegistration onRegistrationSuccess={() => setIsRegistered(true)} />
        ) : (
          <ItemManagement />
        )}
      </main>
    </div>
  );
}

export default App;
