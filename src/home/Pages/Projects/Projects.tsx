import React from "react";
import { IRepo } from "../../hooks/useGetRepos";

interface IProjectsProps {
  repos: IRepo[];
}

export const Projects = ({ repos }: IProjectsProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-auto">
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
                    OWNER
                  </th>
                  <th
                    scope="col"
                    className="text-xs font-bold text-gray-400 py-4 text-left"
                  >
                    LINK
                  </th>
                </tr>
              </thead>
              <tbody>
                {repos.map((r, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-sm text-gray-900 font-medium py-4 whitespace-nowrap">
                        {r.name}
                      </td>
                      <td className="text-sm text-gray-900 font-medium py-4 whitespace-nowrap">
                        {r.owner.login}
                      </td>
                      <td className="text-sm text-gray-900 font-medium py-4 whitespace-nowrap">
                        {r.html_url}
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
