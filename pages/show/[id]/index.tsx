import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Hero from "../../../components/Hero";
import { PlusIcon, XIcon } from "@heroicons/react/solid";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ProgressData } from "./play";

function Show({ result }: any) {
  const { data: session, status } = useSession();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const LOGO_URL = "https://image.tmdb.org/t/p/w500";
  const router = useRouter();
  const [showPlayer, setShowPlayer] = useState(false);
  const ReactPlayer = dynamic(() => import("react-player/youtube"), {
    ssr: false,
  });
  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  const logo = result.images.logos.find((logo: any) => logo.iso_639_1 === "en");

  const index = result.videos.results.findIndex(
    (element: any) => element.type === "Trailer"
  );

  const watching = window.localStorage.getItem(`tvshow_${router.query.id}`);
  const parsedWatching: ProgressData = watching ? JSON.parse(watching) : null;

  return (
    <div className="relative">
      <Head>
        <title>Disney+ | {result.title || result.name}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <section className="relative z-50 ">
          <div className="relative min-h-[calc(100vh-72px)] ">
            <Image
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              alt="/public/images/noImage.png"
              fill
              objectFit="cover"
              className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"
              priority={true}
              // className="absolute inset-0 opacity-100 h-full w-full z-50 bg-gradient-to-tr from-[#808080]"
            />
          </div>
          <div className="absolute inset-y-12 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
            {logo ? (
              <Image
                src={`${LOGO_URL}${logo.file_path}`}
                alt={result.title}
                priority={true}
                width={550}
                height={200}
                objectFit="contain"
              />
            ) : (
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                {result.title || result.original_name}
              </h1>
            )}
            <div className="flex items-center space-x-3 md:space-x-5 ">
              <Link
                href={
                  parsedWatching
                    ? `/show/${result.id}/play?season=${parsedWatching.season}&episode=${parsedWatching.episode}`
                    : `/show/${result.id}/play?season=1&episode=1`
                }
              >
                <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                  <img
                    src="/images/play-icon-black.svg"
                    alt=""
                    className="h-6 md:h-8"
                  />
                  <span className="uppercase font-medium tracking-wide">
                    Play
                  </span>
                </button>
              </Link>
              <button
                className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
                onClick={() => setShowPlayer(true)}
              >
                <img
                  src="/images/play-icon-white.svg"
                  alt=""
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Trailer
                </span>
              </button>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <PlusIcon className="h-6" />
              </div>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <img src="/images/group-icon.svg" alt="" />
              </div>
            </div>

            <p className="text-xs md:text-sm">
              {result.release_date || result.first_air_date} •{" "}
              {result.number_of_seasons}{" "}
              {result.number_of_seasons === 1 ? "Season" : "Seasons"} •{" "}
              {result.genres.map((genre: any) => genre.name + " ")}{" "}
            </p>
            <h4 className="text-sm md:text-lg max-w-4xl">{result.overview}</h4>
          </div>

          {/* Bg Overlay */}
          {showPlayer && (
            <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
          )}

          <div
            className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
              showPlayer ? "opacity-100 z-50" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
              <span className="font-semibold">
                {result.title || result.original_name}
              </span>
              <div
                className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
                onClick={() => setShowPlayer(false)}
              >
                <XIcon className="h-5" />
              </div>
            </div>
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                controls={true}
                playing={showPlayer}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Show;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  const { id, type } = context.query;
  const requestShow = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&append_to_response=videos,images`
  ).then((response) => response.json());
  /* const requestShow = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((response) => response.json()); */
  return {
    props: {
      session,
      // result: type =="movie" ? requestMovie : requestShow,
      result: requestShow,
    },
  };
}
