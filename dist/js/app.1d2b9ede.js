(function(t){function n(n){for(var e,u,a=n[0],c=n[1],d=n[2],s=0,l=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&l.push(r[u][0]),r[u]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);y&&y(n);while(l.length)l.shift()();return o.push.apply(o,d||[]),i()}function i(){for(var t,n=0;n<o.length;n++){for(var i=o[n],e=!0,a=1;a<i.length;a++){var c=i[a];0!==r[c]&&(e=!1)}e&&(o.splice(n--,1),t=u(u.s=i[0]))}return t}var e={},r={app:0},o=[];function u(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.m=t,u.c=e,u.d=function(t,n,i){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)u.d(i,e,function(n){return t[n]}.bind(null,e));return i},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/vue-autocomplete/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var d=0;d<a.length;d++)n(a[d]);var y=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,n,i){t.exports=i("56d7")},"034f":function(t,n,i){"use strict";var e=i("85ec"),r=i.n(e);r.a},"1bb0":function(t,n,i){},"56d7":function(t,n,i){"use strict";i.r(n);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),r=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"app"}},[i("Autocomplete",{attrs:{items:t.countries,filterby:"country",title:"Choose country..."},on:{change:t.onChange,selected:t.countrySelected}})],1)},o=[],u=[{id:1,country:"Afghanistan"},{id:2,country:"Albania"},{id:3,country:"Algeria"},{id:4,country:"American Samoa"},{id:5,country:"Andorra"},{id:6,country:"Angola"},{id:8,country:"Antarctica"},{id:7,country:"Anguilla"},{id:9,country:"Antigua and Barbuda"},{id:10,country:"Argentina"},{id:11,country:"Armenia"},{id:12,country:"Aruba"},{id:13,country:"Australia"},{id:14,country:"Austria"},{id:15,country:"Azerbaijan"},{id:16,country:"Bahamas (the)"},{id:17,country:"Bahrain"},{id:18,country:"Bangladesh"},{id:19,country:"Barbados"},{id:20,country:"Belarus"},{id:21,country:"Belgium"},{id:22,country:"Belize"},{id:23,country:"Benin"},{id:24,country:"Bermuda"},{id:25,country:"Bhutan"},{id:26,country:"Bolivia (Plurinational State of)"},{id:27,country:"Bonaire, Sint Eustatius and Saba"},{id:28,country:"Bosnia and Herzegovina"},{id:29,country:"Botswana"},{id:30,country:"Bouvet Island"},{id:31,country:"Brazil"},{id:32,country:"British Indian Ocean Territory (the)"},{id:33,country:"Brunei Darussalam"},{id:34,country:"Bulgaria"},{id:35,country:"Burkina Faso"},{id:36,country:"Burundi"},{id:37,country:"Cabo Verde"},{id:38,country:"Cambodia"},{id:39,country:"Cameroon"},{id:40,country:"Canada"},{id:41,country:"Cayman Islands (the)"},{id:42,country:"Central African Republic (the)"},{id:43,country:"Chad"},{id:44,country:"Chile"},{id:45,country:"China"},{id:46,country:"Christmas Island"},{id:47,country:"Cocos (Keeling) Islands (the)"},{id:48,country:"Colombia"},{id:49,country:"Comoros (the)"},{id:50,country:"Congo (the Democratic Republic of the)"},{id:51,country:"Congo (the)"},{id:52,country:"Cook Islands (the)"},{id:53,country:"Costa Rica"},{id:54,country:"Croatia"},{id:55,country:"Cuba"},{id:56,country:"Curaçao"},{id:57,country:"Cyprus"},{id:58,country:"Czechia"},{id:59,country:"Côte d'Ivoire"},{id:60,country:"Denmark"},{id:61,country:"Djibouti"},{id:62,country:"Dominica"},{id:63,country:"Dominican Republic (the)"},{id:64,country:"Ecuador"},{id:65,country:"Egypt"},{id:66,country:"El Salvador"},{id:67,country:"Equatorial Guinea"},{id:68,country:"Eritrea"},{id:69,country:"Estonia"},{id:70,country:"Ethiopia"},{id:71,country:"Eswatini"},{id:72,country:"Falkland Islands (the) [Malvinas]"},{id:73,country:"Faroe Islands (the)"},{id:74,country:"Fiji"},{id:75,country:"Finland"},{id:76,country:"France"},{id:77,country:"French Guiana"},{id:78,country:"French Polynesia"},{id:79,country:"French Southern Territories (the)"},{id:80,country:"Gabon"},{id:81,country:"Gambia (the)"},{id:82,country:"Georgia"},{id:83,country:"Germany"},{id:84,country:"Ghana"},{id:85,country:"Gibraltar"},{id:86,country:"Greece"},{id:87,country:"Greenland"},{id:88,country:"Grenada"},{id:89,country:"Guadeloupe"},{id:90,country:"Guam"},{id:91,country:"Guatemala"},{id:92,country:"Guernsey"},{id:93,country:"Guinea"},{id:94,country:"Guinea-Bissau"},{id:95,country:"Guyana"},{id:96,country:"Haiti"},{id:97,country:"Heard Island and McDonald Islands"},{id:98,country:"Holy See (the)"},{id:99,country:"Honduras"},{id:100,country:"Hong Kong"},{id:101,country:"Hungary"},{id:102,country:"Iceland"},{id:103,country:"India"},{id:104,country:"Indonesia"},{id:105,country:"Iran (Islamic Republic of)"},{id:106,country:"Iraq"},{id:107,country:"Ireland"},{id:108,country:"Isle of Man"},{id:109,country:"Israel"},{id:110,country:"Italy"},{id:111,country:"Jamaica"},{id:112,country:"Japan"},{id:113,country:"Jersey"},{id:114,country:"Jordan"},{id:115,country:"Kazakhstan"},{id:116,country:"Kenya"},{id:117,country:"Kiribati"},{id:118,country:"Korea (the Democratic People's Republic of)"},{id:119,country:"Korea (the Republic of)"},{id:120,country:"Kuwait"},{id:121,country:"Kyrgyzstan"},{id:122,country:"Lao People's Democratic Republic (the)"},{id:123,country:"Latvia"},{id:124,country:"Lebanon"},{id:125,country:"Lesotho"},{id:126,country:"Liberia"},{id:127,country:"Libya"},{id:128,country:"Liechtenstein"},{id:129,country:"Lithuania"},{id:130,country:"Luxembourg"},{id:131,country:"Macao"},{id:132,country:"Madagascar"},{id:133,country:"Malawi"},{id:134,country:"Malaysia"},{id:135,country:"Maldives"},{id:136,country:"Mali"},{id:137,country:"Malta"},{id:138,country:"Marshall Islands (the)"},{id:139,country:"Martinique"},{id:140,country:"Mauritania"},{id:141,country:"Mauritius"},{id:142,country:"Mayotte"},{id:143,country:"Mexico"},{id:144,country:"Micronesia (Federated States of)"},{id:145,country:"Moldova (the Republic of)"},{id:146,country:"Monaco"},{id:147,country:"Mongolia"},{id:148,country:"Montenegro"},{id:149,country:"Montserrat"},{id:150,country:"Morocco"},{id:151,country:"Mozambique"},{id:152,country:"Myanmar"},{id:153,country:"Namibia"},{id:154,country:"Nauru"},{id:155,country:"Nepal"},{id:156,country:"Netherlands (the)"},{id:157,country:"New Caledonia"},{id:158,country:"New Zealand"},{id:159,country:"Nicaragua"},{id:160,country:"Niger (the)"},{id:161,country:"Nigeria"},{id:162,country:"Niue"},{id:163,country:"Norfolk Island"},{id:164,country:"Northern Mariana Islands (the)"},{id:165,country:"Norway"},{id:166,country:"Oman"},{id:167,country:"Pakistan"},{id:168,country:"Palau"},{id:169,country:"Palestine, State of"},{id:170,country:"Panama"},{id:171,country:"Papua New Guinea"},{id:172,country:"Paraguay"},{id:173,country:"Peru"},{id:174,country:"Philippines (the)"},{id:175,country:"Pitcairn"},{id:176,country:"Poland"},{id:177,country:"Portugal"},{id:178,country:"Puerto Rico"},{id:179,country:"Qatar"},{id:180,country:"Republic of North Macedonia"},{id:181,country:"Romania"},{id:182,country:"Russian Federation (the)"},{id:183,country:"Rwanda"},{id:184,country:"Réunion"},{id:185,country:"Saint Barthélemy"},{id:186,country:"Saint Helena, Ascension and Tristan da Cunha"},{id:187,country:"Saint Kitts and Nevis"},{id:188,country:"Saint Lucia"},{id:189,country:"Saint Martin (French part)"},{id:190,country:"Saint Pierre and Miquelon"},{id:191,country:"Saint Vincent and the Grenadines"},{id:192,country:"Samoa"},{id:193,country:"San Marino"},{id:194,country:"Sao Tome and Principe"},{id:195,country:"Saudi Arabia"},{id:196,country:"Senegal"},{id:197,country:"Serbia"},{id:198,country:"Seychelles"},{id:199,country:"Sierra Leone"},{id:200,country:"Singapore"},{id:201,country:"Sint Maarten (Dutch part)"},{id:202,country:"Slovakia"},{id:203,country:"Slovenia"},{id:204,country:"Solomon Islands"},{id:205,country:"Somalia"},{id:206,country:"South Africa"},{id:207,country:"South Georgia and the South Sandwich Islands"},{id:208,country:"South Sudan"},{id:209,country:"Spain"},{id:210,country:"Sri Lanka"},{id:211,country:"Sudan (the)"},{id:212,country:"Suriname"},{id:213,country:"Svalbard and Jan Mayen"},{id:214,country:"Sweden"},{id:215,country:"Switzerland"},{id:216,country:"Syrian Arab Republic"},{id:217,country:"Taiwan"},{id:218,country:"Tajikistan"},{id:219,country:"Tanzania, United Republic of"},{id:220,country:"Thailand"},{id:221,country:"Timor-Leste"},{id:222,country:"Togo"},{id:223,country:"Tokelau"},{id:224,country:"Tonga"},{id:225,country:"Trinidad and Tobago"},{id:226,country:"Tunisia"},{id:227,country:"Turkey"},{id:228,country:"Turkmenistan"},{id:229,country:"Turks and Caicos Islands (the)"},{id:230,country:"Tuvalu"},{id:231,country:"Uganda"},{id:232,country:"Ukraine"},{id:233,country:"United Arab Emirates (the)"},{id:234,country:"United Kingdom of Great Britain and Northern Ireland (the)"},{id:235,country:"United States Minor Outlying Islands (the)"},{id:236,country:"United States of America (the)"},{id:237,country:"Uruguay"},{id:238,country:"Uzbekistan"},{id:239,country:"Vanuatu"},{id:240,country:"Venezuela (Bolivarian Republic of)"},{id:241,country:"Viet Nam"},{id:242,country:"Virgin Islands (British)"},{id:243,country:"Virgin Islands (U.S.)"},{id:244,country:"Wallis and Futuna"},{id:245,country:"Western Sahara"},{id:246,country:"Yemen"},{id:247,country:"Zambia"},{id:248,country:"Zimbabwe"},{id:249,country:"Åland Islands"}],a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"autocomplete"},[i("div",{staticClass:"input",domProps:{textContent:t._s(t.selectedItem?t.selectedItem[t.filterby]:"")},on:{click:t.toggleVisible}}),null==t.selectedItem?i("div",{staticClass:"placeholder",domProps:{textContent:t._s(t.title)}}):t._e(),t.selectedItem?i("button",{staticClass:"close",on:{click:function(n){t.selectedItem=null}}},[t._v(" x")]):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"popover"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"input",attrs:{type:"text",placeholder:"Start Typing..."},domProps:{value:t.query},on:{keydown:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"up",38,n.key,["Up","ArrowUp"])?null:t.up(n)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"down",40,n.key,["Down","ArrowDown"])?null:t.down(n)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.selectItem(n)}],input:function(n){n.target.composing||(t.query=n.target.value)}}}),i("div",{ref:"optionsList",staticClass:"options"},[i("ul",t._l(t.matches,(function(n,e){return i("li",{key:e,class:{selected:t.selected==e},domProps:{textContent:t._s(n[t.filterby])},on:{click:function(n){return t.itemClicked(e)}}})})),0)])])])},c=[],d=(i("4de4"),i("caad"),i("2532"),{props:{items:{default:[],type:Array},filterby:{type:String},title:{type:String},shouldReset:{type:Boolean,default:!0}},data:function(){return{selectedItem:null,selected:0,query:"",visible:!1}},methods:{toggleVisible:function(){var t=this;this.visible=!this.visible,setTimeout((function(){t.$refs.input.focus()}),50)},itemClicked:function(t){this.selected=t,this.selectItem()},selectItem:function(){this.matches.length&&(this.selectedItem=this.matches[this.selected],this.visible=!1,this.shouldReset&&(this.query="",this.selected=0),this.$emit("selected",JSON.parse(JSON.stringify(this.selectedItem))))},up:function(){0!=this.selected&&(this.selected-=1,this.scrollToItem())},down:function(){this.selected>=this.matches.length-1||(this.selected+=1,this.scrollToItem())},scrollToItem:function(){this.$refs.optionsList.scrollTop=this.selected*this.itemHeight}},computed:{matches:function(){var t=this;return this.$emit("change",this.query),""==this.query?[]:this.items.filter((function(n){return n[t.filterby].toLowerCase().includes(t.query.toLowerCase())}))}}}),y=d,s=(i("f8e6"),i("2877")),l=Object(s["a"])(y,a,c,!1,null,"c6db43c4",null),h=l.exports,p={name:"App",mounted:function(){this.countries=u},data:function(){return{countries:[]}},methods:{countrySelected:function(t){}},components:{Autocomplete:h}},m=p,f=(i("034f"),Object(s["a"])(m,r,o,!1,null,null,null)),b=f.exports;new e["a"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,n,i){},f8e6:function(t,n,i){"use strict";var e=i("1bb0"),r=i.n(e);r.a}});
//# sourceMappingURL=app.1d2b9ede.js.map