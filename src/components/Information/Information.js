import React from "react";
import AppWrap from "../../common/AppWrap";
import MotionWrap from "../../common/MotionWrap";
import "./Information.scss";

const Information = () => {
	return (
		<div>
			<h2 className="head-text">
				Personal <span>Information</span>
			</h2>

			<div className="information">
				<h2 className="welcome">
					Hello, i'm <span>Muhammed Osama</span>
				</h2>
				<h3 className="descriptoin">
					"Front-End Developer with 3+ years of experience in designing,
					building, and maintaining responsive, user-focused web applications.
					Skilled in React.js, JavaScript, Redux, and RESTful API integration to
					deliver scalable and intuitive solutions. Proficient in performance
					optimization, state management, and responsive design to ensure
					seamless user experiences across all devices. Passionate about
					continuous learning and leveraging emerging technologies to build
					high-quality, future-ready applications"
				</h3>
				<div className="line" />
				<div className="personal-information">
					<h4 className="info-title">personal information</h4>

					<div className="info">
						<div className="full-name">
							<h5>Full Name:</h5>
							<p>Muhammed Osama Farouq Nasser</p>
						</div>
						<div className="address">
							<h5>address:</h5>
							<p>Giza - Cairo</p>
						</div>
						<div className="e-mail">
							<h5>e-mail:</h5>
							<p>muhammed.o.nasser@gmail.com</p>
						</div>
						<div className="phone">
							<h5>phone:</h5>
							<p>01009170794</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppWrap(
	MotionWrap(Information, "information"),
	"information",
	"whitebg"
);
