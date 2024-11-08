import CarouselImage from './carouselImage';

const images = [
  { src: '/images/global/monsters/monster_six.png', alt: 'Image 1', position: { left: 8, top: '0vh' } },
  { src: '/images/global/monsters/monster_one.png', alt: 'Image 2', position: { left: 11, top: '62vh' } },
  { src: '/images/global/monsters/monster_three.png', alt: 'Image 3', position: { left: 32, top: '35vh' } },
  { src: '/images/global/monsters/monster_two.png', alt: 'Image 4', position: { left: 50, top: '11vh' } },
  { src: '/images/global/monsters/monster_seven.png', alt: 'Image 5', position: { left: 64, top: '83vh' } },
  { src: '/images/global/monsters/monster_five.png', alt: 'Image 7', position: { left: 80, top: '15vh' } },
  { src: '/images/global/monsters/monster_four.png', alt: 'Image 6', position: { left: 73, top: '22vh' } },
  { src: '/images/global/monsters/monster_six.png', alt: 'Image 8', position: { left: 8, top: '-100vh' } },
  { src: '/images/global/monsters/monster_one.png', alt: 'Image 9', position: { left: 11, top: '-38vh' } },
  { src: '/images/global/monsters/monster_three.png', alt: 'Image 10', position: { left: 32, top: '-65vh' } },
  { src: '/images/global/monsters/monster_two.png', alt: 'Image 11', position: { left: 50, top: '-89vh' } },
  { src: '/images/global/monsters/monster_seven.png', alt: 'Image 12', position: { left: 64, top: '-17vh' } },
  { src: '/images/global/monsters/monster_five.png', alt: 'Image 13', position: { left: 80, top: '-85vh' } },
  { src: '/images/global/monsters/monster_four.png', alt: 'Image 14', position: { left: 73, top: '-78vh' } },
];

const totalImages = [...images, ...images];

const carouselImages = () => {
  return (
    <div className="image-carousel">
      {totalImages.map((image, index) => (
        <CarouselImage 
          key={index} 
          src={image.src} 
          alt={image.alt} 
          position={{ 
            left: image.position.left, 
            top: image.position.top
          }} 
        />
      ))}
    </div>
  );
};

export default carouselImages;