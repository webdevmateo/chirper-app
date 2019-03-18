import React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import TweetsList from './tweetsList';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        {loading === true ? <h3>Loading...</h3> : <TweetsList />}
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
