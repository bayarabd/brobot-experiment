"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9039],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,f=d["".concat(l,".").concat(p)]||d[p]||h[p]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5981:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},l="Attributes",c={unversionedId:"API/state structure/attributes",id:"API/state structure/attributes",isDocsHomePage:!1,title:"Attributes",description:"An Attribute describes how an Image should behave on a cerain page. Attributes",source:"@site/docs/API/state structure/attributes.md",sourceDirName:"API/state structure",slug:"/API/state structure/attributes",permalink:"/brobot/docs/API/state structure/attributes",editUrl:"https://jspinak.github.io/brobot/docs/API/state structure/attributes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Naming Conventions",permalink:"/brobot/docs/API/state structure/naming-conventions"},next:{title:"Image Analysis",permalink:"/brobot/docs/API/state structure/image-analysis"}},u=[{value:"APPEARS",id:"appears",children:[],level:2},{value:"APPEARS_EXCLUSIVELY",id:"appears_exclusively",children:[],level:2},{value:"DOESNT_APPEAR",id:"doesnt_appear",children:[],level:2},{value:"MULTIPLE_MATCHES",id:"multiple_matches",children:[],level:2},{value:"SINGLE_MATCH",id:"single_match",children:[],level:2},{value:"VARIABLE_LOCATION",id:"variable_location",children:[],level:2},{value:"FIXED_LOCATION",id:"fixed_location",children:[],level:2},{value:"DEFINE",id:"define",children:[],level:2},{value:"GROUP_DEFINE",id:"group_define",children:[],level:2},{value:"REGION",id:"region",children:[],level:2},{value:"TRANSFER",id:"transfer",children:[],level:2}],h={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"attributes"},"Attributes"),(0,a.kt)("p",null,"An Attribute describes how an Image should behave on a cerain page. Attributes\ncan be page specific (i.e. _m2,3) or affect all screenshots (_m). All Attributes\nare listed below with details on what they do and how they influence the State Structure. "),(0,a.kt)("h2",{id:"appears"},"APPEARS"),(0,a.kt)("p",null,"Modifier: ",(0,a.kt)("em",{parentName:"p"},"\nThe associated image should appear in the screenshots listed after the modifier.\nFor example, an image that should appear on screenshots 2 and 3 would have _2,3 in\nthe filename. An image that should appear in every screenshot will have just ")," in the\nfilename without any screen numbers. "),(0,a.kt)("h2",{id:"appears_exclusively"},"APPEARS_EXCLUSIVELY"),(0,a.kt)("p",null,"Modifier: ",(0,a.kt)("em",{parentName:"p"},"e",(0,a.kt)("br",{parentName:"em"}),"The image appears exclusively in the screenshots listed after the modifier. For\nexample, if we have 10 screenshots labeled screen0, screen1, ..., screen9, and\nhave the String _e2,4,5 in our filename, the image will be expected to appear in\nscreenshots 2, 4, & 5, but not in the remaining 7 screenshots (0,1,3,6,7,8,9).\nThe modifier _e by itself has the same effect as the modifier ")," by itself.  "),(0,a.kt)("h2",{id:"doesnt_appear"},"DOESNT_APPEAR"),(0,a.kt)("p",null,"Modifier: _x",(0,a.kt)("br",{parentName:"p"}),"\n","The image doesn't appear in the screenshots listed after the modifier. "),(0,a.kt)("h2",{id:"multiple_matches"},"MULTIPLE_MATCHES"),(0,a.kt)("p",null,"Modifier: _m",(0,a.kt)("br",{parentName:"p"}),"\n","Allows for, but does not require, multiple matches. "),(0,a.kt)("h2",{id:"single_match"},"SINGLE_MATCH"),(0,a.kt)("p",null,"Modifier: (none)\nSince this attribute is much more common than its opposite, MULTIPLE_MATCHES, it\nis not written in the filename but deduced from the absence of the MULTIPLE_MATCHES\nattribute.  "),(0,a.kt)("h2",{id:"variable_location"},"VARIABLE_LOCATION"),(0,a.kt)("p",null,"Modifier: _v\nThis attribute allows the image to vary its location. The StateImageObject will\nuse an Image instead of a RegionImagePairs object. Finding matches with different\nlocations will not be flagged in the image analysis. "),(0,a.kt)("h2",{id:"fixed_location"},"FIXED_LOCATION"),(0,a.kt)("p",null,"Modifier: (none)",(0,a.kt)("br",{parentName:"p"}),"\n","Most State objects are expected to exist in the same location, and since this is\nthe default it is not included in the filename. Filenames that do not include a\nVARIABLE_LOCATION attribute will have FIXED_LOCATION for every screenshot.  "),(0,a.kt)("h2",{id:"define"},"DEFINE"),(0,a.kt)("p",null,"Modifier: _d",(0,a.kt)("br",{parentName:"p"}),"\n","Using this attribute we can define the SearchArea of an image as the region of\nits match. The image will be defined only once. If screenshot numbers are listed\nafter the modifier, Brobot will only use these screenshots to define the image;\notherwise, it can be defined on any screenshot. DEFINE is used for images with\nfixed locations.  "),(0,a.kt)("h2",{id:"group_define"},"GROUP_DEFINE"),(0,a.kt)("p",null,"Modifier: _g",(0,a.kt)("br",{parentName:"p"}),"\n","Multiple images in a State can be used to define a SearchRegion for each of them\nthat includes all the images. You may want to do this for a set of images that\nappear in a certain region, but not in fixed locations. Brobot will continue to\ndefine group regions for screenshots where this attribute is active, and\nwill replace the SearchRegion of the images when the newly defined region is\nlarger than their current SearchRegion.  "),(0,a.kt)("h2",{id:"region"},"REGION"),(0,a.kt)("p",null,"Modifier: _r",(0,a.kt)("br",{parentName:"p"}),"\n","When this attribute is active, the first match found will be stored in the\nimage's SearchRegion. When the Java classes are written, this SearchRegion\nwill be used to create a StateRegion defined by the SearchRegion and no\nStateImageObject will be created.  "),(0,a.kt)("h2",{id:"transfer"},"TRANSFER"),(0,a.kt)("p",null,"Modifier: _t",(0,a.kt)("br",{parentName:"p"}),"\n","Similar to REGION, this attribute does not get written as a StateImageObject.\nUnlike REGION, it also does not get written as a StateRegion. Instead, the image's\nmatch is copied to the SearchRegions of all images in the State.\nThe SearchRegions are updated as long as an image's SearchRegion is either not yet\ndefined or smaller than the new Region. This is another approach, along with\nGROUP_DEFINE, to determine the SearchRegion for variable-location images."))}d.isMDXComponent=!0}}]);