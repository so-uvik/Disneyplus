import { FC, useCallback, useState } from "react";
import { Wrap } from "./MovieThumbnail";
import { useRouter } from "next/router";
import styled from "styled-components";
import { XIcon } from "lucide-react";

interface ContinueWatchingThumbnailProps {
  name: string | undefined;
  image: string | undefined;
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

  // const [, setupdateState] = useState({});

  // const forceUpdate = useCallback(() => setupdateState({}), []);
  return (
    <Wrapper
      key={id}
      onClick={() =>
        router.push(`/show/${id}/play?season=${season}&episode=${episode}`)
      }
    >
      <div className="absolute bottom-6 left-3 z-40" id="thumbnail">
        <h3 className="text-white scroll-m-20 lg:text-xl text-sm font-semibold tracking-tight text-ellipsis whitespace-nowrap overflow-hidden">
          {name}
        </h3>
        <h3 className="text-white text-sm ">{`Season ${season} Ep ${episode}`}</h3>
      </div>
      <XIcon
        className="invisible absolute z-40 left-2 top-1 bg-black bg-opacity-10 hover:bg-opacity-60 rounded-full p-1"
        id="xsign"
        onClick={(e) => {
          localStorage.removeItem(`tvshow_${id}`);
          // forceUpdate();
          return e.stopPropagation();
        }}
      />
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

    #xsign {
      visibility: visible;
    }
  }

  &:hover #thumbnail {
    visibility: visible;
  }

  #thumbnail {
    visibility: hidden;
  }

  &:hover > img {
    opacity: 0.35;
  }

  isolation: isolate;
`;
