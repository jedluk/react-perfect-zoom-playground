(this.webpackJsonpreact_zoom_link=this.webpackJsonpreact_zoom_link||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},31:function(e,t,a){e.exports=a.p+"static/media/sample2.05cb93df.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/cookie_small.e8b5688f.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/cookie_large.11df795a.jpg"},36:function(e,t,a){e.exports=a(64)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),c=a.n(r),o=a(12),i=a(8),m=(a(41),a(42),a(43),a(17)),u=a(15),s=a(3),d=a(29),E=a.n(d),g=function(e){var t=e.match,a=e.zoomState,n=e.setZoomState;function r(e,t){n(Object(s.a)({},a,{translate:Object(s.a)({},a.translate,Object(u.a)({},e,a.translate[e]+t))}))}function c(e){n(Object(s.a)({},a,{rectangleStyles:Object(s.a)({},a.rectangleStyles,{size:a.rectangleStyles.size+e})}))}function o(e){n(Object(s.a)({},a,{margin:a.margin+e}))}return l.a.createElement("div",{className:"App-header"},l.a.createElement("div",null,l.a.createElement("h2",null,"Perfect zoom controller"),l.a.createElement("h4",{className:"inline-block"},"TranslateX: ",a.translate.x," \xa0"),l.a.createElement("button",{onClick:function(){return r("x",-50)}},"-"),l.a.createElement("button",{onClick:function(){return r("x",50)}},"+"),l.a.createElement("br",null),l.a.createElement("h4",{className:"inline-block"},"TranslateY: ",a.translate.y," \xa0"),l.a.createElement("button",{onClick:function(){return r("y",-50)}},"-"),l.a.createElement("button",{onClick:function(){return r("y",50)}},"+"),l.a.createElement("br",null),l.a.createElement("h4",{className:"inline-block"},"Border size: ",a.rectangleStyles.size," \xa0"),l.a.createElement("button",{onClick:function(){return c(-1)}},"-"),l.a.createElement("button",{onClick:function(){return c(1)}},"+"),l.a.createElement("br",null),l.a.createElement("h4",{className:"inline-block"},"Margin: ",a.margin,"\xa0"),l.a.createElement("button",{onClick:function(){return o(-2)}},"-"),l.a.createElement("button",{onClick:function(){return o(2)}},"+"),l.a.createElement("br",null),l.a.createElement("h4",{className:"inline-block"},"Placement: \xa0"),l.a.createElement("select",{value:a.placement||(t.small?"top":"right"),onChange:function(e){n(Object(s.a)({},a,{placement:e.target.value}))}},l.a.createElement("option",{value:"top"},"top"),l.a.createElement("option",{value:"right"},"right"),l.a.createElement("option",{value:"bottom"},"bottom"),l.a.createElement("option",{value:"left"},"left")),l.a.createElement("br",null),l.a.createElement("h4",{className:"inline-block"},"Alignment: \xa0"),l.a.createElement("select",{value:a.align,onChange:function(e){n(Object(s.a)({},a,{align:e.target.value}))}},l.a.createElement("option",{value:"start"},"start"),l.a.createElement("option",{value:"center"},"center"),l.a.createElement("option",{value:"end"},"end")),l.a.createElement("br",null),l.a.createElement("h4",{className:"inline-block",style:{color:a.color}},"Rectangle border: ",a.color,"\xa0",l.a.createElement("input",{type:"color",value:a.rectangleStyles.color,style:{marginTop:3},onChange:function(e){n(Object(s.a)({},a,{rectangleStyles:Object(s.a)({},a.rectangleStyles,{color:e.target.value})}))}}))),l.a.createElement("div",{className:"header-logo"},l.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"})))},p=a(18),f=function(e){var t=["row","row-reverse","center"];return-1===t.indexOf(e)?t[0]:t.indexOf(e)===t.length-1?t[0]:t[t.indexOf(e)+1]},b=function(e){var t=e.flexDirection,a=e.setFlexDirection;return l.a.createElement("a",{className:"the-button",href:"#",onClick:function(){a(f(t))},style:{fontSize:".7rem"}},t||"change flex direction")},v=a(16),h=a.n(v),x=function(e){var t=e.length,a=void 0===t?1:t;return l.a.createElement("p",{style:{paddingLeft:20,paddingRight:20}},"Sed a rhoncus elit. Pellentesque ultrices vestibulum velit, quis pellentesque leo sagittis non.\n    Integer vel dictum orci. Praesent ac interdum massa. Aenean felis dui, aliquam nec consectetur\n    non, rutrum eget diam. Proin id lorem eu est commodo condimentum et ac arcu. Integer ut libero\n    id nibh aliquet gravida in sit amet neque. Donec nec justo ligula. Vestibulum eget tortor\n    tempor, suscipit lorem a, luctus neque. Nam venenatis tortor nisl, sit amet fermentum nibh\n    imperdiet a.".repeat(a))},y=a(31),S=a.n(y),j=function(e){var t=e.match,a=e.perfectZoomState,r=a.align,c=a.placement,o=a.rectangleStyles,i=a.margin,u=a.translate,d=Object(n.useState)("row"),E=Object(m.a)(d,2),g=E[0],p=E[1];return l.a.createElement(n.Fragment,null,!t.small&&l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(b,{flexDirection:g,setFlexDirection:p})),l.a.createElement("div",{className:"flex-area",style:Object(s.a)({},!t.small&&{flexDirection:g})},("center"===g||t.small)&&l.a.createElement(x,null),l.a.createElement(h.a,{allowDownload:!0,align:r,placement:c||(t.small?"top":"right"),source:{thumbnailURL:S.a,thumbnailSize:t.small?[150,250]:t.medium?[200,333]:[300,500]},rectangleStyles:o,margin:i,translate:u}),!t.small&&l.a.createElement(x,null),("center"!==g||t.small)&&l.a.createElement(x,null)),!t.small&&l.a.createElement(n.Fragment,null,l.a.createElement(x,null),l.a.createElement(x,null)))};var k=function(){var e=Object(n.useState)({placement:"",align:"center",rectangleStyles:{color:"#61dafb",size:2},translate:{x:0,y:0},margin:20}),t=Object(m.a)(e,2),a=t[0],r=t[1];return l.a.createElement(p.a,{queries:{small:"(max-width: 859px)",medium:"(min-width: 860px) and (max-width: 1199px)",large:"(min-width: 1200px)"}},(function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(g,{match:e,zoomState:a,setZoomState:r}),l.a.createElement(j,{match:e,perfectZoomState:a}))}))},O=function(e){var t=e.mousePosition;return l.a.createElement("div",{class:"lds-default",style:Object(s.a)({position:"absolute"},t)},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))},w=a(32),z=a.n(w),N=a(33),C=a.n(N),q={thumbnailURL:z.a,thumbnailSize:[300,500],imageURL:C.a};var D="/react-perfect-zoom-playground",F=function(e,t){return t===e?"nav-active":void 0},P=Object(i.e)((function(e){var t=e.location.pathname;return l.a.createElement("ul",{className:"navigation"},l.a.createElement("li",{className:F("".concat(D,"/"),t)},l.a.createElement(o.b,{to:"".concat(D,"/")},"Controller")),l.a.createElement("li",{className:F("".concat(D,"/demo"),t)},l.a.createElement(o.b,{to:"".concat(D,"/demo")},"Two sources")))})),_=l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(P,null),l.a.createElement(i.a,{exact:!0,path:"".concat("/react-perfect-zoom-playground","/"),component:k}),l.a.createElement(i.a,{exact:!0,path:"".concat("/react-perfect-zoom-playground","/demo"),component:function(e){return l.a.createElement(p.a,{queries:{small:"(max-width: 859px)",medium:"(min-width: 860px) and (max-width: 1024px)",large:"(min-width: 1025px)"}},(function(e){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"demo-content"},l.a.createElement(h.a,{allowDownload:!0,source:Object(s.a)({},q,{thumbnailSize:e.small?[150,250]:e.medium?[250,416]:[300,500]}),loader:O,placement:e.large?"right":"bottom",align:e.large?"start":"center",rectangleStyles:{color:"#fff",size:3}}),l.a.createElement(x,{length:3})),!e.small&&l.a.createElement(n.Fragment,null,l.a.createElement(x,{length:3}),l.a.createElement(x,{length:3})))}))}})));c.a.render(_,document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.cecc06b0.chunk.js.map