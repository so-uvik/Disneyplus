import { useRouter } from "next/router";
import styled from "styled-components";
function MovieThumbnail({ result }:any) {
  const BASE_URL = "https://image.tmdb.org/t/p/w780/";
  const router = useRouter();
  
    
    
  
  
  return (
    <Wrap
       
      onClick={() => router.push(`/movie/${result.id}`)}
    >
      <img
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}`} 
          // || `${BASE_URL}${result.poster_path}`
      />
    </Wrap>
  );
}

export default MovieThumbnail;

const Wrap= styled.div`

    border-radius: 10px;
    cursor: pointer;
    
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img
    {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover
    {
        box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`




