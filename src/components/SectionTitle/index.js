import React from "react";

import { FlexBlock } from "uielements/Block";
import H1 from "uielements/Title";

export default function SectionTitle({ title, action }) {
	return (
		<FlexBlock margin="30px 0px">
			<H1>{title}</H1>
			{action}
		</FlexBlock>
	);
}
