import React from "react";

import { Button, Stack } from "@mantine/core";
import { useCreateConnectionMutation } from "@/redux/api/video_call";
import { CreateConnectionRequest } from "@/dto/request/video_call";
import { useNotification } from "@/hook/notification.hook";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constants/router";



const Connection: React.FC = () => {
  const [post, { isLoading }] = useCreateConnectionMutation();

  const noti = useNotification();
  const navigation = useNavigate();



  const handleCreateConnection = async () => {
    const payload: CreateConnectionRequest = {};
    const result = await post(payload);

    console.log(result);

    if("error" in result) {
      noti.error("Kết nối thất bại!");
      return;
    }

    noti.success("Kết nối thành công!");
    navigation(ROUTER.CALL.href);
  }

  return (
    <Stack
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button 
        loading={isLoading}
        disabled={isLoading}
        onClick={handleCreateConnection}
      >Connect</Button>
    </Stack>
  )
}

export default Connection;