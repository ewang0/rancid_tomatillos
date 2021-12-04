import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
  handleClick = () => {
    this.props.toggleModal();
  };

  render() {
    return (
      <div className='modal'>
        <div className='modal_content'>
          <span className='close' onClick={this.handleClick}>Close</span>
        </div>
      </div>
    )
  }
}

export default Modal;