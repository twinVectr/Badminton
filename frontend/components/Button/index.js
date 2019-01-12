import React from 'react';

const Button = (props) => {
  const { buttonText, buttonHref, buttonColor } = props;
  return (
    <div>
      <a className="tv-button" href={buttonHref} style={{ backgroundColor: buttonColor }}> {buttonText} </a>
    </div>
  );
}
export default Button;