import React from "react";
import ViewSingleTest from "./ViewSingleTest";
import { useGetCommentQuery } from "../../redux/features/apiSlices/myCommentSlice";

const ComTest = () => {
  const { data, isError, isLoading } = useGetCommentQuery();

  if (isLoading == true) {
    return <div>Loading...........</div>;
  }
  if (isError == true) {
    return <div>error...........</div>;
  }
  return (
    <div>
      <section>
        <div>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <ViewSingleTest {...item} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ComTest;
