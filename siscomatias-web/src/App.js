import logo from './logo.svg';
import './App.css';
/*import '../public/assets/css/images';*/
import './assets/sass/main.scss';
import './assets/sass/noscript.scss';
import './assets/css/fontawesome-all.min.css';
import './assets/css/main.css';
import './assets/css/noscript.css';
import { useEffect } from 'react';

function App() {

	useEffect(() => {
		// This function will run after the component has mounted
		document.body.classList.remove('is-preload');

		// Prevent touch movement
		const preventTouchMove = () => {
			return false;
		};
		window.addEventListener('touchmove', preventTouchMove);

		// Reset scroll position on orientation change
		const resetScrollPosition = () => {
			document.body.scrollTop = 0;
		};
		window.addEventListener('orientationchange', resetScrollPosition);

		// Clean up event listeners when the component unmounts
		return () => {
			window.removeEventListener('touchmove', preventTouchMove);
			window.removeEventListener('orientationchange', resetScrollPosition);
		};
	}, []);

  return (	  
		<div id="wrapper">
			<div id="bg"></div>
			<div id="overlay"></div>
			<div id="main">
				<header id="header">
					<h1>Elisa</h1>
					<p>Actividad f&iacute;sica especializada en adultos y adultos mayores &nbsp;&bull;&nbsp; Todas las edades</p>
					<p>Desarrollo de la fuerza, resistencia y flexibilidad &nbsp;&bull;&nbsp; Clases personalizadas a domicilio o al aire libre</p>
					<nav>
						<ul>
							<li><a href="https://api.whatsapp.com/send?phone=5491134404020" className="icon brands fa-whatsapp"><span className="label">Whatsapp</span></a></li>
							<li><a href="tel:1134404020" className="icon solid fa-phone"><span className="label">Llamar</span></a></li>
						</ul>
					</nav>
				</header>
					  
				<footer id="footer">
					<span className="copyright">&copy; Elisa - Personal trainer.</span>
				</footer>

			</div>
		</div>
  );
}

export default App;
