import { FC, useEffect, useState } from "react";
import { localStorage } from "../pages";
import { Container, Content } from "./MoviesCollection";
import ContinueWatchingThumbnail from "./ContinueWatchingThumbnail";

interface ContinueWatchingProps {
  watchingNow: localStorage[];
}

interface ContinueWatchingThumbnailProps {
  name: string | undefined;
  image: string | undefined;
  key: number;
  episode: number;
  season: number;
}

const ContinueWatching: FC<ContinueWatchingProps> = ({ watchingNow }) => {
  const [continueWatching, setContinueWatching] = useState<
    ContinueWatchingThumbnailProps[]
  >([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
      },
    };
    const fetchAndUpdateData = async () => {
      const enrichedWatchingNow = await Promise.all(
        watchingNow.map(async (show) => {
          try {
            const response = await fetch(
              `https://api.themoviedb.org/3/tv/${show.key}/season/${show.season}/episode/${show.episode}?append_to_response=images&language=en-US`,
              options
            ); // Replace with your API endpoint
            const data = await response.json();
            const mappedData: ContinueWatchingThumbnailProps = {
              ...show,
              image: data.still_path,
              name: data.name,
            };
            return mappedData;
          } catch (error) {
            // Handle errors appropriately
            console.error(error);
            const FailedmappedData: ContinueWatchingThumbnailProps = {
              ...show,
              image: undefined,
              name: undefined,
            };
            return FailedmappedData; // Return original item if fetch fails
          }
        })
      );
      setContinueWatching(enrichedWatchingNow);
    };

    fetchAndUpdateData();
  }, [watchingNow]);

  return (
    <Container>
      <h3 className="font-semibold text-2xl ">Continue Watching</h3>
      <Content>
        {continueWatching.map((element, index = 0) => (
          <ContinueWatchingThumbnail
            name={element.name}
            key={element.key}
            id={element.key}
            image={element.image}
            season={element.season}
            episode={element.episode}
          ></ContinueWatchingThumbnail>
        ))}
      </Content>
    </Container>
  );
};

export default ContinueWatching;
