import React, { useState } from "react";
import { graphql } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import SEO from "../components/SEO";
import { ReactComponent as Logo } from "../assets/Logo.svg";

import Card from "../components/Card";
import Nav from "../components/Nav";

// ========= COMPONENTS =========

// a container to fill the window, wrap all contents, and center them
const Container = styled.div`
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-color: #7855da;
	color: #43d1e7;

	font-family: "Lobster";
	font-size: 2rem;
`;

// ========= MAIN =========
const Index = ({ data }) => {
	// get the product data from prisma
	const { edges: items } = data.allPrismicProduct;
	const [activeItem, setActiveItem] = useState({
		navItem: `SOUPS`,
		data: items.filter((item) => {
			return item.node.data.type === `SOUP`;
		}),
	});
	const {
		data: [cardData],
	} = activeItem;

	return (
		<div
			css={css`
				height: 896px;
				width: 414px;
			`}
		>
			{/* set the page metadata */}
			<SEO title="Welcome to the Challenge" />

			<Container>
				<div
					css={css`
						display: flex;
						flex-direction: column;
						margin-bottom: 1rem;
					`}
				>
					<Logo
						css={css`
							margin-left: 50px;
							color: #fff;
						`}
					/>

					<Card
						title={cardData.node.data.title.text}
						description={
							cardData.node.data.description.text
						}
						quantity={cardData.node.data.quantity.text}
						imageSrc={
							cardData.node.data.image.fixed.src
						}
					/>

					<Nav
						activeNavItem={activeItem.navItem}
						activeItemHandler={setActiveItem}
						items={items}
					/>
				</div>
			</Container>
		</div>
	);
};

export default Index;

// ========= QUERY =========
// use gatsby's graphql query to get required data
export const query = graphql`
	query {
		allPrismicProduct {
			edges {
				node {
					id
					data {
						description {
							text
						}
						image {
							fixed {
								src
							}
						}
						title {
							text
						}
						quantity {
							text
						}
						type
					}
				}
			}
		}
	}
`;
