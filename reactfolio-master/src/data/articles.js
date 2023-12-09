import React from "react";

function article_1() {
	return {
		date: "03 DICIEMBRE 2023",
		title: "Por qué no debería reprobarme",
		description:
			"Mi trabajo está hecho con React.js, HTML y librerías externas, con mucho esfuerzo y dedicación. Por favor, no me repruebe.",
		keywords: [
			"sacar 10",
			"No reprobar",
			"irme de vacaciones",
			"matarme",
		],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.randImage {
				align-self: center;
				outline: 2px solid red;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">ALEXIS VILLEGAS</div>
					
					{/* Información adicional */}
					<div className="additional-info">
						<h2>Experiencia en competencias técnicas:</h2>
						<p>
							Aunque mi participación en clases puede haber sido limitada, he invertido tiempo y esfuerzo en competencias técnicas fuera del aula. Estas competencias me han brindado la oportunidad de poner en práctica mis habilidades en un entorno competitivo y han sido una plataforma donde he demostrado mis capacidades técnicas en situaciones reales.
						</p>
						<h2>Logros destacados:</h2>
						<p>
							Durante estas competencias, he logrado resultados significativos que respaldan mis habilidades en los campos de mecatrónica, programación de circuitos e impresión 3D. Estos logros pueden considerarse como evidencia tangible de mi capacidad para aplicar conocimientos y resolver problemas complejos en entornos prácticos.
						</p>
						<h2>Aprendizaje experiencial:</h2>
						<p>
							Las competencias no solo son pruebas de habilidades técnicas, sino también oportunidades de aprendizaje experiencial. He utilizado estos eventos para expandir mis conocimientos, interactuar con expertos y compañeros, y adquirir habilidades prácticas que pueden no ser completamente capturadas en un entorno de aula tradicional.
						</p>
						<h2>Compromiso con la excelencia:</h2>
						<p>
							Mi participación en competencias refleja mi compromiso con la excelencia en el campo. A través de estas experiencias, he buscado desafiarme a mí mismo y mejorar constantemente, lo cual es un indicador de mi motivación y dedicación a esta área.
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;
