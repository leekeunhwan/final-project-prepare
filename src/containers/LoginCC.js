import React from "react";
import { UserConsumer } from "../contexts/UserContext";
import Login from "../components/Login";
import Join from "../components/Join";

export default class LoginCC extends React.Component {
  render() {
    if (localStorage.getItem("token")) {
      return <div>로그인 성공</div>;
    } else {
      return (
        <React.Fragment>
          {window.confirm("계정을 생성하시겠습니까?") ? (
            <Join />
          ) : (
            <UserConsumer>
              {({ login }) => (
                <Login
                  onLogin={async (username, password) => {
                    await login(username, password);
                  }}
                />
              )}
            </UserConsumer>
          )}
        </React.Fragment>
      );
    }
  }
}
