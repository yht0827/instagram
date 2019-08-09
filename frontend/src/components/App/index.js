import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const {
    user,
    router: { location }
  } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    pathname: location.pathname
  };
};

export default connect(mapStateToProps)(Container);

// index.js => gets data from the redux store and mapStateToProps to Container Commponent.
// container.js => send data to the Presenter Component
// presenter.js => displays data
