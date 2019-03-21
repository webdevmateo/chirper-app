import React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import TweetsList from './TweetsList';
import LoadingBar from 'react-redux-loading';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        <LoadingBar />
        {loading === true ? null : <TweetsList />}
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
