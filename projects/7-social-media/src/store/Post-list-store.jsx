import { Children, createContext, useReducer } from "react";

export const ContextProvider = createContext([
  {
    postList: [],
    addPost: () => {},
    deletePost: () => {},
  },
]);

const postListReducer = (currPost, action) => {
  let newPosts = currPost;
  if (action.typeof === "DELETE_POST") {
    newPosts = newPosts.filter((post) => post.id !== action.payload.postId);
  }
  if (action.typeof === "ADD_POST") {
    newPosts = [...newPosts, action.payload];
  }
  return newPosts;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, title, body, reactions, tags) => {
    dispatchPostList({
      typeof: "ADD_POST",
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
  const deletePost = (postId) => {
    dispatchPostList({
      typeof: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <ContextProvider.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </ContextProvider.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go To Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope tp enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "pass ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

export default PostListProvider;
