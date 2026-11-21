const NOTES=[36,39,41,43,46,48,51,53,55,58,60];
const NOTE_NAMES=['C','C♯','D','E♭','E','F','F♯','G','A♭','A','B♭','B'];
const noteName=n=>NOTE_NAMES[n%12]+(Math.floor(n/12)-1);
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
class Engine {
 constructor(seed=0x4d4d4f){this.seed=seed>>>0||1;this.running=false;this.held=false;this.octave=0;this.mutation=35;this.cutoff=53;this.resonance=53;this.env=53;this.accent=60;this.slide=33;this.pending=false;this.cycleStarted=false;this.cycleCount=0;this.nextStep=0;this.current=-1;this.clock=0;this.nextAt=0;this.ledUntil=0;this.density=6;this.bpm=134;this.form=410;this.phase=0;this.freq=65.406;this.targetFreq=this.freq;this.amp=0;this.targetAmp=0;this.fe=0;this.accented=false;this.gateUntil=0;this.pot=[134,6,35,53,53,53,60,33];this.q=this.pot.slice();this.mode='filtered';this.waveShape='saw';this.rawMix=0;this.x1=2.5;this.x2=2.5;this.x3=2.5;this.ic1=0;this.ic2=0;this.g=0.1;this.k=.3;this.newPattern();}
 rand(n){let x=this.seed;x^=x<<13;x^=x>>>17;x^=x<<5;this.seed=x>>>0||1;return this.seed%n;}
 newPattern(){const choices=[0,0,0,1,2,3,4,5,5,6,7,8,10];this.pitch=Array.from({length:8},()=>choices[this.rand(choices.length)]);this.pitch[0]=0;this.order=[0,1,2,3,4,5,6,7];for(let i=7;i>1;i--){let j=1+this.rand(i);[this.order[i],this.order[j]]=[this.order[j],this.order[i]];}this.accents=Array.from({length:8},()=>this.rand(4)===0);this.accents[0]=true;this.slideRoll=Array.from({length:8},()=>this.rand(100));this.slideRoll[7]=100;this.rank();this.revision=(this.revision||0)+1;this.event='NEW PATTERN';}
 rank(){this.rankOf=[];this.order.forEach((s,i)=>this.rankOf[s]=i);}
 mutate(){let s=this.order[this.rand(this.density)],choice=this.rand(4);if(choice===0&&this.density<8&&this.density>1){let a=1+this.rand(this.density-1),b=this.density+this.rand(8-this.density);[this.order[a],this.order[b]]=[this.order[b],this.order[a]];this.rank();this.event='REST EXCHANGE';}else if(choice===1){this.accents[s]=!this.accents[s];this.event='ACCENT MUTATION';}else if(choice===2){this.slideRoll[s]=this.rand(100);this.slideRoll[7]=100;this.event='SLIDE MUTATION';}else{let n=this.pitch[s]+(this.rand(2)?1:-1);this.pitch[s]=clamp(n,0,NOTES.length-1);this.event='PITCH MUTATION';}this.revision++;}
 setControls(...v){this.pot=v.map((n,i)=>clamp(+n,i===0?40:i===1?1:0,i===0?240:i===1?8:100));}
 readControls(){for(let i=0;i<8;i++)this.q[i]+=(this.pot[i]-this.q[i])*.25;this.bpm=Math.round(this.q[0]);this.density=Math.round(this.q[1]);this.mutation=Math.round(this.q[2]);this.cutoff=this.q[3];this.resonance=this.q[4];this.env=this.q[5];this.accent=this.q[6];this.slide=Math.round(this.q[7]);}
 slideAt(i){return i>=0&&i<7&&this.slideRoll[i]<this.slide;}
 toggle(seed){if(!this.human){this.human=true;this.seed=seed>>>0||1;this.newPattern();}this.running=!this.running;if(this.running){this.nextStep=0;this.current=-1;this.cycleStarted=false;this.cycleCount=0;this.nextAt=this.clock;}else{this.release();this.ledUntil=0;this.current=-1;if(this.pending){this.newPattern();this.pending=false;}}}
 generate(seed){if(!this.human){this.human=true;this.seed=seed>>>0||1;}if(this.running){this.pending=true;this.event='QUEUED';}else this.newPattern();}
 toggleHold(){this.held=!this.held;this.event=this.held?'PATTERN HELD':'MUTATION RELEASED';}
 release(){this.targetAmp=0;this.gateUntil=0;}
 step(){if(this.nextStep===0){if(this.pending){this.newPattern();this.pending=false;this.cycleCount=0;}else if(this.cycleStarted&&++this.cycleCount>=4){this.cycleCount=0;if(!this.held&&this.rand(10000)<this.mutation*100)this.mutate();}this.cycleStarted=true;}const period=Math.round(300000/this.bpm),s=this.nextStep,prev=this.current,active=this.rankOf[s]<this.density;const glide=active&&prev>=0&&this.rankOf[prev]<this.density&&this.slideAt(prev)&&this.targetAmp>0;let next=(s+1)%8;const tie=active&&s!==7&&this.slideAt(s)&&this.rankOf[next]<this.density;
 if(active){this.targetFreq=440*2**((NOTES[this.pitch[s]]+this.octave*12-69)/12);if(!glide){this.freq=this.targetFreq;this.fe=1;this.amp*=.72;}this.accented=this.accents[s];if(glide&&this.accented)this.fe=Math.max(this.fe,.72);this.targetAmp=this.accented?.70+.30*this.accent/60: .70;this.targetAmp=Math.min(1.12,this.targetAmp);this.gateUntil=this.clock+(tie?period+2:Math.round(period*.69));}else this.release();this.ledUntil=this.clock+(active?600:160);this.current=s;this.nextStep=next;this.nextAt+=period;if(this.clock>=this.nextAt)this.nextAt=this.clock+period;}
 next(){if(this.clock%160===0)this.readControls();if(this.running&&this.clock>=this.nextAt)this.step();if(this.gateUntil&&this.clock>=this.gateUntil)this.release();this.freq+=(this.targetFreq-this.freq)*.0019;this.amp+=(this.targetAmp-this.amp)*(this.targetAmp>this.amp?.023:.007);this.fe*=.99947;this.phase=(this.phase+this.freq/20000)%1;let x=this.waveShape==='square'?(this.phase<.5?1:-1):2*this.phase-1;let m=this.resonance/100, cutnorm=this.cutoff/100, e=this.env/100;
 // Resonant state-variable low-pass; coefficients at control rate. Browser DSP, not AVR firmware.
 if(this.clock%16===0){let base=100*2**(cutnorm*4.6-.636),sweep=(3.36*e+(this.accented?.75*this.accent/60:0))*this.fe;let cut=clamp(base*2**sweep,80,4400);this.g=Math.tan(Math.PI*cut/20000);this.k=1/(1.6+7.2*m);}
 let a1=1/(1+this.g*(this.g+this.k)),a2=this.g*a1,a3=this.g*a2,v3=x*.45-this.ic2,v1=a1*this.ic1+a2*v3,v2=this.ic2+a2*this.ic1+a3*v3;this.ic1=2*v1-this.ic1;this.ic2=2*v2-this.ic2;let y=Math.tanh(v2*(1.15+2.1*m)) * this.amp*.82;let pwm=clamp(Math.round(128+y*127),0,255);this.lastPWM=pwm;
 // Nominal REV A passive output, retained from the V0.1 simulator.
 const u=5*pwm/256,a=this.x1,b=this.x2,c=this.x3;const filtered=.24226804123711337*(b-c);this.x1=.20183385723193736*a+.07653586283817065*b+.028388923121202985*c+.6932413568086889*u;this.x2=.2525683473659628*a+.20552387272587547*b+.18160084008594682*c+.36030693982221507*u;this.x3=.00009368344629996987*a+.00018160084008594696*b+.9996644455351316*c+.0000602701784825542*u;const raw=(u-2.5)*.182;this.rawMix+=((this.mode==='raw'?1:0)-this.rawMix)*.004;this.clock++;return clamp((filtered+(raw-filtered)*this.rawMix)*1.35,-0.98,0.98);}
 state(){return {running:this.running,mutation:this.mutation,held:this.held,octave:this.octave,wave:this.waveShape,pending:this.pending,current:this.current,bpm:this.bpm,density:this.density,cycle:this.cycleCount,revision:this.revision,event:this.event};}
 message(m){switch(m.type){case 'restore':Object.assign(this,m.state);this.rank();break;case 'controls':this.setControls(...m.values);break;case 'run':this.toggle(m.seed);break;case 'generate':this.generate(m.seed);break;case 'hold':this.toggleHold();break;case 'octave':this.octave=m.value;break;case 'filter':this.mode=m.value;break;case 'wave':this.waveShape=m.value;break;}}
}
export class Renderer{
  constructor(rate,notify){
    this.engine=new Engine();
    this.ratio=20000/rate;
    this.frac=0;
    this.a=0;
    this.b=0;
    this.counter=0;
    this.notify=notify;
    this.interval=Math.max(128,Math.round(rate/30));
    this.lastState=null;
  }
  render(out){
    for(let i=0;i<out.length;i++){
      this.frac+=this.ratio;
      while(this.frac>=1){
        this.frac-=1;
        this.a=this.b;
        this.b=this.engine.next();
      }
      out[i]=this.a+(this.b-this.a)*this.frac;
    }
    this.counter+=out.length;
    if(this.counter>=this.interval){
      this.counter%=this.interval;
      const e=this.engine;
      if(!this.lastState||this.lastState.current!==e.current||this.lastState.running!==e.running||this.lastState.revision!==e.revision||this.lastState.held!==e.held||this.lastState.pending!==e.pending){
        this.lastState={running:e.running,current:e.current,revision:e.revision,pending:e.pending,held:e.held};
        this.notify(this.lastState);
      }
    }
  }
}
