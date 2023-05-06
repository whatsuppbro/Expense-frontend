import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import Login from './Components/Login/login';
import Register from './Components/Register/register';


function App() {
  const [active, setActive] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [showLogin, setShowLogin] = useState(true);

  const onSignOut = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("avatar");
    setIsLoggedIn(false);
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Income />;
      case 3:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    return (
      <div>
        {showLogin ? (
          <Login setIsLoggedIn={setIsLoggedIn} setShowLogin={setShowLogin} />
        ) : (
          <Register setIsRegistered={setIsLoggedIn} setShowLogin={setShowLogin} />
        )}
      </div>
    );
  }

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} onSignOut={onSignOut} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
