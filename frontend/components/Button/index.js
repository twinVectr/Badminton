import React from 'react';
import classNames from 'classnames';
const Button = (props) => {
  const { buttonText, buttonHref, buttonColor, type } = props;
  const classes = classNames(
    'tv-button',
    {
      [`tv-button-${type}`]: type === 'link',
    }
  );

  const style = {
    backgroundColor: (type !== 'link') ? buttonColor : null,
  };

  return (
    <div>
      <a className={classes} href={buttonHref} style={style}> {buttonText} </a>
    </div>
  );
}
export default Button;