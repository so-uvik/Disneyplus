import { getSession, useSession } from "next-auth/react";
import Header from "../../../components/Header";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styled from "styled-components";
import EpisodeDisplay from "../../../components/EpisodeDisplay";
import { Wrap } from "../../../components/EpisodeDisplay";

const Play = ({ result }: any) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [season_number, setSeason_Number] = useState(1); // stores the current season number
  const [episode_number, setEpisode_Number] = useState(1); // stores the current episode number to display proper video that is playing
  const [seasons, setSeasons] = useState<any>([]); // stores how many seasons are there of a show to help display them in dropdown
  const [episodes, setEpisodes] = useState<any>([]); // stores all the episode name of the current season
  const BASE_URL = "https://image.tmdb.org/t/p/w780/";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${result.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ) //to fetch the no. of seasons of a show
      .then((res) => res.json())
      .then((data) => {
        const FilteredData = data.seasons.filter(
          (element: any) => element.season_number > 0
        );
        setSeasons(FilteredData);
      });
  }, []);

  /*useEffect(() =>{
    const fetchData = async ()=>{     //to fetch the episodes when the season is changed from the dropdown
        const response = await fetch(`https://api.themoviedb.org/3/tv/${result.id}/season/${season_number}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
        const newData = await response.json();
        console.log(newData);
        setSeason_Number(newData.season_number); //stores current season number
        console.log(season_number);
        
        // newData.episodes.map((episode:any)=> setEpisodes(episode.name));   //contains all the episode names
        setEpisodes(newData.episodes)
        console.log(episodes);
        // setOverview(newData.overview); //contains all the overview of all the episodes of the season 
        // console.log(overview);
        // setStillPath(newData.still_path); //contains all the images of individual episodes of the season
        // console.log(stillpath);
        return () => {
          console.log('CLEANUP');
          //setEpisodes([])
          setOverview([])
          setStillPath([])
        };
      };
      fetchData();
    }, [season_number])*/

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${result.id}/season/${season_number}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setSeason_Number(data.season_number);
        setEpisodes(data.episodes);
      });
    // return () => {
    //   console.log('CLEANUP');
    // };
  }, [season_number]); //fetches new season episodes when user changes it.

  const ChangeHandler = (event: any) => {
    //setSeason_Number(event.target.value.substr(6));
    setSeason_Number(event.target.value);
  };

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session]);
  return (
    <>
      <Head>
        <title>{`Disney+ | ${result.title || result.name}`}</title>
        <meta name="description" content={result.overview} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Playing>
        <iframe
          id="iframe"
          src={`https://www.2embed.to/embed/tmdb/tv?id=${result.id}&s=${season_number}&e=${episode_number}`}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
          className="relative mx-auto my-0"
        ></iframe>
      </Playing>

      {/* <Buttons>
      <span>
      <input type={"checkbox"} id="Autoplay"/>
      <label htmlFor="Autoplay">Autoplay</label>
      </span>
    </Buttons>
    <Buttons>
      <span>
      <input type={"checkbox"} id="Autonext"/>
      <label htmlFor="Autonext">Autonext</label>
      </span>
    </Buttons> 
    <Buttons>
      <span>
      <input type={"checkbox"} id="Like"/>
      <label htmlFor="Like">Like</label>
      </span>
    </Buttons> 
    <Buttons>
      <span>
      <input type={"checkbox"} id="Add to Watchlist"/>
      <label htmlFor="Add to Watchlist">Add to Watchlist</label>
      </span>
    </Buttons> */}
      <Container>
        <select
          value={seasons.name}
          onChange={ChangeHandler}
          className="dropdown"
        >
          {seasons.map((season: any) => (
            <option
              value={season.season_number}    //changed this to season.season_number from season.name to solve anime not playing issue.
              key={season.id}
            >{`Season ${season.season_number}`}</option>
          ))}
        </select>
        <Content>
          {episodes.map((data: any, index: number) => (
            <Wrap
              onClick={() => setEpisode_Number(data.episode_number)}
              key={index}
            >
              <img
                src={`${BASE_URL}${data.still_path}`}
                // || `${BASE_URL}${episode.poster_path}`
              />
              <h4>{`${data.episode_number}. ${data.name}`}</h4>
            </Wrap>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Play;

const Playing = styled.div`
  background-color: #00000037;

  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  margin-bottom: 50px;

  iframe {
    padding: 50px;
    inset: 0px;

    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const Buttons = styled.button`
  border-radius: 20px;
  border: 2px solid #9caec0;
  padding: 10px 15px;
  margin: 0 10px;
`;

const Container = styled.div`
  color: black;
  margin: 0 50px;

  .dropdown {
    background: #2a2f3b;
    color: #fff;
    display: flex;
    justify-content: space-between;
    outline: none;
    align-items: center;
    border: 2px solid #2a2f3b;
    border-radius: 0.5em;
    padding: 0.5em 0.5em;
    height: 50px;
    overflow: scroll;
    cursor: pointer;
  }
`;

const Content = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  &::-webkit-scrollbar {
    display: none;
  }

  margin-top: 30px;
  margin-bottom: 30px;
  display: grid;
  grid-gap: 25px;
  padding: 30px 8px 26px;
  margin: 0 -8px;

  grid-auto-flow: column;
  grid-auto-columns: minmax(15%, 55%);
  overflow-x: auto;

  h4 {
    font-family: "Poppins", sans-serif !important;
  }

  @media only screen and (max-width: 768px) {
    grid-auto-columns: 35%;
  }

  @media (max-width: 375px) {
    grid-auto-columns: 55%;
  }
`;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  const { id, poster_path } = context.query;
  const requestShow = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((response) => response.json());
  return {
    props: {
      session,
      result: requestShow,
    },
  };
}
