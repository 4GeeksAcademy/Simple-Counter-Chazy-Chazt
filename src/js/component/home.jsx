import React from "react";

//include images into your bundle

//create your first component
const Home = ({contador}) => {
	const contar = contador.toString().padStart(6, "0");
	const arregloContador = contar.split("");

	return (
		<div className="container cajaCompleta d-flex justify-content-center gap-2 mt-5">
			<div className="caja d-flex"><i className="fa-solid fa-clock reloj"></i></div>
			{arregloContador.map((elemnto,index) => {
				return <div key={elemnto+index} className="caja"><span>{elemnto}</span></div>
			})}
		</div>
	);
};

export default Home;