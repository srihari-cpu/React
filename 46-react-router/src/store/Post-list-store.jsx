import { createContext, useCallback, useReducer } from "react";

export const ContextProvider = createContext([
  {
    postList: [],
    addPost: () => {},
    deletePost: () => {},
  },
]);

const postListReducer = (currPost, action) => {
  let newPosts = currPost;
  if (action.type === "DELETE_POST") {
    newPosts = newPosts.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPosts = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPosts = [action.payload, ...newPosts];
  }
  return newPosts;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  // const addInitialPosts = (posts) => {
  //   dispatchPostList({
  //     type: "ADD_INITIAL_POSTS",
  //     payload: {
  //       posts,
  //     },
  //   });
  // };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  return (
    <ContextProvider.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default PostListProvider;
