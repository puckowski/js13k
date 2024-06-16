class t{static create(){let t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static perspective(t,e,o,n,r){let i=1/Math.tan(e/2),a=1/(n-r);return t[0]=i/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+n)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*n*a,t[15]=0,t}static translate(t,e,o){let n=o[0],r=o[1],i=o[2];return e===t?(t[12]=e[0]*n+e[4]*r+e[8]*i+e[12],t[13]=e[1]*n+e[5]*r+e[9]*i+e[13],t[14]=e[2]*n+e[6]*r+e[10]*i+e[14],t[15]=e[3]*n+e[7]*r+e[11]*i+e[15]):(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[0]*n+e[4]*r+e[8]*i+e[12],t[13]=e[1]*n+e[5]*r+e[9]*i+e[13],t[14]=e[2]*n+e[6]*r+e[10]*i+e[14],t[15]=e[3]*n+e[7]*r+e[11]*i+e[15]),t}}class e{constructor(t,e){this.width=t,this.height=e,this.data=new Uint8Array(t*e*4)}drawRectangle(t,e,o,n,r,i,a,c){for(let s=e;s<e+n;s++)for(let e=t;e<t+o;e++){let t=4*(s*this.width+e);this.data[t]=r,this.data[t+1]=i,this.data[t+2]=a,this.data[t+3]=c}return this}addRandomNoise(t,e,o,n=!1){const r=t=>{const e=Math.floor(.2*t),o=Math.max(0,t-e),n=Math.min(255,t+e);return Math.floor(Math.random()*(n-o+1))+o};for(let i=0;i<this.height;i+=8)for(let a=0;a<this.width;a+=8){const c=r(t),s=r(e),u=r(o);for(let t=0;t<8;t++)for(let e=0;e<8;e++){if(i+t>=this.height||a+e>=this.width)continue;let o=4*((i+t)*this.width+(a+e));n?(this.data[o]=c,this.data[o+1]=s,this.data[o+2]=u):(this.data[o]=Math.floor(.5*this.data[o]+.5*c),this.data[o+1]=Math.floor(.5*this.data[o+1]+.5*s),this.data[o+2]=Math.floor(.5*this.data[o+2]+.5*u)),this.data[o+3]=255}}return this}copyRows(t,e){const o=Math.floor(.25*this.height);t+=o;for(let n=0;n<o;n++)for(let r=0;r<this.width;r++){const i=4*((t-o+n)*this.width+r),a=4*((e+n)*this.width+r);this.data[a]=this.data[i],this.data[a+1]=this.data[i+1],this.data[a+2]=this.data[i+2],this.data[a+3]=this.data[i+3]}return this}getData(){return this.data}}const o={1:[[1,1,1,1,1,1,1,1,1,1],[1,2,0,0,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,0,1],[1,3,1,0,0,0,0,1,0,1],[1,0,1,0,1,1,0,1,0,1],[1,0,1,0,0,1,0,1,0,1],[1,0,1,1,0,1,0,1,0,1],[1,0,0,0,0,1,0,1,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]],2:[[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,2,1],[1,0,1,1,1,1,1,1,0,1],[1,0,1,0,0,0,0,1,3,1],[1,0,1,0,1,1,0,1,0,1],[1,0,1,0,0,1,0,1,0,1],[1,0,1,1,0,1,0,1,0,1],[1,0,0,0,0,1,0,1,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]]};let n=!1,r=1,i=3,a=0,c=o[1];const s=new Map;s.set(1,2),s.set(2,1);let u,d=1,f=8,l=1,R=1;const h=document.getElementById("glCanvas"),g=h.getContext("webgl");g||(alert("WebGL not supported, falling back on experimental-webgl"),g=h.getContext("experimental-webgl")),g||alert("Your browser does not support WebGL"),g.enable(g.BLEND),g.blendFunc(g.SRC_ALPHA,g.ONE_MINUS_SRC_ALPHA);const A=new e(256,256);A.drawRectangle(0,0,32,32,65,64,64,255).drawRectangle(32,0,32,32,87,86,85,255).drawRectangle(64,0,32,32,65,64,64,255).drawRectangle(96,0,32,32,87,86,85,255).drawRectangle(128,0,32,32,65,64,64,255).drawRectangle(160,0,32,32,87,86,85,255).drawRectangle(192,0,32,32,65,64,64,255).drawRectangle(224,0,32,32,87,86,85,255).drawRectangle(0,32,32,32,85,84,84,255).drawRectangle(32,32,32,32,107,106,105,255).drawRectangle(64,32,32,32,85,84,84,255).drawRectangle(96,32,32,32,107,106,105,255).drawRectangle(128,32,32,32,85,84,84,255).drawRectangle(160,32,32,32,107,106,105,255).drawRectangle(192,32,32,32,85,84,84,255).drawRectangle(224,32,32,32,107,106,105,255).copyRows(0,64).copyRows(32,96).copyRows(0,128).copyRows(32,160).copyRows(0,192).copyRows(32,224).addRandomNoise(85,84,84);const p=N(g,256,256,A),x=new e(256,256);x.drawRectangle(0,0,32,32,146,135,121,255).drawRectangle(32,0,32,32,131,121,108,255).drawRectangle(64,0,32,32,146,135,121,255).drawRectangle(96,0,32,32,131,121,108,255).drawRectangle(128,0,32,32,146,135,121,255).drawRectangle(160,0,32,32,131,121,108,255).drawRectangle(192,0,32,32,146,135,121,255).drawRectangle(224,0,32,32,131,121,108,255).drawRectangle(0,32,32,32,116,108,96,255).drawRectangle(32,32,32,32,102,94,84,255).drawRectangle(64,32,32,32,116,108,96,255).drawRectangle(96,32,32,32,102,94,84,255).drawRectangle(128,32,32,32,116,108,96,255).drawRectangle(160,32,32,32,102,94,84,255).drawRectangle(192,32,32,32,116,108,96,255).drawRectangle(224,32,32,32,102,94,84,255).copyRows(0,64).copyRows(32,96).copyRows(0,128).copyRows(32,160).copyRows(0,192).copyRows(32,224).addRandomNoise(90,48,16);const w=N(g,256,256,x),E=new e(256,256);E.addRandomNoise(0,105,62);const m=N(g,256,256,E),T=new e(256,256);T.drawRectangle(0,0,256,256,255,255,255,0).drawRectangle(112,32,16,16,0,0,0,255).drawRectangle(118,48,4,96,0,0,0,255).drawRectangle(76,76,88,4,0,0,0,255).drawRectangle(114,144,4,96,0,0,0,255).drawRectangle(122,144,4,96,0,0,0,255).drawRectangle(122,144,4,96,0,0,0,255);const y=N(g,256,256,T),F=new Map;function b(t,e,o){const n=function(t,e){return{positions:[t,0,e,t+1,0,e,t,1,e,t+1,1,e],textureCoordinates:[0,1,1,1,0,0,1,0],indices:[0,1,2,2,1,3]}}(e,o),r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n.positions),t.STATIC_DRAW);const i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n.textureCoordinates),t.STATIC_DRAW);const a=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,a),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(n.indices),t.STATIC_DRAW),{position:r,textureCoord:i,indices:a,vertexCount:n.indices.length}}function _(t,e,o,n){const r=t.getUniformLocation(e.program,"uColor");t.bindBuffer(t.ARRAY_BUFFER,o.position),t.vertexAttribPointer(e.attribLocations.vertexPosition,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexPosition),t.bindBuffer(t.ARRAY_BUFFER,o.textureCoord),t.vertexAttribPointer(e.attribLocations.textureCoord,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.textureCoord),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,o.indices),t.uniformMatrix4fv(e.uniformLocations.modelViewMatrix,!1,n),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,y),t.uniform1i(e.uniformLocations.uSampler,0),t.uniform4f(r,0,0,0,0),t.drawElements(t.TRIANGLES,o.vertexCount,t.UNSIGNED_SHORT,0)}F.set(1,w),F.set(2,m);const L=function(t,e,o){const n=[],r=[];for(let r=0;r<=e;r++){const i=r*Math.PI/e,a=Math.sin(i),c=Math.cos(i);for(let e=0;e<=o;e++){const r=2*e*Math.PI/o,i=Math.sin(r),s=Math.cos(r)*a,u=c,d=i*a;n.push(t*s,t*u,t*d)}}for(let t=0;t<e;t++)for(let e=0;e<o;e++){const n=t*(o+1)+e,i=n+o+1;r.push(n,i,n+1,i,i+1,n+1)}return{positions:n,indices:r}}(.25,30,30),C=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,C),g.bufferData(g.ARRAY_BUFFER,new Float32Array(L.positions),g.STATIC_DRAW);const B=g.createBuffer();g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,B),g.bufferData(g.ELEMENT_ARRAY_BUFFER,new Uint16Array(L.indices),g.STATIC_DRAW);const U={position:C,indices:B,vertexCount:L.indices.length};function v(t,e,o){const n=t.createShader(e);return t.shaderSource(n,o),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)?n:(alert("An error occurred compiling the shaders: "+t.getShaderInfoLog(n)),t.deleteShader(n),null)}const M=function(t,e,o){const n=v(t,t.VERTEX_SHADER,e),r=v(t,t.FRAGMENT_SHADER,o),i=t.createProgram();return t.attachShader(i,n),t.attachShader(i,r),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)?i:(alert("Unable to initialize the shader program: "+t.getProgramInfoLog(i)),null)}(g,"\nattribute vec4 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nvarying highp vec2 vTextureCoord;\nvarying highp vec3 vFragPos;\n\nvoid main(void) {\ngl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\nvTextureCoord = aTextureCoord;\nvFragPos = (uModelViewMatrix * aVertexPosition).xyz;\n}\n","\nvarying highp vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform highp vec3 fogColor;\nuniform highp float fogNear;\nuniform highp float fogFar;\nvarying highp vec3 vFragPos;\nuniform highp vec4 uColor;\n\nvoid main(void) {\n    if (uColor.a != 0.0) {\n        gl_FragColor = uColor;\n    } else {\n        highp vec4 textureColor = texture2D(uSampler, vTextureCoord);\n        highp float fogDistance = length(vFragPos);\n        highp float fogFactor = smoothstep(fogNear, fogFar, fogDistance);\n        gl_FragColor = mix(textureColor, vec4(fogColor, 1.0), fogFactor);\n        gl_FragColor.a *= textureColor.a;  // Apply texture alpha\n    }\n}\n"),P={program:M,attribLocations:{vertexPosition:g.getAttribLocation(M,"aVertexPosition"),textureCoord:g.getAttribLocation(M,"aTextureCoord")},uniformLocations:{projectionMatrix:g.getUniformLocation(M,"uProjectionMatrix"),modelViewMatrix:g.getUniformLocation(M,"uModelViewMatrix"),uSampler:g.getUniformLocation(M,"uSampler"),fogColor:g.getUniformLocation(M,"fogColor"),fogNear:g.getUniformLocation(M,"fogNear"),fogFar:g.getUniformLocation(M,"fogFar"),uColor:g.getUniformLocation(M,"uColor")}};let S=D(g);function D(t){const e=[],o=[],n=[],r=[],i=[],a=[];let s=0;for(let t=0;t<c.length;t++)for(let r=0;r<c[t].length;r++)1===c[t][r]&&(e.push(r,0,t,r+1,0,t,r,1,t,r+1,1,t),o.push(0,0,1,0,0,1,1,1),n.push(s,s+1,s+2,s+2,s+1,s+3),s+=4,e.push(r,0,t+1,r+1,0,t+1,r,1,t+1,r+1,1,t+1),o.push(0,0,1,0,0,1,1,1),n.push(s,s+1,s+2,s+2,s+1,s+3),s+=4,e.push(r+1,0,t,r+1,0,t+1,r+1,1,t,r+1,1,t+1),o.push(0,0,1,0,0,1,1,1),n.push(s,s+1,s+2,s+2,s+1,s+3),s+=4,e.push(r,0,t,r,0,t+1,r,1,t,r,1,t+1),o.push(0,0,1,0,0,1,1,1),n.push(s,s+1,s+2,s+2,s+1,s+3),s+=4);for(let t=0;t<c.length;t++)for(let e=0;e<c[t].length;e++)r.push(e,0,t,e+1,0,t,e,0,t+1,e+1,0,t+1),i.push(0,0,1,0,0,1,1,1),a.push(s,s+1,s+2,s+2,s+1,s+3),s+=4;const u=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,u),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e.concat(r)),t.STATIC_DRAW);const d=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,d),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o.concat(i)),t.STATIC_DRAW);const f=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,f),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(n.concat(a)),t.STATIC_DRAW),{position:u,textureCoord:d,indices:f,vertexCount:n.length+a.length,wallVertexCount:n.length,floorVertexCount:a.length}}function N(t,e,o,n){const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const i=n.getData();return t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e,o,0,t.RGBA,t.UNSIGNED_BYTE,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),r}function I(e,o,n,r,i,a){e.clearColor(.53,.81,.98,1),e.clearDepth(1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);const s=45*Math.PI/180,h=e.canvas.clientWidth/e.canvas.clientHeight,g=t.create();t.perspective(g,s,h,.1,100);const A=t.create();t.translate(A,A,[-d-.5,-1,-f]);{const t=3,r=e.FLOAT,i=!1,a=0,c=0;e.bindBuffer(e.ARRAY_BUFFER,n.position),e.vertexAttribPointer(o.attribLocations.vertexPosition,t,r,i,a,c),e.enableVertexAttribArray(o.attribLocations.vertexPosition)}{const t=2,r=e.FLOAT,i=!1,a=0,c=0;e.bindBuffer(e.ARRAY_BUFFER,n.textureCoord),e.vertexAttribPointer(o.attribLocations.textureCoord,t,r,i,a,c),e.enableVertexAttribArray(o.attribLocations.textureCoord)}e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.indices),e.useProgram(o.program),e.uniformMatrix4fv(o.uniformLocations.projectionMatrix,!1,g),e.uniformMatrix4fv(o.uniformLocations.modelViewMatrix,!1,A),e.uniform3f(o.uniformLocations.fogColor,.53,.81,.98),e.uniform1f(o.uniformLocations.fogNear,1),e.uniform1f(o.uniformLocations.fogFar,10),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,r),e.uniform1i(o.uniformLocations.uSampler,0),e.uniform4f(o.uniformLocations.uColor,0,0,0,0);{const t=n.wallVertexCount,o=e.UNSIGNED_SHORT,r=0;e.drawElements(e.TRIANGLES,t,o,r)}e.bindTexture(e.TEXTURE_2D,i);{const t=n.floorVertexCount,o=e.UNSIGNED_SHORT,r=2*n.wallVertexCount;e.drawElements(e.TRIANGLES,t,o,r)}const p=t.create();u=function(t,e,o,n,r=-.25){return[-t+o,r,-e+n+.5]}(d,f,l,R),t.translate(p,p,u),function(t,e,o,n,r){const i=t.getUniformLocation(e.program,"uColor");t.bindBuffer(t.ARRAY_BUFFER,o.position),t.vertexAttribPointer(e.attribLocations.vertexPosition,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexPosition),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,o.indices),t.uniformMatrix4fv(e.uniformLocations.modelViewMatrix,!1,n),t.uniform4fv(i,r),t.drawElements(t.TRIANGLES,o.vertexCount,t.UNSIGNED_SHORT,0)}(e,o,a,p,[0,1,0,1]);for(let t=0;t<c.length;t++)for(let n=0;n<c[t].length;n++)if(3===c[t][n]){_(e,o,b(e,n,t),A)}}function Y(t){c=t,S=D(g);const{x:e,y:o}=function(){for(let t=0;t<c.length;t++)for(let e=0;e<c[t].length;e++)if(2===c[t][e])return{x:e,y:t}}();l=e,R=o,I(g,P,S,p,F.get(r),U),I(g,P,S,p,F.get(r),U)}function q(){const t=document.getElementById("status");i<=0?(n=!1,t.innerText="You lost!"):t.innerText=2===a?"You won!":"Lives: "+i;const e=document.createElement("button");e.innerText="Manual",e.style="color:white;background-color:#2222;margin-left:1rem;",e.onclick=()=>{const t=document.getElementById("overlay");t.hidden?t.removeAttribute("hidden"):t.setAttribute("hidden",!0)},t.appendChild(e)}function z(t,e){!function(){let t=document.getElementById("win");t.setAttribute("hidden",!0),t=document.getElementById("defeat"),t.setAttribute("hidden",!0)}();const o=document.getElementById(t);o.hidden&&(o.removeAttribute("hidden"),o.innerText=e,setTimeout((()=>{o.setAttribute("hidden",!0)}),3e3)),q()}function V(){const t=new(window.AudioContext||window.webkitAudioContext),e=[{frequency:440,duration:1,position:{x:1,y:0,z:0}},{frequency:494,duration:.5,position:{x:-1,y:0,z:0}},{frequency:523,duration:.25,position:{x:0,y:0,z:1}},{frequency:392,duration:.25,position:{x:0,y:0,z:-1}},{frequency:659,duration:.5,position:{x:1,y:0,z:1}},{frequency:698,duration:.25,position:{x:-1,y:0,z:1}},{frequency:330,duration:.25,position:{x:1,y:0,z:-1}},{frequency:349,duration:1,position:{x:0,y:1,z:0}},{frequency:311,duration:.5,position:{x:0,y:-1,z:0}},{frequency:587,duration:.25,position:{x:1,y:1,z:0}},{frequency:261,duration:.25,position:{x:-1,y:-1,z:0}},{frequency:349,duration:.5,position:{x:0,y:1,z:1}},{frequency:440,duration:.25,position:{x:0,y:-1,z:1}},{frequency:493,duration:.25,position:{x:1,y:-1,z:0}},{frequency:523,duration:1,position:{x:-1,y:1,z:0}},{frequency:294,duration:.25,position:{x:1,y:0,z:-1}},{frequency:329,duration:.25,position:{x:-1,y:0,z:-1}},{frequency:370,duration:.5,position:{x:0,y:0,z:2}},{frequency:415,duration:.25,position:{x:0,y:0,z:-2}},{frequency:466,duration:.25,position:{x:1,y:1,z:1}},{frequency:523,duration:.5,position:{x:-1,y:1,z:-1}},{frequency:587,duration:.25,position:{x:1,y:-1,z:1}},{frequency:659,duration:.25,position:{x:-1,y:-1,z:1}},{frequency:698,duration:1,position:{x:1,y:0,z:2}}];let o=0;for(let n=0;n<e.length;n++){const r=e[n];k(t,r.frequency,r.duration,r.position,o),o+=r.duration}n&&setTimeout(V,1e3*o)}function k(t,e,o,r,i){if(!n)return;const a=t.createOscillator();a.type="sine",a.frequency.setValueAtTime(e,t.currentTime+i);const c=t.createGain();c.gain.setValueAtTime(.05,t.currentTime+i);const s=new PannerNode(t,{panningModel:"HRTF",distanceModel:"inverse",positionX:r.x,positionY:r.y,positionZ:r.z,refDistance:1,maxDistance:10,rolloffFactor:2}),u=t.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(1e3,t.currentTime+i),a.connect(c),c.connect(u),u.connect(s),s.connect(t.destination),a.start(t.currentTime+i),a.stop(t.currentTime+i+o)}document.addEventListener("keydown",(t=>{if(i<=0)return;n||(n=!0,V());const e=Math.floor(2*Math.random())+1;if("ArrowUp"!==t.key||0!==c[f-1][d]&&2!==c[f-1][d])if("ArrowDown"!==t.key||0!==c[f+1][d]&&2!==c[f+1][d])if("ArrowLeft"!==t.key||0!==c[f][d-1]&&2!==c[f][d-1])if("ArrowRight"!==t.key||0!==c[f][d+1]&&2!==c[f][d+1]){if(3===c[f-1][d])if("a"===t.key)switch(e){case 1:c[f-1][d]=0,a++,z("win","Scissors");break;case 2:i--,z("defeat","Paper")}else if("s"===t.key)switch(e){case 1:c[f-1][d]=0,a++,z("win","Rock");break;case 2:i--,z("defeat","Scissors")}else if("d"===t.key)switch(e){case 1:c[f-1][d]=0,a++,z("win","Paper");break;case 2:z("defeat","Rock")}}else d++;else d--;else f++;else f--;if(2===c[f][d]){const t=s.get(r);r=t,Y(o[String(r)])}else I(g,P,S,p,F.get(r),U)})),q(),I(g,P,S,p,F.get(r),U);