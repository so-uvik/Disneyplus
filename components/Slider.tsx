import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from "next/router";
import Slider from 'react-slick';
const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const router = useRouter()

    return (
        <Carousel {...settings}>
            <Wrap onClick={()=>router.push("/movie/497698")}>
                <a >
                    <div id="black-widow"><img id="black-widow-logo" src="/images/slider-black-widow-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap onClick={()=>router.push("/show/4057")}>
                <a >
                    <div id="criminal-minds"><img id="criminal-minds-logo" src="/images/slider-criminal-minds-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap onClick={()=>router.push("/show/1434")}>
                <a >
                    <div id="family-guy"><img id="family-guy-logo" src="/images/slider-family-guy-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap onClick={()=>router.push("/movie/550988")}>
                <a >
                    <div id="free-guy"><img id="free-guy-logo" src="/images/slider-free-guy-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap onClick={()=>router.push("/show/1433")}>
                <a >
                    <div id="american-dad"><img id="american-dad-logo" src="/images/slider-american-dad-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap onClick={()=>router.push("/show/120734")}>
                <a>
                    <div id="just-beyond"><img id="just-beyond-logo" src="/images/slider-just-beyond-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap onClick={()=>router.push("/show/133637")}>
                <a>
                    <div id="among"><img id="among-logo" src="/images/slider-among-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap onClick={()=>router.push("/show/92824")}>
                <a>
                    <div id="muppets"><img id="muppets-logo" src="/images/slider-muppets-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap onClick={()=>router.push("/show/2317")}>
                <a>
                    <div id="my-name"><img id="my-name-logo" src="/images/slider-my-name-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap onClick={()=>router.push("/show/107113")}>
                <a>
                    <div id="only-murders"><img id="only-murders-logo" src="/images/slider-only-murders-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap onClick={()=>router.push("/show/456")}>
                <a>
                    <div id="simpsons"><img id="simpsons-logo" src="/images/slider-simpsons-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap onClick={()=>router.push("/show/114478")}>
                <a>
                    <div id="star-wars"><img id="star-wars-logo" src="/images/slider-star-wars-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap onClick={()=>router.push("/show/91363")}>
                <a>
                    <div id="what-if"><img id="what-if-logo" src="/images/slider-what-if-logo.png"/></div>
                </a>
            </Wrap>
        </Carousel>
    )
};

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            opacity: 1;
            color: rgb(150, 158, 171);
            @media (max-width: 768px) {
                display: none;
            }
        }
    }

    li.slick-active button:before {
        color: white;
        @media (max-width: 768px) {
            display: none;
        }
    }
    .slick-slide {
        a{
            opacity: 0.5;
            transition: opacity 950ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms;
        }
        
        img {
            opacity: 0;
            transform: translateX(30px);
            transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms;
        }
    }

    .slick-active {
        a {
            z-index: 10;
            opacity: 1;
        }
        
        img {
            opacity: 1;
            transform: translateX(0px);
            transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms, opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms;
        }
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -5%;
    }

    .slick-next {
        right: -5%;
    }

    .slick-dots {
        bottom: 20px;
        display: block;
        margin: 0px;
        padding: 0px;
        position: absolute;
        right: 25px;
        text-align: right;
        pointer-events: none;
        width: 100%;
    }

    .slick-dots li {
        margin: 0;
    }
`

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    padding: 0;

    a {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        margin: 10px;
        text-decoration: none;
        transition: all 150ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s !important;

        div {
            height: 0;
            width: 100%;
            background-position: right;
            background-size: cover;
            background-repeat: no-repeat;
            padding-top: 25.6%;
            border-radius: 4px;
            display: block;
            z-index: -1;
            &:hover {
            outline: 4px solid rgba(249, 249, 249, 0.8);
            outline-offset: -4px;
        }
        }

        img {
            inset: 0px;
            position: absolute;
            height: 100%;
        }

        #american-dad {
            background-image: url('/images/slider-american-dad.jfif');
        }

        #among {
            background-image: url('/images/slider-among.jfif');
        }
        #among-logo {
            padding: 5%;            
        }

        #black-widow {
            background-image: url('/images/slider-black-widow.jfif');
        }
        #black-widow-logo {
            padding: 5%;
        }

        #criminal-minds {
            background-image: url('/images/slider-criminal-minds.jfif');
        }

        #family-guy {
            background-image: url('/images/slider-family-guy.jfif');
        }

        #free-guy {
            background-image: url('/images/slider-free-guy.jfif');
        }

        #just-beyond {
            background-image: url('/images/slider-just-beyond.jfif');
        }

        #muppets {
            background-image: url('/images/slider-muppets.jfif');
        }
        
        #my-name {
            background-image: url('/images/slider-my-name.jfif');
        }

        #only-murders {
            background-image: url('/images/slider-only-murders.jfif');
        }
        #only-murders-logo {
            padding: 5%;
        }

        #simpsons {
            background-image: url('/images/slider-simpsons.jfif');
        }
        
        #star-wars {
            background-image: url('/images/slider-star-wars.jfif');
        }

        #what-if {
            background-image: url('/images/slider-what-if.jfif');
        }
        #what-if-logo {
            padding: 5%;
        }
    }
`

export default ImgSlider;
/*import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
const Slider = () => {
  return (
    <section className="relative mt-7 shadow-2xl  mx-auto">
    <div />
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      interval={5000}
    >
      <div>
        <img loading="lazy" src="/images/slider-1.jpg" alt="" />
      </div>
      <div>
        <img loading="lazy" src="/images/slider-2.jpg" alt="" />
      </div>
      <div>
        <img loading="lazy" src="/images/slider-3.jpg" alt="" />
      </div>
      <div>
        <img loading="lazy" src="/images/slider-4.jpeg" alt="" />
      </div>
    </Carousel>
  </section>
  )
}
export default Slider*/