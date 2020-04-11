import React, { Component } from 'react';
import  PropTypes from 'prop-types';

export default class GoogleAds extends Component {
  static propTypes = {
    client: PropTypes.string,
    slot: PropTypes.string,
    format: PropTypes.string,
  }

  // This code is ran when the component mounts
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    const styles = {
      color: 'blue'
    }
    return (
      <div>
        <ins className="adsbygoogle"
          style={this.props.style}
          data-ad-client="ca-pub-9863251580869365"
          data-ad-slot={this.props.slot}
          data-ad-format={this.props.format}>
        </ins>
      </div>
    );
  }
}
