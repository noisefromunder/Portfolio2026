import { Renderer } from './engine.js';

class AcidProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.renderer = new Renderer(sampleRate, state => this.port.postMessage(state));
    this.port.onmessage = ({data}) => this.renderer.engine.message(data);
  }
  process(inputs, outputs) {
    const output = outputs[0];
    if (!output || !output[0]) return true;
    this.renderer.render(output[0]);
    if (output.length > 1) {
      output[1].set(output[0]);
    }
    return true;
  }
}
registerProcessor('acid-engine', AcidProcessor);
