"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:5},a="Processes as Objects",s={unversionedId:"introduction/core-features/processes-as-objects",id:"introduction/core-features/processes-as-objects",title:"Processes as Objects",description:"Interacting with the GUI is not as simple as 'find' and 'click'. There are a lot of",source:"@site/docs/introduction/core-features/processes-as-objects.md",sourceDirName:"introduction/core-features",slug:"/introduction/core-features/processes-as-objects",permalink:"/brobot/docs/introduction/core-features/processes-as-objects",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/introduction/core-features/processes-as-objects.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Action Recording",permalink:"/brobot/docs/introduction/core-features/testing/action-recording"},next:{title:"Controlling the GUI",permalink:"/brobot/docs/introduction/core-features/controlling-the-GUI"}},c={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"processes-as-objects"},"Processes as Objects"),(0,i.kt)("p",null,"Interacting with the GUI is not as simple as 'find' and 'click'. There are a lot of\nparameters involved. For example, a 'find' operation depends on settings such as the\nminimum similarity required for the match to be accepted, the max amount of time to\nsearch before giving up, and the region in which to search, as well as other parameters.\nBuilding a library such as Brobot while using processes as functions would create either an\nexploding web of methods or methods with extremely long parameter lists. It would be\nunwieldy to use and complicated to develop."),(0,i.kt)("p",null,"Processes as objects has an additional advantage in that it allows a interactive process\nto be treated as the combination of building blocks. This is important because brobot\nallows for the development of complex applications that react to their environments,\nin which the sequences of paths and actions taken are not known before the application\nis run. "),(0,i.kt)("p",null,"A good example of how this has affected the design choices taken is how pauses\nare used. Brobot makes a set of actions available to be used to create\napplications. Pause, or wait, is not one of them. Instead, pauses can be selected\nas part of the action's options.\nIncluding pauses as options and not as a separate action was a deliberate design choice.\nHaving a pause method allows the programmer to think in a more procedural manner: for example,\ndo A and then wait a bit and then do B. Brobot's design incentivizes the\nprogrammer to think about the process as discrete process objects that can be combined and\nrecombined in different configurations. Brobot provides a framework for a semi-intelligent\nautomation and not just for automating a static process flow."),(0,i.kt)("p",null,"Treating processes as objects also simplifies the creation of new composite actions out of the\nmore basic process building blocks. For example, the composite action ClickUntil, which performs\nclicks until a condition is reached, is much simpler to create with the standard process\nobjects in Brobot."),(0,i.kt)("p",null,"The main classes enabling this are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ActionOptions: a collection of options that can be applied to any action (for example, min similarity).\nThis object includes options for the action to take (i.e. FIND, CLICK, DRAG)."),(0,i.kt)("li",{parentName:"ul"},"ObjectCollection: a collection of state objects that are used with the action."),(0,i.kt)("li",{parentName:"ul"},"Action: takes ActionOptions and ObjectCollections as parameters and executes the action specified\nin ActionOptions."),(0,i.kt)("li",{parentName:"ul"},"Matches: contains all the results of the action linked to the corresponding objects in the\nObjectCollection.")),(0,i.kt)("p",null,"An example (this defines a region around a match):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ActionOptions defineRegion = new ActionOptions.Builder()\n.setAction(ActionOptions.Action.DEFINE)\n.setDefineAs(ActionOptions.DefineAs.MATCH)\n.setMinSimilarity(.6)\n.setAddX(-5)\n.setAddY(-1)\n.setAbsoluteWidthOfDefinedRegion(296)\n.setAbsoluteHeightOfDefinedRegion(255)\n.build();\n\nObjectCollection mapImage = new ObjectCollection.Builder()\n.withImages(miniMap.getMap())\n.build();\n\nMatches matches = action.perform(defineRegion, mapImage);\n")))}d.isMDXComponent=!0}}]);