(self.webpackChunkbiomedgps_studio=self.webpackChunkbiomedgps_studio||[]).push([[781],{98361:function(X,B,e){"use strict";var p=e(13254),d=e(14277),v=e(2824),f=e(43358),K=e(34041),c=e(96486),w=e.n(c),h=e(67294),j=e(85893),m=K.Z.Option,O,x;function y(a,s,_){console.log("makeQueryStr filter: ",_);var u=":select [:*]",n="",E="";if(s){var D=Object.keys(s)[0],A=Object.values(s)[0];D&&A&&(A==="ascend"?n=":order-by [:".concat(D,"]"):n=":order-by [[:".concat(D," :desc]]"))}if(a){for(var M=[],T=0,C=Object.keys(a);T<C.length;T++){var P=C[T];["current","pageSize"].indexOf(P)<0&&a[P].length>0&&M.push("[:like [:upper :".concat(P,'] [:upper "%').concat(a[P],'%"]]'))}M.length==1?E=":where ".concat(M[0]):M.length>1&&(E=":where [:or ".concat(M.join(" "),"]"))}return"{".concat(u," ").concat(n," ").concat(E,"}")}var g=function(s){var _=s.queryGenes,u=s.initialValue,n=s.dataset,E=(0,h.useState)([]),D=(0,v.Z)(E,2),A=D[0],M=D[1],T=(0,h.useState)([]),C=(0,v.Z)(T,2),P=C[0],t=C[1],S=(0,h.useState)(),N=(0,v.Z)(S,2),R=N[0],i=N[1];(0,h.useEffect)(function(){u&&u!==R&&(i(u),L(u,function(W){t(W),F(u,{})}))},[u]);var L=function(o,H){O&&(clearTimeout(O),O=null),x=o;var b=function(){_({query_str:y({gene_symbol:o,ensembl_id:o,entrez_id:o},{},{}),dataset:n}).then(function(Z){if(x===o){var U=Z.data,Q=U.map(function(G){return{value:G.ensembl_id,text:"".concat(G.gene_symbol," | ").concat(G.entrez_id," | ").concat(G.ensembl_id)}});H(Q),M(U)}}).catch(function(Z){console.log("requestDEGs Error: ",Z),H([])})};O=setTimeout(b,300)},z=function(o){o?L(o,t):t([])},F=function(o,H){if(i(o),console.log("GeneSearcher handleChange: ",o),o&&typeof o=="string"){var b,k=(0,c.filter)(A,function(U){return o.match(/ENS/i)?U.ensembl_id==o:o.match(/[a-zA-Z][a-zA-Z0-9]+/i)?U.gene_symbol==o:o.match(/[0-9]+/i)?U.entrez_id.toString()==o:!1});console.log("handleChange(GeneSearcher): ",k,A),(b=s.onChange)===null||b===void 0||b.call(s,o,k[0])}else{var Z;(Z=s.onChange)===null||Z===void 0||Z.call(s,o,void 0)}},Y=P.map(function(W){return(0,j.jsx)(m,{children:W.text},W.value)});return(0,j.jsx)(K.Z,{allowClear:!0,showSearch:!0,value:R,placeholder:s==null?void 0:s.placeholder,style:s.style,defaultActiveFirstOption:!1,showArrow:!0,filterOption:!1,onSearch:z,onChange:F,mode:s!=null&&s.mode?s==null?void 0:s.mode:"single",notFoundContent:(0,j.jsx)(d.Z,{description:"Searching ..."}),children:Y})};B.Z=g},23082:function(X,B,e){"use strict";var p=e(13254),d=e(14277),v=e(2824),f=e(67294),K=e(70445),c=e(10913),w=e(63183),h=e.n(w),j=e(78777),m=e(99251),O=e(33835),x=e(10043),y=e.n(x),g=e(22275),a=e(95093),s=e(85893),_=function(n){var E=n.url,D=n.getFile,A=n.enableToc,M=function(R){if(R.match(/^(minio|file):\/\//))return D?D({filelink:R}).then(function(i){return i}).catch(function(i){return i.data.msg?i.data.msg:i.data}):new Promise(function(i,L){i("Please specify getFile function.")});try{return(0,a.Z)(R).then(function(i){return i.status!==200?"No Content.":i.data})}catch(i){return console.log("Cannot fetch ".concat(R,", the reason is ").concat(i)),new Promise(function(L,z){z("No Content.")})}},T=(0,f.useState)(null),C=(0,v.Z)(T,2),P=C[0],t=C[1];(0,f.useEffect)(function(){E&&M(E).then(function(N){return t(N||null)})},[E]),console.log("MarkdownViewer: updated");var S=[];return A?S=[c.Z,m.Z,h(),O.Z,j.Z]:S=[c.Z,m.Z,O.Z,j.Z],P?(0,s.jsx)(K.D,{rehypePlugins:S,className:"markdown-viewer",remarkPlugins:[y(),g.Z],children:P},E):(0,s.jsx)(d.Z,{})};B.Z=(0,f.memo)(_)},25990:function(X,B,e){"use strict";e.r(B);var p=e(57338),d=e(273),v=e(18106),f=e(63885),K=e(13062),c=e(71230),w=e(71153),h=e(60331),j=e(89032),m=e(15746),O=e(34792),x=e(48086),y=e(2824),g=e(67294),a=e(74310),s=e(96486),_=e.n(s),u=e(51615),n=e(19611),E=e(30143),D=e(88906),A=e(98361),M=e(70543),T=e(10615),C=e(23082),P=e(14066),t=e(85893),S=function(){var R=(0,u.k6)(),i=(0,g.useState)(!1),L=(0,y.Z)(i,2),z=L[0],F=L[1],Y=(0,g.useState)(""),W=(0,y.Z)(Y,2),o=W[0],H=W[1],b=(0,g.useState)(""),k=(0,y.Z)(b,2),Z=k[0],U=k[1],Q=(0,g.useState)("rapex-cookie-consent-form"),G=(0,y.Z)(Q,2),J=G[0],de=G[1],q=(0,g.useState)(void 0),$=(0,y.Z)(q,2),ee=$[0],te=$[1],ae=(0,a.tT)("dataset",function(l){return{defaultDataset:l.defaultDataset,setDataset:l.setDataset}}),se=ae.defaultDataset;(0,g.useEffect)(function(){var l=E.LJ.get(J);te(l==="true"),console.log("Cookie Status: ",l,typeof l,ee),l&&V()},[]);var V=function(){var r=document.createElement("script");r.setAttribute("src","//rf.revolvermaps.com/0/0/5.js?i=506fpu66up3&amp;m=0&amp;c=ff0000&amp;cr1=ffffff"),r.setAttribute("async","async");var I=document.getElementsByTagName("body")[0];I.appendChild(r)},ne=[{label:(0,t.jsx)(a._H,{id:"pages.Welcome.single-gene-analysis",defaultMessage:"Search Gene"}),key:"single-gene-analysis",visible:!0},{label:(0,t.jsx)(a._H,{id:"pages.Welcome.multiple-genes-analysis",defaultMessage:"Multiple Genes Analysis"}),key:"multiple-genes-analysis",visible:!1,data:[]},{label:(0,t.jsx)(a._H,{id:"pages.Welcome.custom-data-analysis",defaultMessage:"Custom Data Analysis"}),key:"custom-data-analysis",visible:!1,data:[]},{label:(0,t.jsx)(a._H,{id:"pages.Welcome.knowledge-graph",defaultMessage:"Knowledge Graph"}),key:"knowledge-graph",visible:!1,data:[]},{label:(0,t.jsx)(a._H,{id:"pages.Welcome.datasets",defaultMessage:"Datasets"}),key:"dataset",visible:!1,data:[]}],re=(0,s.filter)(ne,function(l){return l.visible}),oe=[{title:(0,t.jsx)(a._H,{id:"pages.Welcome.multiple-genes-analysis",defaultMessage:"Multiple Genes"}),route:"/expression-analysis/multiple-genes"},{title:(0,t.jsx)(a._H,{id:"pages.Welcome.kegg-pathways",defaultMessage:"KEGG Pathway"}),route:"/expression-analysis/kegg-pathways"},{title:(0,t.jsx)(a._H,{id:"pages.Welcome.diff-genes",defaultMessage:"Diff Genes"}),route:"/custom-analysis/differential-expression-analysis"},{title:(0,t.jsx)(a._H,{id:"pages.Welcome.boxplot",defaultMessage:"Boxplot"}),route:"/custom-analysis/gene-expression-profile?chart=boxplot"},{title:(0,t.jsx)(a._H,{id:"pages.Welcome.barplot",defaultMessage:"Barplot"}),route:"/custom-analysis/gene-expression-profile?chart=barplot"},{title:(0,t.jsx)(a._H,{id:"pages.Welcome.boxplot-organs",defaultMessage:"Across Organs on Boxplot"}),route:"/custom-analysis/gene-expression-profile?chart=boxplot-organs"},{title:(0,t.jsx)(a._H,{id:"pages.Welcome.barplot-organs",defaultMessage:"Across Organs on Barplot"}),route:"/custom-analysis/gene-expression-profile?chart=barplot-organs"},{title:(0,t.jsx)(a._H,{id:"pages.Welcome.correlation-analysis",defaultMessage:"Correlation Analysis"}),route:"/custom-analysis/gene-expression-profile?chart=correlation-analysis"},{title:(0,t.jsx)(a._H,{id:"pages.Welcome.similar-genes-detection",defaultMessage:"Similar Genes Detection"}),route:"/custom-analysis/similar-genes-detection"},{title:(0,t.jsx)(a._H,{id:"pages.Welcome.knowledge-graph",defaultMessage:"Knowledge Graph"}),route:"/knowledge-graph"},{title:(0,t.jsx)(a._H,{id:"pages.Welcome.datasets",defaultMessage:"Datasets"}),route:"/datasets"}],le=[{src:"/examples/0.png",title:"Multi-omics Data"},{src:"/examples/1.png",title:"Knowledge Graph & Statistics"},{src:"/examples/2.png",title:"Interactive Charts"}],ie=[{title:(0,t.jsx)(a._H,{id:"pages.Welcome.datasets",defaultMessage:"Datasets"}),key:"datasets",stat:"18"},{title:(0,t.jsx)(a._H,{id:"pages.Welcome.organs",defaultMessage:"Organs"}),key:"organs",stat:"11"},{title:(0,t.jsx)(a._H,{id:"pages.Welcome.samples",defaultMessage:"Samples"}),key:"samples",stat:"2,494"},{title:(0,t.jsx)(a._H,{id:"pages.Welcome.publications",defaultMessage:"Curated Publications"}),key:"publications",stat:"1,000"}],_e=function(r){r&&typeof r=="string"?R.push("/expression-analysis/single-gene?ensemblId=".concat(r)):x.ZP.warn("Unknown error, please contact administrators.")},ue=function(r){var I=r.target.parentNode.parentNode.id||r.target.parentNode.id;console.log("onClickOrgan: ",r,I),["lung","liver","gut","thyroid","brain","testis","heart","kidney"].indexOf(I)>=0&&(F(!0),H(I),U("/README/".concat(I,".md")))},ce="RAPEX is an open-source platform comprising various transcriptome datasets and analyzing tools, as well as a knowledge graph providing a multi-omics network linking vast other factors related to the research questions.";return(0,t.jsxs)(c.Z,{className:"welcome",children:[(0,t.jsxs)(m.Z,{className:"logo-container",children:[(0,t.jsx)("img",{alt:"logo",src:"/logo.png",className:"logo"}),(0,t.jsx)("span",{children:"RAPEX - Response to Air Pollution EXposure"})]}),(0,t.jsx)(m.Z,{className:"search-container",children:(0,t.jsx)(f.Z,{children:re.map(function(l){return(0,t.jsx)(f.Z.TabPane,{tab:l.label,children:l.key==="single-gene-analysis"?(0,t.jsxs)(c.Z,{className:"gene-searcher-box",children:[(0,t.jsxs)(c.Z,{className:"search-box",children:[(0,t.jsx)("span",{className:"title",children:"Enter gene symbol, ensembl id or entrez id"}),(0,t.jsx)(A.Z,{dataset:se,queryGenes:M.hX,placeholder:"e.g Trp53 / ENSMUSG00000059552 / 22059",style:{width:"100%"},onChange:_e}),(0,t.jsx)("div",{className:"tag-container",children:oe.map(function(r){return(0,t.jsx)(n.rU,{to:r.route,children:(0,t.jsx)(h.Z,{color:"#108ee9",children:r.title},r.route)},r.route)})})]}),(0,t.jsx)(c.Z,{className:"text-statistics",children:ie.map(function(r){return(0,t.jsxs)(m.Z,{span:6,className:"stat-item",children:[(0,t.jsx)("span",{children:r.stat}),(0,t.jsx)("span",{className:"title",children:r.title})]},r.key)})}),(0,t.jsxs)(c.Z,{className:"statistics",gutter:16,children:[(0,t.jsxs)(m.Z,{className:"data-stat",md:9,sm:24,xs:9,xxl:9,children:[(0,t.jsx)(D.Q,{src:"/mice-organs.svg",onClick:function(I){ue(I)}}),(0,t.jsx)(a._H,{id:"pages.Welcome.description",defaultMessage:ce})]}),(0,t.jsx)(m.Z,{className:"image-container",md:15,sm:24,xs:15,xxl:15,children:(0,t.jsx)(T.lr,{autoPlay:!0,dynamicHeight:!0,infiniteLoop:!0,children:le.map(function(r){return(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{src:r.src}),(0,t.jsx)("p",{className:"legend",children:r.title})]},r.title)})})})]})]}):null},l.key)})})}),(0,t.jsx)(d.Z,{width:"50%",visible:z,className:"organ-details",onClose:function(){H(""),F(!1)},closable:!0,maskClosable:!0,children:(0,t.jsx)(C.Z,{getFile:P.nj,url:Z})}),(0,t.jsx)(E.ZP,{location:"bottom",cookieName:J,style:{background:"#2B373B"},enableDeclineButton:!0,buttonStyle:{color:"#4e503b",fontSize:"13px"},expires:150,onAccept:function(){V()},children:"This website uses an toolbox from revolvermaps.com to count the number of visitors, but we don't gather and track your personal information."})]})};B.default=S},70543:function(X,B,e){"use strict";e.d(B,{wr:function(){return K},hX:function(){return w},XR:function(){return j},hs:function(){return O}});var p=e(39428),d=e(11849),v=e(3182),f=e(74310);function K(a,s){return c.apply(this,arguments)}function c(){return c=(0,v.Z)((0,p.Z)().mark(function a(s,_){return(0,p.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.WY)("/api/v1/dataset/rapex-degs",(0,d.Z)({method:"GET",params:(0,d.Z)({},s)},_||{})));case 1:case"end":return n.stop()}},a)})),c.apply(this,arguments)}function w(a,s){return h.apply(this,arguments)}function h(){return h=(0,v.Z)((0,p.Z)().mark(function a(s,_){return(0,p.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.WY)("/api/v1/dataset/rapex-genes",(0,d.Z)({method:"GET",params:(0,d.Z)({},s)},_||{})));case 1:case"end":return n.stop()}},a)})),h.apply(this,arguments)}function j(a,s){return m.apply(this,arguments)}function m(){return m=(0,v.Z)((0,p.Z)().mark(function a(s,_){return(0,p.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.WY)("/api/v1/dataset/rapex-pathways",(0,d.Z)({method:"GET",params:(0,d.Z)({},s)},_||{})));case 1:case"end":return n.stop()}},a)})),m.apply(this,arguments)}function O(a,s){return x.apply(this,arguments)}function x(){return x=(0,v.Z)((0,p.Z)().mark(function a(s,_){return(0,p.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.WY)("/api/v1/dataset/rapex-similar-genes",(0,d.Z)({method:"GET",params:(0,d.Z)({},s)},_||{})));case 1:case"end":return n.stop()}},a)})),x.apply(this,arguments)}function y(a,s){return g.apply(this,arguments)}function g(){return g=_asyncToGenerator(_regeneratorRuntime().mark(function a(s,_){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/v1/rapex-gene-expr-data",_objectSpread({method:"GET",params:_objectSpread({},s)},_||{})));case 1:case"end":return n.stop()}},a)})),g.apply(this,arguments)}}}]);
