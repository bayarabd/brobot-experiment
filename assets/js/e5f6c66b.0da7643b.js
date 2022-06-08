"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8044],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),b=u(n),d=i,f=b["".concat(l,".").concat(d)]||b[d]||p[d]||o;return n?r.createElement(f,a(a({ref:e},c),{},{components:n})):r.createElement(f,a({ref:e},c))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4317:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:3},l="Initialize Brobot's Environment",u={unversionedId:"tutorial-basics/init-brobot",id:"tutorial-basics/init-brobot",title:"Initialize Brobot's Environment",description:"Configure Spring to Automate the GUI",source:"@site/docs/tutorial-basics/init-brobot.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/init-brobot",permalink:"/brobot/docs/tutorial-basics/init-brobot",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/tutorial-basics/init-brobot.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/brobot/docs/tutorial-basics/setup"},next:{title:"States",permalink:"/brobot/docs/tutorial-basics/states"}},c={},p=[{value:"Configure Spring to Automate the GUI",id:"configure-spring-to-automate-the-gui",level:2},{value:"Setup Brobot",id:"setup-brobot",level:2},{value:"Set the Active States",id:"set-the-active-states",level:2}],b={toc:p};function d(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"initialize-brobots-environment"},"Initialize Brobot's Environment"),(0,o.kt)("h2",{id:"configure-spring-to-automate-the-gui"},"Configure Spring to Automate the GUI"),(0,o.kt)("p",null,"In the executable class, we need to add the following lines for\nBrobot to be able to execute real runs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    SpringApplicationBuilder builder = new SpringApplicationBuilder(Run.class);\n    builder.headless(false);\n    ConfigurableApplicationContext context = builder.run(args);\n")),(0,o.kt)("p",null,"These lines should replace any other code involving SpringApplicationBuilder and\nthe ConfigurableApplicationContext."),(0,o.kt)("h2",{id:"setup-brobot"},"Setup Brobot"),(0,o.kt)("p",null,"This needs just one line to specify the folder with images to reference,\nand one line to turn on mocking."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    // setup brobot\n    ImagePath.setBundlePath("images.sikuli");\n    BrobotSettings.mock = true;\n')),(0,o.kt)("h2",{id:"set-the-active-states"},"Set the Active States"),(0,o.kt)("p",null,"The InitialStates class allows you to specify various groups of states\nthat could possibly exist when your application starts. This is practical\nif the program(s) you are controlling have different starting configurations.\nInitialStates can also be used for a more targeted search if Brobot gets lost,\ninstead of searching for all states with the StateFinder."),(0,o.kt)("p",null,"We allow for two possible single-state starting points: HOME and WORLD. These\nstates don't exist yet, but we will add them soon. The first parameter in\naddStateSet gives the probability of these states appearing as the starting point."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    // find initial active States\n    InitialStates initialStates = context.getBean(InitialStates.class);\n    initialStates.addStateSet(90, WORLD);\n    initialStates.addStateSet(10, HOME);\n    initialStates.findIntialStates();\n")))}d.isMDXComponent=!0}}]);