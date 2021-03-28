import { FaPlus } from "react-icons/fa";

import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.li`
	margin: 1rem 0.5rem;

	> div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-width: 27rem;
		width: 27rem;
		max-width: 27rem;
		min-height: 7rem;
		max-height: 100%;
		background: ${Colors["background-column"]};
		border-radius: 7px;
		padding: 1rem;

		> div {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 3.5rem;
			padding-bottom: 1rem;

			> span {
				font-size: 2.4rem;
				font-weight: bold;
			}
		}
	}
`;

export const Plus = styled(FaPlus)`
	width: 2rem;
	height: 2rem;
	cursor: pointer;
`;