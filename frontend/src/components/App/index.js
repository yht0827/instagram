import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn
  };
};

export default connect(mapStateToProps)(Container);

// index.js => gets data from the redux store and mapStateToProps to Container Commponent.
// container.js => send data to the Presenter Component
// presenter.js => displays data
