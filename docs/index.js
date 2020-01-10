/* Import D3 HSLuv manually here */
/* TODO: Build with node so it's an import and compiled */
// https://d3js.org/d3-hsluv/ Version 0.1.2. Copyright 2018 Sam Petulla.
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("d3-color")):"function"==typeof define&&define.amd?define(["exports","d3-color"],r):r(t.d3=t.d3||{},t.d3)}(this,function(t,r){"use strict";function n(t,r){return r.intercept/(Math.sin(t)-r.slope*Math.cos(t))}function i(t){return L>=t?t/H*k:116*Math.pow(t/H,.3333333333333333)-16}function u(t){return 8>=t?H*t/k:H*Math.pow((t+16)/116,3)}function e(t){var r,n=[],i=Math.pow(t+16,3)/1560896;r=i>L?i:t/k;for(var u=0;3>u;)for(var e=u++,o=I[e][0],a=I[e][1],c=I[e][2],s=0;2>s;){var f=s++,h=(284517*o-94839*c)*r,v=(838422*c+769860*a+731718*o)*t*r-769860*f*t,l=(632260*c-126452*a)*r+126452*f;n.push({slope:h/l,intercept:v/l})}return n}function o(t,r){for(var i=r/360*Math.PI*2,u=e(t),o=1.7976931348623157e308,a=0;a<u.length;){var c=u[a];++a;var s=n(i,c);s>=0&&(o=Math.min(o,s))}return o}function a(t,r){for(var n=0,i=0,u=t.length;u>i;){var e=i++;n+=t[e]*r[e]}return n}function c(t){return t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92}function s(t){return.0031308>=t?12.92*t:1.055*Math.pow(t,.4166666666666667)-.055}function f(t){var r=t[0],n=t[1],i=t[2];if(0==r)return[0,0,0];var e=n/(13*r)+O,o=i/(13*r)+_,a=u(r),c=0-9*a*e/((e-4)*o-e*o),s=(9*a-15*o*a-o*c)/(3*o);return[c,a,s]}function h(t){var r=t[0],n=t[1],i=t[2],u=i/360*2*Math.PI,e=Math.cos(u)*n,o=Math.sin(u)*n;return[r,e,o]}function v(t){var r=t[0],n=t[1],i=t[2];if(i>99.9999999)return[100,0,r];if(1e-8>i)return[0,0,r];var u=o(i,r),e=u/100*n;return[i,e,r]}function l(t){var r=t[0],n=t[1],i=t[2];if(r>99.9999999)return{l:i,u:0,v:100};if(1e-8>r)return{l:i,u:0,v:0};var u=o(r,i),e=n/u*100;return{l:i,u:e,v:r}}function p(t){var r,n=t[0],i=t[1],u=t[2],e=Math.sqrt(i*i+u*u);if(1e-8>e)r=0;else{var o=Math.atan2(u,i);r=180*o/Math.PI,0>r&&(r=360+r)}return[n,e,r]}function y(t){var r=t[0],n=t[1],u=t[2],e=r+15*n+3*u,o=4*r,a=9*n;0!=e?(o/=e,a/=e):(o=NaN,a=NaN);var c=i(n);if(0==c)return[0,0,0];var s=13*c*(o-O),f=13*c*(a-_);return[c,s,f]}function M(t){var r=[s(a(I[0],t)),s(a(I[1],t)),s(a(I[2],t))];return{r:r[0],g:r[1],b:r[2]}}function d(t){var r=[c(t[0]),c(t[1]),c(t[2])];return[a(q[0],r),a(q[1],r),a(q[2],r)]}function N(t){if(t instanceof b)return new b(t.l,t.u,t.v,t.opacity);t instanceof r.rgb||(t=r.rgb(t));var n=l(p(y(d([t.r/255,t.g/255,t.b/255])))),i=n.l.toPrecision(7),u=n.u.toPrecision(7),e=n.v.toPrecision(7);return new b(i,u,e,t.opacity)}function g(t,r,n,i){return 1===arguments.length?N(t):new b(t,r,n,null==i?1:i)}function b(t,r,n,i){this.l=+t,this.u=+r,this.v=+n,this.opacity=+i}function w(t,n,i,u){return r.rgb(255*t,255*n,255*i,u||1)}function P(t,r){return function(n){return t+n*r}}function m(t,r){var n=r-t;return n?P(t,n>180||-180>n?n-360*Math.round(n/360):n):B(isNaN(t)?r:t)}function j(t,r){var n=r-t;return n?P(t,n):B(isNaN(t)?r:t)}function x(t){return function(r,n){var i=t((r=g(r)).l,(n=g(n)).l),u=j(r.u,n.u),e=j(r.v,n.v),o=j(r.opacity,n.opacity);return function(t){return r.l=i(t),r.u=u(t),r.v=e(t),r.opacity=o(t),r+""}}}var I=[[3.240969941904521,-1.537383177570093,-.498610760293],[-.96924363628087,1.87596750150772,.041555057407175],[.055630079696993,-.20397695888897,1.056971514242878]],q=[[.41239079926595,.35758433938387,.18048078840183],[.21263900587151,.71516867876775,.072192315360733],[.019330818715591,.11919477979462,.95053215224966]],H=1,O=.19783000664283,_=.46831999493879,k=903.2962962,L=.0088564516,z=.7,A=1/z,B=function(t){return function(){return t}},C=b.prototype=g.prototype=Object.create(r.color.prototype);C.constructor=b,C.brighter=function(t){return t=null==t?A:Math.pow(A,t),new b(this.l,this.u,this.v*t,this.opacity)},C.darker=function(t){return t=null==t?z:Math.pow(z,t),new b(this.l,this.u,this.v*t,this.opacity)},C.rgb=function(){var t=isNaN(this.l)?0:this.l,r=isNaN(this.u)?0:this.u,n=isNaN(this.v)?0:this.v,i=this.opacity,u=M(f(h(v([t,r,n])))),e=u.r,o=u.g,a=u.b;return w(e,o,a,i)},C.displayable=function(){return(0<=this.l&&this.l<=360||isNaN(this.l))&&0<=this.u&&this.u<=100&&0<=this.v&&this.v<=100&&0<=this.opacity&&this.opacity<=1};var D=x(m),E=x(j);t.hsluv=g,t.interpolateHsluv=D,t.interpolateHsluvLong=E,Object.defineProperty(t,"__esModule",{value:!0})});
/* End D3 HSLuv */

let input = document.getElementById('input');
let output = document.getElementById('output');
let type = document.getElementById('type');
let typeName = document.getElementById('typeName');

function convert(c) {
  let typeId = type.value;
  let A, B, C;

  if(typeId == 'HSLuv') {
    A = d3.hsluv(c).l;
    B = d3.hsluv(c).u;
    C = d3.hsluv(c).v;
  }
  if(typeId == 'HSL') {
    A = d3.hsl(c).h;
    B = d3.hsl(c).s;
    C = d3.hsl(c).l;
  }
  if(typeId == 'HSV / HSB') {
    A = d3.hsv(c).h;
    B = d3.hsv(c).s;
    C = d3.hsv(c).v;
  }
  if(typeId == 'CAM02') {
    A = d3.jab(c).J;
    B = d3.jab(c).a;
    C = d3.jab(c).b;
  }
  if(typeId == 'Lab') {
    A = d3.lab(c).l;
    B = d3.lab(c).a;
    C = d3.lab(c).b;
  }
  if(typeId == 'Lch') {
    A = d3.hcl(c).l;
    B = d3.hcl(c).c;
    C = d3.hcl(c).h;
  }
  if(typeId == 'RGB') {
    A = d3.rgb(c).r;
    B = d3.rgb(c).g;
    C = d3.rgb(c).b;
  }

  return new Array(A.toFixed(), B.toFixed(), C.toFixed());
}

function returnColor() {
  let val = input.value;
  let typeId = type.value;
  let preview = document.getElementById('preview');
  preview.style.backgroundColor = val;
  let typeArr;

  if(typeId == 'HSV / HSB') { typeArr = ['H', 'S', 'V']; }
  if(typeId == 'HSL') { typeArr = ['H', 'S', 'L']; }
  if(typeId == 'HSLuv') { typeArr = ['H (l)', 'S (u)', 'L (v)']; }
  if(typeId == 'CAM02') { typeArr = ['J', 'a', 'b']; }
  if(typeId == 'Lab') { typeArr = ['L', 'a', 'b']; }
  if(typeId == 'Lch') { typeArr = ['L', 'c', 'h']; }
  if(typeId == 'RGB') { typeArr = ['R', 'G', 'B']; }

  if(val.length > 6) {
    let newVal = convert(val);
    output.innerHTML = ' ';
    typeName.innerHTML = typeId;
    let d = document.createElement('div');
    let a = document.createElement('div');
    let b = document.createElement('div');
    let c = document.createElement('div');
    let str = document.createTextNode((typeId) + '(' + newVal + ')');
    let arr1 = document.createTextNode(typeArr[0] + ': ' + newVal[0]);
    let arr2 = document.createTextNode(typeArr[1] + ': ' + newVal[1]);
    let arr3 = document.createTextNode(typeArr[2] + ': ' + newVal[2]);
    a.appendChild(arr1);
    b.appendChild(arr2);
    c.appendChild(arr3);
    d.appendChild(str);

    output.appendChild(d);
    output.appendChild(a);
    output.appendChild(b);
    output.appendChild(c);
  }
}

input.addEventListener('input', returnColor);
type.addEventListener('input', returnColor);
