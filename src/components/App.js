import React from "react";
import "../stylesheets/App.scss";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import Editor from "./Editor";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodData: {
        date: moment(new Date()).format("YYYY-MM-DD"),
        mood: "",
        message: "",
      },
      moodDataArr: JSON.parse(localStorage.getItem("moodDataStored")) || [],
    };
    this.moodInputsHandler = this.moodInputsHandler.bind(this);
    this.storeInfoLS = this.storeInfoLS.bind(this);
    this.btnSaveHandler = this.btnSaveHandler.bind(this);
    this.resetMoodData = this.resetMoodData.bind(this);
  }

  storeInfoLS() {
    this.setState(
      (prevState) => {
        return {
          moodDataArr: prevState.moodDataArr
            .concat(prevState.moodData)
            //Sort dates by reformating them with moment
            .sort(
              (a, b) =>
                moment(a.date).format("YYYYMMDD") -
                moment(b.date).format("YYYYMMDD")
            ),
        };
      },
      () =>
        localStorage.setItem(
          "moodDataStored",
          JSON.stringify(this.state.moodDataArr)
        )
    );
  }

  moodInputsHandler = (e) => {
    const { value, name } = e.currentTarget;

    this.setState((prevState) => {
      return {
        moodData: {
          ...prevState.moodData,
          [name]: value,
        },
      };
    });
  };

  btnSaveHandler = (e) => {
    this.storeInfoLS();
  };

  resetMoodData() {
    this.setState({
      moodData: {
        date: moment(new Date()).format("YYYY-MM-DD"),
        mood: ":)",
        message: "",
      },
    });
  }

  render() {
    const { date, mood, message } = this.state.moodData;
    const { moodDataArr } = this.state;
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/">
              <Home
                moodDataArr={moodDataArr}
                btnNewRecordHandler={this.state.resetMoodData}
              />
            </Route>
            <Route path="/editor">
              <Editor
                date={date}
                mood={mood}
                message={message}
                moodInputsHandler={this.moodInputsHandler}
                btnSaveHandler={this.btnSaveHandler}
                btnCancelHandler={this.resetMoodData}
              />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
