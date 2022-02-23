"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8685],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:e},l),{},{components:r})):n.createElement(m,i({ref:e},l))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=p;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7147:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={sidebar_position:1},c="Building The State Structure",s={unversionedId:"API/state structure/introduction",id:"API/state structure/introduction",isDocsHomePage:!1,title:"Building The State Structure",description:"Brobot version 1.0.2+",source:"@site/docs/API/state structure/introduction.md",sourceDirName:"API/state structure",slug:"/API/state structure/introduction",permalink:"/brobot/docs/API/state structure/introduction",editUrl:"https://jspinak.github.io/brobot/docs/API/state structure/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NullState",permalink:"/brobot/docs/API/state and state objects/null-state"},next:{title:"Naming Conventions",permalink:"/brobot/docs/API/state structure/naming-conventions"}},l=[{value:"What is the State Structure",id:"what-is-the-state-structure",children:[],level:2},{value:"Automate Building the State Structure",id:"automate-building-the-state-structure",children:[],level:2},{value:"Benefits of Automating the State Structure",id:"benefits-of-automating-the-state-structure",children:[],level:2}],d={toc:l};function p(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-the-state-structure"},"Building The State Structure"),(0,a.kt)("p",null,"Brobot version 1.0.2+\nRequires the dependency JavaPoet, which write Java code.",(0,a.kt)("br",{parentName:"p"}),"\n","In Gradle: ",(0,a.kt)("inlineCode",{parentName:"p"},"implementation group: 'com.squareup', name: 'javapoet', version: '1.9.0'")),(0,a.kt)("h2",{id:"what-is-the-state-structure"},"What is the State Structure"),(0,a.kt)("p",null,"The State Structure is the collection of State and StateTransitions classes\nthat defines your environment and allows Brobot to move around it."),(0,a.kt)("h2",{id:"automate-building-the-state-structure"},"Automate Building the State Structure"),(0,a.kt)("p",null,"Brobot can build the State Structure for you. To do this, it takes and saves\na collection of screenshots while you are working in your target environment and\nsaves these screenshots to a project folder. With the screenshots, you cut out\nimages that you wish to use as StateImageObjects and save them in the images folder.\nNaming these files is very important as it helps to determine your State Structure. "),(0,a.kt)("h2",{id:"benefits-of-automating-the-state-structure"},"Benefits of Automating the State Structure"),(0,a.kt)("p",null,"Automating the building of a State Structure allows you to:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"create accurate MatchHistories with real matches"),(0,a.kt)("li",{parentName:"ul"},"create StateRegions of otherwise difficult to capture regions\n(usually due to variable imagery)"),(0,a.kt)("li",{parentName:"ul"},"work directly with the client's environment"),(0,a.kt)("li",{parentName:"ul"},"get feedback on the accuracy and efficacy of your StateImageObjects\nbefore running the app live"),(0,a.kt)("li",{parentName:"ul"},"save lots of time and avoid errors by not having to type out the State structure")))}p.isMDXComponent=!0}}]);