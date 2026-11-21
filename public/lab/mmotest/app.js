import {positions} from './layout.js';
const panel = document.querySelector('#panel');
const play = document.querySelector('#play');
const status = document.querySelector('#status');
const values = [134,6,35,53,53,53,60,33];
const names = ['RATE','DENSITY','MUTATION','CUTOFF','RES','ENV','ACCENT','SLIDE'];
const seed = 0x4d4d4f;
let context, node, ready, running = false, square = false, octave = 0;
function place(element, ref) {
  const [x,y] = positions[ref];
  Object.assign(element.style,{left:x+'%',top:y+'%'});
  panel.append(element);
  return element;
}
function send(type, extra={}) {node?.port.postMessage({type,...extra});}
async function audio() {
  context ??= new AudioContext();
  await context.resume();
  ready ??= context.audioWorklet.addModule('./processor.js').then(() => {
    node = new AudioWorkletNode(context,'acid-engine',{numberOfInputs:0,outputChannelCount:[1]});
    node.port.onmessage = ({data:s}) => {
      lamps.forEach((lamp,i) => lamp.classList.toggle('on',s.running && s.current===i));
      document.querySelector('#pattern').textContent = s.revision + (s.pending?' · queued':'') + (s.held?' · HOLD':'');
      keys[4].setAttribute('aria-pressed',s.held);
    };
    node.connect(context.destination);
    send('controls',{values});
  }).catch(error => {ready=null;throw error;});
  await ready;
}
async function press(i) {
  try {await audio();} catch {status.textContent='Audio failed to start. Open via HTTPS or localhost and try again.';return;}
  if(i===0){running=!running;send('run',{seed});keys[0].setAttribute('aria-pressed',running);play.textContent=running?'■ Stop':'▶ Play';status.textContent=running?'Sequencer running':'Sequencer stopped';}
  if(i===1){send('generate',{seed});status.textContent=running?'New pattern at the start of next cycle':'New pattern ready';}
  if(i===2){square=!square;send('wave',{value:square?'square':'saw'});document.querySelector('#wave').textContent=square?'Square':'Saw';}
  if(i===3){octave=octave===0?1:octave===1?-1:0;send('octave',{value:octave});document.querySelector('#oct').textContent=octave;}
  if(i===4)send('hold');
}
play.onclick=()=>press(0);
const keys=['RUN','GEN','WAVE','OCT','HOLD'].map((name,i)=>{
  const b=document.createElement('button');b.className='control key';b.title=name;b.setAttribute('aria-label',name);b.onclick=()=>press(i);return place(b,'SW'+(i+1));
});
const lamps=Array.from({length:8},(_,i)=>{const el=document.createElement('span');el.className='lamp';return place(el,'D'+(i+1));});
names.forEach((name,i)=>{
  const el=document.createElement('button'), min=i===0?40:i===1?1:0, max=i===0?240:i===1?8:100;
  el.className='control knob';el.setAttribute('role','slider');el.setAttribute('aria-label',name);el.setAttribute('aria-valuemin',min);el.setAttribute('aria-valuemax',max);
  function set(v, announce=true){
    values[i]=Math.max(min,Math.min(max,Math.round(v)));el.setAttribute('aria-valuenow',values[i]);el.title=name+' · '+values[i];el.style.setProperty('--angle',(-135+270*(values[i]-min)/(max-min))+'deg');
    if(announce)status.textContent=el.title;
    document.querySelector('#tempo').textContent=values[0]+' BPM';send('controls',{values});
  }
  let origin,start;
  el.onpointerdown=e=>{origin=e.clientY;start=values[i];el.setPointerCapture(e.pointerId);status.textContent=el.title;};
  el.onpointermove=e=>{if(el.hasPointerCapture(e.pointerId))set(start+(origin-e.clientY)*(max-min)/130);};
  el.onkeydown=e=>{const delta={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1}[e.key];if(delta||['Home','End'].includes(e.key)){e.preventDefault();set(delta?values[i]+delta:e.key==='Home'?min:max);}};
  set(values[i],false);place(el,'RV'+(i+1));
});
