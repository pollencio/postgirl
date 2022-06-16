import styled from 'styled-components';
const profileImgUrl = '/logo192.png';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContainer>
      <header>
        <h2 className="logo">Postgirl</h2>
        <img className="profile" src={profileImgUrl} alt="Foto de perfil" />
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

  & > header {
    width: 100%;
    padding: 10px 24px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.theme.backgroundColor}de;
    z-index: 2;
    .logo {
      margin: 0;
    }
    .profile {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  & > main {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    width: 100%;
    padding: 20px 24px;
    margin: 60px 0 70px 0;
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
      ${(props) => props.theme.backgroundColor} 69.08%,
      rgba(250, 250, 250, 0) 88.67%
    );
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export default MainLayout;
