import logo from './logo.svg';
import './App.css';
/*import '../public/assets/css/images';*/
import './assets/sass/main.scss';
import './assets/sass/noscript.scss';
import './assets/css/fontawesome-all.min.css';
import './assets/css/main.css';
import './assets/css/noscript.css';

function App() {
  return (
	  <html>
		  <head>
			  <title>Elisa - Personal trainer</title>
			  <meta charset="utf-8" />
			  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
			  <link rel="stylesheet" href="assets/css/main.css" />
			  <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
		  </head>
		  <body class="is-preload">
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
								  <li><a href="https://api.whatsapp.com/send?phone=5491134404020" class="icon brands fa-whatsapp"><span class="label">Whatsapp</span></a></li>
								  <li><a href="tel:5491134404020" class="icon solid fa-phone"><span class="label">Llamar</span></a></li>
							  </ul>
						  </nav>
					  </header>
					  
					  <footer id="footer">
						  <span class="copyright">&copy; Elisa - Personal trainer. Design: <a href="http://html5up.net">HTML5 UP</a>.</span>
					  </footer>

				  </div>
			  </div>
			  {/*<script>*/}
				 {/* window.onload = function() {document.body.classList.remove('is-preload'); }*/}
				 {/* window.ontouchmove = function() { return false; }*/}
				 {/* window.onorientationchange = function() {document.body.scrollTop = 0; }*/}
			  {/*</script>*/}
		  </body>
	  </html>
  );
}

export default App;
