"use client";

import * as Ably from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";
import { PropsWithChildren } from "react";

export default function AblyProviderComponent({
  children,
}: PropsWithChildren<{}>) {
  const client = new Ably.Realtime({ authUrl: "/api/ably" });
  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName="ably-demo">{children}</ChannelProvider>
    </AblyProvider>
  );
}
