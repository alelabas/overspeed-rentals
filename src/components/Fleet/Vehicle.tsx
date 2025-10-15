import React from "react"
import { IoMdPeople, IoMdClose } from "react-icons/io"
import { MdLuggage, MdOutlineInvertColors } from "react-icons/md"
import { IconContext } from "react-icons/lib"
import { LiaSuitcaseSolid } from "react-icons/lia"
import { LuFuel } from "react-icons/lu"
import { Cars } from "../../types/types"
import { useRef } from "react"
import { PiApplePodcastsLogo, PiEngine } from "react-icons/pi"
import { TbAutomaticGearbox } from "react-icons/tb"
import { Gallery } from "./Gallery"
import { FormattedMessage } from "react-intl"

export default function Vehicle({ vehicle }: { vehicle: Cars }) {
	const refDialog = useRef<HTMLDialogElement>(null)

	const handleClick = () => {
		refDialog.current?.showModal()
	}

	return (
		<div key={vehicle.id} className="fleet-card">
			<img src={vehicle.images[0]} alt={vehicle.model} />
			<h3>
				{vehicle.make} {vehicle.model}
			</h3>
			<div className="vehicle-specifications">
				<IconContext.Provider
					value={{ size: "20px", color: "#ff3c3c" }}
				>
					<span className="vehicle-specs">
						<IoMdPeople />
						<p>{vehicle.passengers}</p>
					</span>
					<span className="vehicle-specs">
						<MdLuggage />
						<p>{vehicle.luggageCapacity}</p>
					</span>
					<span className="vehicle-specs">
						<LiaSuitcaseSolid />
						<p>{vehicle.carryOnCapacity}</p>
					</span>
					<span className="vehicle-specs">
						<LuFuel />
						<p>{vehicle.mpg}</p>
					</span>
				</IconContext.Provider>
			</div>
			<p>
				<FormattedMessage
					id="app.fleet.vehicle.from"
					defaultMessage="From"
				/>
				<span className="vehicle-price">
					${vehicle.price}/
					<FormattedMessage
						id="app.fleet.vehicle.day"
						defaultMessage="day"
					/>
				</span>{" "}
				- <span className="discount-price">${vehicle.price + 40}</span>
			</p>
			<div className="button-view-more">
				<button onClick={handleClick}>
					<FormattedMessage
						id="app.fleet.button"
						defaultMessage="View More"
					/>
				</button>
			</div>

			<dialog ref={refDialog} className="dialog-modal" closedby="any">
				<div className="dialog-content">
					<div className="close-menu">
						<form method="dialog">
							<button className="close-button">
								<IoMdClose color={"black"} size={"25px"} />
							</button>
						</form>
					</div>

					<div className="main-content">
						<div className="gallery-container">
							<Gallery
								vehicleImages={vehicle.images}
								modalRef={refDialog}
							/>
						</div>
						<div className="data-vehicle-wrapper">
							<h3>
								{vehicle.make} {vehicle.model} {vehicle.year}
							</h3>
							<h4>
								<IoMdPeople />
								<FormattedMessage
									id="app.fleet.vehicle.passengers"
									defaultMessage="Passengers"
								/>{" "}
								: {vehicle.passengers}
							</h4>
							<h4>
								<PiApplePodcastsLogo /> Apple Car Play / Android
								Auto
							</h4>
							<h4>
								<PiEngine />
								<FormattedMessage
									id="app.fleet.vehicle.engine"
									defaultMessage="Engine"
								/>
								: {vehicle.engine}
							</h4>
							<h4>
								<TbAutomaticGearbox />
								<FormattedMessage
									id="app.fleet.vehicle.transmission"
									defaultMessage="Transmission"
								/>
							</h4>
							<a
								href="https://wa.me/+17868267016"
								target="_blank"
								rel="noreferrer"
								className="modal-button"
							>
								<FormattedMessage
									id="app.fleet.vehicle.contact"
									defaultMessage="Contact Us!"
								/>
							</a>
						</div>
					</div>
				</div>
			</dialog>
		</div>
	)
}
