import React from 'react';

class Stream extends React.Component {

constructor(){
    super();
    this.state = {};
}
  render() {
    const { tracks = [] } = this.props;

    return (
      <div>
        {
          tracks.map((track, index) => {
            return (
                <div className="track" key={index}>
                {track.title}
                <button onClick={() => this.setState({ [index]: !this.state[index]})} type="button">
                {this.state[index] ? 'Dislike' : "Like"}
                </button>
                </div>
                );
          })
        }
      </div>
    );
  }

}

export default Stream;