import React from 'react';

export default class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      truncate: this.props.review.reviews.length > 280 ? true : false,
      shortText: this.props.review.reviews.substring(0, 280) + '...',
      reviewText: this.props.review.reviews
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.showAlert = this.showAlert.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.review.reviews.length > 280) {
  //     this.setState({
  //       truncate: true
  //     });
  //   }
  // }

  clickHandler(event) {
    event.preventDefault();
    if (this.state.truncate === true) {
      this.setState({
        truncate: false
      });
    } else {
      this.setState({
        truncate: true
      });
    }
  }

  showAlert(event) {
    event.preventDefault();
    alert('Thank you for flagging this review! This is not how the real AirBnB page does this, but that would have been too complicated given our numerous components. Thank you for understanding.');
  }

  render() {
    const renderText = this.state.truncate === true ?
      (<div>{this.state.shortText} <a href='' onClick={this.clickHandler}>Read more</a> </div>)
      : (<div>{this.state.reviewText}</div>);
    return (
      <div className="reviewItemContainer">
        <div className="reviewItemHeader">
          <span className="reviewItemHeaderPhotoSpan">
            <img src={this.props.review.photo_url} className="reviewItemHeaderPhoto"/>
          </span>
          <span className="reviewItemHeaderInfo">
            {this.props.review.display_name} <br />
            {this.props.review.review_date}
          </span>
          <span className="reviewItemHeaderFlag">
            <a href='/'><img src="http://imgur.com/8ELuIV8.png" className="reviewItemHeaderFlagImg" onClick={this.showAlert}/></a>
          </span>
        </div>
        {renderText}
      </div>
    )
  }
}