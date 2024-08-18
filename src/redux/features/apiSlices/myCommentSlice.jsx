import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiComment = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3008" }),
  //   tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getComment: builder.query({
      query: () => "/comTest",
      // transformResponse: (tasks) => tasks.reverse(),
      //   providesTags: ["Tasks"],
    }),

    getSingleComment: builder.query({
      query: (id) => `/myComments/${id}`,
      //   transformResponse: (tasks) => tasks.reverse(),
      //   providesTags: ["Tasks"],
    }),

    addComment: builder.mutation({
      query: (task) => (
        console.log(task),
        {
          url: "/comTest",
          method: "POST",
          body: task,
        }
      ),
    }),

    updateComment: builder.mutation({
      query: (x) => (
        console.log(x),
        {
          url: `/comTest/${x.id}`,
          method: "PUT",
          body: x.dat,
        }
      ),
    }),

    // deleteComment: builder.mutation({
    //   query: (id) => ({
    //     url: `/myComments/${id}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const {
  useGetCommentQuery,
  useGetSingleCommentQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = apiComment;
