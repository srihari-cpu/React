import { useContext, useRef } from "react";
import { ContextProvider } from "../store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(ContextProvider);

  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const title = PostTitleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, title, body, reactions, tags);

    userIdElement.current.value = "";
    PostTitleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your user Id Here.
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
          placeholder="Your user Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={PostTitleElement}
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Post Content
        </label>
        <textarea
          rows={5}
          type="text"
          className="form-control"
          id="content"
          ref={bodyElement}
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          ref={reactionElement}
          placeholder="How may people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
