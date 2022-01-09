import styled from "styled-components";

import Block from "uielements/Block";

const Grid = styled(Block)`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 30px;
`;

export default Grid;
