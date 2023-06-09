import React from "react";
import Notifications from "./Notifications";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { noficationsApi } from "../../Store/Slices/notificationSlice";

const NotificationsWrapper = () => {
  return (
    <>
      <ApiProvider api={noficationsApi}>
        <Notifications />
      </ApiProvider>
    </>
  );
};

export default NotificationsWrapper;
