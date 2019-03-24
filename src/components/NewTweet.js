import React from 'react';

class NewTweet extends React.Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({
      text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { text } = this.state;

    //todo: Add tweet text to store

    console.log('New Tweet: ', text);

    this.setState(() => ({
      text: ''
    }))
  }

  render() {

    const { text } = this.state;

    {/* todo: Reirect to / if submitted */}

    const textAreaLength = 280;
    const tweetLeft = textAreaLength - text.length;
    const oneHundred = 100;

    return (
      <div>
        <h3 className='center'>Compose a Tweet</h3>
        <form className='new-tweet'
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

export default NewTweet;
