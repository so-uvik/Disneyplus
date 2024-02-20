import { FC } from "react";
import { Wrap } from "./EpisodeDisplay";
import { useRouter } from "next/router";
import styled from "styled-components";

interface ContinueWatchingThumbnailProps {
  name: string;
  image: string;
  id: number;
  season: number;
  episode: number;
}

const ContinueWatchingThumbnail: FC<ContinueWatchingThumbnailProps> = ({
  episode,
  id,
  image,
  season,
  name,
}) => {
  const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/w780/";
  return (
    <Wrapper
      key={id}
      onClick={() =>
        router.push(`/show/${id}/play?season=${season}&episode=${episode}`)
      }
    >
      <div className="absolute visible mt-[7%] ml-3 z-40" id="thumbnail">
        <h3 className="text-white text-xl">{name}</h3>
        <h3 className="text-white text-sm ">{`Season ${season} Ep ${episode}`}</h3>
      </div>
      <img
        src={`${BASE_URL}${image}`}
        //`${BASE_URL}${result.poster_path}`}
      />
    </Wrapper>
  );
};

export default ContinueWatchingThumbnail;

const Wrapper = styled(Wrap)`
  &:hover {
    //opacity: 0.35;
    transition: all 250ms ease-in-out;
  }

  &:hover #thumbnail {
    visibility: visible;
  }

  #thumbnail {
    visibility: hidden;
    pointer-events: none;
  }

  &:hover > img {
    opacity: 0.35;
  }

  isolation: isolate;
`;
