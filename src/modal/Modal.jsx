import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

// stylesheets'
import "../styles/modal.scss";

class Modal extends Component {
  listenKeyboard = event => {
    if (event.key === "Escape" || event.keyCode === 27) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    if (this.props.onClose) {
      window.addEventListener("keydown", this.listenKeyboard, true);
    }
  }

  componentWillUnmount() {
    if (this.props.onClose) {
      window.removeEventListener("keydown", this.listenKeyboard, true);
    }
  }

  get title() {
    const { title } = this.props;

    return title ? (
      <div className="modaltitlediv">{title}</div>
    ) : (
      <div className="modaltitlediv">No title</div>
    );
  }

  get modalpagetitle() {
    const { modalpagetitle, modal } = this.props;

    //TODO
    //schöner
    return modalpagetitle
      ? modalpagetitle.map(mpt => {
          if (mpt.page === modal.page) {
            return (
              <div key={mpt} className="modalpagetitlediv">
                {mpt.name}
              </div>
            );
          } else return;
        })
      : "";
  }

  dialogaddclass() {
    if (
      this.props.title === "Login" ||
      this.props.title === "Forgot password"
    ) {
      return "loginmodal";
    }
  }

  get close() {
    const { onClose } = this.props;

    return onClose ? <div className="modal__close" onClick={onClose} /> : null;
  }

  get progress() {
    const { progress, modal } = this.props;

    return progress
      ? progress.map(prog => {
          return (
            <div
              key={prog.name}
              className={`headeritem ${prog.page <= modal.page
                ? "headeritem-active"
                : ""}`}>
              {prog.name}
              {prog.page === modal.page && (
                <span className="glyphicon glyphicon-edit" aria-hidden="true" />
              )}
              {prog.page > modal.page && (
                <span
                  className="glyphicon glyphicon-unchecked"
                  aria-hidden="true"
                />
              )}
              {prog.page < modal.page && (
                <span
                  className="glyphicon glyphicon-check"
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })
      : "";
  }

  onOverlayClick = () => {
    this.props.onClose();
  };

  onDialogClick = event => {
    event.stopPropagation();
  };

  render() {
    return (
      <div>
        <div id="overlay" />
        <div id="content" onClick={this.onOverlayClick}>
          <div
            id="dialog"
            className={this.dialogaddclass()}
            onClick={this.onDialogClick}>
            <div id="popupheader">
              {this.progress}
              <div className="close-modal-button" onClick={this.props.onClose}>
                <i className="fa fa-close" />
              </div>
            </div>
            {this.title}
            <div id="modalbody">
              {this.modalpagetitle}
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { modal: state.modal };
}

export default connect(mapStateToProps)(Modal);
