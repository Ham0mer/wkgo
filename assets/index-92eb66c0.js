function t(t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=a.width?String(a.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}function a(t){return function(a,r){var n;if("formatting"===(null!=r&&r.context?String(r.context):"standalone")&&t.formattingValues){var e=t.defaultFormattingWidth||t.defaultWidth,l=null!=r&&r.width?String(r.width):e;n=t.formattingValues[l]||t.formattingValues[e]}else{var u=t.defaultWidth,i=null!=r&&r.width?String(r.width):t.defaultWidth;n=t.values[i]||t.values[u]}return n[t.argumentCallback?t.argumentCallback(a):a]}}function r(t){return function(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.width,e=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],l=a.match(e);if(!l)return null;var u,i=l[0],c=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],f=Array.isArray(c)?function(t,a){for(var r=0;r<t.length;r++)if(a(t[r]))return r;return}(c,(function(t){return t.test(i)})):function(t,a){for(var r in t)if(t.hasOwnProperty(r)&&a(t[r]))return r;return}(c,(function(t){return t.test(i)}));return u=t.valueCallback?t.valueCallback(f):f,{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(i.length)}}}function n(t){return function(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.match(t.matchPattern);if(!n)return null;var e=n[0],l=a.match(t.parsePattern);if(!l)return null;var u=t.valueCallback?t.valueCallback(l[0]):l[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(e.length)}}}export{a,t as b,n as c,r as d};
