import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { endPoint } from "../query/endpoint";
import { QueryReturnType } from "@/dto/base";
import { CreateConnectionResponse, GetAllConnectionSocketResponse } from "@/dto/response/video_call";
import { ConnectionGlobalChanelRequest, CreateConnectionRequest } from "@/dto/request/video_call";

export const videoCallApi = createApi({
  reducerPath: "videoCallApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    createConnection: builder.mutation<QueryReturnType<CreateConnectionResponse>, CreateConnectionRequest>({
      query: (payload) => ({
        ...endPoint.videoCall.createConnection(),
        data: {
          ...payload,
        },
      }),
    }),
    getAllConnectionSocket: builder.query<QueryReturnType<GetAllConnectionSocketResponse>, null>({
      query: () => ({
        ...endPoint.videoCall.getAllConnection(),
      }),
    }),
    connectGlobalChanel: builder.query<QueryReturnType<any>, ConnectionGlobalChanelRequest>({
      query: (payload) => ({
        ...endPoint.videoCall.connectionGlobalChanel(),
        params: {
          uuid: payload.uuid,
        }
      }),
    })
  })
});

export const {
  useGetAllConnectionSocketQuery,
  useConnectGlobalChanelQuery,
  useCreateConnectionMutation,
} = videoCallApi;