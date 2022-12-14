import React from "react";
import styled from "styled-components";

const PostModalSection = styled.section`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
	width: 100%;
	height: 30px;
	border: 1px solid black;
	z-index: 100;
`;

export default function PostModal() {
	return (
		<>
			<PostModalSection>fff</PostModalSection>
		</>
	);
}
