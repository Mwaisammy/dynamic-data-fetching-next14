"use client";
import { useMessage } from "@/store/use-message-store";
import { useChannel } from "ably/react";
import React from "react";
import { receiveMessageOnPort } from "worker_threads";

function ChatContent() {
  const { receivedMessages } = useMessage();

  const { ably } = useChannel("ably-demo", (message) => {
    console.log(message);
  });

  // console.log(receivedMessages);

  return (
    <div className="flex-1">
      {!!receivedMessages &&
        receivedMessages.map((message) => {
          const isMyMessage = message.connectionId === ably.connection.id;
          return <div key={message.id}>{message.data.message}</div>;
        })}
    </div>
  );
}

export default ChatContent;
