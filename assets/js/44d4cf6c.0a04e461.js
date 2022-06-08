"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6706],{3905:function(t,e,n){n.d(e,{Zo:function(){return h},kt:function(){return m}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},h=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),u=l(n),m=o,p=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(p,i(i({ref:e},h),{},{components:n})):a.createElement(p,i({ref:e},h))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6614:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:7},c="State Management",l={unversionedId:"introduction/core-features/state-management",id:"introduction/core-features/state-management",title:"State Management",description:"Brobot actively maintains an awareness of which States are active at any",source:"@site/docs/introduction/core-features/state-management.md",sourceDirName:"introduction/core-features",slug:"/introduction/core-features/state-management",permalink:"/brobot/docs/introduction/core-features/state-management",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/introduction/core-features/state-management.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Controlling the GUI",permalink:"/brobot/docs/introduction/core-features/controlling-the-GUI"},next:{title:"Action Recording",permalink:"/brobot/docs/introduction/core-features/action-recording"}},h={},d=[{value:"State Memory",id:"state-memory",level:2},{value:"Hidden States",id:"hidden-states",level:2},{value:"Transitions",id:"transitions",level:2},{value:"Paths",id:"paths",level:2},{value:"State Finder and the Unknown State",id:"state-finder-and-the-unknown-state",level:2}],u={toc:d};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"state-management"},"State Management"),(0,r.kt)("p",null,"Brobot actively maintains an awareness of which States are active at any\ntime. It does this by keeping track of which States have become active,\nwhich States have exited, and which States have been hidden as others have\nbecome active. Paths and Transitions allow Brobot to move from one State to\nanother with one line of code. It is not important which States are currently\nactive, as Brobot can find a path to the target State and follow it."),(0,r.kt)("h2",{id:"state-memory"},"State Memory"),(0,r.kt)("p",null,"The Find operation works together with the State Memory, which is\na class that holds the State currently active. When an image is found,\nits owner State is registered in State Memory. Similarly, when a State\nis exited, it is removed from State Memory."),(0,r.kt)("h2",{id:"hidden-states"},"Hidden States"),(0,r.kt)("p",null,"Imagine in the program you are controlling you have a menu that covers\npart of the screen. When it is opened, it covers any States in this area,\nand when it is closed these States reappear. Since the menu can be opened at\nany time while the program is running, you don't know beforehand which\nStates will be hidden. The easiest path to one of the hidden States is\nsimply closing the menu, but how can Brobot know this? The answer is through\nmanagement of hidden States, which are\nregistered for each State when the State is opened, and removed from the\nState's hidden States field when the State is closed. Transitions allow for\na variable State name called PREVIOUS to specify how to move to a hidden State."),(0,r.kt)("h2",{id:"transitions"},"Transitions"),(0,r.kt)("p",null,"Every State that is reachable needs to have an associated StateTransitions class.\nThe StateTransitions class comprises Transition objects, which provide a\nmeans to move from one State to another. Transitions are split into two types:\nFromTransitions and ToTransitions. FromTransitions handle the process of moving\nfrom the current State to another State, and ToTransitions end the process of\nmoving to the current State. For example, to go from State A to State B, first\nthe FromTransition A -> B will be called, and then the ToTransition -> B will\nbe called. It looks like this:"),(0,r.kt)("u",null,"StateTransitions for State A"),(0,r.kt)("p",null,"The FromTransition tells us what to do in State A in order to go to State B"),(0,r.kt)("u",null,"StateTransitions for State B"),(0,r.kt)("p",null,"The ToTransition tells us what to do in State B to finish opening the State,\nregardless of which State started the process. There can be multiple FromTransitions\ngoing to State B from different States, but there is only one ToTransition to State B."),(0,r.kt)("p",null,"In the StateTransitions Builder, ToTransitions are created with the command 'addTransitionFinish'\nand FromTransitions are created with the command 'addTransition'. The method passed to\n'addTransitionFinish' is always called finishTransition(). The methods passed to\n'addTransition' can have any name."),(0,r.kt)("h2",{id:"paths"},"Paths"),(0,r.kt)("p",null,"Paths are State chains that show how to reach a target State from a start State.\nGoing to any State is as easy as writing 'open(State name)' and Brobot will\nfind Paths to that State and attempt to transition until the target State is reached\nor all Paths have been unsuccessfully attempted. Paths have scores associated with\nthem, corresponding to the sum of the scores of individual States. Paths with lower\nscores will be tried first, and State scores can be changed dynamically if necessary."),(0,r.kt)("h2",{id:"state-finder-and-the-unknown-state"},"State Finder and the Unknown State"),(0,r.kt)("p",null,"In case Brobot gets lost and cannot find any of the active States, there is\na State Finder that will search for active States. This is a costly operation\nbut will rebuild the list of active States in State Memory and allow the\nautomation to continue."),(0,r.kt)("p",null,"There is also a possibility that something really unexpected happens and that\nno States are active. In this case the UNKNOWN State will become active. The UNKNOWN\nState also has Transitions and will attempt these Transitions in order to find its\nway back to the target State. Any code meant to deal with unexpected situations\nin which no States are visible should go into the UNKNOWN State's Transitions."))}m.isMDXComponent=!0}}]);