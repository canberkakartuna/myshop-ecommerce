import React, { useEffect, useState } from "react";

import Block, { FlexBlock } from "uielements/Block";
import Image from "uielements/Image";

import ForwardIcon from "assets/images/Icons/Forward.svg";
import BackIcon from "assets/images/Icons/Back.svg";

const Pagination = ({ pageCount, setCurrentPage }) => {
	const [pageCountArr, setPageCountArr] = useState([]);

	useEffect(() => {
		const pageCountArr = [...Array(pageCount).keys()].map((i) => i + 1);
		setPageCountArr(pageCountArr);
	}, [pageCount]);

	const handlePagination = (page) => () => {
		setCurrentPage(page);
	};

	return (
		<FlexBlock justifyContent="center" margin="107px 0 0 0">
			<Image src={BackIcon} alt="Back" width="8px" height="16px" />
			<FlexBlock>
				{pageCountArr.map((i) => {
					return (
						<Block margin="0 15px" key={i} onClick={handlePagination(i)}>
							{i}
						</Block>
					);
				})}
			</FlexBlock>
			<Image src={ForwardIcon} alt="Forward" width="8px" height="16px" />
		</FlexBlock>
	);
};

export default Pagination;
