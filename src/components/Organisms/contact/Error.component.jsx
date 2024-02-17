import React from "react";
export default function Error(props) {
  const { message } = props;
  return <div className="error-message">{message}</div>;
}
