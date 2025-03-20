const WelcomeMessage = ({ onGetPosts }) => {
  return (
    <center className="welcome-container">
      <h1>There are No post </h1>
      <button type="button" className="btn btn-primary" onClick={onGetPosts}>
        Get Posts From Server
      </button>
    </center>
  );
};
export default WelcomeMessage;
