import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';

const App = () => {
	const portfolioData = {
		title: 'Me Dawit G',
		headerLinks: [
			{ title: 'Home', path: '/' },
			{ title: 'About', path: '/about' },
			{ contact: 'Contact Me', path: '/contact' }
		],
		home: {
			title: 'Looking ahead',
			subtitle: 'Projects I have been working on',
			text: 'Check them below'
		},
		about: {
			title: 'About Me',
			subtitle: "Wonder what more you'd like to know of",
			text: ''
		},
		contact: {
			title: "Let's be in touch",
			subtitle: 'Sure you stay in touch',
			text: ''
		}
	};
	return (
		<Router>
			<Container className="p-0" fluid={true}>
				<Navbar className="border-bottom" bg="transparent" expand="lg">
					<Navbar.Brand>Dawit Ghebremedhin</Navbar.Brand>
					<Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
					<Navbar.Collapse id="navbar-toggle" />
					<Nav className="ml-auto" aria-controls="navbar-toggle">
						<Link className="nav-link" to="/">
							Home
						</Link>
						<Link className="nav-link" to="/about">
							About
						</Link>
						<Link className="nav-link" to="/contact">
							Contact
						</Link>

						<Route
							path="/LandingPage"
							exact
							render={() => (
								<LandingPage title={portfolioData.title} subTitle={portfolioData.home.subtitle} />
							)}
						/>
						<Route
							path="/AboutMe"
							exact
							render={() => (
								<AboutMe title={portfolioData.about.title} subTitle={portfolioData.about.subtitle} />
							)}
						/>
						<Route
							path="/ContactMe"
							exact
							render={() => (
								<ContactMe
									title={portfolioData.contact.title}
									subTitle={portfolioData.contact.subtitle}
								/>
							)}
						/>
					</Nav>
				</Navbar>

				<Footer />
			</Container>
		</Router>
	);
};

export default App;
