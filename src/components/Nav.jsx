import React from "react";
import { css } from "@emotion/core";

const activeNavItemStyle = {
	backgroundColor: `#DA55BD`,
	borderRadius: `200px`,
	padding: `10px`,
};
const inactiveNavItemStyle = { padding: `10px` };

const Nav = ({ activeNavItem, items, activeItemHandler }) => {
	return (
		<div
			css={css`
				display: flex;
				justify-content: space-between;
				margin-top: 2rem;
				padding: 0 50px;
				list-style-type: none;
				font-family: Jura;
				font-weight: 700;
				font-size: calc(1.1rem * 0.625);
				color: #fff;
			`}
		>
			<button
				type="button"
				css={
					activeNavItem === `SOUPS`
						? activeNavItemStyle
						: inactiveNavItemStyle
				}
				onClick={() =>
					activeItemHandler({
						navItem: `SOUPS`,
						data: items.filter((item) => {
							return item.node.data.type === `SOUP`;
						}),
					})
				}
			>
				SOUPS
			</button>
			<button
				type="button"
				css={
					activeNavItem === `DESSERTS`
						? activeNavItemStyle
						: inactiveNavItemStyle
				}
				onClick={() =>
					activeItemHandler({
						navItem: `DESSERTS`,
						data: items.filter((item) => {
							return (
								item.node.data.type === `DESSERT`
							);
						}),
					})
				}
			>
				DESSERTS
			</button>
			<button
				type="button"
				css={
					activeNavItem === `PET FOOD`
						? activeNavItemStyle
						: inactiveNavItemStyle
				}
				onClick={() =>
					activeItemHandler({
						navItem: `PET FOOD`,
						data: items.filter((item) => {
							return (
								item.node.data.type === `PET FOOD`
							);
						}),
					})
				}
			>
				PET FOOD
			</button>
		</div>
	);
};

export default Nav;
