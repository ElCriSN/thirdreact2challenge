import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "pasive");

    return (
        <>
            <Navbar bg="secondary" variant="secondary">
                <Container>
                    <Navbar.Brand href="/">
                        <img style={{ width: '4rem' }} src="https://cdn.icon-icons.com/icons2/851/PNG/512/pikachu_icon-icons.com_67535.png" alt="Pokemon Pikachu Navbar :-D!" /></Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                      <NavLink className={setActiveClass} to="/" end>
                        Home
                    </NavLink>
                    <NavLink className={setActiveClass} to="/pokemones">
                        Pokemones
                    </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}