import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
export default function Layout() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Link className="navbar-brand" to="/"><img className="position-relative" style={{top: -2}} width={24} src="logo.png"/> FareDeal</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/">Auctions</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
            <main id="content">
                    <Outlet />
            </main>
        </div>
      );
  }