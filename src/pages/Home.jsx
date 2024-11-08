/*
* HOME PAGE
*/

// Components

// Header
import Header from '../components/global/header/Header';
// Logo
import Logo from '../components/global/layout/logo/logo';
// Paragraph
import Paragraph from '../components/global/layout/paragraph/paragraph';
// Button
import Button from '../components/global/layout/button/button';
// Image Carousel
import Carousel from '../components/global/carousel/carouselImages';
// Settings buttons
import Settings from '../components/global/layout/settings/settings';

// Home layout
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section id="hero-home">
          <div className="container">
            <Logo />
            <Paragraph text="Step into the shadows of The Lost ARCHIVE, WHERE myths and reality blur as you uncover secrets behind the world’s most elusive creatures." />
            <Button text="Enter" href="#" className="button-class" />
            <span>[Enter the experience with open mind]</span>
            <div className="overlays">
              <div className='overlay-light'></div>
              <div className='overlay-dark'></div>
              <img src="/images/home/big-mountain-with-rocks.avif" id="background-image" />
            </div>
            <Settings />
            <Carousel />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;