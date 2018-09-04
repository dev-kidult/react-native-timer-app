import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as timerAction } from "../../reducer";
import Timer from "./presenter";

function mapStateToProps(state) {
  const { isPlaying, elapseTime, timeDuration } = state;
  return {
    isPlaying,
    elapseTime,
    timeDuration
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(timerAction.startTimer, dispatch),
    restartTimer: bindActionCreators(timerAction.restartTimer, dispatch),
    addSecond: bindActionCreators(timerAction.addSecond, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
