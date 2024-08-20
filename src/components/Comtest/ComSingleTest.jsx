import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUpdateCommentMutation } from "../../redux/features/apiSlices/myCommentSlice";
import axios from "axios";
import ReplyComment from "./ReplyComment";

const ComSingleTest = () => {
  const { id } = useParams();
  // console.log(id)
const [allComments , setAllCOmments] = useState([])
  const [myDatas, setMyDatas] = useState();
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const datas = axios
      .get(`http://localhost:3008/comTest/` + id)
      .then((res) => {
        // console.log(res);
        //   location.reload();
        setMyDatas(res.data);
        setAllCOmments(res.data.comment)
      });
    // console.log(datas)
  }, []);
// console.log(allComments)
  // console.log(myDatas);

  const [updateComment] = useUpdateCommentMutation();

  const inputChangeHandler = (e) => {
    setComment(e.target.value);
    //   console.log(comment);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(comment)
    console.log(myDatas);
    const jacob = { ...myDatas, comment: [...myDatas.comment, comment] };
    const myDatasCom = {
      id: id,
      com: comment,
      dat: jacob,
    };
    updateComment(myDatasCom);
  };

  // console.log(myDatas.comment)
  return (
    <div>
      i m single tet
      <section>
      <div>
        <form onSubmit={submitForm}>
          <input
            className="bdr w-full mx-2 rounded p-2 "
            type="text"
            placeholder="write a comment.... "
            name="comment"
            onChange={inputChangeHandler}
          />
          <br />

          <button type="submit">Submit in</button>
        </form>
      </div>
      </section>
      <section>
        <div>
        {allComments.map((item, index) => {
            return (
              <div key={index}>
                {item}
                {/* <ReplyComment/> */}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ComSingleTest;
