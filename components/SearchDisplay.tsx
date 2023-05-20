import React from 'react'
import styled from 'styled-components'
import { useRouter} from 'next/router'
const SearchDisplay = (props: any) => {
    const IMG_API = "https://image.tmdb.org/t/p/w500"
    const router = useRouter();


    return (
        <Container>
            <Wrap>
                {props.movie.media_type === "movie" ? 
                <img src={`${IMG_API}/${props.movie.poster_path}`} alt={props.movie.title || props.movie.name} onClick={()=>router.push(`/movie/${props.movie.id}`)}/> :
                <img src={`${IMG_API}/${props.movie.poster_path}`} alt={props.movie.title || props.movie.name} onClick={()=>router.push(`/show/${props.movie.id}`)}/>}
            </Wrap>
        </Container>
    )
}

export default SearchDisplay

const Container = styled.div`
    padding: 25px 0;
`

const Wrap = styled.div`
    
    border-radius: 10px;
    width: 300px;
    height: 441px;
   
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);
    
    img
    {
        max-width: 100%;
        object-fit: cover;
    }
    

    
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

    }
`;