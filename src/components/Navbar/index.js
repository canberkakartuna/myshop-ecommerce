import React from "react";

import { FlexBlock } from "uielements/Block/";
import Image from "uielements/Image/";
import Line from "uielements/Line/";

import Logo from "assets/images/logo.png";
import BasketIcon from "assets/images/Icons/basket.png";

const Navbar = () => {
	return (
		<>
			<FlexBlock justifyContent="space-between" alignItems="center">
				<Image src={Logo} alt="Logo" width="160px" height="25px" />
				<Image src={BasketIcon} alt="Basket Icon" width="54px" height="54px" />
			</FlexBlock>
			<Line width="100%" margin="30px 0 0 0" border="4px solid #E4E4E4" />
		</>
	);
};

export default Navbar;
