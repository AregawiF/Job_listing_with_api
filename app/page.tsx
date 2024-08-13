"use client";

import { Provider } from "react-redux";
import JobList from "./components/JobList";
import store from "./service/store";

export default function Home() {
  return (
    <Provider store={store}>
      <JobList />
    </Provider>
  );
}
