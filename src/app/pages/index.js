import Head from "next/head";
import * as React from "react";
import App from "../components/App";

export default class Index extends React.Component {
  static getInitialProps() {
    return {
      now: Date.now()
    };
  }

  componentDidMount() {
    console.log("mounted");
  }
  render() {
    return (
      <>
        <Head>
          <title>Index</title>
        </Head>
        <App>
          <p>Index Page</p>
          Server created at {this.props.now}
        </App>
      </>
    );
  }
}
