//>>built
define("dojox/charting/plot2d/Base","dojo/_base/declare dojo/_base/array dojox/gfx ../Element ./common ../axis2d/common dojo/has".split(" "),function(c,e,f,g,d,k,l){c=c("dojox.charting.plot2d.Base",g,{constructor:function(a,b){b&&b.tooltipFunc&&(this.tooltipFunc=b.tooltipFunc)},clear:function(){this.series=[];this.dirty=!0;return this},setAxis:function(a){return this},assignAxes:function(a){e.forEach(this.axes,function(b){this[b]&&this.setAxis(a[this[b]])},this)},addSeries:function(a){this.series.push(a);
return this},getSeriesStats:function(){return d.collectSimpleStats(this.series)},calculateAxes:function(a){this.initializeScalers(a,this.getSeriesStats());return this},initializeScalers:function(){return this},isDataDirty:function(){return e.some(this.series,function(a){return a.dirty})},render:function(a,b){return this},renderLabel:function(a,b,c,e,d,g,h){a=k.createText[this.opt.htmlLabels&&"vml"!=f.renderer?"html":"gfx"](this.chart,a,b,c,h?h:"middle",e,d.series.font,d.series.fontColor);g&&(this.opt.htmlLabels&&
"vml"!=f.renderer?a.style.pointerEvents="none":a.rawNode&&(a.rawNode.style.pointerEvents="none"));this.opt.htmlLabels&&"vml"!=f.renderer&&this.htmlElements.push(a);return a},getRequiredColors:function(){return this.series.length},_getLabel:function(a){return d.getLabel(a,this.opt.fixed,this.opt.precision)}});l("dojo-bidi")&&c.extend({_checkOrientation:function(a,b,c){this.chart.applyMirroring(this.group,b,c)}});return c});