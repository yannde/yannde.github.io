(function(e){function t(t){for(var a,r,c=t[0],o=t[1],l=t[2],g=0,d=[];g<c.length;g++)r=c[g],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},i=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dicegame/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0175":function(e,t,s){"use strict";var a=s("3ac7"),n=s.n(a);n.a},"0ad7":function(e,t,s){"use strict";var a=s("c828"),n=s.n(a);n.a},3294:function(e,t,s){"use strict";var a=s("b225"),n=s.n(a);n.a},"3ac7":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("d5e8"),s("5363");var a=s("2b0e"),n=s("ce5b"),i=s.n(n);s("bf40");a["default"].use(i.a);var r=new i.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#0d2b45",secondary:"#d08159",accent:"#544e68",error:"#6B120D",info:"#3B8A70",success:"#96C052",warning:"#D0AB59"}}}}),c=(s("907d"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("div",{attrs:{id:"app"}},[s("GameHeader"),s("div",{staticClass:"main"},[s("router-view")],1),s("GameFooter")],1)])}),o=[],l=s("5530"),u=s("2f62"),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"gameFooter"},[s("GameFooterSettings")],1)},d=[],m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"gameFooterSettings"},[s("GameFooterColors",{staticClass:"gameFooterSettings_select",class:{"gameFooterSettings_select-active":"color"===e.select},attrs:{color:e.settings.settings.color},on:{"update:color":function(t){return e.$set(e.settings.settings,"color",t)},select:e.update}}),s("GameFooterValue",{staticClass:"gameFooterSettings_select",class:{"gameFooterSettings_select-active":"size"===e.select},attrs:{value:e.settings.settings.size,type:"size"},on:{"update:value":function(t){return e.$set(e.settings.settings,"size",t)},select:e.update}}),s("GameFooterValue",{staticClass:"gameFooterSettings_select",class:{"gameFooterSettings_select-active":"players"===e.select},attrs:{value:e.settings.settings.players,type:"players"},on:{"update:value":function(t){return e.$set(e.settings.settings,"players",t)},select:e.update}}),s("GameFooterValue",{staticClass:"gameFooterSettings_select",class:{"gameFooterSettings_select-active":"difficulty"===e.select},attrs:{value:e.settings.settings.difficulty,type:"difficulty"},on:{"update:value":function(t){return e.$set(e.settings.settings,"difficulty",t)},select:e.update}}),s("div",{staticClass:"gameFooterSettings_content_container"},[s("div",{staticClass:"gameFooterSettings_content"},[s("v-btn",{staticClass:"gameFooterSettings_link gameFooterSettings_link-color",class:{"gameFooterSettings_color-inactive":!e.settingsState.showSettings},attrs:{text:""},on:{click:function(t){return e.toSelect("color")}}},[s("div",{staticClass:"gameFooterSettings_color",class:["gameFooterSettings_color-"+e.settings.settings.color]})]),s("div",{staticClass:"gameFooterSettings_content_right"},[s("div",{staticClass:"gameFooterSettings_content_right_grid",class:{"gameFooterSettings_content_right_grid-settings":e.settingsState.showSettings}},[s("div",{staticClass:"gameFooterSettings_content_controls"},[e.game.status<2?[e.game.player.human?s("div",[e._v("Make your move!")]):s("div",{staticClass:"results_message"},[s("v-btn",{staticClass:"results_message_btn",attrs:{color:"primary",large:""},on:{click:e.start}},[e._v("Start")])],1)]:2===e.game.status?[e.showResults?s("GameFooterResults"):s("v-btn",{attrs:{color:"primary",disabled:e.game.busy,large:""},on:{click:e.next}},[e._v("Next Turn")])]:4===e.game.status?s("div",{staticClass:"results_message"},[s("v-btn",{staticClass:"results_message_btn",attrs:{color:"primary",large:""},on:{click:e.newGame}},[e._v("Get Revenge!")])],1):5===e.game.status?s("div",{staticClass:"results_message"},[s("v-btn",{staticClass:"results_message_btn",attrs:{color:"primary",large:""},on:{click:function(t){return e.newGame(0===e.game.settings.difficulty)}}},[e._v(e._s(0===e.game.settings.difficulty?"TOO EASY!":"WIN MORE!"))])],1):e._e()],2),s("v-btn",{staticClass:"gameFooterSettings_link gameFooterSettings_link-size",attrs:{text:""},on:{click:function(t){return e.toSelect("size")}}},[s("div",{staticClass:"gameFooterSettings_link_icon icon icon-board",class:["icon-board-"+e.settings.settings.size]}),s("div",{staticClass:"gameFooterSettings_link_text"},[e._v("size")])]),s("v-btn",{staticClass:"gameFooterSettings_link gameFooterSettings_link-players",attrs:{text:""},on:{click:function(t){return e.toSelect("players")}}},[s("div",{staticClass:"gameFooterSettings_link_icon gameFooterSettings_link_icon-players icon icon-players"},[s("span",{staticClass:"gameFooterSettings_link_icon_text"},[e._v(e._s(e.settings.settings.players))])]),s("div",{staticClass:"gameFooterSettings_link_text"},[e._v("players")])]),s("v-btn",{staticClass:"gameFooterSettings_link gameFooterSettings_link-difficulty",attrs:{text:""},on:{click:function(t){return e.toSelect("difficulty")}}},[s("div",{staticClass:"gameFooterSettings_link_icon icon icon-difficulty",class:["icon-difficulty-"+e.settings.settings.difficulty]}),s("div",{staticClass:"gameFooterSettings_link_text"},[e._v("level")])]),s("v-btn",{staticClass:"gameFooterSettings_link gameFooterSettings_link-play",attrs:{text:""},on:{click:e.newGame}},[s("div",{staticClass:"gameFooterSettings_link_icon icon icon-dices"}),s("div",{staticClass:"gameFooterSettings_link_text"},[e._v("play")])]),s("v-btn",{staticClass:"gameFooterSettings_link gameFooterSettings_link-settings",attrs:{text:""},on:{click:e.toSettings}},[s("div",{staticClass:"gameFooterSettings_link_icon icon icon-settings"}),s("div",{staticClass:"gameFooterSettings_link_text"},[e._v("setup")])])],1)])],1)]),s("v-overlay",{staticClass:"gameFooterSettings_overlay",attrs:{value:!!e.select||e.game.status>0&&e.settingsState.showSettings||e.game.status>3,"z-index":1},nativeOn:{click:function(t){return e.closeOverlay(null)}}},[s("span",{staticClass:"gameFooterSettings_overlay_content",class:{"gameFooterSettings_overlay_content-active":!e.select}},[4===e.game.status?s("span",[e._v("You Lost")]):5===e.game.status?s("span",[e._v("WIN!")]):s("span",{staticClass:"gameFooterSettings_overlay_icon icon icon-pause"})])])],1)},f=[],h=(s("99af"),s("4de4"),s("c740"),s("4160"),s("a630"),s("caad"),s("c975"),s("d81d"),s("13d5"),s("a434"),s("d3b7"),s("2532"),s("3ca3"),s("159b"),s("ddb0"),s("d4ec")),v=s("bee2"),p={board:[],selected:null,defender:null,player:{},players:[],adjacents:[],settings:{players:4,size:4,difficulty:0,color:0},results:{},busy:!0,status:0},_={getBoard:function(){return JSON.parse(JSON.stringify(p.board))},getCell:function(e){return JSON.parse(JSON.stringify(p.board[e]))},getSelected:function(){return JSON.parse(JSON.stringify(p.selected))},getDefender:function(){return JSON.parse(JSON.stringify(p.defender))},getPlayer:function(){return JSON.parse(JSON.stringify(p.player))},getPlayers:function(){return JSON.parse(JSON.stringify(p.players))},getAdjacents:function(){return JSON.parse(JSON.stringify(p.adjacents))},getSettings:function(){return JSON.parse(JSON.stringify(p.settings))},getResults:function(){return JSON.parse(JSON.stringify(p.results))},getBusy:function(){return JSON.parse(JSON.stringify(p.busy))},getStatus:function(){return JSON.parse(JSON.stringify(p.status))}},y={setBoard:function(e,t){e.board=t},setCell:function(e,t){a["default"].set(e.board,t.i,t.data)},setSelected:function(e,t){e.selected=t},setDefender:function(e,t){e.defender=t},setPlayer:function(e,t){e.player=t},setPlayers:function(e,t){e.players=t},setAdjacents:function(e,t){e.adjacents=t},setSetting:function(e,t){e.settings=Object(l["a"])(Object(l["a"])({},e.settings),t)},setSettings:function(e,t){e.settings=t},setResults:function(e,t){e.results=t},setBusy:function(e,t){e.busy=t},setStatus:function(e,t){e.status=t}},S={changeBoard:function(e,t){var s=e.commit;s("setBoard",t)},changeCell:function(e,t){var s=e.commit;s("setCell",t)},changeSelected:function(e,t){var s=e.commit;s("setSelected",t)},changeDefender:function(e,t){var s=e.commit;s("setDefender",t)},changePlayer:function(e,t){var s=e.commit;s("setPlayer",t)},changePlayers:function(e,t){var s=e.commit;s("setPlayers",t)},changeAdjacents:function(e,t){var s=e.commit;s("setAdjacents",t)},changeSetting:function(e,t){var s=e.commit;s("setSetting",t)},changeSettings:function(e,t){var s=e.commit;s("setSettings",t)},changeResults:function(e,t){var s=e.commit;s("setResults",t)},changeBusy:function(e,t){var s=e.commit;s("setBusy",t)},changeStatus:function(e,t){var s=e.commit;s("setStatus",t)}},b={namespaced:!0,state:p,getters:_,actions:S,mutations:y},w={isMobile:!1,showSettings:!0},k={getIsMobile:function(){return JSON.parse(JSON.stringify(w.isMobile))},getShowSettings:function(){return JSON.parse(JSON.stringify(w.showSettings))}},C={setIsMobile:function(e,t){e.isMobile=t},setShowSettings:function(e,t){e.showSettings=t}},F={changeIsMobile:function(e,t){var s=e.commit;s("setIsMobile",t)},changeShowSettings:function(e,t){var s=e.commit;s("setShowSettings",t)}},O={namespaced:!0,state:w,getters:k,actions:F,mutations:C};a["default"].use(u["a"]);var x=new u["a"].Store({state:{},mutations:{},actions:{},modules:{game:b,settings:O}}),j=[[.837963,.443673,.152006,.03588,.006105,766e-6,71e-6,5e-6],[.972994,.778549,.453575,.191701,.060713,.014879,.00289,452e-6],[.997299,.939236,.742831,.459528,.220442,.083423,.02545,.006379],[.99985,.98794,.909347,.718078,.463654,.242449,.103626,.036742],[.999996,.998217,.9753,.883953,.699616,.466731,.259984,.121507],[1,.999801,.994663,.961536,.862377,.685165,.469139,.274376],[1,.999983,.999069,.989534,.947731,.843874,.673456,.471091]],P=[[.675926,.331019,-.391976,-.8206,-.96337,-.994638,-.999432,-.999955],[.918982,1.114196,.267875,-.849794,-1.575009,-1.880968,-1.97399,-1.99548],[.989196,1.69618,1.456986,.216696,-1.236464,-2.249193,-2.7455,-2.929831],[.99925,1.92764,2.365429,1.744624,.172886,-1.57551,-2.860114,-3.559096],[.999976,1.987519,2.8024,2.955577,1.99616,.134041,-1.880192,-3.420409],[1,1.998408,2.951967,3.61536,3.486147,2.22198,.098807,-2.158736],[1,1.999847,2.99069,3.884874,4.372772,3.970362,2.428384,.066365]],M=[{name:"16",value:4},{name:"25",value:5},{name:"36",value:6}],z=[{name:"normal",value:0},{name:"hard",value:1}],N=[{name:2,value:2},{name:3,value:3},{name:4,value:4},{name:5,value:5},{name:6,value:6},{name:7,value:7},{name:8,value:8}],B=function(){function e(){Object(h["a"])(this,e)}return Object(v["a"])(e,[{key:"aiMove",value:function(e){var t=x.getters["game/getPlayer"],s=x.getters["game/getBoard"],a=x.getters["game/getAdjacents"],n=x.getters["game/getSettings"],i=s.filter((function(e){return e.owner===t.id&&e.dice>1})),r=-8*t.cells+t.total+t.size+t.reserve,c=.52-.12*t.aggresive;n.difficulty>0&&(c+=Math.min(e,5)*(.2-.08*t.aggresive)),(r>=0||t.size>Math.pow(n.size,1.4))&&(c=Math.min(c,.44));var o=[];return 0!==i.length&&(i.forEach((function(e){a[e.id].forEach((function(a){var n=s[a];if(n.owner!==t.id){var i=j[e.dice-2][n.dice-1],r=P[e.dice-2][n.dice-1];if(i>c){var l={attacker:e.id,defender:a,owner:n.owner,probability:i,gainProbability:r,weighedBenefit:1};o.push(l)}}}))})),n.difficulty>0&&(o=this.attackBiggest(o),o=this.simulateMoves(o)),0!==o.length&&(o.sort((function(e,t){return e.gainProbability<t.gainProbability?1:-1})),o.sort((function(e,t){return e.weighedBenefit<t.weighedBenefit?1:-1})),o[0]))}},{key:"attackBiggest",value:function(e){var t=x.getters["game/getPlayer"],s=x.getters["game/getPlayers"],a=x.getters["game/getSettings"],n=Math.pow(a.size,2)/2+Math.round(-2*t.aggresive+1),i=s.filter((function(e){return e.id!==t.id&&e.size>=n}));return i.length?e.filter((function(e){return e.owner===i[0].id})):e.map((function(e){var t=s.filter((function(t){return t.id===e.owner}))[0].size;return e.weighedBenefit=.8+Math.pow(a.size,2)/2/t*.4,e}))}},{key:"simulateMoves",value:function(e){var t=this,s=x.getters["game/getPlayer"],a=x.getters["game/getBoard"];return e.forEach((function(e){var n=JSON.parse(JSON.stringify(a));n[e.defender].dice=n[e.attacker].dice-1,n[e.defender].owner=s.id,n[e.attacker].dice=1,e.gain=t.calculateMoveResult(n,s.id),e.lose=-1*t.calculateMoveResult(n,e.owner),e.benefit=e.gain*(-2*s.aggresive+2.5)+e.lose,e.weighedBenefit*=e.benefit*(e.probability+2)})),e}},{key:"calculateMoveResult",value:function(e,t){var s=x.getters["game/getAdjacents"],a=x.getters["game/getPlayers"],n=[];e.forEach((function(e,s){e.owner===t&&n.push(s)}));for(var i=1,r=0;r<n.length;r++)n[r]>-1&&function(){var e=[];e.push(n[r]),delete n[r];for(var t=0;t<e.length;t++)s[e[t]].forEach((function(t){if(n.includes(t)){e.push(t);var s=n.indexOf(t);delete n[s]}}));i=Math.max(e.length,i)}();var c=a[a.findIndex((function(e){return e.id===t}))];return c?i-c.size:-1}}]),e}(),G=new B,$=function(){function e(){Object(h["a"])(this,e)}return Object(v["a"])(e,[{key:"changeBoard",value:function(){var e=x.getters["game/getSettings"],t=[],s=[],a=Math.pow(e.size,2),n=Math.floor(a/e.players),i=a%e.players,r=e.color<e.players?Array.from(Array(e.players).keys()):Array.from(Array(e.players-1).keys()).concat([e.color]);r.unshift(r.splice(r.indexOf(e.color),1)[0]),r.forEach((function(e){for(var a=[],r=0,c=e-i<0?n+1:n,o=0;o<c;o++){var l=3*Math.random();r+=l,a.push(l)}var u=2*c/r*(n/c);a=a.map((function(e){return 1+Math.floor(e*u)}));var g=a.reduce((function(e,t){return e+t}),0),d={id:e,cells:c,total:g};s.push(d);for(var m=0;m<c;m++)t.push({owner:e,dice:a[m]})})),t=t.sort((function(){return Math.random()-.5})),t=t.map((function(e,t){return e.id=t,e})),this.setAdjacents(),x.dispatch("game/changeBoard",t),x.dispatch("game/changePlayers",s)}},{key:"newGame",value:function(){var e=this,t=x.getters["game/getSettings"];this.changeBoard();var s=x.getters["game/getPlayers"].map((function(s){return s.human=s.id===t.color,s.size=e.calculateAdd(s.id),s.reserve=0,s.aggresive=t.difficulty>0?Math.round(100*Math.random())/100:.5,s}));t.difficulty>0&&(s=s.sort((function(){return Math.random()-.5}))),x.dispatch("game/changePlayer",s[0]),x.dispatch("game/changePlayers",s),x.dispatch("game/changeSelected",null),x.dispatch("game/changeResults",{}),x.dispatch("game/changeStatus",1),s[0].human?x.dispatch("game/changeBusy",!1):x.dispatch("game/changeBusy",!0)}},{key:"startGame",value:function(){this.aiMoves(0)}},{key:"setAdjacents",value:function(){for(var e=x.getters["game/getSettings"].size,t=[],s=Math.pow(e,2),a=0;a<s;a++){var n=[];a%e&&n.push(a-1),(a+1)%e&&n.push(a+1),a>=e&&n.push(a-e),a<e*e-e&&n.push(a+e),t.push(n)}x.dispatch("game/changeAdjacents",t)}},{key:"changeSelected",value:function(e){x.dispatch("game/changeStatus",2),x.dispatch("game/changeSelected",e)}},{key:"changePlayer",value:function(e){x.dispatch("game/changePlayer",e)}},{key:"attack",value:function(e){var t=this;return new Promise((function(s){var a=x.getters["game/getSelected"],n=x.getters["game/getBoard"],i=n[a],r=n[e],c=t.dice(i.dice),o=t.dice(r.dice),l=r.owner;c.cell=a,o.cell=e,x.dispatch("game/changeResults",{attacker:i.owner,defender:l,attackerDice:c,defenderDice:o}),x.dispatch("game/changeDefender",e),0===i.owner&&x.dispatch("game/changeBusy",!0),setTimeout((function(){x.dispatch("game/changeDefender",null),c.total>o.total?(r.dice=i.dice-1,r.owner=i.owner,x.dispatch("game/changeCell",{i:e,data:r}),t.checkLost(l)||(r.dice>1?x.dispatch("game/changeSelected",e):x.dispatch("game/changeSelected",null),t.calculateAdd(l))):x.dispatch("game/changeSelected",null),t.calculateAdd(i.owner),i.dice=1,x.dispatch("game/changeCell",{i:a,data:i}),0===i.owner&&x.dispatch("game/changeBusy",!1),s({status:200})}),500)}))}},{key:"dice",value:function(e){for(var t=0,s=[],a=0;a<e;a++){var n=Math.floor(6*Math.random())+1;s.push(n),t+=n}return{total:t,dice:s}}},{key:"checkLost",value:function(e){var t=x.getters["game/getBoard"],s=x.getters["game/getPlayers"];if(!t.filter((function(t){return t.owner===e})).length){var a=s.findIndex((function(t){return t.id===e}));if(s[a].human&&(x.dispatch("game/changeStatus",4),x.dispatch("game/changeSelected",null)),s.splice(a,1),x.dispatch("game/changePlayers",s),1===s.length)return x.dispatch("game/changeSelected",null),s[0].human&&x.dispatch("game/changeStatus",5),!0}return!1}},{key:"nextPlayer",value:function(){this.applyAdd();var e=x.getters["game/getPlayer"],t=x.getters["game/getPlayers"],s=t.findIndex((function(t){return t.id===e.id})),a=t[(s+1)%t.length];x.dispatch("game/changePlayer",a),x.dispatch("game/changeSelected",null),a.human?x.dispatch("game/changeBusy",!1):(x.dispatch("game/changeBusy",!0),this.aiMoves(0))}},{key:"aiMoves",value:function(e){var t=this,s=G.aiMove(e);if(!1!==s){var a=x.getters["game/getSelected"],n=s.attacker!==a?750:10;setTimeout((function(){s.attacker!==a&&t.changeSelected(s.attacker),setTimeout((function(){var a=t;t.attack(s.defender).then((function(t){4!==x.getters["game/getStatus"]&&a.aiMoves(++e)}))}),200)}),n)}else this.nextPlayer()}},{key:"getPlayerCells",value:function(e){var t=[];return x.getters["game/getBoard"].forEach((function(s,a){s.owner===e&&t.push(a)})),t}},{key:"calculateAdd",value:function(e){for(var t=x.getters["game/getAdjacents"],s=x.getters["game/getPlayers"],a=x.getters["game/getBoard"],n=this.getPlayerCells(e),i=1,r=n.reduce((function(e,t){return e+a[t].dice}),0),c=n.length,o=0;o<n.length;o++)n[o]>-1&&function(){var e=[];e.push(n[o]),delete n[o];for(var s=0;s<e.length;s++)t[e[s]].forEach((function(t){if(n.includes(t)){e.push(t);var s=n.indexOf(t);delete n[s]}}));i=Math.max(e.length,i)}();var l=s[s.findIndex((function(t){return t.id===e}))];if(l){l.size=i,l.total=r,l.cells=c,x.dispatch("game/changePlayers",s);var u=x.getters["game/getPlayer"];l.id===u.id&&x.dispatch("game/changePlayer",l)}return i}},{key:"applyAdd",value:function(){var e=x.getters["game/getBoard"],t=x.getters["game/getPlayer"],s=this.getPlayerCells(t.id),a=+t.size+t.reserve;for(a;a>0&&s.length;a--){var n=s[Math.floor(Math.random()*s.length)];e[n].dice>7?(s.splice(s.indexOf(n),1),a++):e[n].dice++}t.reserve=a;var i=x.getters["game/getPlayers"];i[i.findIndex((function(e){return e.id===t.id}))]=t,x.dispatch("game/changePlayers",i),x.dispatch("game/changeBoard",e)}}]),e}(),E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{ref:"gameFooterSelect",staticClass:"gameFooterSelect",on:{"&scroll":function(t){return e.onScroll(t)},touchend:e.onScrollEnd}},[s("div",{staticClass:"gameFooterSelect_padding"}),e._l(8,(function(t,a){return s("div",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a,staticClass:"gameFooterSelect_select",on:{click:function(t){return e.select(a)}}},[s("div",{staticClass:"gameFooterSelect_select_content",style:{transform:e.getTransform(a)}},[s("div",{staticClass:"gameFooterSelect_color",class:["gameFooterSelect_color-"+a]})])])})),s("div",{staticClass:"gameFooterSelect_padding"})],2)])},A=[],J={name:"GameFooterColors",computed:Object(u["c"])({settings:function(e){return e.game.settings}}),props:{color:{default:1}},data:function(){return{selected:0,zoom:1.5,next:1,zoomNext:1}},mounted:function(){this.selected=this.color,this.$refs.gameFooterSelect.scrollTo({top:0,left:80*this.color})},methods:{select:function(e){this.$refs.gameFooterSelect.scrollTo({top:0,left:80*e,behavior:"smooth"}),this.$emit("update:color",e),this.$emit("select",!0)},onScroll:function(e){var t=e.srcElement.scrollLeft/80,s=Math.round(t);this.selected!==s&&(this.selected=s,this.$emit("update:color",this.selected));var a=t-this.selected;this.next=a>0?this.selected+1:this.selected-1,a=Math.abs(a),this.zoom=1.5-a/2,this.zoomNext=1+a/2},onScrollEnd:function(){var e=this;if(this.pos-this.$refs.gameFooterSelect.scrollLeft)return this.pos=this.$refs.gameFooterSelect.scrollLeft,void setTimeout((function(){e.onScrollEnd()}),100);this.pos=this.$refs.gameFooterSelect.scrollLeft;var t=80*this.selected;this.$refs.gameFooterSelect.scrollTo({top:0,left:t,behavior:"smooth"})},getTransform:function(e){switch(e){case this.selected:return"scale("+this.zoom+")";case this.next:return"scale("+this.zoomNext+")"}return"scale(1)"}}},T=J,R=(s("8caa"),s("2877")),D=Object(R["a"])(T,E,A,!1,null,null,null),I=D.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.game.results&&e.game.results.attackerDice?s("div",{staticClass:"results"},[s("div",{staticClass:"results_side results_side-attacker",class:{"results_side-win":e.game.results.attackerDice.total>e.game.results.defenderDice.total}},[s("div",{staticClass:"results_result"},[s("div",{staticClass:"results_dices",class:["results_dices-"+e.game.results.attackerDice.dice.length]},e._l(e.game.results.attackerDice.dice,(function(e,t){return s("div",{key:t,staticClass:"results_dice",class:["results_dice-"+e]})})),0)]),s("div",{staticClass:"results_color",class:[{"results_color-player":e.game.results.attacker===e.game.settings.color},"results_color-"+e.game.results.attacker]},[e._v(e._s(e.game.results.attackerDice.total))])]),s("div",{staticClass:"results_vs icon icon-swords"}),s("div",{staticClass:"results_side results_side-defender",class:{"results_side-win":e.game.results.attackerDice.total<=e.game.results.defenderDice.total}},[s("div",{staticClass:"results_color",class:[{"results_color-player":e.game.results.defender===e.game.settings.color},"results_color-"+e.game.results.defender]},[e._v(e._s(e.game.results.defenderDice.total))]),s("div",{staticClass:"results_result"},[s("div",{staticClass:"results_dices",class:["results_dices-"+e.game.results.defenderDice.dice.length]},e._l(e.game.results.defenderDice.dice,(function(e,t){return s("div",{key:t,staticClass:"results_dice",class:["results_dice-"+e]})})),0)])])]):e._e()},V=[],H={name:"GameFooterResults",computed:Object(u["c"])({game:function(e){return e.game},gameResults:function(e){return e.game.results}}),data:function(){return{gameService:new $,resultsActive:!1}},methods:{},watch:{gameResults:function(){this.resultsActive=!0}}},q=H,W=(s("b352"),Object(R["a"])(q,L,V,!1,null,"0ed85acd",null)),Y=W.exports,K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{ref:"gameFooterSelect",staticClass:"gameFooterSelect",on:{"&scroll":function(t){return e.onScroll(t)},touchend:e.onScrollEnd}},[s("div",{staticClass:"gameFooterSelect_padding"}),e._l(e.val,(function(t,a){return s("div",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.value,ref:"select-"+a,refInFor:!0,staticClass:"gameFooterSelect_select",on:{click:function(s){return e.select(t.value,a)}}},[s("div",{staticClass:"gameFooterSelect_select_content",style:{transform:e.getTransform(a)}},["size"===e.type?s("span",{staticClass:"gameFooterSelect_select_icon icon",class:["icon-board-"+t.value]},[s("span",{staticClass:"gameFooterSelect_select_text"},[e._v(e._s(t.value))])]):"difficulty"===e.type?s("span",{staticClass:"gameFooterSelect_select_icon icon",class:["icon-difficulty-"+t.value]}):[e._v(e._s(t.name))]],2)])})),s("div",{staticClass:"gameFooterSelect_padding"})],2)])},Q=[],U={name:"GameFooterValue",props:{type:{default:"size"},value:{default:1}},computed:Object(u["c"])({settings:function(e){return e.game.settings},val:function(){var e=M;switch(this.type){case"players":e=N;break;case"difficulty":e=z;break}return e}}),data:function(){return{boardSizes:M,difficulties:z,players:N,selected:0,zoom:1.5,next:1,zoomNext:1,pos:0}},mounted:function(){this.setValue()},methods:{setValue:function(){var e=this;this.selected=this.value;var t=this.val.findIndex((function(t){return t.value===e.value}));this.$refs.gameFooterSelect.scrollTo({top:0,left:80*t})},select:function(e,t){var s=80*t;this.$refs.gameFooterSelect.scrollTo({top:0,left:s,behavior:"smooth"}),this.$emit("update:value",e),this.$emit("select",!0)},onScroll:function(e){var t=e.srcElement.scrollLeft/80,s=Math.round(t);this.selected!==s&&(this.selected=s,this.$emit("update:value",this.val[s].value));var a=t-this.selected;this.next=a>0?this.selected+1:this.selected-1,a=Math.abs(a),this.zoom=1.5-a/2,this.zoomNext=1+a/2},onScrollEnd:function(){var e=this;if(this.pos-this.$refs.gameFooterSelect.scrollLeft)return this.pos=this.$refs.gameFooterSelect.scrollLeft,void setTimeout((function(){e.onScrollEnd()}),50);this.pos=this.$refs.gameFooterSelect.scrollLeft;var t=80*this.selected;this.$refs.gameFooterSelect.scrollTo({top:0,left:t,behavior:"smooth"})},getTransform:function(e){switch(e){case this.selected:return"scale("+this.zoom+")";case this.next:return"scale("+this.zoomNext+")"}return"scale(1)"}},watch:{value:function(){this.selected!==this.value&&this.setValue()}}},X=U,Z=Object(R["a"])(X,K,Q,!1,null,null,null),ee=Z.exports,te={name:"GameFooterSettings",components:{GameFooterColors:I,GameFooterResults:Y,GameFooterValue:ee},computed:Object(u["c"])({game:function(e){return e.game},settingsState:function(e){return e.settings},gameResults:function(e){return e.game.results}}),data:function(){return{gameService:new $,settings:{settings:{}},select:null,showSettings:!0,showResults:!1}},mounted:function(){this.$set(this.settings,"settings",JSON.parse(JSON.stringify(this.game.settings)))},methods:Object(l["a"])(Object(l["a"])({toSelect:function(e){this.select=e},update:function(){setTimeout((function(e){e.select=null}),300,this)},newGame:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&this.$set(this.settings.settings,"difficulty",this.settings.settings.difficulty+1),this.changeSettings(this.settings.settings),this.select=null,this.changeShowSettings(!1),this.gameService.newGame()},toSettings:function(){this.changeShowSettings(!0)},start:function(){this.gameService.startGame()},next:function(){this.gameService.nextPlayer()},closeOverlay:function(){this.select=!1,this.game.status>0&&this.changeShowSettings(!1)}},Object(u["b"])("game",["changeSettings"])),Object(u["b"])("settings",["changeShowSettings"])),watch:{gameResults:function(e){this.showResults=!0;var t=this.game.player.human?750:1500;setTimeout((function(t){t.gameResults===e&&(t.showResults=!1)}),t,this)}}},se=te,ae=(s("0175"),Object(R["a"])(se,m,f,!1,null,null,null)),ne=ae.exports,ie={name:"GameFooter",components:{GameFooterSettings:ne},computed:Object(u["c"])({settings:function(e){return e.game.settings}})},re=ie,ce=(s("0ad7"),Object(R["a"])(re,g,d,!1,null,null,null)),oe=ce.exports,le=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ue=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"gameHeader"},[s("div",{staticClass:"gameHeader_content"},[s("span",{staticClass:"gameHeader_icon icon icon-dices"}),s("span",{staticClass:"gameHeader_text"},[e._v("Dice Game")])])])}],ge={name:"GameHeader",computed:Object(u["c"])({}),data:function(){return{}},methods:{}},de=ge,me=(s("596d"),Object(R["a"])(de,le,ue,!1,null,"c05ad972",null)),fe=me.exports,he={name:"App",components:{GameFooter:oe,GameHeader:fe},computed:Object(u["c"])({isMobile:function(e){return e.settings.isMobile}}),created:function(){this.$nextTick((function(){window.addEventListener("resize",this.setMobile),this.setMobile()}))},methods:Object(l["a"])({setMobile:function(e){var t=document.documentElement.clientWidth<768;t!==this.isMobile&&this.changeIsMobile(t)}},Object(u["b"])("settings",["changeIsMobile"]))},ve=he,pe=(s("5c0b"),Object(R["a"])(ve,c,o,!1,null,null,null)),_e=pe.exports,ye=s("9483");Object(ye["a"])("".concat("/dicegame/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Se=s("8c4f"),be=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},we=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"rules"},[s("h1",[e._v("Rules")]),s("ul",[s("li",[e._v("The player who holds all the squares in the grid wins")]),s("li",[e._v("You can attack any adjecent square held by another color if you have at least 2 dices")]),s("li",[e._v("After each turn dices will be randomly added to your squares "),s("ul",[s("li",[e._v("The amount is determined by the largest group of adjecent squares you have")]),s("li",[e._v("The maximum amount is 8 dices in a square")]),s("li",[e._v("If more dices can't be added the remaining will be held in reserve to use later")])])])])])}],ke={},Ce=Object(R["a"])(ke,be,we,!1,null,null,null),Fe=Ce.exports,Oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"game",on:{click:e.unselect}},[s("GamePlayers"),s("div",{staticClass:"game_board",class:["game_board-size-"+e.game.settings.size,{"game_board-busy":e.game.busy}],on:{click:e.boardClick}},e._l(e.game.board,(function(t,a){return s("div",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a,staticClass:"game_cell",class:[{"game_cell-selectable":e.selectable(a,t.owner,t.dice)},{"game_cell-selected":a===e.game.selected},{"game_cell-borderTop":e.borderTop(a,t.owner)},{"game_cell-borderRight":e.borderRight(a,t.owner)},{"game_cell-borderBottom":e.borderBottom(a,t.owner)},{"game_cell-borderLeft":e.borderLeft(a,t.owner)},"game_cell-defender-"+e.isAttacked(a),"game_cell-owner-"+t.owner],attrs:{depressed:a!==e.game.selected},on:{click:function(s){return e.select(a,t.owner)}}},[s("div",{staticClass:"game_cell_dices"},[s("div",{staticClass:"game_cell_dices_left"},e._l(Math.min(t.dice,4),(function(e,t){return s("div",{key:t,staticClass:"game_cell_dice"})})),0),t.dice>4?s("div",{staticClass:"game_cell_dices_right"},e._l(t.dice-4,(function(e,t){return s("div",{key:t,staticClass:"game_cell_dice"})})),0):e._e()])])})),0)],1)},xe=[],je=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"gamePlayers"},e._l(e.game.players,(function(t){return s("div",{key:t.id,staticClass:"gamePlayers_player"},[s("div",{staticClass:"gamePlayers_player_color",class:[{"gamePlayers_player_color-active":t.id===e.game.player.id},"gamePlayers_player_color-"+t.id]},[e._v(e._s(t.size))]),s("div",{staticClass:"gamePlayers_player_reserve"},[e._v("(+"+e._s(t.reserve)+")")])])})),0)},Pe=[],Me={name:"GamePlayers",computed:Object(u["c"])({game:function(e){return e.game}}),data:function(){return{newGameDialog:!1}},methods:{}},ze=Me,Ne=(s("e1d9"),Object(R["a"])(ze,je,Pe,!1,null,"26293cd8",null)),Be=Ne.exports,Ge={name:"Game",components:{GamePlayers:Be},computed:Object(u["c"])({game:function(e){return e.game}}),data:function(){return{gameService:new $}},methods:Object(l["a"])(Object(l["a"])({select:function(e,t){e===this.game.selected?this.unselect():t===this.game.player.id?this.gameService.changeSelected(e):this.gameService.attack(e)},selectable:function(e,t,s){var a=t===this.game.player.id&&s>1,n=null!==this.game.selected&&this.game.adjacents[this.game.selected].includes(e);return a||n},boardClick:function(e){e.stopPropagation(),this.game.board.length<1&&(this.gameService.newGame(),this.changeShowSettings(!1))},unselect:function(){this.changeSelected(null)},borderTop:function(e,t){var s=e-this.game.settings.size;return!(e>=this.game.settings.size&&this.game.board[s]&&this.game.board[s].owner===t)},borderRight:function(e,t){var s=e+1;return!(s%this.game.settings.size&&this.game.board[s]&&this.game.board[s].owner===t)},borderBottom:function(e,t){var s=e+this.game.settings.size;return!(e<this.game.settings.size*(this.game.settings.size-1)&&this.game.board[s]&&this.game.board[s].owner===t)},borderLeft:function(e,t){var s=e-1;return!(e%this.game.settings.size&&this.game.board[s]&&this.game.board[s].owner===t)},isAttacked:function(e){return e===this.game.defender&&(this.game.defender+1===this.game.selected?"right game_cell-defender":this.game.defender-1===this.game.selected?"left game_cell-defender":this.game.defender<this.game.selected?"bottom game_cell-defender":this.game.defender>this.game.selected?"top game_cell-defender":void 0)}},Object(u["b"])("game",["changeSelected"])),Object(u["b"])("settings",["changeShowSettings"]))},$e=Ge,Ee=(s("3294"),Object(R["a"])($e,Oe,xe,!1,null,"7be53149",null)),Ae=Ee.exports;a["default"].use(Se["a"]);var Je=[{path:"/",name:"Game",component:Ae},{path:"/rules",name:"Rules",component:Fe},{path:"/game",name:"Game",component:Ae}],Te=new Se["a"]({mode:"history",base:"/dicegame/",routes:Je}),Re=Te,De=s("fe3c"),Ie=s.n(De),Le=s("7707"),Ve=s.n(Le);window.addEventListener("load",(function(){Ie.a.attach(document.body)}),!1),Ve.a.polyfill(),a["default"].config.productionTip=!1,new a["default"]({router:Re,store:x,vuetify:r,render:function(e){return e(_e)}}).$mount("#app")},"596d":function(e,t,s){"use strict";var a=s("e43f"),n=s.n(a);n.a},"5c0b":function(e,t,s){"use strict";var a=s("9c0c"),n=s.n(a);n.a},"8caa":function(e,t,s){"use strict";var a=s("c654"),n=s.n(a);n.a},"907d":function(e,t,s){},"9c0c":function(e,t,s){},ae24:function(e,t,s){},b225:function(e,t,s){},b352:function(e,t,s){"use strict";var a=s("d582"),n=s.n(a);n.a},c654:function(e,t,s){},c828:function(e,t,s){},d582:function(e,t,s){},e1d9:function(e,t,s){"use strict";var a=s("ae24"),n=s.n(a);n.a},e43f:function(e,t,s){}});
//# sourceMappingURL=app.74ada90a.js.map