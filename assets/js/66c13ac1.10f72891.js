"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2675],{3905:function(n,t,i){i.d(t,{Zo:function(){return u},kt:function(){return b}});var e=i(7294);function o(n,t,i){return t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}function r(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.push.apply(i,e)}return i}function s(n){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(n,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(i,t))}))}return n}function a(n,t){if(null==n)return{};var i,e,o=function(n,t){if(null==n)return{};var i,e,o={},r=Object.keys(n);for(e=0;e<r.length;e++)i=r[e],t.indexOf(i)>=0||(o[i]=n[i]);return o}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(e=0;e<r.length;e++)i=r[e],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(o[i]=n[i])}return o}var l=e.createContext({}),c=function(n){var t=e.useContext(l),i=t;return n&&(i="function"==typeof n?n(t):s(s({},t),n)),i},u=function(n){var t=c(n.components);return e.createElement(l.Provider,{value:t},n.children)},d={inlineCode:"code",wrapper:function(n){var t=n.children;return e.createElement(e.Fragment,{},t)}},p=e.forwardRef((function(n,t){var i=n.components,o=n.mdxType,r=n.originalType,l=n.parentName,u=a(n,["components","mdxType","originalType","parentName"]),p=c(i),b=o,f=p["".concat(l,".").concat(b)]||p[b]||d[b]||r;return i?e.createElement(f,s(s({ref:t},u),{},{components:i})):e.createElement(f,s({ref:t},u))}));function b(n,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var r=i.length,s=new Array(r);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=n,a.mdxType="string"==typeof n?n:o,s[1]=a;for(var c=2;c<r;c++)s[c]=i[c];return e.createElement.apply(null,s)}return e.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4615:function(n,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var e=i(7462),o=i(3366),r=(i(7294),i(3905)),s=["components"],a={sidebar_position:5},l="Transitions",c={unversionedId:"tutorial-basics/transitions",id:"tutorial-basics/transitions",title:"Transitions",description:"Transitions allow Brobot to move from one state to another. Any state that",source:"@site/docs/tutorial-basics/transitions.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/transitions",permalink:"/brobot/docs/tutorial-basics/transitions",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/tutorial-basics/transitions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"States",permalink:"/brobot/docs/tutorial-basics/states"},next:{title:"Define the Capture Region",permalink:"/brobot/docs/tutorial-basics/define-capture-region"}},u={},d=[{value:"Home Transitions",id:"home-transitions",level:2},{value:"World Transitions",id:"world-transitions",level:2},{value:"Island Transitions",id:"island-transitions",level:2}],p={toc:d};function b(n){var t=n.components,i=(0,o.Z)(n,s);return(0,r.kt)("wrapper",(0,e.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transitions"},"Transitions"),(0,r.kt)("p",null,"Transitions allow Brobot to move from one state to another. Any state that\nwill be accessed needs a StateTransitions class.  "),(0,r.kt)("h2",{id:"home-transitions"},"Home Transitions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@Component\npublic class HomeTransitions {\n\n    private final Action action;\n    private final Home home;\n\n    private StateTransitions transitions;\n\n    public HomeTransitions(StateTransitionsRepository stateTransitionsRepository,\n                           Action action, Home home) {\n        this.action = action;\n        this.home = home;\n        transitions = new StateTransitions.Builder(HOME)\n                .addTransition(this::goToWorld, WORLD)\n                .build();\n        stateTransitionsRepository.add(transitions);\n    }\n\n    private boolean goToWorld() {\n        return action.perform(ActionOptions.Action.CLICK, home.getToWorldButton()).isSuccess();\n    }\n\n}\n")),(0,r.kt)("h2",{id:"world-transitions"},"World Transitions"),(0,r.kt)("p",null,"We use the builder for the transition from World to Island since it requires\na special option: in this transition the World state stays visible.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@Component\npublic class WorldTransitions {\n\n    private final Action action;\n    private final World world;\n\n    private StateTransitions transitions;\n\n    public WorldTransitions(StateTransitionsRepository stateTransitionsRepository,\n                            Action action, World world) {\n        this.action = action;\n        this.world = world;\n        transitions = new StateTransitions.Builder(WORLD)\n                .addTransitionFinish(this::finishTransition)\n                .addTransition(new StateTransition.Builder()\n                        .addToActivate(ISLAND)\n                        .setFunction(this::goToIsland)\n                        .setStaysVisibleAfterTransition(TRUE)\n                        .build())\n                .build();\n        stateTransitionsRepository.add(transitions);\n    }\n\n    private boolean finishTransition() {\n        ObjectCollection worldImages = new ObjectCollection.Builder()\n                .withAllStateImages(world.getState())\n                .build();\n        return action.perform(FIND, worldImages).isSuccess();\n    }\n\n    public boolean goToIsland() {\n        ActionOptions clickTwice = new ActionOptions.Builder()\n                .setAction(ActionOptions.Action.CLICK)\n                .setTimesToRepeatIndividualAction(2)\n                .setPauseBetweenActions(.2)\n                .build();\n        ObjectCollection searchButton = new ObjectCollection.Builder()\n                .withImages(world.getSearchButton())\n                .build();\n        return action.perform(clickTwice, searchButton).isSuccess();\n    }\n\n}\n")),(0,r.kt)("h2",{id:"island-transitions"},"Island Transitions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@Component\npublic class IslandTransitions {\n\n    private final Action action;\n    private final Island island;\n\n    private StateTransitions transitions;\n\n    public IslandTransitions(StateTransitionsRepository stateTransitionsRepository,\n                             Action action, Island island) {\n        this.action = action;\n        this.island = island;\n        transitions = new StateTransitions.Builder(ISLAND)\n                .addTransitionFinish(this::finishTransition)\n                .build();\n        stateTransitionsRepository.add(transitions);\n    }\n\n    private boolean finishTransition() {\n        ObjectCollection worldImages = new ObjectCollection.Builder()\n                .withAllStateImages(island.getState())\n                .build();\n        return action.perform(FIND, worldImages).isSuccess();\n    }\n\n}\n")))}b.isMDXComponent=!0}}]);