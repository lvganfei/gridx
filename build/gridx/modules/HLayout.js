//>>built
define("gridx/modules/HLayout","dojo/_base/declare dojo/_base/Deferred dojo/_base/array dojo/dom-style dojo/DeferredList ../core/_Module".split(" "),function(m,n,f,g,h,p){return m(p,{name:"hLayout",load:function(a,b){var c=this;c.connect(c.grid,"_onResizeEnd",function(a,b){var k,l=[];for(k in b)l.push(b[k]);(new h(l)).then(function(){c.reLayout()})});b.then(function(){c._layout()})},lead:0,tail:0,register:function(a,b,c){var d=this._regs=this._regs||[];a||(a=new n,a.callback());d.push([a,b,c])},reLayout:function(){var a=
this._regs,b=0,c=0;a&&(f.forEach(a,function(a){var e=a[1].offsetWidth||g.get(a[1],"width");a[2]?c+=e:b+=e}),this.lead=b,this.tail=c,this.onUpdateWidth(b,c))},onUpdateWidth:function(){},_layout:function(){var a=this,b=a._regs;if(b){var c=0,d=0,e=f.map(b,function(a){return a[0]});(new h(e)).then(function(){f.forEach(b,function(a){var b=a[1].offsetWidth||g.get(a[1],"width");a[2]?d+=b:c+=b});a.lead=c;a.tail=d;a.loaded.callback()})}else a.loaded.callback()}})});
//@ sourceMappingURL=HLayout.js.map