import { getSession, useSession } from "next-auth/react";
import Header from "../../../components/Header";
import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import Head from "next/head";
import styled from "styled-components";

const Play = ({ result}:any) => {
  const {data: session, status} = useSession()
  const router = useRouter();
  
  
  
  
  
  /* useEffect(()=>{
    if(!session)
    {
      router.push("/")
    }
  }) */
  return (
    <>
    <Head>
        <title>{`Disney+ | ${result.title || result.original_name}`}</title>
        <meta name="description" content={result.overview} />
        <link rel="icon" href="/favicon.svg" />
    </Head>
    <Header/>
    <Playing>
    {<iframe id="iframe" src={`https://www.2embed.to/embed/tmdb/movie?id=${result.id}&autoplay=1`} width="100%" height="100%" frameBorder="0" allowFullScreen allow="autoplay"></iframe>}
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
    </Buttons>  */}
    </>  
  )
} 

export default Play

const Playing = styled.div`
  /* margin: 30px 0px;
  height: 100vh;
  padding: 50px; */
  background-color: #00000037;
  
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; 
  margin-bottom: 50px;

  iframe
  {
    /* position: relative;
    margin: 0 auto; */
    padding: 50px; 
    inset: 0px;

    position: absolute;
    /* top: 0;
    left: 0;
    bottom: 0;
    right: 0; */
    
    /* margin: 0 auto; */
    width: 100%;
    height: 100%;
  }
`

const Buttons = styled.button`
  border-radius: 20px;
  border: 2px solid #9caec0;
  padding: 10px 15px;
  margin: 0 10px;
`


export async function getServerSideProps(context:any)
{
    const session = await getSession(context);
    const {id, poster_path }= context.query;
    const requestShow = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
    ).then((response) => response.json());
    return {
    props: {
      session,
      result: requestShow 
    },
  };
}