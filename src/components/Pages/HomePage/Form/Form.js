import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      size: ""
    };
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    const { name, email } = this.state;
    return (
      <section className="section-book" id="book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <div action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">Start booking now</h2>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Full name"
                    id="name"
                    required
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="name" className="form__label">
                    Full name
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email address"
                    id="email"
                    required
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="email" className="form__label">
                    Email address
                  </label>
                </div>

                <div className="form__group u-margin-bottom-medium">
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="small"
                      name="size"
                      value="small"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="small" className="form__radio-label">
                      <span className="form__radio-button" /> Small tour group
                    </label>
                  </div>

                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="large"
                      name="size"
                      value="large"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="large" className="form__radio-label">
                      <span className="form__radio-button" /> Large tour group
                    </label>
                  </div>
                </div>

                <div className="form__group">
                  <button
                    onClick={() => console.log(this.state)}
                    className="btn btn--green"
                  >
                    Next step &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
