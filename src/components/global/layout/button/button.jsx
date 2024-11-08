const Button = ({ text, onClick, href, className }) => {
  if (href) {
    return (
      <a href={href} className={className}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;