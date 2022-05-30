import React, { useEffect, useState } from "react";
import axios from "axios";

export interface IRepo {
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
}

interface IUseGetRepos {
  repos: IRepo[];
}

export const useGetRepos = (page: number): IUseGetRepos => {
  const [repos, setRepos] = useState<IRepo[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/PedrosaIgnacio/repos?sort=pushed;per_page=5;page=${page}`
      )
      .then(({ data }) => setRepos(data));
  }, []);

  return { repos };
};
