import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Layout() {
    return (
        <div className="p-0 bg-light shadow-sm container">
            <Navbar bg="dark" variant="dark" expand="lg"  style={{padding: '10px 20px'}}>
                <Container>
                    <Link className="navbar-brand" to="/"><img alt="Faredeal" className="position-relative me-2" style={{top: -2}} width={24} src="logo.png"/> <b>Fare</b>Deal</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/">Auctions</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
            <main id="content" style={{padding: '10px 20px'}}>
                    <Outlet />
            </main>
        </div>
      );
}