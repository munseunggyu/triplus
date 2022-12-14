import React from "react";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import Vertical from "../../components/Header/Vertical";
import Navbar from "../../components/Navbar";

export default function ChatList() {
	return (
		<>
			<Header>
				<Prev />
				<Vertical />
			</Header>
			<Navbar />
		</>
	);
}
