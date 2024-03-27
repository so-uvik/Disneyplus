import styled from "styled-components";
import Header from "../components/Header";
import SearchDisplay from "../components/SearchDisplay";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Movies } from "../models";
import { useRouter } from "next/router";
const Search = () => {
  const router = useRouter();
  const { query } = router;
  const queryString = query.result?.toString();
  const [enteredSearch, setEnteredSearch] = useState(queryString || "");
  const [movies, setMovies] = useState<Movies[]>([]);

  const SearchChangeHandler = (event: any) => {
    setEnteredSearch(event.target.value);
  };

  useEffect(() => {
    router.replace(`?result=${enteredSearch}`);
    const identifier = setTimeout(() => {
      if (enteredSearch.trim().length > 0)
        fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${enteredSearch}&include_adult=false`
        )
          .then((res) => res.json())
          .then((data) => {
            const FilteredData = data.results.filter(
              (element: Movies) =>
                element.media_type != "person" && element.poster_path != null
            );
            setMovies(FilteredData);
          });
    }, 800);
    if (enteredSearch.trim().length == 0) setMovies([]);
    return () => {
      clearTimeout(identifier);
    };
  }, [enteredSearch]);

  return (
    <Main>
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <SearchBox>
        <input
          value={enteredSearch}
          type="text"
          placeholder="Search for movie or a tv-show"
          onChange={SearchChangeHandler}
        />
      </SearchBox>
      {enteredSearch && <h1>Results for: {enteredSearch}</h1>}

      <Wrapper>
        {movies.length > 0 &&
          movies.map((IndividualMovie) => (
            <SearchDisplay
              key={IndividualMovie.id}
              movie={IndividualMovie}
              media={IndividualMovie.media_type}
            />
          ))}
      </Wrapper>
    </Main>
  );
};

export default Search;

const Main = styled.div`
  h1 {
    color: white;
    font-size: 25px;
    font-weight: bold;
    padding-left: 15px;
    padding-top: 25px;
  }
`;

const SearchBox = styled.div`
  color: white;
  font-size: 25px;
  font-weight: bold;

  input {
    height: 105px;
    width: 100vw;
    background-color: grey;
    background: linear-gradient(
      180deg,
      rgba(51, 53, 61, 1) 0%,
      rgba(75, 78, 90, 1) 100%
    );
    padding-left: 50px;
    outline: none;
  }

  input::placeholder {
    color: #f9f9f9;
    font-size: clamp(18px, 1.6vw, 35px);
    font-weight: bold;
  }

  input:focus {
    background: linear-gradient(
      180deg,
      rgba(51, 53, 61, 1) 0%,
      rgb(120, 125, 144) 100%
    );
    outline: 0;
    transition: all 0.3s ease-in-out;
  }
`;

const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-around; */
  position: relative;
  margin-left: 20px;
  gap: 15px;
  flex-wrap: wrap;
`;
