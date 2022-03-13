(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[696],{5113:function(e,t,r){"use strict";r.d(t,{zx:function(){return T},hE:function(){return E}});var n=r(7375),a=r(2846),i=r(5031),o=r(8554),l=r.n(o),c=r(7294),s=r(6450),u=r(917),d={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},f=(0,a.m$)("span",{baseStyle:d});i.Ts&&(f.displayName="VisuallyHidden");var m=(0,a.m$)("input",{baseStyle:d});i.Ts&&(m.displayName="VisuallyHiddenInput");function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}var g=["label","thickness","speed","emptyColor","className"],y=(0,u.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),h=(0,a.Gp)((function(e,t){var r=(0,a.mq)("Spinner",e),n=(0,a.Lr)(e),o=n.label,l=void 0===o?"Loading...":o,s=n.thickness,u=void 0===s?"2px":s,d=n.speed,m=void 0===d?"0.45s":d,h=n.emptyColor,v=void 0===h?"transparent":h,b=n.className,w=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(n,g),x=(0,i.cx)("chakra-spinner",b),N=p({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:u,borderBottomColor:v,borderLeftColor:v,animation:y+" "+m+" linear infinite"},r);return c.createElement(a.m$.div,p({ref:t,__css:N,className:x},w),l&&c.createElement(f,null,l))}));function v(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}i.Ts&&(h.displayName="Spinner");var w=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],x=(0,s.kr)({strict:!1,name:"ButtonGroupContext"}),N=x[0],k=x[1],E=(0,a.Gp)((function(e,t){var r=e.size,n=e.colorScheme,o=e.variant,l=e.className,s=e.spacing,u=void 0===s?"0.5rem":s,d=e.isAttached,f=e.isDisabled,m=v(e,w),p=(0,i.cx)("chakra-button__group",l),g=c.useMemo((function(){return{size:r,colorScheme:n,variant:o,isDisabled:f}}),[r,n,o,f]),y={display:"inline-flex"};return y=b({},y,d?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),c.createElement(N,{value:g},c.createElement(a.m$.div,b({ref:t,role:"group",__css:y,className:p},m)))}));i.Ts&&(E.displayName="ButtonGroup");var S=["label","placement","spacing","children","className","__css"],_=function(e){var t=e.label,r=e.placement,n=e.spacing,o=void 0===n?"0.5rem":n,l=e.children,s=void 0===l?c.createElement(h,{color:"currentColor",width:"1em",height:"1em"}):l,u=e.className,d=e.__css,f=v(e,S),m=(0,i.cx)("chakra-button__spinner",u),p="start"===r?"marginEnd":"marginStart",g=c.useMemo((function(){var e;return b(((e={display:"flex",alignItems:"center",position:t?"relative":"absolute"})[p]=t?o:0,e.fontSize="1em",e.lineHeight="normal",e),d)}),[d,t,p,o]);return c.createElement(a.m$.div,b({className:m},f,{__css:g}),s)};i.Ts&&(_.displayName="ButtonSpinner");var j=["children","className"],A=function(e){var t=e.children,r=e.className,n=v(e,j),o=c.isValidElement(t)?c.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,l=(0,i.cx)("chakra-button__icon",r);return c.createElement(a.m$.span,b({display:"inline-flex",alignSelf:"center",flexShrink:0},n,{className:l}),o)};i.Ts&&(A.displayName="ButtonIcon");var C=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],T=(0,a.Gp)((function(e,t){var r=k(),o=(0,a.mq)("Button",b({},r,e)),s=(0,a.Lr)(e),u=s.isDisabled,d=void 0===u?null==r?void 0:r.isDisabled:u,f=s.isLoading,m=s.isActive,p=s.isFullWidth,g=s.children,y=s.leftIcon,h=s.rightIcon,w=s.loadingText,x=s.iconSpacing,N=void 0===x?"0.5rem":x,E=s.type,S=s.spinner,j=s.spinnerPlacement,A=void 0===j?"start":j,T=s.className,I=s.as,L=v(s,C),z=c.useMemo((function(){var e,t=l()({},null!=(e=null==o?void 0:o._focus)?e:{},{zIndex:1});return b({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:p?"100%":"auto"},o,!!r&&{_focus:t})}),[o,r,p]),W=function(e){var t=c.useState(!e),r=t[0],n=t[1];return{ref:c.useCallback((function(e){e&&n("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(I),G=W.ref,R=W.type,B={rightIcon:h,leftIcon:y,iconSpacing:N,children:g};return c.createElement(a.m$.button,b({disabled:d||f,ref:(0,n.qq)(t,G),as:I,type:null!=E?E:R,"data-active":(0,i.PB)(m),"data-loading":(0,i.PB)(f),__css:z,className:(0,i.cx)("chakra-button",T)},L),f&&"start"===A&&c.createElement(_,{className:"chakra-button__spinner--start",label:w,placement:"start",spacing:N},S),f?w||c.createElement(a.m$.span,{opacity:0},c.createElement(O,B)):c.createElement(O,B),f&&"end"===A&&c.createElement(_,{className:"chakra-button__spinner--end",label:w,placement:"end",spacing:N},S))}));function O(e){var t=e.leftIcon,r=e.rightIcon,n=e.children,a=e.iconSpacing;return c.createElement(c.Fragment,null,t&&c.createElement(A,{marginEnd:a},t),n,r&&c.createElement(A,{marginStart:a},r))}i.Ts&&(T.displayName="Button");var I=["icon","children","isRound","aria-label"],L=(0,a.Gp)((function(e,t){var r=e.icon,n=e.children,a=e.isRound,i=e["aria-label"],o=v(e,I),l=r||n,s=c.isValidElement(l)?c.cloneElement(l,{"aria-hidden":!0,focusable:!1}):null;return c.createElement(T,b({padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":i},o),s)}));i.Ts&&(L.displayName="IconButton")},3236:function(e,t,r){"use strict";r.d(t,{xu:function(){return w},M5:function(){return k},kC:function(){return I},Ug:function(){return ie},X6:function(){return G},rU:function(){return P},MI:function(){return Z},Kq:function(){return ae},xv:function(){return ce}});var n=r(2846),a=r(4244),i=r(5031),o=r(7294);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}var c=["as","viewBox","color","focusable","children","className","__css"],s={path:o.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},o.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),o.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),o.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},u=(0,n.Gp)((function(e,t){var r=e.as,a=e.viewBox,u=e.color,d=void 0===u?"currentColor":u,f=e.focusable,m=void 0!==f&&f,p=e.children,g=e.className,y=e.__css,h=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,c),v={ref:t,focusable:m,className:(0,i.cx)("chakra-icon",g),__css:l({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:d},y)},b=null!=a?a:s.viewBox;if(r&&"string"!==typeof r)return o.createElement(n.m$.svg,l({as:r},v,h));var w=null!=p?p:s.path;return o.createElement(n.m$.svg,l({verticalAlign:"middle",viewBox:b},v,h),w)}));i.Ts&&(u.displayName="Icon");var d=r(6450);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var p=["ratio","children","className"],g=(0,n.Gp)((function(e,t){var r=e.ratio,a=void 0===r?4/3:r,l=e.children,c=e.className,s=m(e,p),u=o.Children.only(l),d=(0,i.cx)("chakra-aspect-ratio",c);return o.createElement(n.m$.div,f({ref:t,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:(0,i.XQ)(a,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},s),u)}));i.Ts&&(g.displayName="AspectRatio");var y=["className"],h=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Badge",e),a=(0,n.Lr)(e);a.className;var l=m(a,y);return o.createElement(n.m$.span,f({ref:t,className:(0,i.cx)("chakra-badge",e.className)},l,{__css:f({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},r)}))}));i.Ts&&(h.displayName="Badge");var v=["size","centerContent"],b=["size"],w=(0,n.m$)("div");i.Ts&&(w.displayName="Box");var x=(0,n.Gp)((function(e,t){var r=e.size,n=e.centerContent,a=void 0===n||n,i=m(e,v),l=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.createElement(w,f({ref:t,boxSize:r,__css:f({},l,{flexShrink:0,flexGrow:0})},i))}));i.Ts&&(x.displayName="Square");var N=(0,n.Gp)((function(e,t){var r=e.size,n=m(e,b);return o.createElement(x,f({size:r,ref:t,borderRadius:"9999px"},n))}));i.Ts&&(N.displayName="Circle");var k=(0,n.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.Ts&&(k.displayName="Center");var E=["className"],S=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Code",e),a=(0,n.Lr)(e);a.className;var l=m(a,E);return o.createElement(n.m$.code,f({ref:t,className:(0,i.cx)("chakra-code",e.className)},l,{__css:f({display:"inline-block"},r)}))}));i.Ts&&(S.displayName="Code");var _=["className","centerContent"],j=(0,n.Gp)((function(e,t){var r=(0,n.Lr)(e),a=r.className,l=r.centerContent,c=m(r,_),s=(0,n.mq)("Container",e);return o.createElement(n.m$.div,f({ref:t,className:(0,i.cx)("chakra-container",a)},c,{__css:f({},s,l&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));i.Ts&&(j.displayName="Container");var A=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],C=["className","orientation","__css"],T=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Divider",e),a=r.borderLeftWidth,l=r.borderBottomWidth,c=r.borderTopWidth,s=r.borderRightWidth,u=r.borderWidth,d=r.borderStyle,p=r.borderColor,g=m(r,A),y=(0,n.Lr)(e),h=y.className,v=y.orientation,b=void 0===v?"horizontal":v,w=y.__css,x=m(y,C),N={vertical:{borderLeftWidth:a||s||u||"1px",height:"100%"},horizontal:{borderBottomWidth:l||c||u||"1px",width:"100%"}};return o.createElement(n.m$.hr,f({ref:t,"aria-orientation":b},x,{__css:f({},g,{border:"0",borderColor:p,borderStyle:d},N[b],w),className:(0,i.cx)("chakra-divider",h)}))}));i.Ts&&(T.displayName="Divider");var O=["direction","align","justify","wrap","basis","grow","shrink"],I=(0,n.Gp)((function(e,t){var r=e.direction,a=e.align,i=e.justify,l=e.wrap,c=e.basis,s=e.grow,u=e.shrink,d=m(e,O),p={display:"flex",flexDirection:r,alignItems:a,justifyContent:i,flexWrap:l,flexBasis:c,flexGrow:s,flexShrink:u};return o.createElement(n.m$.div,f({ref:t,__css:p},d))}));i.Ts&&(I.displayName="Flex");var L=["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],z=(0,n.Gp)((function(e,t){var r=e.area,a=e.templateAreas,i=e.gap,l=e.rowGap,c=e.columnGap,s=e.column,u=e.row,d=e.autoFlow,p=e.autoRows,g=e.templateRows,y=e.autoColumns,h=e.templateColumns,v=m(e,L),b={display:"grid",gridArea:r,gridTemplateAreas:a,gridGap:i,gridRowGap:l,gridColumnGap:c,gridAutoColumns:y,gridColumn:s,gridRow:u,gridAutoFlow:d,gridAutoRows:p,gridTemplateRows:g,gridTemplateColumns:h};return o.createElement(n.m$.div,f({ref:t,__css:b},v))}));i.Ts&&(z.displayName="Grid");var W=["className"],G=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Heading",e),a=(0,n.Lr)(e);a.className;var l=m(a,W);return o.createElement(n.m$.h2,f({ref:t,className:(0,i.cx)("chakra-heading",e.className)},l,{__css:r}))}));i.Ts&&(G.displayName="Heading");var R=["className"],B=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Kbd",e),a=(0,n.Lr)(e),l=a.className,c=m(a,R);return o.createElement(n.m$.kbd,f({ref:t,className:(0,i.cx)("chakra-kbd",l)},c,{__css:f({fontFamily:"mono"},r)}))}));i.Ts&&(B.displayName="Kbd");var M=["className","isExternal"],P=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Link",e),a=(0,n.Lr)(e),l=a.className,c=a.isExternal,s=m(a,M);return o.createElement(n.m$.a,f({target:c?"_blank":void 0,rel:c?"noopener noreferrer":void 0,ref:t,className:(0,i.cx)("chakra-link",l)},s,{__css:r}))}));i.Ts&&(P.displayName="Link");var $=["children","styleType","stylePosition","spacing"],q=["as"],D=["as"],U=(0,d.kr)({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in a `<*List />` "}),F=U[0],H=U[1],X=(0,n.Gp)((function(e,t){var r,a=(0,n.jC)("List",e),i=(0,n.Lr)(e),l=i.children,c=i.styleType,s=void 0===c?"none":c,u=i.stylePosition,p=i.spacing,g=m(i,$),y=(0,d.WR)(l),h=p?((r={})["& > *:not(style) ~ *:not(style)"]={mt:p},r):{};return o.createElement(F,{value:a},o.createElement(n.m$.ul,f({ref:t,listStyleType:s,listStylePosition:u,role:"list",__css:f({},a.container,h)},g),y))}));i.Ts&&(X.displayName="List");var V=(0,n.Gp)((function(e,t){e.as;var r=m(e,q);return o.createElement(X,f({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},r))}));i.Ts&&(V.displayName="OrderedList");var K=(0,n.Gp)((function(e,t){e.as;var r=m(e,D);return o.createElement(X,f({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},r))}));i.Ts&&(K.displayName="UnorderedList");var Q=(0,n.Gp)((function(e,t){var r=H();return o.createElement(n.m$.li,f({ref:t},e,{__css:r.item}))}));i.Ts&&(Q.displayName="ListItem");var Y=(0,n.Gp)((function(e,t){var r=H();return o.createElement(u,f({ref:t,role:"presentation"},e,{__css:r.icon}))}));i.Ts&&(Y.displayName="ListIcon");var J=["columns","spacingX","spacingY","spacing","minChildWidth"],Z=(0,n.Gp)((function(e,t){var r,n,a=e.columns,l=e.spacingX,c=e.spacingY,s=e.spacing,u=e.minChildWidth,d=m(e,J),p=u?(n=u,(0,i.XQ)(n,(function(e){return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax("+(t=e,((0,i.hj)(t)?t+"px":t)+", 1fr))");var t}))):(r=a,(0,i.XQ)(r,(function(e){return(0,i.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return o.createElement(z,f({ref:t,gap:s,columnGap:l,rowGap:c,templateColumns:p},d))}));i.Ts&&(Z.displayName="SimpleGrid");var ee=(0,n.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.Ts&&(ee.displayName="Spacer");var te="& > *:not(style) ~ *:not(style)";var re=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],ne=function(e){return o.createElement(n.m$.div,f({className:"chakra-stack__item"},e,{__css:f({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},ae=(0,n.Gp)((function(e,t){var r,a=e.isInline,l=e.direction,c=e.align,s=e.justify,u=e.spacing,p=void 0===u?"0.5rem":u,g=e.wrap,y=e.children,h=e.divider,v=e.className,b=e.shouldWrapChildren,w=m(e,re),x=a?"row":null!=l?l:"column",N=o.useMemo((function(){return function(e){var t,r=e.spacing,n=e.direction,a={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return(t={flexDirection:n})[te]=(0,i.XQ)(n,(function(e){return a[e]})),t}({direction:x,spacing:p})}),[x,p]),k=o.useMemo((function(){return function(e){var t=e.spacing,r=e.direction,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,i.XQ)(r,(function(e){return n[e]}))}}({spacing:p,direction:x})}),[p,x]),E=!!h,S=!b&&!E,_=(0,d.WR)(y),j=S?_:_.map((function(e,t){var r="undefined"!==typeof e.key?e.key:t,n=t+1===_.length,a=b?o.createElement(ne,{key:r},e):e;if(!E)return a;var i=n?null:o.cloneElement(h,{__css:k});return o.createElement(o.Fragment,{key:r},a,i)})),A=(0,i.cx)("chakra-stack",v);return o.createElement(n.m$.div,f({ref:t,display:"flex",alignItems:c,justifyContent:s,flexDirection:N.flexDirection,flexWrap:g,className:A,__css:E?{}:(r={},r[te]=N[te],r)},w),j)}));i.Ts&&(ae.displayName="Stack");var ie=(0,n.Gp)((function(e,t){return o.createElement(ae,f({align:"center"},e,{direction:"row",ref:t}))}));i.Ts&&(ie.displayName="HStack");var oe=(0,n.Gp)((function(e,t){return o.createElement(ae,f({align:"center"},e,{direction:"column",ref:t}))}));i.Ts&&(oe.displayName="VStack");var le=["className","align","decoration","casing"],ce=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Text",e),a=(0,n.Lr)(e);a.className,a.align,a.decoration,a.casing;var l=m(a,le),c=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return o.createElement(n.m$.p,f({ref:t,className:(0,i.cx)("chakra-text",e.className)},c,l,{__css:r}))}));i.Ts&&(ce.displayName="Text");var se=["spacing","children","justify","direction","align","className","shouldWrapChildren"],ue=["className"],de=(0,n.Gp)((function(e,t){var r=e.spacing,l=void 0===r?"0.5rem":r,c=e.children,s=e.justify,u=e.direction,d=e.align,p=e.className,g=e.shouldWrapChildren,y=m(e,se),h=o.useMemo((function(){return{"--chakra-wrap-spacing":function(e){return(0,i.XQ)(l,(function(t){return(0,a.fr)("space",t)(e)}))},"--wrap-spacing":"calc(var(--chakra-wrap-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:s,alignItems:d,flexDirection:u,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-spacing)"}}}),[l,s,d,u]),v=g?o.Children.map(c,(function(e,t){return o.createElement(fe,{key:t},e)})):c;return o.createElement(n.m$.div,f({ref:t,className:(0,i.cx)("chakra-wrap",p)},y),o.createElement(n.m$.ul,{className:"chakra-wrap__list",__css:h},v))}));i.Ts&&(de.displayName="Wrap");var fe=(0,n.Gp)((function(e,t){var r=e.className,a=m(e,ue);return o.createElement(n.m$.li,f({ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",r)},a))}));i.Ts&&(fe.displayName="WrapItem")},8045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,l=void 0!==n&&n,c=e.priority,p=void 0!==c&&c,b=e.loading,E=e.lazyRoot,S=void 0===E?null:E,_=e.lazyBoundary,j=void 0===_?"200px":_,A=e.className,C=e.quality,T=e.width,O=e.height,I=e.objectFit,L=e.objectPosition,z=e.onLoadingComplete,W=e.loader,G=void 0===W?k:W,R=e.placeholder,B=void 0===R?"empty":R,M=e.blurDataURL,P=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),$=s.useRef(null),q=s.useContext(m.ImageConfigContext),D=s.useMemo((function(){var e=y||q||d.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),r=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:r})}),[q]),U=P,F=r?"responsive":"intrinsic";"layout"in U&&(U.layout&&(F=U.layout),delete U.layout);var H="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var X=w(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(M=M||X.blurDataURL,H=X.src,(!F||"fill"!==F)&&(O=O||X.height,T=T||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}t="string"===typeof t?t:H;var V=N(T),K=N(O),Q=N(C),Y=!p&&("lazy"===b||"undefined"===typeof b);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Y=!1);h.has(t)&&(Y=!1);0;var J,Z=i(f.useIntersection({rootRef:S,rootMargin:j,disabled:!Y}),2),ee=Z[0],te=Z[1],re=!Y||te,ne={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ie=!1,oe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:I,objectPosition:L},le="blur"===B?{filter:"blur(20px)",backgroundSize:I||"cover",backgroundImage:'url("'.concat(M,'")'),backgroundPosition:L||"0% 0%"}:{};if("fill"===F)ne.display="block",ne.position="absolute",ne.top=0,ne.left=0,ne.bottom=0,ne.right=0;else if("undefined"!==typeof V&&"undefined"!==typeof K){var ce=K/V,se=isNaN(ce)?"100%":"".concat(100*ce,"%");"responsive"===F?(ne.display="block",ne.position="relative",ie=!0,ae.paddingTop=se):"intrinsic"===F?(ne.display="inline-block",ne.position="relative",ne.maxWidth="100%",ie=!0,ae.maxWidth="100%",J="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(V,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===F&&(ne.display="inline-block",ne.position="relative",ne.width=V,ne.height=K)}else 0;var ue={src:v,srcSet:void 0,sizes:void 0};re&&(ue=x({config:D,src:t,unoptimized:l,layout:F,width:V,quality:Q,sizes:r,loader:G}));var de=t;0;var fe;0;var me=(a(fe={},"imagesrcset",ue.srcSet),a(fe,"imagesizes",ue.sizes),fe),pe=s.default.useLayoutEffect,ge=s.useRef(z);return s.useEffect((function(){ge.current=z}),[z]),pe((function(){ee($.current)}),[ee]),s.useEffect((function(){!function(e,t,r,n,a){var i=function(){var r=e.current;r&&(r.src!==v&&("decode"in r?r.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(h.add(t),"blur"===n&&(r.style.filter="",r.style.backgroundSize="",r.style.backgroundImage="",r.style.backgroundPosition=""),a.current)){var i=r.naturalWidth,o=r.naturalHeight;a.current({naturalWidth:i,naturalHeight:o})}})))};e.current&&(e.current.complete?i():e.current.onload=i)}($,de,0,B,ge)}),[de,F,B,re]),s.default.createElement("span",{style:ne},ie?s.default.createElement("span",{style:ae},J?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:J}):null):null,s.default.createElement("img",Object.assign({},U,ue,{decoding:"async","data-nimg":F,className:A,ref:$,style:g({},oe,le)})),Y&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},U,x({config:D,src:t,unoptimized:l,layout:F,width:V,quality:Q,sizes:r,loader:G}),{decoding:"async","data-nimg":F,style:oe,className:A,loading:b||"lazy"}))),p?s.default.createElement(u.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ue.src+ue.srcSet+ue.sizes,rel:"preload",as:"image",href:ue.srcSet?void 0:ue.src},me))):null)};var c,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),u=(c=r(5443))&&c.__esModule?c:{default:c},d=r(5809),f=r(7190),m=r(9977);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){p(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"},h=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,a=e.quality;0;if(r.endsWith(".svg")&&!t.dangerouslyAllowSVG)return r;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,a=e.quality,i=new URL("".concat(t.path).concat(E(r))),o=i.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),a&&o.set("q",a.toString());return i.href}],["cloudinary",function(e){var t=e.config,r=e.src,n=e.width,a=e.quality,i=["f_auto","c_limit","w_"+n,"q_"+(a||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(E(r))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(E(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function x(e){var t=e.config,r=e.src,n=e.unoptimized,a=e.layout,i=e.width,l=e.quality,c=e.sizes,s=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var u=function(e,t,r,n){var a=e.deviceSizes,i=e.allSizes;if(n&&("fill"===r||"responsive"===r)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(n);l)s.push(parseInt(l[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,o(s));return{widths:i.filter((function(e){return e>=a[0]*d})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t||"fill"===r||"responsive"===r?{widths:a,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return i.find((function(t){return t>=e}))||i[i.length-1]})))),kind:"x"}}(t,i,a,c),d=u.widths,f=u.kind,m=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,n){return"".concat(s({config:t,src:r,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:s({config:t,src:r,quality:l,width:d[m]})}}function N(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t,r=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=b.get(r);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(r))}function E(e){return"/"===e[0]?e.slice(1):e}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,o=(i=r(7294))&&i.__esModule?i:{default:i},l=r(6273),c=r(387),s=r(7190);var u={};function d(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),i=o.default.useMemo((function(){var t=a(l.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),f=i.href,m=i.as,p=e.children,g=e.replace,y=e.shallow,h=e.scroll,v=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var b=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,w=a(s.useIntersection({rootMargin:"200px"}),2),x=w[0],N=w[1],k=o.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);o.default.useEffect((function(){var e=N&&r&&l.isLocalURL(f),t="undefined"!==typeof v?v:n&&n.locale,a=u[f+"%"+m+(t?"%"+t:"")];e&&!a&&d(n,f,m,{locale:t})}),[m,f,N,v,r,n]);var E={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,i,o,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:i,locale:c,scroll:o}))}(e,n,f,m,g,y,h,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(f)&&d(n,f,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof v?v:n&&n.locale,_=n&&n.isLocaleDomain&&l.getDomainLocale(m,S,n&&n.locales,n&&n.domainLocales);E.href=_||l.addBasePath(l.addLocale(m,S,n&&n.defaultLocale))}return o.default.cloneElement(t,E)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,u=i.useRef(),d=a(i.useState(!1),2),f=d[0],m=d[1],p=a(i.useState(t?t.current:null),2),g=p[0],y=p[1],h=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),s.push(r));if(t)return t;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:i,elements:a}),t}(r),a=n.id,i=n.observer,o=n.elements;return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),c.delete(a);var t=s.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:g,rootMargin:r}))}),[n,g,r,f]);return i.useEffect((function(){if(!l&&!f){var e=o.requestIdleCallback((function(){return m(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){t&&y(t.current)}),[t]),[h,f]};var i=r(7294),o=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map,s=[]},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){e.exports=r(8045)},1664:function(e,t,r){e.exports=r(8418)}}]);