import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const EpisodeDisplay = ({ episode }: any) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w780/";
  const router = useRouter();
  return (
    <Wrap
      onClick={() =>
        localStorage.setItem("episode", `${episode.episode_number}`)
      }
    >
      <img
        src={`${BASE_URL}${episode.still_path}`}
        // || `${BASE_URL}${episode.poster_path}`
      />
      <h4>{`${episode.episode_number}. ${episode.name}`}</h4>
    </Wrap>
  );
};

export default EpisodeDisplay;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  /* overflow: hidden; */
  aspect-ratio: 16/12;

  img {
    border: 3px solid rgba(249, 249, 249, 0.1);
    /* box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;*/
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    width: 100%;
    height: 80%;
    border-radius: 10px;
    object-fit: cover;
  }

  h4 {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #f1f0f0eb;
    font-family: Helvetica, sans-serif;
  }

  img:hover {
    /* box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px; */
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export { Wrap };
