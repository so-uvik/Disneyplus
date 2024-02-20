import { FC, useEffect, useState } from "react";
import { localStorage } from "../pages";
import { Container, Content } from "./MoviesCollection";
import ContinueWatchingThumbnail from "./ContinueWatchingThumbnail";
import { nanoid } from "nanoid";

interface ContinueWatchingProps {
  watchingNow: localStorage[];
}

interface ContinueWatchingThumbnailProps {
  name: string;
  image: string;
}

const ContinueWatching: FC<ContinueWatchingProps> = ({ watchingNow }) => {
  const [continueWatchingThumbnails, setContinueWatchingThumbnails] = useState<
    ContinueWatchingThumbnailProps[]
  >([]);
  useEffect(() => {
    const localThumbnailImages: string[] = [];
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
      },
    };

    const fetchThumbnailImages = async () => {
      const localThumbnailImages: ContinueWatchingThumbnailProps[] = [];

      // Create an array of promises for the fetch requests
      const fetchPromises = watchingNow.map(async (show) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${show.key}/season/${show.season}/episode/${show.episode}?append_to_response=images&language=en-US`, //Using TMDBApi, TV EPISODES-> Details+append to response->images
          options
        );
        /*const response = await fetch(
          `https://api.themoviedb.org/3/tv/${show.key}/season/${show.season}/episode/${show.episode}/images`,
          options
        );*/
        const newData = await response.json();
        console.log("newData ContinueWatching.tsx", newData);
        // localThumbnailImages.push(newData.stills[0]?.file_path);
        localThumbnailImages.push({
          name: newData.name,
          image: newData?.still_path,
        });
      });

      // Wait for all promises to resolve
      await Promise.all(fetchPromises);

      // Once all promises are resolved, update the state
      setContinueWatchingThumbnails(localThumbnailImages);
    };

    fetchThumbnailImages();

    /* watchingNow.map((show, index) => {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${show.key}/season/${show.season}/episode/${show.episode}/images?language=en`,
          options
        );
        const newData = await response.json();
        localThumbnailImages.push(newData.stills[0].file_path);
      };
      fetchData();
    });
    setContinueWatchingThumbnails(localThumbnailImages); */
  }, [watchingNow]);
  console.log(continueWatchingThumbnails);

  return (
    <Container>
      <h3 className="font-semibold text-2xl ">Continue Watching</h3>
      <Content>
        {watchingNow.map((element, index = 0) =>
          continueWatchingThumbnails[index] ? (
            <ContinueWatchingThumbnail
              name={continueWatchingThumbnails[index].name}
              key={element.key}
              id={element.key}
              image={continueWatchingThumbnails[index].image}
              season={element.season}
              episode={element.episode}
            ></ContinueWatchingThumbnail>
          ) : null
        )}
      </Content>
    </Container>
  );
};

export default ContinueWatching;
