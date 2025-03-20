import { Children, createContext, useReducer } from "react";

export const ContextProvider = createContext([
  {
    postList: [],
    addPost: () => {},
    addInitialPosts: () => {},
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
    newPosts = [...newPosts, action.payload];
  }
  return newPosts;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, title, body, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <ContextProvider.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default PostListProvider;
