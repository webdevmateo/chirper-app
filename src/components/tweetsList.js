import React from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

class TweetsList extends React.Component {
  render() {

    const { tweetIDs } = this.props;

    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          {tweetIDs.map((tweetID) =>
            <li key={tweetID}>
              <Tweet id={tweetID}></Tweet>
            </li>)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIDs: Object.keys(tweets)
    .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(TweetsList);
