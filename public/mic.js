// Tạo AudioWorkletProcessor để xử lý âm thanh từ mic
class MicProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0];
    this.port.postMessage(input);

    return true;
  }
}

// Đăng ký MicProcessor
registerProcessor('mic-processor', MicProcessor);