import React from "react";
import { Button } from "semantic-ui-react";
// import { useQuery, useMutation } from "@apollo/client";
// import { IS_FOLLOW, FOLLOW, UN_FOLLOW } from "../../../../gql/follow";
import "./HeaderProfile.scss";

export default function HeaderProfile(props) {
  const { getUser, auth, handlerModal } = props;

  return (
    <div className="header-profile">
      <h2>{getUser.username}</h2>
      {getUser.username === auth.username ? (
        <Button onClick={() => handlerModal("settigns")}>Ajustes</Button>
      ) : (
        !loading && buttonFollow()
      )}
    </div>
  );
}
