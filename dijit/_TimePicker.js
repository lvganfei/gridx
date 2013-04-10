//>>built
require({cache:{"url:dijit/templates/TimePicker.html":'<div id="widget_${id}" class="dijitMenu"\r\n    ><div data-dojo-attach-point="upArrow" class="dijitButtonNode dijitUpArrowButton" data-dojo-attach-event="onmouseenter:_buttonMouse,onmouseleave:_buttonMouse"\r\n\t\t><div class="dijitReset dijitInline dijitArrowButtonInner" role="presentation">&#160;</div\r\n\t\t><div class="dijitArrowButtonChar">&#9650;</div></div\r\n    ><div data-dojo-attach-point="timeMenu,focusNode" data-dojo-attach-event="onclick:_onOptionSelected,onmouseover,onmouseout"></div\r\n    ><div data-dojo-attach-point="downArrow" class="dijitButtonNode dijitDownArrowButton" data-dojo-attach-event="onmouseenter:_buttonMouse,onmouseleave:_buttonMouse"\r\n\t\t><div class="dijitReset dijitInline dijitArrowButtonInner" role="presentation">&#160;</div\r\n\t\t><div class="dijitArrowButtonChar">&#9660;</div></div\r\n></div>\r\n'}});
define("dijit/_TimePicker","dojo/_base/array,dojo/date,dojo/date/locale,dojo/date/stamp,dojo/_base/declare,dojo/dom-class,dojo/dom-construct,dojo/_base/event,dojo/_base/kernel,dojo/keys,dojo/_base/lang,dojo/sniff,dojo/query,dojo/mouse,./typematic,./_Widget,./_TemplatedMixin,./form/_FormValueWidget,dojo/text!./templates/TimePicker.html".split(","),function(j,k,l,h,m,e,n,i,o,f,p,v,q,r,g,s,t,w,u){return m("dijit._TimePicker",[s,t],{templateString:u,baseClass:"dijitTimePicker",clickableIncrement:"T00:15:00",
visibleIncrement:"T01:00:00",visibleRange:"T05:00:00",value:new Date,_visibleIncrement:2,_clickableIncrement:1,_totalIncrements:10,constraints:{},serialize:h.toISOString,setValue:function(a){o.deprecated("dijit._TimePicker:setValue() is deprecated.  Use set('value', ...) instead.","","2.0");this.set("value",a)},_setValueAttr:function(a){this._set("value",a);this._showText()},_setFilterStringAttr:function(a){this._set("filterString",a);this._showText()},isDisabledDate:function(){return!1},_getFilteredNodes:function(a,
b,d,c){var e=[],c=c?c.date:this._refDate,f=a,h=this._maxIncrement+Math.abs(f),i=d?-1:1,g=d?1:0,j=1-g;do{f-=g;if(a=this._createOption(f)){if(d&&a.date>c||!d&&a.date<c)break;e[d?"unshift":"push"](a);c=a.date}f+=j}while(e.length<b&&f*i<h);return e},_showText:function(){var a=h.fromISOString;this.timeMenu.innerHTML="";this._clickableIncrementDate=a(this.clickableIncrement);this._visibleIncrementDate=a(this.visibleIncrement);this._visibleRangeDate=a(this.visibleRange);var b=function(a){return 3600*a.getHours()+
60*a.getMinutes()+a.getSeconds()},a=b(this._clickableIncrementDate),d=b(this._visibleIncrementDate),b=b(this._visibleRangeDate),c=(this.value||this.currentFocus).getTime();this._refDate=new Date(c-c%(1E3*a));this._refDate.setFullYear(1970,0,1);this._clickableIncrement=1;this._totalIncrements=b/a;this._visibleIncrement=d/a;this._maxIncrement=86400/a;b=Math.min(this._totalIncrements,10);a=this._getFilteredNodes(0,(b>>1)+1,!1);d=[];b-=a.length;c=this._getFilteredNodes(0,b,!0,a[0]);c.length<b&&0<a.length&&
(d=this._getFilteredNodes(a.length,b-c.length,!1,a[a.length-1]));j.forEach(c.concat(a,d),function(a){this.timeMenu.appendChild(a)},this)},constructor:function(){this.constraints={}},postMixInProperties:function(){this.inherited(arguments);this._setConstraintsAttr(this.constraints)},_setConstraintsAttr:function(a){p.mixin(this,a);if(!a.locale)a.locale=this.lang},postCreate:function(){this.connect(this.timeMenu,r.wheel,"_mouseWheeled");this.own(g.addMouseListener(this.upArrow,this,"_onArrowUp",33,250),
g.addMouseListener(this.downArrow,this,"_onArrowDown",33,250));this.inherited(arguments)},_buttonMouse:function(a){e.toggle(a.currentTarget,a.currentTarget==this.upArrow?"dijitUpArrowHover":"dijitDownArrowHover","mouseenter"==a.type||"mouseover"==a.type)},_createOption:function(a){var b=new Date(this._refDate),d=this._clickableIncrementDate;b.setTime(b.getTime()+36E5*d.getHours()*a+6E4*d.getMinutes()*a+1E3*d.getSeconds()*a);"time"==this.constraints.selector&&b.setFullYear(1970,0,1);d=l.format(b,this.constraints);
if(this.filterString&&0!==d.toLowerCase().indexOf(this.filterString))return null;var c=this.ownerDocument.createElement("div");c.className=this.baseClass+"Item";c.date=b;c.idx=a;n.create("div",{"class":this.baseClass+"ItemInner",innerHTML:d},c);1>a%this._visibleIncrement&&-1<a%this._visibleIncrement?e.add(c,this.baseClass+"Marker"):a%this._clickableIncrement||e.add(c,this.baseClass+"Tick");this.isDisabledDate(b)&&e.add(c,this.baseClass+"ItemDisabled");if(this.value&&!k.compare(this.value,b,this.constraints.selector))c.selected=
!0,e.add(c,this.baseClass+"ItemSelected"),e.contains(c,this.baseClass+"Marker")?e.add(c,this.baseClass+"MarkerSelected"):e.add(c,this.baseClass+"TickSelected"),this._highlightOption(c,!0);return c},_onOptionSelected:function(a){if((a=a.target.date||a.target.parentNode.date)&&!this.isDisabledDate(a))this._highlighted_option=null,this.set("value",a),this.onChange(a)},onChange:function(){},_highlightOption:function(a,b){if(a){if(b)this._highlighted_option&&this._highlightOption(this._highlighted_option,
!1),this._highlighted_option=a;else{if(this._highlighted_option!==a)return;this._highlighted_option=null}e.toggle(a,this.baseClass+"ItemHover",b);e.contains(a,this.baseClass+"Marker")?e.toggle(a,this.baseClass+"MarkerHover",b):e.toggle(a,this.baseClass+"TickHover",b)}},onmouseover:function(a){this._keyboardSelected=null;a=a.target.parentNode===this.timeMenu?a.target:a.target.parentNode;e.contains(a,this.baseClass+"Item")&&this._highlightOption(a,!0)},onmouseout:function(a){this._keyboardSelected=
null;this._highlightOption(a.target.parentNode===this.timeMenu?a.target:a.target.parentNode,!1)},_mouseWheeled:function(a){this._keyboardSelected=null;i.stop(a);this[0<a.wheelDelta?"_onArrowUp":"_onArrowDown"]()},_onArrowUp:function(a){-1===a?e.remove(this.upArrow,"dijitUpArrowActive"):(0===a&&e.add(this.upArrow,"dijitUpArrowActive"),this.timeMenu.childNodes.length&&(a=this._getFilteredNodes(this.timeMenu.childNodes[0].idx,1,!0,this.timeMenu.childNodes[0]),a.length&&(this.timeMenu.removeChild(this.timeMenu.childNodes[this.timeMenu.childNodes.length-
1]),this.timeMenu.insertBefore(a[0],this.timeMenu.childNodes[0]))))},_onArrowDown:function(a){-1===a?e.remove(this.downArrow,"dijitDownArrowActive"):(0===a&&e.add(this.downArrow,"dijitDownArrowActive"),this.timeMenu.childNodes.length&&(a=this._getFilteredNodes(this.timeMenu.childNodes[this.timeMenu.childNodes.length-1].idx+1,1,!1,this.timeMenu.childNodes[this.timeMenu.childNodes.length-1]),a.length&&(this.timeMenu.removeChild(this.timeMenu.childNodes[0]),this.timeMenu.appendChild(a[0]))))},handleKey:function(a){if(a.keyCode==
f.DOWN_ARROW||a.keyCode==f.UP_ARROW){i.stop(a);if(this._highlighted_option&&!this._highlighted_option.parentNode)this._highlighted_option=null;var b=this.timeMenu,d=this._highlighted_option||q("."+this.baseClass+"ItemSelected",b)[0];d?b.childNodes.length&&(a.keyCode==f.DOWN_ARROW&&!d.nextSibling?this._onArrowDown():a.keyCode==f.UP_ARROW&&!d.previousSibling&&this._onArrowUp(),d=a.keyCode==f.DOWN_ARROW?d.nextSibling:d.previousSibling):d=b.childNodes[0];this._highlightOption(d,!0);this._keyboardSelected=
d;return!1}if(a.keyCode==f.ENTER||a.keyCode===f.TAB){if(!this._keyboardSelected&&a.keyCode===f.TAB)return!0;this._highlighted_option&&this._onOptionSelected({target:this._highlighted_option});return a.keyCode===f.TAB}}})});