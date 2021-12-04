import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      src: '',
      title:'',
      description:'',
      rating:'',
      budget:'',
      revenue:''
    }
  }

  handleClick = () => {
    this.props.toggleModal();
  };

  render() {
    return (
      <div className='modal'>
        <div className='modal_content'>
          <img src="https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg"/>
          <h2>Fake Movie Title</h2>
          <p>Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope.</p>
          <table>
            <tr>
              <th>Budget</th>
              <th>$0</th>
            </tr>
            <tr>
              <th>Revenue</th>
              <th>$29,900,850</th>
            </tr>
          </table>
          <span className='close' onClick={this.handleClick}>Close</span>
        </div>
      </div>
    )
  }
}

export default Modal;