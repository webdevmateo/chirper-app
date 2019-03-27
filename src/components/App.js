import React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import TweetsList from './TweetsList';
import LoadingBar from 'react-redux-loading';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';

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
        {loading === true
          ? null
          : <TweetPage
              match={{
                params: {
                  id: '8xf0y6ziyjabvozdd253nd'
                }
              }}
            />}
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
