import React, { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';

import { ROUTER } from '@/constants/router';
import { Button, Stack } from '@mantine/core';
import { useNavigate } from 'react-router';
// import { useNotification } from '@/hook/notification.hook';



const AudioProcessor: React.FC = () => {
  const uuid = Cookies.get("uuid");

  const [isStarted, _] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  // const micNodeRef = useRef<AudioWorkletNode | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  // const noti = useNotification();
  const navigation = useNavigate();



  // const startAudioProcessing = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  //     if (!uuid) {
  //       noti.error("id ko tồn tại");
  //       return;
  //     }
  
  //     const socket = new WebSocket(`${import.meta.env.VITE_API}/api/v1/connect-global-chanel?uuid=${uuid}`);
  //     socketRef.current = socket;
  
  //     socket.addEventListener('open', () => {
  //       console.log('WebSocket connected');
  //     });
      
  //     const audioContext = new AudioContext({ sampleRate: 5000 });
  //     audioContextRef.current = audioContext;
  //     await audioContext.audioWorklet.addModule('/mic.js');
      
  //     const micNode = new AudioWorkletNode(audioContext, 'mic-processor');
  //     micNodeRef.current = micNode;
    
  //     const micSource = audioContext.createMediaStreamSource(stream);
  //     micSource.connect(micNode);
  
  //     micNode.port.onmessage = (e) => {
  //       const audioBuffer = e.data[0];
  //       const data = JSON.stringify({ data: Array.from(audioBuffer) });
  //       socket.send(data);
  //     };
  
  //     const audioStreams = new Map();
  //     const audioContextListen = new AudioContext({ sampleRate: 5000 });
  //     await audioContextListen.audioWorklet.addModule('/process.js');
  
  //     socket.addEventListener('message', (event) => {
  //       const obj = JSON.parse(event.data);
  
  //       for (let uuid in obj) {
  //         if (!audioStreams.has(uuid)) {
  //           const incomingBufferQueue: any = [];
  //           const processingNode = new AudioWorkletNode(audioContextListen, 'processing-processor');
  
  //           const lowPassFilter = audioContextListen.createBiquadFilter();
  //           lowPassFilter.type = 'lowpass';
  //           lowPassFilter.frequency.setValueAtTime(5000, audioContextListen.currentTime);
  
  //           processingNode.connect(lowPassFilter);
  //           lowPassFilter.connect(audioContextListen.destination);
  
  //           audioStreams.set(uuid, { incomingBufferQueue, processingNode });
  //         }
  
  //         const stream = audioStreams.get(uuid);
  //         const float32Array = new Float32Array(obj[uuid]);
  //         stream.incomingBufferQueue.push(...float32Array);
  
  //         if (stream.incomingBufferQueue.length >= audioContextListen.sampleRate * 0.5) {
  //           const buffer = audioContextListen.createBuffer(1, stream.incomingBufferQueue.length, audioContextListen.sampleRate);
  //           buffer.getChannelData(0).set(stream.incomingBufferQueue);
  //           stream.incomingBufferQueue = [];
  
  //           applyFadeEffect(buffer);
  
  //           const sourceNode = audioContextListen.createBufferSource();
  //           sourceNode.buffer = buffer;
  
  //           sourceNode.connect(stream.processingNode);
  //           sourceNode.start();
  //         }
  //       }
  //     });
  
  //     const applyFadeEffect = (audioBuffer: any) => {
  //       const data = audioBuffer.getChannelData(0);
  //       const fadeLength = Math.min(audioBuffer.sampleRate * 0.1, data.length); // 0.1 giây fade
  
  //       // Fade-in
  //       for (let i = 0; i < fadeLength; i++) {
  //         data[i] *= i / fadeLength;
  //       }
  
  //       // Fade-out
  //       for (let i = data.length - fadeLength; i < data.length; i++) {
  //         data[i] *= (data.length - i) / fadeLength;
  //       }
  //     };
  //   } catch (error) {
  //     console.log("Error permission: ", error)
  //   }
  // };



  useEffect(() => {
    if (!uuid) {
      navigation(ROUTER.CONNECTION.href);
    }
  }, []);

  useEffect(() => {
    return () => {
      audioContextRef.current?.close();
      socketRef.current?.close();
    };
  }, []);



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
        disabled={isStarted}
        onClick={async () => {
          // if (!isStarted) {
          //   startAudioProcessing();
          //   setIsStarted(true);
          // }
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            console.log('Microphone stream:', stream);
          } catch (error: any) {
            if (error.name === 'NotAllowedError') {
              console.error('Permission denied. Please check microphone access in Safari settings.');
            } else if (error.name === 'NotFoundError') {
              console.error('No microphone device found.');
            } else {
              console.error('Unknown error:', error);
            }
          }
        }}
      >
        {!isStarted ? "Start" : "Calling"}
      </Button>
    </Stack>
  );
};

export default AudioProcessor;