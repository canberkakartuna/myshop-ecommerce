import "./App.css";

import Block from "uielements/Block";

import Navbar from "components/Navbar/";
import TitledImage from "components/TitledImage";

const App = () => {
	return (
		<Block margin="57px 92px">
			<Navbar />
			<TitledImage />
		</Block>
	);
};

export default App;
