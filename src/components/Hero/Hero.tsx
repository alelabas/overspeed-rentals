import React from "react"
import "Hero.css"
import { FormattedMessage } from "react-intl"

export function Hero() {
	return (
		<section className="hero-section">
			<div className="hero-contact">
				<h1>Overspeed Rentals</h1>
				<p>
					<FormattedMessage
						id="app.hero.paragraph"
						defaultMessage="Drive Miami Your Way"
					/>
				</p>
				<a
					href="https://wa.me/+17868267016"
					target="_blank"
					rel="noreferrer"
					className="modal-button hero-button"
				>
					<FormattedMessage
						id="app.hero.button"
						defaultMessage="Contact Us"
					/>
				</a>
			</div>
		</section>
	)
}
