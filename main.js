!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var i,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){var r=n(2),a=n(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],c=t.base?o[0]+t.base:o[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=s(l),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(h)):i.push({identifier:l,updater:p(h,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function h(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function g(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function p(e,t){var n,r,a;if(t.singleton){var o=m++;n=f||(f=u(t)),r=h.bind(null,n,o,!1),a=h.bind(null,n,o,!0)}else n=u(t),r=g.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=s(n[r]);i[a].references--}for(var o=c(e,t),u=0;u<n.length;u++){var l=s(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=o}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r)()(!1);a.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Dosis&display=swap);"]),a.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Dosis:wght@600;800&display=swap);"]),a.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Dosis:wght@600;700;800&display=swap);"]),a.push([e.i,':root {\n    --dosis-font: \'Dosis\', sans-serif;\n}\n\nhtml, body {\n    border: 0;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    font-family: var(--dosis-font);\n    color: white;\n}\n\n#main-card {\n    position: relative;\n    margin: 0;\n    padding: 0;\n    height: 80%;\n    width: 100%;\n    background-color: black;\n}\n\n#card-wrapper {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 90%;\n    width: 40%;\n    padding: 0;\n    margin: auto;\n}\n\n#card-title {\n    height: 15%;\n    line-height: 85px;\n    width: 100%;\n    font-size: 3rem;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    background-color: rgb(19, 19, 19);\n    border-radius: 10px 10px 0 0;\n    text-align: center;\n}\n\n#todo-list {\n    width: 100%;\n    height: 77.5%; \n    background-color: rgb(19, 19, 19);\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n\n.todo-item {\n    display: block;\n    height: 10%;\n    width: 100%;\n    border: solid 2px black;\n    color: rgb(179, 179, 179);\n    border-radius: 2.5px;\n    background-color: rgb(49, 49, 49);\n    transition: all ease-in-out 0.5s;\n}\n\n.todo-open {\n    display: block;\n    height: 40%;\n    width: 100%;\n    border: solid 2px black;\n    border-radius: 5px;\n    background-color: rgb(63, 63, 63);\n    transition: all ease-in-out 0.5s;\n}\n\n.notes-wrapper {\n    height: 65%;\n    width: 70%;\n    float: left;\n    padding: 0 20px;\n    margin-top: 10px;\n\n}\n\n.title-notes {\n    margin-bottom: 15px;\n    font-size: 1rem;\n    font-weight: 700;\n    letter-spacing: 2.5px;\n}\n\n.notes {\n    word-break: break-all;\n    letter-spacing: 0.2px;\n}\n\n.start-date-wrapper {\n    height: 40%;\n    width: 20%;\n    float: left;\n    text-align: center;\n    line-height: 30px;\n    border-left: solid 1px white;\n    padding-top: 10px;\n    padding-left: 20px;\n    margin-top: 20px;\n}\n\n.arrow-wrapper {\n    display: inline-block;\n    vertical-align: top;\n    line-height: 50px;\n    height: 100%;\n    width: 5%;\n    margin: 0;\n    margin-left: 10px;\n    transition: all ease-in-out 0.5s;\n}\n\nspan {\n    display: inline-block;\n    font-size: 1.75rem;\n    transform: rotate(-90deg);\n    margin-left: 5px;\n}\n\n.todo-title-wrap {\n    font-size: 1.3rem;\n    display: inline-block;\n    vertical-align: top;\n    text-align: left;\n    font-weight: 600;\n    letter-spacing: 0.75px;\n    line-height: 50px;\n    height: 100%;\n    width: 72.5%;\n}\n\n.todo-title-wrap:first-letter {\n    text-transform: capitalize;\n}\n\n.priority-meter {\n    display: inline-block;\n    border-radius: 100%;\n    margin-top: 20px;\n    margin-right: 10px;\n    width: 12.5px;\n    height: 12.5px;\n}\n\n.due-date {\n    display: inline-block;\n    text-align: center;\n    line-height: 50px;\n    vertical-align: top;\n    text-transform: uppercase;\n    font-size: 1.25rem;\n    font-weight: 700;\n    height: 100%;\n    width: 10%;\n    margin-right: 10px;\n}\n\n.checkbox-wrapper {\n    display: inline-block;\n    vertical-align: center;\n    padding-top: 10px;\n    width: 5%;\n    height: 50%;\n}\n\n.edit-wrapper {\n    display: inline-block;\n    width: 5%;\n    height: 10%;\n    cursor: pointer;\n}\n\nimg {\n    max-width: 50%;\n    max-height: 100%;\n}\n\n#add-wrapper {\n    position: relative;\n    height: 10%;\n    width: 100%;\n    background-color: rgb(19, 19, 19);\n    border-radius: 0 0 10px 10px;\n    overflow: hidden;\n}\n\ninput[type="text"] {\n    height: 60%;\n    width: 87.5%;\n    margin: 10px 10px 0 10px;\n    border-radius: 5px;\n    vertical-align: top;\n    background-color: white;\n}\n\ninput[type="image"] {\n    position: absolute;\n    top: 0;\n    right: 12.5px;\n    margin-top: 9px;\n    width: 45px;\n    height: 45px;\n    background-color: orange;\n    transform: rotate(-90deg);\n    border-radius: 100%;\n}\n\n#card-list {\n    height: 20%;\n    width: 100%;\n    background-color: grey;\n}\n\n#overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.7);\n    transition: opacity 500ms;\n    visibility: hidden;\n    opacity: 0;\n}\n\n#edit-form {\n    margin: 200px auto;\n    padding: 0 20px;\n    height: 500px;\n    width: 400px;\n    background-color: rgb(49, 49, 49);\n}\n\n#edit-title {\n    font-size: 2rem;\n    font-weight: 400;\n    text-transform: uppercase;\n    letter-spacing: 5.5px;\n    text-align: right;\n    float: left;\n    width: 50%;\n    margin: 30px 0;\n}\n\n#title-input {\n    position: absolute;\n    height: 20px;\n    left: 0;\n    top: -5px;\n    border: 0;\n    outline: 0;\n    padding-bottom: 10px;\n    border-bottom: 2px solid green;\n    background-color: transparent;\n    color: white;\n    transition: 0.2s all;\n}\n\n/*#title-input:focus {\n    top: 20px;\n}*/\n\n#title-label {\n    position: relative;\n    color: white;\n    top: 0;\n    left: -190px;\n    font-size: 1.25rem;\n}\n\n#close {\n   float: right;\n   margin-top: 15px;\n   height: 30px;\n   width: 30px;\n   text-align: left;\n   background-color: Transparent;\n   background-repeat:no-repeat;\n   border: none;\n   cursor:pointer;\n   overflow: hidden;\n   outline:none;\n   color: white;\n   font-size: 1.5rem;\n}\n\n#close:hover {\n    color: red;\n}\n\n#text-group {\n    position: relative;\n    top: 100px;\n    height: 50px;\n\n}\n\n#drop-group {\n    position: relative;\n    top: 90px;  \n    height: 100px;\n    padding-left: 10px;\n}\n\n#priority-label {\n    position: relative;\n    left: -190px;\n    top: 5px;\n    font-size: 1.25rem;\n    letter-spacing: 1px;\n}\n\n#dropdown {\n    position: relative;\n    top: -37.5px;\n    left: 100px;\n}\n\n#date-group {\n    position: relative;\n    top: 50px;\n    left: 10px;\n    font-size: 1.25rem;\n}\n\n#due-date-input {\n    position: relative;\n    left: 20px;\n}\n\n#notes-group {\n    position: relative;\n    top: 80px;\n    left: 10px;\n}\n\n#notes-label {\n    font-size: 1.25rem;\n}\n\n#notes-input {\n    height: 80px;\n    width: 350px;\n    padding: 10px;\n}\n\n#submit {\n    position: relative;\n    height: 30px;\n    width: 100px;\n    top: 100px;\n    left: 150px;\n}\n',""]),t.default=a},function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(){return function(e){r(1,arguments);var t=a(e);return t.setHours(0,0,0,0),t}(Date.now())}function i(e){r(1,arguments);var t=a(e);return!isNaN(t)}var s={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function c(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var u={date:c({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:c({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:c({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function d(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var s=e.defaultWidth,c=a.width?String(a.width):e.defaultWidth;r=e.values[c]||e.values[s]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t,n){var r=String(t),a=n||{},o=a.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],s=r.match(i);if(!s)return null;var c,u=s[0],l=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(l,(function(e){return e.test(u)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(l,(function(e){return e.test(u)})),c=e.valueCallback?e.valueCallback(c):c,{value:c=a.valueCallback?a.valueCallback(c):c,rest:r.slice(u.length)}}}var g,f={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof s[e]?s[e]:1===t?s[e].one:s[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:u,formatRelative:function(e,t,n,r){return l[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:d({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:d({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:d({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:d({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:d({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(g={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(g.matchPattern);if(!a)return null;var o=a[0],i=n.match(g.parsePattern);if(!i)return null;var s=g.valueCallback?g.valueCallback(i[0]):i[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(o.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function m(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function p(e,t){r(2,arguments);var n=a(e).getTime(),o=m(t);return new Date(n+o)}function b(e,t){r(2,arguments);var n=m(t);return p(e,-n)}function w(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var v={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return w("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):w(n+1,2)},d:function(e,t){return w(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return w(e.getUTCHours()%12||12,t.length)},H:function(e,t){return w(e.getUTCHours(),t.length)},m:function(e,t){return w(e.getUTCMinutes(),t.length)},s:function(e,t){return w(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return w(Math.floor(r*Math.pow(10,n-3)),t.length)}};function y(e){r(1,arguments);var t=1,n=a(e),o=n.getUTCDay(),i=(o<t?7:0)+o-t;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function x(e){r(1,arguments);var t=a(e),n=t.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(n+1,0,4),o.setUTCHours(0,0,0,0);var i=y(o),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var c=y(s);return t.getTime()>=i.getTime()?n+1:t.getTime()>=c.getTime()?n:n-1}function C(e){r(1,arguments);var t=x(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=y(n);return a}function k(e,t){r(1,arguments);var n=t||{},o=n.locale,i=o&&o.options&&o.options.weekStartsOn,s=null==i?0:m(i),c=null==n.weekStartsOn?s:m(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=a(e),l=u.getUTCDay(),d=(l<c?7:0)+l-c;return u.setUTCDate(u.getUTCDate()-d),u.setUTCHours(0,0,0,0),u}function T(e,t){r(1,arguments);var n=a(e,t),o=n.getUTCFullYear(),i=t||{},s=i.locale,c=s&&s.options&&s.options.firstWeekContainsDate,u=null==c?1:m(c),l=null==i.firstWeekContainsDate?u:m(i.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(o+1,0,l),d.setUTCHours(0,0,0,0);var h=k(d,t),g=new Date(0);g.setUTCFullYear(o,0,l),g.setUTCHours(0,0,0,0);var f=k(g,t);return n.getTime()>=h.getTime()?o+1:n.getTime()>=f.getTime()?o:o-1}function M(e,t){r(1,arguments);var n=t||{},a=n.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:m(o),s=null==n.firstWeekContainsDate?i:m(n.firstWeekContainsDate),c=T(e,t),u=new Date(0);u.setUTCFullYear(c,0,s),u.setUTCHours(0,0,0,0);var l=k(u,t);return l}var E="midnight",D="noon",P="morning",S="afternoon",N="evening",U="night";function O(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+w(o,2)}function W(e,t){return e%60==0?(e>0?"-":"+")+w(Math.abs(e)/60,2):L(e,t)}function L(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+w(Math.floor(a/60),2)+n+w(a%60,2)}var Y={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return v.y(e,t)},Y:function(e,t,n,r){var a=T(e,r),o=a>0?a:1-a;return"YY"===t?w(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):w(o,t.length)},R:function(e,t){return w(x(e),t.length)},u:function(e,t){return w(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return w(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return w(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return v.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return w(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,o){var i=function(e,t){r(1,arguments);var n=a(e),o=k(n,t).getTime()-M(n,t).getTime();return Math.round(o/6048e5)+1}(e,o);return"wo"===t?n.ordinalNumber(i,{unit:"week"}):w(i,t.length)},I:function(e,t,n){var o=function(e){r(1,arguments);var t=a(e),n=y(t).getTime()-C(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(o,{unit:"week"}):w(o,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):v.d(e,t)},D:function(e,t,n){var o=function(e){r(1,arguments);var t=a(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var o=t.getTime(),i=n-o;return Math.floor(i/864e5)+1}(e);return"Do"===t?n.ordinalNumber(o,{unit:"dayOfYear"}):w(o,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return w(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return w(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return w(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?D:0===a?E:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?N:a>=12?S:a>=4?P:U,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return v.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):v.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):w(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):w(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):v.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):v.s(e,t)},S:function(e,t){return v.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return W(a);case"XXXX":case"XX":return L(a);case"XXXXX":case"XXX":default:return L(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return W(a);case"xxxx":case"xx":return L(a);case"xxxxx":case"xxx":default:return L(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+O(a,":");case"OOOO":default:return"GMT"+L(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+O(a,":");case"zzzz":default:return"GMT"+L(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return w(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return w((r._originalDate||e).getTime(),t.length)}};function j(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function q(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var z={p:q,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return j(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",j(a,t)).replace("{{time}}",q(o,t))}};function B(e){return e.getTime()%6e4}function H(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+B(t))%6e4:B(t))}var F=["D","DD"],X=["YY","YYYY"];function Q(e){return-1!==F.indexOf(e)}function A(e){return-1!==X.indexOf(e)}function G(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,I=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,_=/^'([^]*?)'?$/,J=/''/g,V=/[a-zA-Z]/;function K(e){return e.match(_)[1].replace(J,"'")}var $=(e,t,n)=>{let s=e,c=t;const u=function(e,t,n){r(2,arguments);var o=String(t),s=n||{},c=s.locale||f,u=c.options&&c.options.firstWeekContainsDate,l=null==u?1:m(u),d=null==s.firstWeekContainsDate?l:m(s.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=c.options&&c.options.weekStartsOn,g=null==h?0:m(h),p=null==s.weekStartsOn?g:m(s.weekStartsOn);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var w=a(e);if(!i(w))throw new RangeError("Invalid time value");var v=H(w),y=b(w,v),x={firstWeekContainsDate:d,weekStartsOn:p,locale:c,_originalDate:w},C=o.match(I).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,z[t])(e,c.formatLong,x):e})).join("").match(R).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return K(n);var a=Y[r];if(a)return!s.useAdditionalWeekYearTokens&&A(n)&&G(n,t,e),!s.useAdditionalDayOfYearTokens&&Q(n)&&G(n,t,e),a(y,n,c.localize,x);if(r.match(V))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return C}(o(),"MM/dd/yyyy");let l=n,d="",h=!1,g=!1;return{isOpen:()=>g,setOpen:e=>g=e,getTitle:()=>s,getPriority:()=>c,getStartDate:()=>u,getDueDate:()=>l,getNotes:()=>d,getComplete:()=>h,setTitle:e=>s=e,setPriority:e=>c=e,setDueDate:e=>l=e,setNotes:e=>d=e,toggleComplete:e=>h=e}};var Z=e=>{let t=e,n=[];return{getCardTitle:()=>t,getTodoList:()=>n,setTitle:e=>t=e,addTodo:e=>{0==n.length?n[0]=e:n[n.length]=e}}};function ee(e){const t=document.getElementById("quick-add");if(t.value){const n=$(t.value,"low","---");e.addTodo(n)}ce(e)}function te(e,t,n){t.addEventListener("change",t=>{t.target.checked?(n.toggleComplete(!0),e.style.textDecoration="line-through",e.parentElement.style.backgroundColor="rgb(19, 19, 19)"):(n.toggleComplete(!1),e.style.textDecoration="none",e.parentElement.style.backgroundColor="rgb(49, 49, 49)")})}const ne=function(e,t,n){return function r(a){a.target!=n&&(n.parentElement.remove(),ie(t,e),e.setOpen(!0),t.removeEventListener("click",r),t.addEventListener("click",re(e,t,t.children[0].lastElementChild)))}},re=function(e,t,n){return function r(a){if(a.target.parentElement==n)return;t.children[1].remove(),t.children[1].remove(),n.remove(),se(t,e);const o=t.children[0].lastElementChild.lastElementChild,i=t.children[0].children[1];e.getComplete()&&(o.checked=!0),te(i,o,e),t.removeEventListener("click",r),t.addEventListener("click",ne(e,t,o)),e.setOpen(!1)}};function ae(e,t,n,r){t.isOpen()?n.addEventListener("click",re(t,n,r)):n.addEventListener("click",ne(t,n,r))}var oe=n.p+"065f4d9e34d43d8f7839c0d8a8713df8.png";function ie(e,t){const n=new Image;n.src=oe;const r=document.createElement("div");r.className="edit-wrapper",r.appendChild(n),e.children[0].appendChild(r),r.addEventListener("click",()=>{const e=document.getElementById("overlay");e.style.visibility="visible",e.style.opacity="1";document.getElementById("close").addEventListener("click",()=>{e.style.visibility="hidden",e.style.opacity="0"})});const a=ue();e.addEventListener(a,le(t,e),!1),e.className="todo-open"}function se(e,t){e.className="todo-item",t.getComplete()?(e.style.backgroundColor="rgb(19, 19, 19)",e.children[0].style.backgroundColor="rgb(19, 19, 19)"):(e.style.backgroundColor="rgb(49, 49, 49)",e.children[0].style.backgroundColor="rgb(49, 49, 49)");const n=document.createElement("div");n.className="checkbox-wrapper";const r=document.createElement("input");r.type="checkbox";const a=e.children[0].children[0];a.lastElementChild.style.transform="rotate(-90deg)",a.lastElementChild.style.marginLeft="9.5px",n.appendChild(r),e.children[0].appendChild(n)}function ce(e){const t=document.getElementById("todo-list");for(;t.lastElementChild;)t.removeChild(t.lastElementChild);e.getTodoList().forEach(e=>{!function(e,t){const n=document.getElementById("todo-list"),r=document.createElement("div"),a=document.createElement("div");a.className="todo-top",n.appendChild(r),r.appendChild(a);const o=document.createElement("div");o.className="arrow-wrapper";const i=document.createElement("span");i.textContent=">",o.appendChild(i),a.appendChild(o);const s=document.createElement("div");s.className="todo-title-wrap",s.textContent=t.getTitle(),a.appendChild(s);const c=document.createElement("div");c.className="priority-meter";const u=document.createElement("div");if(u.className="due-date",u.textContent=t.getDueDate(),a.appendChild(c),a.appendChild(u),t.isOpen())ie(r,t),t.getComplete()&&(s.style.textDecoration="line-through"),ae(0,t,r,r.children[0].lastElementChild);else{se(r,t);const e=r.children[0].lastElementChild.lastElementChild;t.getComplete()&&(e.checked=!0,s.style.textDecoration="line-through"),function(e,t,n){switch(e.getPriority()){case"low":t.style.backgroundColor="rgb(65,190,255)",n.style.color="rgb(65,190,255)";break;case"med":t.style.backgroundColor="rgb(255, 240, 0)",n.style.color="rgb(255, 240, 0)";break;case"high":t.style.backgroundColor="rgb(255, 0, 0)",n.style.color="rgb(255, 0, 0)"}}(t,c,o),te(s,e,t),ae(0,t,r,e)}}(0,e)})}const ue=function(){let e;const t=document.createElement("div"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(void 0!==t.style[e])return n[e]},le=function(e,t){return function n(r){if("height"==r.propertyName&&e.isOpen()){e.getComplete()?(t.style.backgroundColor="rgb(19, 19, 19)",t.children[0].style.backgroundColor="rgb(19, 19, 19)"):(t.style.backgroundColor="rgb(63, 63, 63)",t.children[0].style.backgroundColor="rgb(63, 63, 63)");const r=document.createElement("div");r.className="notes-wrapper";const a=document.createElement("div");a.className="title-notes",a.textContent="NOTES";const o=document.createElement("div");o.className="notes",o.textContent=e.getNotes(),t.appendChild(r),r.appendChild(a),r.appendChild(o);const i=document.createElement("div");i.className="start-date-wrapper",i.textContent="Started On";const s=document.createElement("div");s.className="start-date",s.textContent=e.getStartDate(),i.appendChild(s),t.appendChild(i);const c=t.children[0].children[2],u=t.children[0].children[0];u.lastElementChild.style.transform="rotate(90deg)",u.lastElementChild.style.marginLeft="16px";const l=ue();!function(e,t,n,r,a){switch(a.getPriority()){case"low":e.style.backgroundColor="rgb(65,190,255)",t.style.color="rgb(65,190,255)",n.style.color="rgb(65,190,255)",r.style.borderLeftColor="rgb(65,190,255)";break;case"med":e.style.backgroundColor="rgb(255, 240, 0)",t.style.color="rgb(255, 240, 0)",n.style.color="rgb(255, 240, 0)",r.style.borderLeftColor="rgb(255, 240, 0)";break;case"high":e.style.backgroundColor="rgb(255, 0, 0)",t.style.color="rgb(255, 0, 0)",n.style.color="rgb(255, 0, 0)",r.style.borderLeftColor="rgb(255, 0, 0)"}}(c,u,a,i,e),t.removeEventListener(l,n)}}},de=(()=>{let e=[];return{getCardList:()=>e,addCard:t=>{0==e.length?e[0]=t:e[e.length]=t}}})(),he=Z("General"),ge=$("Take a walk","high","15 Dec");ge.setNotes("Take a brisk walk to maccas and get a big mac whilst smoking a ciggie");const fe=$("Beat PB in air punches/min","med","26 Apr");fe.setNotes("make sure to put on bangers and punch on beat. the quicker the rpm the better");const me=$("Prep soles of feet for strenuous activity","low","3 Sept");var pe;me.setNotes("i dont even know what this consists of but will try my hardest to prep feet"),de.addCard(he),he.addTodo(ge),he.addTodo(fe),he.addTodo(me),function(e){const t=document.getElementById("quick-add");t.addEventListener("keypress",n=>{"Enter"==n.key&&(ee(e),t.value="")}),document.getElementById("add-button").addEventListener("click",()=>{ee(e),t.value=""})}(he),pe=he,document.getElementById("card-title").textContent=pe.getCardTitle(),ce(he),prompt("made it")}]);