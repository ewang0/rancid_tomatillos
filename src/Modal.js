import React from 'react';
import './Modal.scss';
import ReactStars from 'react-stars';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backdropPath: this.props.backdropPath,
      title: this.props.title,
      description: this.props.description,
      rating: this.props.averageRating,
      budget: this.props.budget,
      revenue: this.props.revenue
    }
  }

  handleClick = () => {
    this.props.toggleModal();
  };

  render() {
    // console.log(this.state.backdropPath)
    return (
      <div className='modal'>
        <button className='close-modal' onClick={this.handleClick}><img src="../x_icon.png" /></button>
        <div className='modal_content'>
          <section className='modal-info'>
            <h2>{this.state.title}</h2>
            <div className='ratingsContainer'>
              <ReactStars count={5} value={this.state.rating / 2} size={15} color2={'lightgrey'} />
            </div>
            <p>{this.props.description}</p>
            <table>
              <tr>
                <th>Budget</th>
                <th>${this.props.budget}</th>
              </tr>
              <tr>
                <th>Revenue</th>
                <th>${this.props.revenue}</th>
              </tr>
            </table>
          </section>
          <img src={this.state.backdropPath}/>
        </div>
      </div>
    )
  }
}

export default Modal;