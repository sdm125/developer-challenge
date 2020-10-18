import React from "react";
import { css } from "@emotion/core";

const Card = ({ imageSrc, title, description, quantity }) => {
	return (
		<div
			css={css`
				position: relative;
				width: 330px;
				height: 600px;
				background: #fff;
				box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.25);
				border-radius: 50px;
			`}
		>
			<div
				css={css`
					display: flex;
					justify-content: center;
					position: relative;
					border-top-left-radius: 50px;
					border-top-right-radius: 50px;
					height: 230px;
					width: 100%;
					overflow: hidden;
				`}
			>
				<img
					alt=""
					css={css`
						position: absolute;
						bottom: 0;
					`}
					src={imageSrc}
				/>
			</div>

			<div
				css={css`
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					height: 315px;
					padding: 30px;
				`}
			>
				<h1
					css={css`
						font-size: calc(3.6rem * 0.625);
						color: #000;
					`}
				>
					{title}
				</h1>

				<p
					css={css`
						font-family: Jura;
						font-size: calc(1.4rem * 0.625);
						color: #000;
					`}
				>
					{description}
				</p>

				<button
					type="button"
					css={css`
						width: 270px;
						height: 58px;
						bottom: 30px;
						text-transform: uppercase;
						font-family: Jura;
						font-size: 24px;
						font-weight: 700;
						line-height: 28.39px;
						color: #fff;
						background: #da55bd;
						border-radius: 20px;
						border: none;
					`}
				>
					ORDER {quantity}
				</button>
			</div>
		</div>
	);
};

export default Card;
