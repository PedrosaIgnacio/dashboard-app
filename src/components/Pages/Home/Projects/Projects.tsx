import React from "react";
interface IProject {
	project: string;
	members: string[];
	lastUpdated: string;
}

interface IData {
	data: IProject[];
}
export const Projects = (data: IData) => {
	return (
		<div className="flex flex-col w-full">
			<div className="overflow-x-auto ">
				<div className="py-2 inline-block min-w-full">
					<div className="overflow-hidden">
						<table className="min-w-full">
							<thead>
								<tr>
									<th
										scope="col"
										className="text-xs font-bold text-gray-400  py-4 text-left"
									>
										PROJECT
									</th>
									<th
										scope="col"
										className="text-xs font-bold text-gray-400 py-4 text-left"
									>
										MEMBERS
									</th>
									<th
										scope="col"
										className="text-xs font-bold text-gray-400 py-4 text-left"
									>
										LAST UPDATED
									</th>
								</tr>
							</thead>
							<tbody>
								{data.data.map((p, index) => {
									return (
										<tr key={index}>
											<td className="text-sm text-gray-900 font-medium py-4 whitespace-nowrap">
												{p.project}
											</td>
											<td className="text-sm text-gray-900 font-medium py-4 whitespace-nowrap">
												{p.members.map((m, index) => {
													return (
														m + `${index === p.members.length - 1 ? "" : ", "}`
													);
												})}
											</td>
											<td className="text-sm text-gray-900 font-medium py-4 whitespace-nowrap">
												{p.lastUpdated}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
