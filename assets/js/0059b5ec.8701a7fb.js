"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8513],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),l=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),f=l(n),b=o,d=f["".concat(i,".").concat(b)]||f[b]||p[b]||a;return n?r.createElement(d,s(s({ref:e},u),{},{components:n})):r.createElement(d,s({ref:e},u))}));function b(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7739:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],c={sidebar_position:8},i="NullState",l={unversionedId:"API/state and state objects/null-state",id:"API/state and state objects/null-state",isDocsHomePage:!1,title:"NullState",description:"NullState is used as a generic State for passing simple objects",source:"@site/docs/API/state and state objects/null-state.md",sourceDirName:"API/state and state objects",slug:"/API/state and state objects/null-state",permalink:"/brobot/docs/API/state and state objects/null-state",editUrl:"https://jspinak.github.io/brobot/docs/API/state and state objects/null-state.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"StateString",permalink:"/brobot/docs/API/state and state objects/state-string"}},u=[],p={toc:u};function f(t){var e=t.components,n=(0,o.Z)(t,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nullstate"},"NullState"),(0,a.kt)("p",null,"NullState is used as a generic State for passing simple objects\n(non State objects) to Actions. Simple objects are usually temporary\nobjects that are not associated with any State. These objects can still\nbe acted on by Actions, but no State will become active when they are found."))}f.isMDXComponent=!0}}]);