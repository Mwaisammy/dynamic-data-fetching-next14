"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { messageSchema } from "@/lib/validators";
import { useMessage } from "@/store/use-message-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useChannel } from "ably/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function ChatInput() {
  const { setReceivedMessages } = useMessage();
  const { channel } = useChannel("ably-demo", (message) => {
    //@ts-expect-error
    setReceivedMessages((prevMessages) => [...prevMessages, message]);
  });
  const form = useForm<z.infer<typeof messageSchema>>({
    defaultValues: {
      message: "",
    },
    resolver: zodResolver(messageSchema),
  });

  const onSubmit = (values: z.infer<typeof messageSchema>) => {
    const allMessages = {
      ...values,
      id: Date.now(),
      createdAt: new Date(),
    };

    channel.publish({ name: "channel-name", data: allMessages });
    form.reset(); // clears the form
  };
  return (
    <div className="mb-2 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center w-full container gap-x-3  "
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="shadcn"
                    {...field}
                    className="w-[500px] md:w-[550px] lg:w-[900px] flex-1"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={!form.formState.isValid}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ChatInput;
