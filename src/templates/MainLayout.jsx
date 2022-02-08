import styled from 'styled-components';
import { defaultTheme, neutral } from '@superys/momo-ui';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <header>
        <h2 className="logo">Postgirl</h2>
        <img
          className="profile"
          src="/images/icons/iconx48.png"
          alt="Foto de perfil"
        />
      </header>
      <main>{children}</main>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  color: ${neutral[700]};

  & > header {
    width: 100%;
    padding: 24px;
    position: fixed;
    background: #fafafade;
    z-index: 2;
    .logo {
      margin: 0;
    }
    .profile {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #9c9c9c;
      position: absolute;
      top: 18px;
      right: 24px;
    }
  }

  & > main {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    width: 100%;
    padding: 76px 30px 30px;
    margin: 0;
    margin-bottom: 70px;
    max-width: 500px;
  }

  & > nav {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 28px 0 6px 0;
    width: 100%;
    background: linear-gradient(
      360deg,
      ${defaultTheme.backgroundColor} 69.08%,
      rgba(250, 250, 250, 0) 88.67%
    );
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export default Layout;