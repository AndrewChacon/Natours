import React from "react";

const Popup = props => {
  return (
    <div
      className={`
          popup
            ${props.isToggleOn ? "popup--showing" : "popup--hidden"}
          `}
      id="popup"
    >
      <div
        className="popup__content"
        className={`
      popup__content
        ${
          props.isToggleOn
            ? "popup__content--showing"
            : "popup__content--hidden"
        }
      `}
      >
        <div className="popup__left">
          <img src="img/nat-8.jpg" alt="Tour photo" className="popup__img" />
          <img src="img/nat-9.jpg" alt="Tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a
            href="#section-tours"
            className="popup__close"
            onClick={props.handlePopupToggle}
          >
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small popup__heading">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small ">
            Important & &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus culpa commodi soluta odio, suscipit quas illum.
            Temporibus tenetur quis enim facilis, ipsum error quibusdam aut
            tempore nobis, fugit non dolorum ratione? Id quod, illum nesciunt
            deleniti quisquam at inventore sapiente molestias itaque consectetur
            eum minima neque adipisci hic! Nesciunt quaerat facere, iusto fuga,
            tenetur atque eius ipsa quas sequi numquam non excepturi aliquid.
            Alias ratione, perferendis nam architecto saepe voluptatum sed
            quibusdam pariatur veritatis illum, odit quos omnis nihil sapiente
            itaque totam ipsum? Quisquam repellat inventore perferendis vero
            iste animi! Dolorum aspernatur cumque fugiat autem magnam,
            reprehenderit ad minus atque?
          </p>
          <a href="#book" className="btn btn--green popup__btn">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
