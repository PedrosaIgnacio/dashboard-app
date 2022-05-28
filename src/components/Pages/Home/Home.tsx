import React from "react";
import { ProjectPinnedCard } from "./Projects/ProjectPinnedCard";
import { Projects } from "./Projects/Projects";
import "./Home.css";

interface IProject {
	project: string;
	members: string[];
	lastUpdated: string;
}

export const Home = () => {
	const projectData: IProject[] = [
		{
			project: "Dashboard App",
			members: ["Nacho", "Ariel"],
			lastUpdated: "20-05-2022",
		},
		{
			project: "Heroes App",
			members: ["Nacho"],
			lastUpdated: "20-05-2022",
		},
		{
			project: "Lic. Ramirez Portfolio",
			members: ["Nacho"],
			lastUpdated: "20-05-2022",
		},
	];
	return (
		<div className="w-10/12 flex justify-center font-sans">
			<div className="w-11/12 ">
				<div className="mt-8 w-full">
					<span className="font-bold text-slate-700  w-full">HOME</span>
				</div>
				<hr className="w-full my-4" />

				<div className="w-full hidd">
					<span className="text-gray-400 text-xs font-bold">
						PINNED PROJECTS
					</span>
				</div>

				<hr className="w-full my-4" />
				<div className="overflow-x-hidden hidd">
					<ProjectPinnedCard data={projectData} />
				</div>

				<hr className="w-full my-4" />

				<div className="w-full">
					<span className="text-gray-400 text-xs font-bold">PROJECTS</span>
				</div>

				<hr className="w-full my-4" />
				<div className="w-full">
					<Projects data={projectData} />
				</div>

				<hr className="w-full my-4" />
			</div>
		</div>
	);
};
