import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"
import {signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router";
import styled from "styled-components";
import { useState } from "react";
const Header = () => {
  const {data: session, status} = useSession()
  const router = useRouter()
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 72) {
        setNavbar(true);
    } else {
        setNavbar(false);
    }
  };

  if (typeof window !== "undefined")
  window.addEventListener('scroll',changeBackground);
  
  return (
    <Container>
    {/* <header className="sticky top-0 bg-[#040714] z-20 flex h-[72px] items-center px-10 md:px-12"> */}
         <Image
        src="/images/logo.svg"
        alt=""
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={()=>router.push("/")}/>
        {session && (
        // <Navmenu className="hidden ml-10 md:flex items-center space-x-6">
        <Navmenu>
            {/* <a className="header-link group"> */}
            <a>
               {/* <HomeIcon className="h-4"/> */}
               <img src='/images/home-icon.svg' alt=''/>
               <span className="span">Home</span>
            </a>
            <a>
            <img src='/images/search-icon.svg' alt=''/>
            {/* <SearchIcon className="h-4" /> */}
            <span className="span">Search</span>
          </a>
          <a >
            {/* <PlusIcon className="h-4" /> */}
            <img src='/images/watchlist-icon.svg' alt=''/>
            <span className="span">Watchlist</span>
          </a>
          <a >
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a >
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a >
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>
        </Navmenu>
        )}
        {!session ? (
        <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-[250]" 
         onClick={() => signIn("google")}>
                Login
        </button>

        ): (
          <img src={session.user.image} className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer" onClick={()=>signOut()}/>
        )}
    </Container>
  )
}
export default Header


const Container = styled.header<any>`
    /* background-color: ${props => props.scrolled && 'rgb(9, 11, 19)'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 39px;
    letter-spacing: 16px;
    z-index: 51;
     ::after {
        background: ${props => !props.scrolled && 'linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,0.03) 15%,rgba(0,0,0,0.125) 30%,rgba(0,0,0,0.25) 46%,rgba(0,0,0,0.4) 61%,rgba(0,0,0,0.553) 75%,rgba(0,0,0,0.694) 88%,rgba(0,0,0,0.8))'};
        content: '';
        height: 170px;
        left: 0px;
        position: absolute;
        right: 0px;
        top: 0px;
        z-index: -5;
        pointer-events: none;
        display: block;
    } 
    
    @media (max-width: 768px) {
        background-color: transparent;
        position: absolute;
    } */
    
    position: sticky;
    top: 0px;
    background-color: ${props => props.scrolled && 'rgb(9, 11, 19)'};
    z-index: 20;
    display: flex;
    height: 72px;
    align-items: center;
    padding-left: 2.5rem;
    padding-right: 2.5rem;

    @media (min-width: 768px) 
    {
    padding-left: 3rem;
    padding-right: 3rem;
    } 
`

const Navmenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
        color: white;

        img
        {
            height: 20px;
        }

        span
        {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            padding: 0 5px;
            text-decoration: none;
            
            &::after
            {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                inset: auto 0 -6px 0;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover
        {
            span::after
            {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
    @media (max-width: 768px) 
    {
      display: none;
    }
`

