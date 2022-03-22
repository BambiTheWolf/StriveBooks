import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ selectedBook }) => {
  const [state, setState] = useState({
    comments: [],
    isLoading: false,
    isError: false,
  });

  useEffect(async () => {
    setState({ isLoading: true });
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + selectedBook,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThkMzg2YTVmMzRhZDAwMTUzOWYxOWEiLCJpYXQiOjE2NDc5NTcxMTksImV4cCI6MTY0OTE2NjcxOX0.P8kZTDgElmFuq7Wa5Wd89-Y8XTpxTnWHvRic3iiZ6-0",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        setState({
          comments: comments,
          isLoading: false,
          isError: false,
        });
      } else {
        console.log("error");
        setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      setState({ isLoading: false, isError: true });
    }
  }, [selectedBook]);

  return (
    <div>
      {state.isLoading && <Loading />}
      {state.isError && <Error />}
      <AddComment asin={selectedBook} />
      <CommentList commentsToShow={state.comments} />
    </div>
  );
};

export default CommentArea;
