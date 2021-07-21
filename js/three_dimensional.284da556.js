(function(t){function e(e){for(var n,a,r=e[0],u=e[1],l=e[2],d=0,c=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&c.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);h&&h(e);while(c.length)c.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var r=i[a];0!==o[r]&&(n=!1)}n&&(s.splice(e--,1),t=u(u.s=i[0]))}return t}var n={},a={three_dimensional:0},o={three_dimensional:0},s=[];function r(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c4639":"aafbbfbe","chunk-76e94462":"0f8f8760"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.e=function(t){var e=[],i={"chunk-76e94462":1};a[t]?e.push(a[t]):0!==a[t]&&i[t]&&e.push(a[t]=new Promise((function(e,i){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d0c4639":"31d6cfe0","chunk-76e94462":"0616178c"}[t]+".css",o=u.p+n,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===o))return e()}var c=document.getElementsByTagName("style");for(r=0;r<c.length;r++){l=c[r],d=l.getAttribute("data-href");if(d===n||d===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],h.parentNode.removeChild(h),i(s)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,i){n=o[t]=[e,i]}));e.push(n[2]=s);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=r(t);var c=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(h);var i=o[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,i[1](c)}o[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,i){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(i,n,function(e){return t[e]}.bind(null,n));return i},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var h=d;s.push([4,"chunk-vendors"]),i()})({1267:function(t,e,i){},3023:function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),a=i("fff8"),o=(i("f3ff"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("iv-visualisation",{attrs:{hotspotColumnHeight:"100px",title:"Lattice Vibrations - Three Dimensional",vue_config:t.vue_config,page_number:4},scopedSlots:t._u([{key:"hotspots",fn:function(){return[i("iv-pane",{attrs:{position:"left",format:"push",width:600}},[i("iv-sidebar-content",[i("iv-sidebar-section",{attrs:{title:"Introduction"}},[t._v(" Finally, we look at a three dimensional infinite crystal lattice. This simulation is meant for completeness. The colour coding here is to track layers of atoms. If this looks confusing for you, you may wish to return to the two dimensional case as it encompasses all the essentials of physics involved. "),i("p",[t._v("A reminder of the general solution:"),i("br"),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\textbf{u}_n(t) = Re \\sum_{\\textbf{k}}\\tilde{\\textbf{u}}_\\textbf{k} e^{i(\\textbf{k} \\cdot \\textbf{R}_n - \\omega_\\textbf{k} t)}"}}),i("br"),t._v(" For a single "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\textbf{k}"}}),t._v(":"),i("br"),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\textbf{u}_n(t) = \\textbf{u}_k \\cos(\\textbf{k} \\cdot \\textbf{R}_n-\\omega_k t)"}}),i("br"),t._v(" For any given "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\textbf{k}"}}),t._v(":"),i("br"),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\omega^2_{\\mathbf{k}} = 4 \\omega^2_D \\left[ \\sin^2 \\left(\\frac{k_x a}{2} \\right) + \\sin^2 \\left(\\frac{k_y a}{2} \\right) + \\sin^2 \\left(\\frac{k_z a}{2} \\right) \\right]"}}),i("br"),t._v(" where all the symbols have the same meanings as before. ")],1),i("p",[t._v(" The types of waves available are still longitudinal, transverse or a combination of both. This is indicated by "),i("iv-equation-box",{attrs:{stylise:!1,equation:"|\\textbf{k} \\cdot \\textbf{u}_k|"}}),t._v(" and "),i("iv-equation-box",{attrs:{stylise:!1,equation:"|\\textbf{k} \\times \\textbf{u}_k|"}}),t._v(". ")],1)]),i("iv-sidebar-section",{attrs:{title:"Derivation",icon:"calculator",theme:"Purple"}},[i("p",[i("br"),t._v(" We first consider the one dimensional case of an infinite chain of identical atoms. Let us label the atoms by an integer index "),i("iv-equation-box",{attrs:{stylise:!1,equation:"n"}}),t._v(", with positions "),i("iv-equation-box",{attrs:{stylise:!1,equation:"x_{n}(t)"}}),t._v(" at time "),i("iv-equation-box",{attrs:{stylise:!1,equation:"t"}}),t._v(". Let the mass of the individual atoms be "),i("iv-equation-box",{attrs:{stylise:!1,equation:"m"}}),t._v(" and the equilibrium spacing be "),i("iv-equation-box",{attrs:{stylise:!1,equation:"a"}}),t._v(" so that their equilibrium positions are "),i("iv-equation-box",{attrs:{stylise:!1,equation:"x^{eqm}_{n} = n a"}}),t._v(". Denote the displacement of the "),i("iv-equation-box",{attrs:{stylise:!1,equation:"n^{th}"}}),t._v(" atom as "),i("iv-equation-box",{attrs:{stylise:!1,equation:"u_{n}(t)"}}),t._v(" so that"),i("br"),i("iv-equation-box",{attrs:{stylise:!0,equation:"u_{n}(t) = x_{n}(t) - n a"}}),i("br"),t._v(" There are two approximations that we are taking: "),i("br"),t._v(" 1. Small oscillations that allows simple harmonic approximation for the potential "),i("br"),t._v(" 2. Interactions with only the nearest neighbours "),i("br"),i("br"),t._v(" The potential is central so we can write the total potential energy in the system as"),i("br"),i("iv-equation-box",{attrs:{stylise:!0,equation:"V_{tot} = \\frac{\\kappa}{2} \\sum_{n} (u_{n+1} - u_{n})^{2}"}}),i("br"),t._v(" This can be interpreted as a chain of balls connected by springs obeying Hooke's Law with spring constant "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\kappa"}}),t._v(". "),i("br"),i("br"),t._v(" The net force on the "),i("iv-equation-box",{attrs:{stylise:!1,equation:"n^{th}"}}),t._v(" atom is"),i("br"),i("iv-equation-box",{attrs:{stylise:!0,equation:"F_{n} = - \\frac{\\partial V_{tot}}{\\partial x_{n}} = \\kappa (u_{n+1} + u_{n-1} - 2u_n)"}}),i("br"),t._v(" since, by chain rule, "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\frac{\\partial }{\\partial x_{n}} = \\frac{d u_n}{d x_n} \\frac{\\partial }{\\partial u_{n}} = \\frac{\\partial }{\\partial u_{n}}"}}),t._v(". "),i("br"),i("br"),t._v(" By Newton's second law, we have the equation of motion in terms of the displacement "),i("iv-equation-box",{attrs:{stylise:!1,equation:"u_n"}}),t._v(":"),i("br"),i("iv-equation-box",{attrs:{stylise:!0,equation:"m \\frac{d^2 u_n}{d t^2} = \\kappa (u_{n+1} + u_{n-1} - 2u_n)"}}),i("br"),t._v(" for each "),i("iv-equation-box",{attrs:{stylise:!1,equation:"n"}}),t._v(". "),i("br"),i("br"),t._v(" This equation of motion takes the form of eigenfunction so we can try the solution"),i("br"),i("iv-equation-box",{attrs:{stylise:!0,equation:"u_n(t) = \\tilde{u}_k e^{i(nka - \\omega t)}"}}),i("br"),t._v(" with the wavevector "),i("iv-equation-box",{attrs:{stylise:!1,equation:"k"}}),t._v(" and frequency "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\omega"}}),t._v(". We will later find out the relationship between "),i("iv-equation-box",{attrs:{stylise:!1,equation:"k"}}),t._v(" and "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\omega"}}),t._v(" called the dispersion relation or frequency spectrum and hence label "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\omega = \\omega_k"}}),t._v(". "),i("br"),i("br"),t._v(" Due to the linearity of the equation of motion, we can make use of the Principle of Superposition to give a trial general solution"),i("br"),i("iv-equation-box",{attrs:{stylise:!0,equation:"u_n(t) = Re \\sum_{k}\\tilde{u}_k e^{i(nka-\\omega_kt)} "}}),t._v("."),i("br"),t._v(" Substituting the trial solution into the equation of motion gives"),i("br"),i("iv-equation-box",{attrs:{stylise:!0,equation:"-m \\omega^2 \\tilde{u}_k e^{i(nka-\\omega_kt)} = \\kappa \\tilde{u}_k e^{i(nka-\\omega_kt)} (e^{ika} + e^{-ika} - 2)"}}),t._v("."),i("br"),t._v(" This must hold for all atoms "),i("iv-equation-box",{attrs:{stylise:!1,equation:"n"}}),t._v(" and at all times "),i("iv-equation-box",{attrs:{stylise:!1,equation:"t"}}),t._v(" so we can take out the common factor of "),i("iv-equation-box",{attrs:{stylise:!1,equation:"e^{i(nka-\\omega_kt)}"}}),t._v(". Since "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\tilde{u}_k = 0"}}),t._v(" corresponds to no motion at all, we must have a non-zero "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\tilde{u}_k"}}),t._v(", which we can divide out. We arrive at the dispersion relation for monatomic chain:"),i("br"),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\omega^2_k = \\frac{2 \\kappa}{m} (1-\\cos ka) = 4 \\omega^2_D \\sin^2 \\left( \\frac{k a}{2} \\right)"}}),i("br"),t._v(" with"),i("br"),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\omega_D = \\sqrt{\\frac{\\kappa}{m}}"}}),t._v("."),i("br"),t._v(" The dispersion relation is more conventionally written as"),i("br"),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\omega_k = 2 \\omega_D \\left| \\sin \\left( \\frac{k a}{2} \\right) \\right|"}}),i("br"),t._v(" This derivation can be extended to higher dimensions. ")],1)])],1)],1),i("iv-toggle-hotspot",{staticStyle:{width:"25%","z-index":"3",height:"100%"},attrs:{position:"right",title:"Sliders",glass:""}},[i("div",{staticStyle:{"overflow-x":"hidden",position:"relative"}},[i("iv-equation-box",{attrs:{stylise:!1,equation:"\\textbf{k} = \\frac{\\pi}{a} \\begin{bmatrix} d_x \\\\ d_y \\\\ d_z \\end{bmatrix}"}}),i("br"),i("iv-equation-box",{attrs:{stylise:!1,equation:"d_x"}}),i("iv-slider",{attrs:{theme:"Lime",min:-1,max:1,init_val:.1,name:"",unit:"test unit",step:.01},on:{sliderChanged:t.dxChange}}),i("iv-equation-box",{attrs:{stylise:!1,equation:"d_y"}}),i("iv-slider",{attrs:{theme:"Lime",min:-1,max:1,init_val:.1,name:"",unit:"test unit",step:.01},on:{sliderChanged:t.dyChange}}),i("iv-equation-box",{attrs:{stylise:!1,equation:"d_z"}}),i("iv-slider",{attrs:{theme:"Lime",min:-1,max:1,init_val:.1,name:"",unit:"test unit",step:.01},on:{sliderChanged:t.dzChange}}),i("iv-equation-box",{attrs:{stylise:!1,equation:"u_{k_x}"}}),i("iv-slider",{attrs:{theme:"Lime",min:-1,max:1,init_val:.1,name:"",unit:"test unit",step:.01},on:{sliderChanged:t.uxChange}}),i("iv-equation-box",{attrs:{stylise:!1,equation:"u_{k_y}"}}),i("iv-slider",{attrs:{theme:"Lime",min:-1,max:1,init_val:.1,name:"",unit:"test unit",step:.01},on:{sliderChanged:t.uyChange}}),i("iv-equation-box",{attrs:{stylise:!1,equation:"u_{k_z}"}}),i("iv-slider",{attrs:{theme:"Lime",min:-1,max:1,init_val:.1,name:"",unit:"test unit",step:.01},on:{sliderChanged:t.uzChange}})],1)])]},proxy:!0}])},[i("div",{staticStyle:{display:"block","margin-bottom":"-100%"}},[i("MainVis",{staticStyle:{float:"left","margin-right":"10%",height:"auto","margin-bottom":"-10px"},attrs:{dx:t.dxSlider,dy:t.dySlider,ux:t.uxSlider,uy:t.uySlider}})],1),i("div",{staticStyle:{display:"block","padding-left":"70px"}},[i("div",{staticStyle:{width:"40%",float:"left"}},[i("iv-equation-box",{attrs:{stylise:!1,equation:"|\\textbf{k} \\cdot \\textbf{u}_k| = "}}),i("iv-equation-box",{attrs:{stylise:!1,equation:t.dotProduct}})],1),i("div",{staticStyle:{width:"40%",float:"left","margin-right":"-100%"}},[i("iv-equation-box",{attrs:{stylise:!1,equation:"|\\textbf{k} \\times \\textbf{u}_k| = "}}),i("iv-equation-box",{attrs:{stylise:!1,equation:t.crossProduct}})],1)])])],1)}),s=[],r=i("3db5"),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"50%",width:"50%",padding:"5px 50px 0px 70px"},attrs:{id:"main-vis"}},[i("canvas",{attrs:{id:"canvas-div"}})])}],d=(i("5698"),i("5a89")),c={props:{dx:{default:.5},dy:{default:0},dz:{default:0},ux:{default:0},uy:{default:0},uz:{default:.5}},mounted(){let t=this;t.init=function(){t.isRunning=!1,t.setup.initConsts(),t.setup.initVars(),t.setup.initScene(),t.start()},t.start=function(){t.core.frame(),t.isRunning=!0},t.core={frame:function(){t.t=(Date.now()-t._then)/500,t.core.update(),t.core.animate(),window.requestAnimationFrame(t.core.frame)},update:function(){t.workers.calcParams(),t.workers.calcPos()},animate:function(){for(let e=0;e<t.N;e++)t.spheres[e].position.set(t.x[e],t.y[e],t.z[e]);t.renderer.render(t.scene,t.camera)}},t.workers={calcParams:function(){t.k=Math.sqrt(t.kx**2+t.ky**2+t.kz**2),t.kx=t.dx*Math.PI/t.a,t.ky=t.dy*Math.PI/t.a,t.kz=t.dz*Math.PI/t.a,t.w=2*t.dw*Math.sqrt(Math.sin(t.kx*t.a/2)**2+Math.sin(t.ky*t.a/2)**2+Math.sin(t.kz*t.a/2)**2),t.dphase=2*Math.PI/t.k},calcPos:function(){for(let e=0;e<t.Nx;e++)for(let i=0;i<t.Ny;i++)for(let n=0;n<t.Nz;n++){let a=t.Ny*t.Nz*e+t.Nz*i+n,o=Math.cos(t.kx*t.a*e+t.ky*t.a*i+t.kz*t.a*n-t.w*t.t);t.x[a]=e*t.a+t.ukx*o,t.y[a]=i*t.a+t.uky*o,t.z[a]=n*t.a+t.ukz*o}}},t.setup={initConsts:function(){t.a=1,t.dw=1,t.Nx=10,t.Ny=10,t.Nz=10,t.N=t.Nx*t.Ny*t.Nz,t.Nphase=2*t.Nx,t.canvasx=document.getElementById("main-vis").offsetWidth,t.canvasy=t.canvasx,t.pointR=.1*t.a},initVars:function(){t._then=Date.now(),t.dx=.5,t.dy=0,t.dz=0,t.ukx=0,t.uky=0,t.ukz=.5,t.x=new Array(t.N),t.y=new Array(t.N),t.z=new Array(t.N),t.spheres=new Array(t.N)},initScene:function(){t.scene=new d["e"],t.scene.background=new d["a"](16777215),t.camera=new d["d"](75,t.canvasx/t.canvasy,.1,1e3),t.camera.position.set(-.8,0,-.8),t.camera.lookAt(new d["g"](0,.6,0)),t.renderer=new d["h"]({antialias:!0,canvas:document.getElementById("canvas-div")}),t.renderer.setSize(t.canvasx,t.canvasy);for(let e=0;e<t.N;e++){let i=new d["f"](t.pointR,10,10),n=new d["c"]({color:new d["a"]("hsl("+Number(360*e/(t.N-1)).toFixed(2)+", 60%, 52%)")}),a=new d["b"](i,n);t.spheres[e]=a,t.scene.add(a)}}},document.addEventListener("DOMContentLoaded",t.init)}},h=c,f=(i("4289"),i("2877")),v=Object(f["a"])(h,u,l,!1,null,null,null),m=v.exports,b=i("5f35"),_=i.n(b),p={name:"Three Dimensional",components:{MainVis:m},data(){return{dxSlider:this.init_d,dySlider:this.init_null,dzSlider:this.init_null,uxSlider:this.init_null,uySlider:this.init_null,uzSlider:this.init_u,dotProduct:this.init_dot,crossProduct:this.init_cross,vue_config:_.a}},props:{init_null:{default:0},init_d:{default:.5},init_u:{default:.5},init_dot:{default:"0.00"},init_cross:{default:"0.79"}},methods:{dxChange(t){this.dxSlider=t,this.dotAndCrossProducts()},dyChange(t){this.dySlider=t,this.dotAndCrossProducts()},dzChange(t){this.dzSlider=t,this.dotAndCrossProducts()},uxChange(t){this.uxSlider=t,this.dotAndCrossProducts()},uyChange(t){this.uySlider=t,this.dotAndCrossProducts()},uzChange(t){this.uzSlider=t,this.dotAndCrossProducts()},dotAndCrossProducts(){let t=[this.uxSlider,this.uySlider,this.uzSlider],e=[this.dxSlider*Math.PI,this.dySlider*Math.PI,this.dzSlider*Math.PI],i=Math.round(100*Math.abs(r["b"](e,t)))/100;this.dotProduct=i.toString();let n=Math.round(Math.abs(100*Math.pow(Math.pow(r["a"](e,t)[0],2)+Math.pow(r["a"](e,t)[1],2)+Math.pow(r["a"](e,t)[2],2),.5)))/100;this.crossProduct=n.toString()}}},y=p,x=(i("61b9"),Object(f["a"])(y,o,s,!1,null,null,null)),g=x.exports,q=i("5dea");n["a"].use(a["a"]),n["a"].use(q["a"]),new n["a"]({render:t=>t(g)}).$mount("#app")},4:function(t,e,i){t.exports=i("3023")},4289:function(t,e,i){"use strict";var n=i("1267"),a=i.n(n);a.a},"5f35":function(t,e){t.exports={publicPath:"./",pages:{index:{entry:"src/main.js",title:"Index"},introduction:{entry:"src/Introduction/main.js",title:"Introduction"},one_dimensional:{entry:"src/One Dimensional/main.js",title:"One Dimensional"},two_dimensional:{entry:"src/Two Dimensional/main.js",title:"Two Dimensional"},three_dimensional:{entry:"src/Three Dimensional/main.js",title:"Three Dimensional"}}}},"61b9":function(t,e,i){"use strict";var n=i("d282"),a=i.n(n);a.a},d282:function(t,e,i){}});
//# sourceMappingURL=three_dimensional.284da556.js.map