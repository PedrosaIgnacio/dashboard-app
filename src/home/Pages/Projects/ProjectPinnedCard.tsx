import React from "react";
import { IRepo } from "../../hooks/useGetRepos";
import "./ProjectPinnedCard.css";

interface IProjectPinnedCard {
  repo: IRepo;
}
export const ProjectPinnedCard = ({ repo }: IProjectPinnedCard) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-sm border border-gray-100">
      <h2 className="text-slate-700 font-semibold text-2xl">{repo.name}</h2>
      <a
        href={repo.html_url}
        className="text-xs italic underline"
        rel="noopener noreferrer"
        target="_blank"
      >
        {repo.html_url}
      </a>

      <hr className="my-4" />
      <div className="flex items-center">
        <img
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
          className="w-12 h-12 rounded-full"
        />
      </div>
    </div>
  );
};
