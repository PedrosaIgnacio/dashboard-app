import React, { useState } from "react";
import { ProjectPinnedCard } from "./Projects/ProjectPinnedCard";
import { Projects } from "./Projects/Projects";
import "./Home.css";
import { useGetRepos } from "../hooks/useGetRepos";
import { Layout } from "../components/Layout/Layout";
import { Pagination } from "../components/Pagination/Pagination";

export const Home = () => {
  const [page, setPage] = useState<number>(1);
  const { repos } = useGetRepos(page);

  return (
    <Layout title="Home">
      <span className="text-gray-400 text-xs font-bold">
        LAST PUSHED PROJECTS
      </span>

      <hr className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {repos.slice(0, 4).map((r) => {
          return <ProjectPinnedCard repo={r} />;
        })}
      </div>
      <hr className="my-4" />

      <span className="text-gray-400 text-xs font-bold">PROJECTS</span>

      <hr className="my-4" />
      <Projects repos={repos} />

      <hr className="my-4" />
      <Pagination />
    </Layout>
  );
};
