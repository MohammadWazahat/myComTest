import React, { useState } from 'react'

const ReplyComment = () => {

const [allReply, setAllReply] = useState();
const [reply, setReply] = useState([]);

    const inputChangeHandler = (e) => {
        setReply(e.target.value);
        //   console.log(comment);
      };
    
      const submitForm = (e) => {
        e.preventDefault();
        console.log(reply)
        // console.log(myDatas);
        // const jacob = { ...myDatas, comment: [...myDatas.comment, comment] };
        // const myDatasCom = {
        //   id: id,
        //   com: comment,
        //   dat: jacob,
        // };
        // updateComment(myDatasCom);
      };
  return (
    <div>
      i am reply
      <section>
      <div>
        <form onSubmit={submitForm}>
          <input
            className="border-2 border-green-400 w-full mx-2 rounded p-2 "
            type="text"
            placeholder="write a comment.... "
            name="comment"
            onChange={inputChangeHandler}
          />
          <br />

          <button type="submit">send reply</button>
        </form>
      </div>
      </section>
    </div>
  )
}

export default ReplyComment
