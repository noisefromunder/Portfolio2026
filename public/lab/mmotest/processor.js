import { Renderer } from './engine.js';

class AcidProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.renderer = new Renderer(sampleRate, state => this.port.postMessage(state));
    this.port.onmessage = ({data}) => this.renderer.engine.message(data);
  }
  process(inputs, outputs) {
    this.renderer.render(outputs[0][0]);
    return true;
  }
}
registerProcessor('acid-engine', AcidProcessor);
