import React from "react";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import ChatContent from "./chat-content";
import ChatInput from "./chat-input";

function Chat() {
  return (
    <Card className="max-w-5xl mx-auto mt-8 border border-green-500/50">
      <h3 className="text-sm font-medium mt-4 text-center text-pretty tracking-widest">
        Ably chat with nextjs 14
      </h3>
      <Separator className="my-3" />

      <div className="flex flex-col h-80">
        <ChatContent />
        <ChatInput />
      </div>
    </Card>
  );
}

export default Chat;
