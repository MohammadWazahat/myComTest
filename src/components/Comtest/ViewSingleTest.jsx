import React from "react";
import { Link } from "react-router-dom";

const ViewSingleTest = (x) => {
  //   console.log(x);

  return (
    <div>
      i m view single
      <div>
        <Link to={`/comTest/${x.id}`}>
          <button className="border rounded-xl p-1 px-3">comm</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewSingleTest;
