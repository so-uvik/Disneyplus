import { FC } from "react";
import { localStorage } from "../pages";

interface ContinueWatchingProps {
  watchingNow: localStorage[];
}

const ContinueWatching: FC<ContinueWatchingProps> = ({ watchingNow }) => {
  console.log(watchingNow);

  return (
    <div>
      {watchingNow.map((element, index) => (
        <h2 key={index}>
          {element.key} and watching season{element.season} episode{" "}
          {element.episode}
        </h2>
      ))}
    </div>
  );
};

export default ContinueWatching;
