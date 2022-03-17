import { Component } from "react";

class CommentArea extends Component {
  state = {
    comments: [],
    selected: this.props.selectedBook,
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.state.selected}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThkMzg2YTVmMzRhZDAwMTUzOWYxOWEiLCJpYXQiOjE2NDc1MjYzOTEsImV4cCI6MTY0ODczNTk5MX0.RTOqxg4qtOUBK_kBDbOaDloUmReaRfCmCxBBJu13cAI",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          comments: data,
        });
      } else {
        console.log("an error occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return <></>;
  }
}

export default CommentArea;
