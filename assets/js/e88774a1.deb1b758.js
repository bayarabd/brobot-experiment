"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8685],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:e},l),{},{components:r})):n.createElement(f,i({ref:e},l))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=p;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7147:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Building The State Structure",u={unversionedId:"API/state structure/introduction",id:"API/state structure/introduction",title:"Building The State Structure",description:"Brobot version 1.0.3+",source:"@site/docs/API/state structure/introduction.md",sourceDirName:"API/state structure",slug:"/API/state structure/introduction",permalink:"/brobot/docs/API/state structure/introduction",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/API/state structure/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NullState",permalink:"/brobot/docs/API/state and state objects/null-state"},next:{title:"Naming Conventions",permalink:"/brobot/docs/API/state structure/naming-conventions"}},s={},c=[{value:"What is the State Structure",id:"what-is-the-state-structure",level:2},{value:"Building the State Structure",id:"building-the-state-structure-1",level:2},{value:"Benefits of Automating the State Structure",id:"benefits-of-automating-the-state-structure",level:2}],l={toc:c};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-the-state-structure"},"Building The State Structure"),(0,a.kt)("p",null,"Brobot version 1.0.3+",(0,a.kt)("br",{parentName:"p"}),"\n","Requires the dependency JavaPoet, which writes Java code.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"implementation group: 'com.squareup', name: 'javapoet', version: '1.9.0'")),(0,a.kt)("h2",{id:"what-is-the-state-structure"},"What is the State Structure"),(0,a.kt)("p",null,"The State Structure is the collection of State and StateTransitions classes\nthat defines your environment and allows Brobot to move around it."),(0,a.kt)("h2",{id:"building-the-state-structure-1"},"Building the State Structure"),(0,a.kt)("p",null,"Brobot can build the State Structure for you. To do this, it takes and saves\na collection of screenshots while you are working in your target environment and\nsaves these screenshots to a project folder. With the screenshots, you cut out\nimages that you wish to use as StateImageObjects and save them in the images folder.\nNaming these files is very important as it helps to determine your State Structure. "),(0,a.kt)("h2",{id:"benefits-of-automating-the-state-structure"},"Benefits of Automating the State Structure"),(0,a.kt)("p",null,"Automating the building of a State Structure allows you to:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"automate the creation of folders, State and StateTransitions classes"),(0,a.kt)("li",{parentName:"ul"},"automate writing Java code for StateImageObjects, StateRegions, and Transitions"),(0,a.kt)("li",{parentName:"ul"},"include accurate MatchHistories with real matches, making mock runs more realistic"),(0,a.kt)("li",{parentName:"ul"},"create StateRegions of otherwise difficult to capture regions\n(usually due to variable imagery)"),(0,a.kt)("li",{parentName:"ul"},"work directly with the client's environment by using screenshots from their computer"),(0,a.kt)("li",{parentName:"ul"},"get feedback on the accuracy and efficacy of your images before development"),(0,a.kt)("li",{parentName:"ul"},"save time and avoid errors by not having to type out the State Structure")))}d.isMDXComponent=!0}}]);