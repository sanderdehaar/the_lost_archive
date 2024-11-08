const CarouselImage = ({ src, alt, position, onAnimationEnd }) => {
  return (
    <img 
      className="falling-image" 
      src={src} 
      alt={alt} 
      style={{
        position: 'absolute', 
        left: `${position.left}vw`, 
        top: position.top,
        animation: 'fall 16s linear infinite',
      }} 
      onAnimationEnd={onAnimationEnd}
    />
  );
};

export default CarouselImage;