import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUpdateCommentMutation } from "../../redux/features/apiSlices/myCommentSlice";
import axios from "axios";

const ComSingleTest = () => {
  const { id } = useParams();
  // console.log(id)

  const [myDatas, setMyDatas] = useState();
  const [comment, setComment] = useState([]);
  const [comArr, setComArr] = useState([]);
  const [log, setLog] = useState();

  useEffect(() => {
    const datas = axios
      .get(`http://localhost:3008/comTest/` + id)
      .then((res) => {
        console.log(res);
        //   location.reload();
        setMyDatas(res.data);
      });
    // console.log(datas)
  }, []);

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

  return (
    <div>
      i m single tet
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
    </div>
  );
};

export default ComSingleTest;
