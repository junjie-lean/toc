import React from 'react';
import Index from '../src/view/index';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Index {...this.props} />
    )
  }
}
