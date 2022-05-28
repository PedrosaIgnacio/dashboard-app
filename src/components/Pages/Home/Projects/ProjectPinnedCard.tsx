import React from "react";
import "./ProjectPinnedCard.css";

interface IProject {
	project: string;
	members: string[];
	lastUpdated: string;
}
interface IData {
	data: IProject[];
}

export const ProjectPinnedCard = (data: IData) => {
	return (
		<div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 overflow-auto">
			{data.data.map((p, index) => {
				return (
					<div
						key={index}
						className="col-auto text-center px-3 py-2 shadow-md rounded-md bg-slate-700 border hover:bg-slate-600 cursor-pointer"
					>
						<a href="#!">
							<h5 className="col-auto text-sm font-medium flex-auto tracking-tight text-slate-50 ">
								{p.project.toUpperCase()}
							</h5>
						</a>
					</div>
				);
			})}
		</div>
	);
};
