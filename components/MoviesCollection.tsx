import MovieThumbnail from "./MovieThumbnail";
import styled from "styled-components";
import ShowThumbnail from "./ShowThumbnail";
const MoviesCollection = (props: any) => {
  return (
    <Container>
      <h3 className="font-semibold text-2xl ">{props.title}</h3>
      <Content>
        {props.results.map(
          (result: any) =>
            result.backdrop_path &&
            (result.media_type == "tv" ? (
              <ShowThumbnail key={result.id} result={result} />
            ) : (
              <MovieThumbnail key={result.id} result={result} />
            ))
        )}
      </Content>
    </Container>
  );
};
export default MoviesCollection;

const Container = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Content = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  padding: 30px 8px 26px;
  margin: 0 -8px;

  grid-auto-flow: column;
  grid-auto-columns: 18.9%;
  overflow-x: auto;

  @media only screen and (max-width: 768px) {
    grid-auto-columns: 40%;
  }
`;
