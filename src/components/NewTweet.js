import React from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';

class NewTweet extends React.Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({
      text
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch, id } = this.props;
    const { text } = this.state;

    dispatch(handleAddTweet(text, id));

    this.setState({
      text: ''
    })
  }

  render() {

    const { text } = this.state;

    {/* todo: Reirect to / if submitted */}

    const textAreaLength = 280;
    const tweetLeft = textAreaLength - text.length;
    const oneHundred = 100;

    return (
      <div>
        <h3 className='center'>Compose New Tweet</h3>
        <form
          className='new-tweet'
          onSubmit={this.handleSubmit}
        >
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={textAreaLength}
          >
          </textarea>
          {tweetLeft <= oneHundred && (
            <div
              className='tweet-length'
            >
              {tweetLeft}
            </div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={text === ''}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewTweet);
