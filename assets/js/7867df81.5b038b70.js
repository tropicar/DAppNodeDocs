(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(154)),i={sidebar_position:3},l={unversionedId:"get-started/installation/custom-hardware/installation/script",id:"get-started/installation/custom-hardware/installation/script",isDocsHomePage:!1,title:"Script Installation",description:"You can install DAppNode using the installation script. In this case, we recommend you use Ubuntu or Debian as your operating system.",source:"@site/docs/get-started/installation/custom-hardware/installation/script.md",sourceDirName:"get-started/installation/custom-hardware/installation",slug:"/get-started/installation/custom-hardware/installation/script",permalink:"/get-started/installation/custom-hardware/installation/script",editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/docs/get-started/installation/custom-hardware/installation/script.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"ISO Installation",permalink:"/get-started/installation/custom-hardware/installation/iso"},next:{title:"Hardware Recommendations",permalink:"/get-started/installation/arm-hardware/hardware-recommendations"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Post-Installation",id:"post-installation",children:[]},{value:"Restore to the latest version from a script",id:"restore-to-the-latest-version-from-a-script",children:[]},{value:"Uninstall",id:"uninstall",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can install DAppNode using the installation script. In this case, we recommend you use Ubuntu or Debian as your operating system."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Before installing DAppNode, you need to install some prerequisites:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/install/"},"Docker")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker-compose")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://tukaani.org/xz/"},"xz"))),Object(o.b)("p",null,"To install all the above prerequisites, execute the command below in the terminal of the machine you want to install DAppNode. If you already have the dependencies installed or you want to install them on your own you can skip this step."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sudo wget -O - https://prerequisites.dappnode.io | sudo bash")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"To install DAppNode, install it executing the next script:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sudo wget -O - https://installer.dappnode.io | sudo bash")),Object(o.b)("h2",{id:"post-installation"},"Post-Installation"),Object(o.b)("p",null,"Once the installation process has finished, DAppNode will try to automatically prepare the first access to your DAppNode on the next order:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"../../../../user-guide/ui/access/local-proxy"},"Local Proxy")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"../../../../user-guide/ui/access/wifi"},"Wifi")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"../../../../user-guide/ui/access/vpn#wireguard"},"Wireguard")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"../../../../user-guide/ui/access/vpn#openvpn"},"OpenVPN"))),Object(o.b)("h2",{id:"restore-to-the-latest-version-from-a-script"},"Restore to the latest version from a script"),Object(o.b)("p",null,"If you are experiencing any problem or just want to make sure you are running the latest DAppNode versions, execute this command in the DAppNode terminal. This will update the core packages to the latest versions without erasing any data from your volumes."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please note that volumes are not deleted, but any EXTRA_OPTS set by the user in the packages config must be set again after using this script to restore the system")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sudo wget -O - https://installer.dappnode.io | sudo UPDATE=true bash")),Object(o.b)("h2",{id:"uninstall"},"Uninstall"),Object(o.b)("p",null,"This command will uninstall DAppNode components (but not docker et al.)."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f BEWARE! It will also delete all volumes and stored data!")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"wget -qO - https://uninstaller.dappnode.io | sudo bash")))}p.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);