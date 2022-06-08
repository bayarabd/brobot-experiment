"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8110],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:e},c),{},{components:r})):n.createElement(d,i({ref:e},c))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3013:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={sidebar_position:1},s="Intro",l={unversionedId:"tutorial-state-structure-builder/intro",id:"tutorial-state-structure-builder/intro",title:"Intro",description:"This tutorial should take about 20 minutes.",source:"@site/docs/tutorial-state-structure-builder/intro.md",sourceDirName:"tutorial-state-structure-builder",slug:"/tutorial-state-structure-builder/intro",permalink:"/brobot/docs/tutorial-state-structure-builder/intro",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/tutorial-state-structure-builder/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Live Automation",permalink:"/brobot/docs/tutorial-basics/live-automation"},next:{title:"Setup",permalink:"/brobot/docs/tutorial-state-structure-builder/setup"}},c={},p=[],m={toc:p};function f(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intro"},"Intro"),(0,a.kt)("p",null,"This tutorial should take about ",(0,a.kt)("strong",{parentName:"p"},"20 minutes"),".  "),(0,a.kt)("p",null,"We're going to build the State Structure for a new application using the\nState Structure builder. We will perform the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Instruct Brobot to save screenshots while we perform tasks manually  "),(0,a.kt)("li",{parentName:"ol"},"Select screenshots to keep"),(0,a.kt)("li",{parentName:"ol"},"Capture and label images from the screenshots"),(0,a.kt)("li",{parentName:"ol"},"Analyze the quality of our selected images and regions with Brobot"),(0,a.kt)("li",{parentName:"ol"},"Use the State Structure builder to automate the creation of folders and classes")),(0,a.kt)("h1",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Any software that can cut and save images.  "),(0,a.kt)("p",null,"Some suggestions:",(0,a.kt)("br",{parentName:"p"}),"\n","Mac: Preview",(0,a.kt)("br",{parentName:"p"}),"\n","Windows: Photos, Paint",(0,a.kt)("br",{parentName:"p"}),"\n","Linux: XPaint, Pinta   "),(0,a.kt)("h1",{id:"some-other-stuff"},"Some other stuff"),(0,a.kt)("p",null,"This demo is meant as a guide to Brobot's State Structure build tool, as well\nas an introduction to its image analysis capabilities and how to use them to\ncreate a more robust application. The tutorial is done using the game\nBlack Desert Online as the environment because it is a pretty, complex, and fun\nenvironment that provides clear use cases for Brobot's functionality. A Brobot\napplication on Black Desert can be used for research on machine vision but\nnot with reinforcement learning. Reinforcement learning requires that the\napplication react to and control the environment, which is not possible with Brobot\nin a game that has an anti-cheat. Brobot is an automation framework\nand not a cheat engine, and has no capabilities to bypass anti-cheat software."))}f.isMDXComponent=!0}}]);