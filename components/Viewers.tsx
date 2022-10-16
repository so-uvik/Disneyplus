import styled from "styled-components";

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                
                    <img src="/images/viewers-disney.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/disney.mp4" type="video/mp4"/>
                    </video>
                
            </Wrap>
            <Wrap>
                
                    <img src="/images/viewers-pixar.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/pixar.mp4" type="video/mp4"/>
                    </video>
                
            </Wrap>
            <Wrap>
                
                    <img src="/images/viewers-marvel.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/marvel.mp4" type="video/mp4"/>
                    </video>
                
            </Wrap>
            <Wrap>
                
                    <img src="/images/viewers-starwars.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/star-wars.mp4" type="video/mp4"/>
                    </video>
                
            </Wrap>
            <Wrap>
                
                    <img src="/images/viewers-national.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/national-geographic.mp4" type="video/mp4"/>
                    </video>
                
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    padding: 20px 20px 0;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    /* @media (max-width: 768px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    } */
`

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
        }
    }
`;

export default Viewers;
/*import Image from "next/image";

function Brands() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 max-w-[1400px] mx-auto flex-wrap">
      <div className="brand group max-w-sm">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
        <video
          autoPlay={true}
          muted
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/marvel.mp4" type="video/mp4"/>
        </video>
      </div>

      <div className="brand group">
        <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Brands;*/

/*import React from 'react'
import styled from 'styled-components'

const Viewers = () => {
  return (
    <Container>
        <Wrap>
            <img src="/images/viewers-disney.png" alt='Disney' />
            <video
          autoPlay
          loop
          muted
          playsInline>
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png" alt='Disney' />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png" alt='Disney' />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png" alt='Disney' />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png" alt='Disney' />
        </Wrap>
    </Container>
  )
}
export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    display: flex;
    flex-wrap: wrap;
    gap: 25px; 
    align-items: center;
    flex-grow: 0; 
    padding: 30px 0px 26px;

`

const Wrap = styled.div`
    
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
    max-width: 320px;
    img
    {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video {
    /* width: 100%;
    height: 100%; 
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

    &:hover
    {
        box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);

        video 
        {
         opacity: 1;
        }
    }

    @media (max-width: 768px)
    {
     grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`*/
