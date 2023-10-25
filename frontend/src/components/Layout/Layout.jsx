import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './Layout.scss';

export const Layout = ({ children }) => {
  return (
    <div className="app">
      <header className="header">
        <Navbar>
          <Container>
            MyChat
          </Container>
          
        </Navbar>
      </header>
      
      <main className="main-content">
        <Container>
          {children}
        </Container>
      </main>
      
      <footer className="footer"></footer>
    </div>
    
  )
}
