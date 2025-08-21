import React, { Component } from "react";
import "./Timer.css";

type StateType = {
  time: number;
  isRunning: boolean;
};

export default class Timer extends Component<object, StateType> {
  timerId: ReturnType<typeof setInterval> | number | undefined = undefined;
  constructor(props: object) {
    super(props);

    this.state = {
      time: 0,
      isRunning: false,
    };
  }

  componentDidMount(): void {
    console.log("Component đã được mout vào trong DOM");
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    const handleStart = () => {
      this.setState({
        isRunning: true,
      });

      // Cần sử dụng setInterval
      this.timerId = setInterval(() => {
        console.log("Chạy chương trình");

        this.setState({
          time: this.state.time + 1,
          isRunning: true,
        });
      }, 1000);
    };

    const handlePause = () => {
      // Dọn dẹp sự kiện interval
      clearInterval(this.timerId);
    };

    const handleReset = () => {
      this.setState({
        time: 0,
        isRunning: false,
      });
    };

    const formatTime = (seconds: number): string => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    return (
      <div className="timer-container">
        <div className="timer-header">
          <h1 className="timer-title">Đồng Hồ Đếm Thời Gian</h1>
        </div>
        <div className="mode-selector">
          <button className="mode-btn active" data-mode="stopwatch">
            Bấm Giờ
          </button>
        </div>
        <div className="time-display" id="timeDisplay">
          {formatTime(this.state.time)}
        </div>
        <div className="progress-bar">
          <div className="progress-fill" id="progressFill" />
        </div>
        <div className="controls">
          {this.state.isRunning ? (
            <button
              onClick={handlePause}
              className="control-btn pause-btn"
              id="pauseBtn"
            >
              Tạm Dừng
            </button>
          ) : (
            <button
              onClick={handleStart}
              className="control-btn start-btn"
              id="startBtn"
            >
              Bắt Đầu
            </button>
          )}

          <button
            onClick={handleReset}
            className="control-btn reset-btn"
            id="resetBtn"
          >
            Đặt Lại
          </button>
        </div>
        <div className="status-message" id="statusMessage" />
      </div>
    );
  }
}