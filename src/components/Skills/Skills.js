import React from "react";
import { motion } from "framer-motion";
import AppWrap from "../../common/AppWrap";
import MotionWrap from "../../common/MotionWrap";
import images from "../../assets";
import "./Skills.scss";

const skills = [
	{ name: "html", icon: images.html },
	{ name: "css", icon: images.css },
	{ name: "javascript", icon: images.javascript },
	{ name: "sass", icon: images.sass },
	{ name: "bootstrap", icon: images.bootstrap },
	{ name: "typescript", icon: images.typescript },
	{ name: "react", icon: images.react },
	{ name: "redux", icon: images.redux },
	{ name: "git", icon: images.git },
	{ name: "github", icon: images.github },
	{ name: "webpack", icon: images.webpack },
];
const Skills = () => {
	return (
		<div style={{ width: "-webkit-fill-available" }}>
			<h2 className="head-text">Skills & Education</h2>
			<div className="all-skills">
				<div className="my__skills">
					{skills.map((skill, index) => (
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: "tween" }}
							className="skill-item"
							key={skill.name + index}>
							<div>
								<img src={skill.icon} alt={skill.name} />
							</div>
							<h6 className="bold-text skillName">{skill.name}</h6>
						</motion.div>
					))}
				</div>
				<div className="education">
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5 }}
						className="edu">
						<div className="dot d-flex">
							<div className="period">
								<p>2016 - 2020</p>
							</div>
							<div className="faculty">
								<h3>Graduate Of The Faculty Of Computing And Information</h3>
								<p>Department Of Information System</p>
							</div>
						</div>
						<div className="dot d-flex mt-2">
							<div className="period">
								<p>2019 - 2021</p>
							</div>
							<div className="title">
								<h3>
									I Was Studied The Front-End Developer From Udemy and Youtube
								</h3>
							</div>
						</div>
						<div className="dot d-flex mt-2">
							<div className="period">
								<p>2023 - Now</p>
							</div>
							<div className="title">
								<h3>Frontend Developer at Pencil-Designs</h3>
								<p>Works as a Frontend Developer using ReactJs.</p>
							</div>
						</div>
						<div className="dot d-flex mt-2">
							<div className="period">
								<p>2023 - Now</p>
							</div>
							<div className="title">
								<h3>Freelancer</h3>
								<p>Designed 9+ Web applications using Bootstrap and React.</p>
								<p>Designed 2+ Web applications using Angular.</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default AppWrap(MotionWrap(Skills, "skills"), "skills");
