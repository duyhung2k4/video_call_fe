// Tạo AudioWorkletProcessor để xử lý âm thanh nhận được từ client A
class ProcessingProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0];
    const output = outputs[0];

    for (let channel = 0; channel < input.length; channel++) {
      const inputChannel = input[channel];
      const outputChannel = output[channel];
      for (let i = 0; i < inputChannel.length; i++) {
        outputChannel[i] = inputChannel[i] * 1;
      }
    }
    return true;
  }
}

// Đăng ký ProcessingProcessor
registerProcessor('processing-processor', ProcessingProcessor);