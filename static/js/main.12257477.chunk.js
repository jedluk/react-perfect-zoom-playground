(this.webpackJsonpreact_zoom_link=this.webpackJsonpreact_zoom_link||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,a){e.exports=a.p+"static/media/sample2.05cb93df.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/cookie_small.e8b5688f.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/cookie_large.11df795a.jpg"},36:function(e,t,a){e.exports=a(63)},41:function(e,t,a){},42:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),o=a(12),i=a(8),m=(a(41),a(42),a(16)),s=a(14),u=a(3),g=a(28),E=a.n(g),p=function(e){var t=e.match,a=e.zoomState,n=e.setZoomState;function r(e,t){n(Object(u.a)({},a,{translate:Object(u.a)({},a.translate,Object(s.a)({},e,a.translate[e]+t))}))}function c(e){n(Object(u.a)({},a,{rectangleStyles:Object(u.a)({},a.rectangleStyles,{size:a.rectangleStyles.size+e})}))}function o(e){n(Object(u.a)({},a,{margin:a.margin+e}))}return l.a.createElement("div",{className:"App-header"},l.a.createElement("div",null,l.a.createElement("h2",null,"Perfect zoom controller"),l.a.createElement("h4",{className:"inline-block"},"TranslateX: ",a.translate.x," \xa0"),l.a.createElement("button",{onClick:function(){return r("x",-50)}},"-"),l.a.createElement("button",{onClick:function(){return r("x",50)}},"+"),l.a.createElement("br",null),l.a.createElement("h4",{className:"inline-block"},"TranslateY: ",a.translate.y," \xa0"),l.a.createElement("button",{onClick:function(){return r("y",-50)}},"-"),l.a.createElement("button",{onClick:function(){return r("y",50)}},"+"),l.a.createElement("br",null),l.a.createElement("h4",{className:"inline-block"},"Border size: ",a.rectangleStyles.size," \xa0"),l.a.createElement("button",{onClick:function(){return c(-1)}},"-"),l.a.createElement("button",{onClick:function(){return c(1)}},"+"),l.a.createElement("br",null),l.a.createElement("h4",{className:"inline-block"},"Margin: ",a.margin,"\xa0"),l.a.createElement("button",{onClick:function(){return o(-2)}},"-"),l.a.createElement("button",{onClick:function(){return o(2)}},"+"),l.a.createElement("br",null),l.a.createElement("h4",{className:"inline-block"},"Placement: \xa0"),l.a.createElement("select",{value:a.placement||(t.small?"top":"right"),onChange:function(e){n(Object(u.a)({},a,{placement:e.target.value}))}},l.a.createElement("option",{value:"top"},"top"),l.a.createElement("option",{value:"right"},"right"),l.a.createElement("option",{value:"bottom"},"bottom"),l.a.createElement("option",{value:"left"},"left")),l.a.createElement("br",null),l.a.createElement("h4",{className:"inline-block"},"Alignment: \xa0"),l.a.createElement("select",{value:a.align,onChange:function(e){n(Object(u.a)({},a,{align:e.target.value}))}},l.a.createElement("option",{value:"start"},"start"),l.a.createElement("option",{value:"center"},"center"),l.a.createElement("option",{value:"end"},"end")),l.a.createElement("br",null),l.a.createElement("h4",{className:"inline-block",style:{color:a.color}},"Rectangle border: ",a.color,"\xa0",l.a.createElement("input",{type:"color",value:a.rectangleStyles.color,style:{marginTop:3},onChange:function(e){n(Object(u.a)({},a,{rectangleStyles:Object(u.a)({},a.rectangleStyles,{color:e.target.value})}))}}))),l.a.createElement("div",{className:"header-logo"},l.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"})))},f=a(35),d=function(e){var t=["row","row-reverse","center"];return-1===t.indexOf(e)?t[0]:t.indexOf(e)===t.length-1?t[0]:t[t.indexOf(e)+1]},b=function(e){var t=e.flexDirection,a=e.setFlexDirection;return l.a.createElement("a",{className:"the-button",href:"#",onClick:function(){a(d(t))},style:{fontSize:".7rem"}},t||"change flex direction")},h=a(15),v=a.n(h),x=function(e){var t=e.length,a=void 0===t?1:t;return l.a.createElement("p",{style:{paddingLeft:20,paddingRight:20}},"Sed a rhoncus elit. Pellentesque ultrices vestibulum velit, quis pellentesque leo sagittis non.\n    Integer vel dictum orci. Praesent ac interdum massa. Aenean felis dui, aliquam nec consectetur\n    non, rutrum eget diam. Proin id lorem eu est commodo condimentum et ac arcu. Integer ut libero\n    id nibh aliquet gravida in sit amet neque. Donec nec justo ligula. Vestibulum eget tortor\n    tempor, suscipit lorem a, luctus neque. Nam venenatis tortor nisl, sit amet fermentum nibh\n    imperdiet a.".repeat(a))},y=a(30),S=a.n(y),j=function(e){var t=e.match,a=e.perfectZoomState,r=a.align,c=a.placement,o=a.rectangleStyles,i=a.margin,s=a.translate,g=Object(n.useState)("row"),E=Object(m.a)(g,2),p=E[0],f=E[1];return l.a.createElement(n.Fragment,null,!t.small&&l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(b,{flexDirection:p,setFlexDirection:f})),l.a.createElement("div",{className:"flex-area",style:Object(u.a)({},!t.small&&{flexDirection:p})},("center"===p||t.small)&&l.a.createElement(x,null),l.a.createElement(v.a,{allowDownload:!0,align:r,placement:c||(t.small?"top":"right"),source:{thumbnailURL:S.a,thumbnailSize:t.small?[150,250]:t.medium?[200,333]:[300,500]},rectangleStyles:o,margin:i,translate:s}),!t.small&&l.a.createElement(x,null),("center"!==p||t.small)&&l.a.createElement(x,null)),!t.small&&l.a.createElement(n.Fragment,null,l.a.createElement(x,null),l.a.createElement(x,null)))};var k=function(){var e=Object(n.useState)({placement:"",align:"center",rectangleStyles:{color:"#61dafb",size:2},translate:{x:0,y:0},margin:20}),t=Object(m.a)(e,2),a=t[0],r=t[1];return l.a.createElement(f.a,{queries:{small:"(max-width: 859px)",medium:"(min-width: 860px) and (max-width: 1199px)",large:"(min-width: 1200px)"}},(function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(p,{match:e,zoomState:a,setZoomState:r}),l.a.createElement(j,{match:e,perfectZoomState:a}))}))},O=a(31),N=a.n(O),w=a(32),z=a.n(w),C={thumbnailURL:N.a,thumbnailSize:[300,500],imageURL:z.a};var q=function(e,t){return t===e?"nav-active":void 0},D=Object(i.e)((function(e){var t=e.location.pathname;return l.a.createElement("ul",{className:"navigation"},l.a.createElement("li",{className:q("/",t)},l.a.createElement(o.b,{to:"/"},"Controller")),l.a.createElement("li",{className:q("/demo",t)},l.a.createElement(o.b,{to:"/demo"},"Two sources")))})),F=l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(D,null),l.a.createElement(i.a,{exact:!0,path:"/",component:k}),l.a.createElement(i.a,{exact:!0,path:"/demo",component:function(e){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"demo-content"},l.a.createElement(v.a,{allowDownload:!0,source:Object(u.a)({},C),placement:"right",align:"start",rectangleStyles:{color:"#fff",size:3}}),l.a.createElement(x,{length:3})),l.a.createElement(x,{length:3}),l.a.createElement(x,{length:3}))}})));c.a.render(F,document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.12257477.chunk.js.map