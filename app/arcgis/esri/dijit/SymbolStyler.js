//>>built
require({cache:{"url:esri/dijit/SymbolStyler/templates/SymbolStyler.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv class\x3d"${css.symbolPreviewContainer}"\x3e\r\n    \x3cdiv class\x3d"${css.symbolPreview}" data-dojo-attach-point\x3d"dap_symbolPreview"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/StackController" class\x3d"${css.tabBar}" data-dojo-props\x3d"containerId:\'${id}_stackContainer\'" data-dojo-attach-point\x3d"dap_stackController"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/StackContainer" id\x3d"${id}_stackContainer" data-dojo-attach-point\x3d"dap_stackContainer" data-dojo-props\x3d"doLayout: false" class\x3d"${css.content}"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" title\x3d"${labels.shape}" data-dojo-attach-point\x3d"dap_shapeContainer"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_symbolPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_useImageContent"\x3e\r\n        \x3cdiv class\x3d"${css.link}" data-dojo-attach-point\x3d"dap_addImage" tabindex\x3d"0"\x3e${labels.useImage}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dap_shapeImageUrlContainer" class\x3d"${css.shapeImageUrlContainer}"\x3e\r\n          \x3cdiv data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"dap_shapeImageUrlInput" class\x3d"${css.urlInput} dijitInline"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"dap_loadShapeImageUrl" class\x3d"dijitInline ${css.addIcon}" tabindex\x3d"0"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"dap_shapeImageUrlErrorDisplay" class\x3d"${css.errorDisplay}"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_shapeSizeLabel" class\x3d"${css.label}"\x3e${labels.symbolSize}\x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.symbolSizeInput} ${css.inlineInput}" data-dojo-attach-point\x3d"dap_symbolSizeOptions"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/HorizontalSlider" data-dojo-attach-point\x3d"dap_shapeSizeSlider"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/NumberSpinner"  data-dojo-attach-point\x3d"dap_shapeSizeTextBox"\x3e\x3c/div\x3e\r\n        \x3cspan class\x3d"${css.text}"\x3e${labels.px}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" title\x3d"${labels.fill}" data-dojo-attach-point\x3d"dap_fillContainer"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/ColorPicker" data-dojo-attach-point\x3d"dap_fillColorPicker" data-dojo-props\x3d"showSuggestedColors: true"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/SymbolStyler/ColorRampPicker" data-dojo-attach-point\x3d"dap_fillColorRampPicker" class\x3d"${css.hidden}"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" title\x3d"${labels.outline}" data-dojo-attach-point\x3d"dap_outlineContainer"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/ColorPicker" data-dojo-attach-point\x3d"dap_outlineColorPicker" data-dojo-props\x3d"showSuggestedColors: true"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/SymbolStyler/ColorRampPicker" data-dojo-attach-point\x3d"dap_outlineColorRampPicker" class\x3d"${css.hidden}"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_lineWidthLabel" class\x3d"${css.label}"\x3e${labels.lineWidth}\x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.lineWidthInput} ${css.inlineInput}" data-dojo-attach-point\x3d"dap_lineWidthOptions"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/HorizontalSlider" data-dojo-attach-point\x3d"dap_lineWidthSlider"\x3e\x3c/div\x3e\r\n        \x3cselect data-dojo-type\x3d"dijit/form/ComboBox" data-dojo-attach-point\x3d"dap_lineWidthTextBox"\x3e\r\n          \x3coption\x3e1\x3c/option\x3e\r\n          \x3coption\x3e1.2\x3c/option\x3e\r\n          \x3coption\x3e1.5\x3c/option\x3e\r\n          \x3coption\x3e2\x3c/option\x3e\r\n          \x3coption\x3e3\x3c/option\x3e\r\n          \x3coption\x3e4\x3c/option\x3e\r\n          \x3coption\x3e5\x3c/option\x3e\r\n          \x3coption\x3e6\x3c/option\x3e\r\n          \x3coption\x3e7\x3c/option\x3e\r\n          \x3coption\x3e8\x3c/option\x3e\r\n          \x3coption\x3e9\x3c/option\x3e\r\n          \x3coption\x3e10\x3c/option\x3e\r\n        \x3c/select\x3e\r\n        \x3cspan class\x3d"${css.text}"\x3e${labels.px}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.label}" data-dojo-attach-point\x3d"dap_linePatternSelectLabel"\x3e${labels.pattern}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_linePatternSelect"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/SymbolStyler","../dijit/ColorPicker ../domUtils ../kernel ../symbol ./_EventedWidget ./_Tooltip ./ColorPicker/colorUtil ./SymbolStyler/_DelayedUpdate ./SymbolStyler/IconSelect ./SymbolStyler/MarkerSymbolPicker ./SymbolStyler/schemeUtil ./SymbolStyler/stylerUtil ./SymbolStyler/symbolUtil dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/a11yclick dijit/form/CheckBox dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/has dojo/keys dojo/on dojo/string dojo/i18n!esri/nls/jsapi dojo/text!./SymbolStyler/templates/SymbolStyler.html ../dijit/HorizontalSlider ./SymbolStyler/MarkerSymbolPicker ./SymbolStyler/ColorRampPicker dijit/form/Button dijit/form/ComboBox dijit/form/NumberSpinner dijit/form/Select dijit/form/TextBox dijit/layout/BorderContainer dijit/layout/ContentPane dijit/layout/StackController dijit/layout/StackContainer".split(" "),
function(p,f,x,m,n,y,z,A,s,B,t,g,c,C,D,u,E,q,F,d,k,l,G,H,v,w,r,I){n=F([n,C,D,A,y],{_RECENT_FILL_COLORS_ITEM_KEY:"symbolStyler/recent/fill/colors",_RECENT_OUTLINE_COLORS_ITEM_KEY:"symbolStyler/recent/outline/colors",_defaultMinLineWidthInPx:0,_defaultMinShapeSizeInPx:1,_defaultMaxLineWidthInPx:18,_defaultMaxShapeSizeInPx:120,declaredClass:"esri.dijit.SymbolStyler",baseClass:"esriSymbolStyler",templateString:I,labels:null,css:{symbolPreviewContainer:"esriSymbolPreviewContainer",symbolPreview:"esriSymbolPreview",
tabBar:"esriTabBar",content:"esriContent",link:"esriLink",label:"esriLabel",shapeImageUrlContainer:"esriShapeImageUrlContainer",urlInput:"esriUrlInput",addIcon:"esriAddIcon",errorDisplay:"esriErrorDisplay",symbolSizeInput:"esriSymbolSizeInput",inlineInput:"esriInlineInput",text:"esriText",hidden:"esriHidden",lineWidthInput:"esriLineWidthInput",linePattern:"esriLinePattern",linePatternInput:"esriLinePatternInput",alt:"esriAlt",disabled:"esriDisabled"},_originalSymbol:null,_editedSymbol:null,_activeTabName:null,
_externalSizing:!1,_delayedCommitPropsTrigger:null,_symbolPreviewSurface:null,_linePatternSelect:null,_symbolPicker:null,_customImageSymbol:null,_optimizationSection:null,_optimizationCheckBox:null,_isPreppingEdit:null,constructor:function(a){this._delayedCommitPropsTrigger=this.createUpdateTrigger(this._commitProperties,this);this._initOptimizationControls()},_initOptimizationControls:function(){var a=new E,b=l.create("div",{className:p.prototype.css.section});l.create("label",{"for":a.id,className:this.css.label,
innerHTML:r.widgets.symbolEditor.autoAdjustOutline},b);a.on("change",d.hitch(this,function(a){var b=this.dap_outlineColorPicker.get("color");b.a=a?0.5:1;this.dap_outlineColorPicker.set("color",b);this._delayedCommitPropsTrigger()}));a.placeAt(b,"first");this._optimizationSection=b;this._optimizationCheckBox=a},postMixInProperties:function(){this.inherited(arguments);this.labels=d.mixin({},r.common,r.widgets.symbolEditor)},_toggleOutlineColorControls:function(a){var b=this.dap_outlineColorRampPicker,
e=this.dap_outlineColorPicker;this._shouldShowOutlineColorRamp(a)?(this._show(b),this._hide(e)):(this._show(e),this._hide(b))},_shouldShowOutlineColorRamp:function(a){return this._hasColorRamp()&&(c.isLine(a)||c.isPoint(a)&&c.hasPureOutlineStyle(a))},_setUpColorControls:function(a,b){var e=this.dap_outlineColorRampPicker,c=this.dap_outlineColorPicker,d=this.dap_fillColorRampPicker,h=this.dap_fillColorPicker,f;b?(f={colors:b.colors},b.scheme&&(f.scheme=b.scheme),this._isLine()?(e.set({schemes:a,selected:f,
numStops:b.numStops}),this._hide(c),this._show(e)):(this._isPoint()&&e.set({schemes:a,selected:f,numStops:b.numStops}),d.set({schemes:a,selected:f,numStops:b.numStops}),this._show(d),this._show(c),this._hide(h),this._hide(e))):(this._show(h),this._show(c),this._hide(d),this._hide(e),this._updateSuggestedColors(h,t.getFillColors(a)));this._updateSuggestedColors(c,t.getOutlineColors(a))},edit:function(a,b){var e=c.cloneSymbol(a),d;b=b||{};d=b.colorRamp;this._isPreppingEdit=!0;this._colorRamp=d;this._originalSymbol=
a;this._editedSymbol=e;this._activeTabName=b.activeTab;this._externalSizing=b.externalSizing;this._tabOptions=b.tabOptions||{};this._optimizationOptions="boolean"===typeof b.optimizeOutline?{value:b.optimizeOutline}:void 0;this._setUpColorControls(b.schemes,d);this._assimilateSymbol(e);this._toggleSizingControls(this._externalSizing);this._updateSymbolPicker();this._toggleOutlineColorControls(e);this._toggleOptimizationOptions()},_toggleOptimizationOptions:function(){var a=this._optimizationOptions,
b=this._optimizationSection;c.isPolygon(this._editedSymbol)&&a?(this._optimizationCheckBox.set("value",a.value),l.place(b,this.dap_outlineColorPicker.dap_recentColorSection)):b.parentNode&&l.empty(b.parentNode)},_importRecentColors:function(){this.dap_fillColorPicker.loadRecentColors(this._RECENT_FILL_COLORS_ITEM_KEY);this.dap_outlineColorPicker.loadRecentColors(this._RECENT_OUTLINE_COLORS_ITEM_KEY)},_hasColorRamp:function(){return!!this._colorRamp},_toggleSizingControls:function(a){var b=!1,e=!1;
a&&(this._isLine()?e=!0:b=!0);this._toggleLabeledControls({labels:this.dap_lineWidthLabel,controls:[this.dap_lineWidthTextBox,this.dap_lineWidthSlider],disabled:e});this._toggleLabeledControls({labels:this.dap_shapeSizeLabel,controls:[this.dap_shapeSizeTextBox,this.dap_shapeSizeSlider],disabled:b})},_toggleLabeledControls:function(a){var b=a.labels,e=a.controls,c=a.disabled;d.isArray(b)?q.forEach(b,function(a){k.toggle(a,this.css.disabled,c)},this):k.toggle(b,this.css.disabled,c);d.isArray(e)?q.forEach(e,
function(a){a.set("disabled",c)}):e.set("disabled",c)},_updateSymbolPicker:function(){var a=this._tabOptions.symbolDisplayMode?this._tabOptions.symbolDisplayMode:this._isPoint()&&this._hasColorRamp()?"default":"portal";"portal"===a?f.show(this.dap_useImageContent):f.hide(this.dap_useImageContent);this._symbolPicker.set("displayMode",a);this._symbolPicker.clearSelection()},shapeSymbol:null,_setShapeSymbolAttr:function(a){this._adjustOutlineProperties(this._editedSymbol,a);this._set("shapeSymbol",a);
this._editedSymbol=a;this._toggleTabs(a);this._toggleOutlineColorControls(a);this._delayedCommitPropsTrigger()},_adjustOutlineProperties:function(a,b){var e=this.dap_fillColorPicker,d=this.dap_outlineColorPicker,f=this.dap_fillColorRampPicker,h=this.dap_outlineColorRampPicker;this._switchedFromPmsToSms(a,b)?(e.set("color",b.color),e=c.getOutline(b),d.set("color",e.color),this.dap_lineWidthSlider.set("value",e.width),this._linePatternSelect.set("value",e.style)):this._switchedPureOutlineToSmsStyle(a,
b)&&this._hasColorRamp()?f.set("selected",h.get("selected")):this._switchedSmsStyleToPureOutline(a,b)&&(this._hasColorRamp()?h.set("selected",f.get("selected")):(e=c.getOutline(a),h=d.get("color"),e.color?(f=z.isBright(e.color))&&0.2>e.color.a?(h.a=0.2,d.set("color",h)):!f&&0.1>e.color.a&&(h.a=0.1,d.set("color",h)):d.set("color",b.color)))},_switchedFromPmsToSms:function(a,b){return c.isType(a,"picturemarker")&&c.isType(b,"simplemarker")},_switchedSmsStyleToPureOutline:function(a,b){return c.isType(a,
"simplemarker")&&c.isType(b,"simplemarker")&&c.hasPureOutlineStyle(a)&&c.hasPureOutlineStyle(b)},_switchedPureOutlineToSmsStyle:function(a,b){return this._switchedSmsStyleToPureOutline(b,a)},shapeSize:null,_setShapeSizeAttr:function(a){this._set("shapeSize",a);this._delayedCommitPropsTrigger()},_shapeImageUrl:null,_setShapeImageUrlAttr:function(a){this._set("shapeImageUrl",a);this._delayedCommitPropsTrigger()},fillColor:null,_setFillColorAttr:function(a){a=a===p.NO_COLOR?null:a;this._set("fillColor",
a);this._delayedCommitPropsTrigger()},fillColorRamp:null,_setFillColorRampAttr:function(a){this._set("fillColorRamp",a);this._delayedCommitPropsTrigger()},outlineColorRamp:null,_setOutlineColorRampAttr:function(a){this._set("outlineColorRamp",a);this._delayedCommitPropsTrigger()},outlineWidth:null,_setOutlineWidthAttr:function(a){this._set("outlineWidth",a);this._delayedCommitPropsTrigger()},outlineColor:null,_setOutlineColorAttr:function(a){a=a===p.NO_COLOR?null:a;var b=!!this._optimizationOptions&&
this._optimizationCheckBox.checked;a&&b&&(a.a=0.5,this.dap_outlineColorPicker.set("color",a,!1));this._set("outlineColor",a);this._delayedCommitPropsTrigger()},outlinePattern:null,_setOutlinePatternAttr:function(a){this._set("outlinePattern",a);this._delayedCommitPropsTrigger()},_getTabContainer:function(a){return"fill"===a?this.dap_fillContainer:"outline"===a?this.dap_outlineContainer:this.dap_shapeContainer},_storeRecentFillColors:function(){this._storeRecentColors(this.dap_fillColorPicker,this._RECENT_FILL_COLORS_ITEM_KEY)},
_storeRecentOutlineColors:function(){this._storeRecentColors(this.dap_outlineColorPicker,this._RECENT_OUTLINE_COLORS_ITEM_KEY)},_storeRecentColors:function(a,b){a.addRecentColor(a.get("color"));a.saveRecentColors(b)},_isPoint:function(){return c.isPoint(this._editedSymbol)},_isLine:function(){return c.isLine(this._editedSymbol)},_isPolygon:function(){return c.isPolygon(this._editedSymbol)},_addHandlers:function(){this.own(this.dap_shapeContainer.on("show",d.hitch(this,function(){this._symbolPicker._updateTemplatePickerIfHeightless()})));
this._linePatternSelect.on("change",d.hitch(this,function(a){this.set("outlinePattern",a)}));this.own(v(this.dap_loadShapeImageUrl,u,d.hitch(this,function(){this._loadImage(this.dap_shapeImageUrlInput.get("value"))})));this.own(v(this.dap_addImage,u,d.hitch(this,function(){f.show(this.dap_shapeImageUrlContainer);this.dap_shapeImageUrlInput.focus()})));this.dap_shapeImageUrlInput.on("input",d.hitch(this,function(a){a.keyCode===H.ENTER&&this._loadImage(this.dap_shapeImageUrlInput.get("value"))}));this.dap_shapeImageUrlInput.on("change",
d.hitch(this,function(a){this.set("shapeImageUrl",a)}));this.dap_shapeSizeSlider.on("change",d.hitch(this,function(a){this.set("shapeSize",a)}));this.dap_fillColorPicker.on("color-change",d.hitch(this,function(a){this.set("fillColor",a.color)}));this.dap_fillColorRampPicker.on("color-ramp-change",d.hitch(this,function(a){this.set("fillColorRamp",a.colors)}));this.dap_outlineColorRampPicker.on("color-ramp-change",d.hitch(this,function(a){this.set("outlineColorRamp",a.colors)}));this.dap_lineWidthSlider.on("change",
d.hitch(this,function(a){this.set("outlineWidth",a)}));this.dap_outlineColorPicker.on("color-change",d.hitch(this,function(a){this.set("outlineColor",a.color)}));g.bindSliderAndTextBox(this.dap_lineWidthSlider,this.dap_lineWidthTextBox);g.bindSliderAndTextBox(this.dap_shapeSizeSlider,this.dap_shapeSizeTextBox);this._symbolPicker.on("symbol-select",d.hitch(this,function(a){this._hideImageUrlInput();this.set("shapeSymbol",a.selection)}));this.dap_shapeSizeSlider.on("change",d.hitch(this,this._onSizeChange));
this.dap_fillColorPicker.on("color-change",d.hitch(this,this._onFillColorChange));this.dap_outlineColorPicker.on("color-change",d.hitch(this,this._onOutlineColorChange));this.dap_lineWidthSlider.on("change",d.hitch(this,this._onWidthChange))},getStyle:function(){var a=c.cloneSymbol(this._editedSymbol),b={symbol:a};this._hasColorRamp()&&(a=(a=c.isLine(a)||c.isPoint(a)&&c.hasPureOutlineStyle(a))?this.dap_outlineColorRampPicker:this.dap_fillColorRampPicker,d.mixin(b,a.getStyle()));this._optimizationOptions&&
(b.optimizeOutline=this._optimizationCheckBox.checked);return b},storeColors:function(){this._storeRecentFillColors();this._storeRecentOutlineColors()},postCreate:function(){this.inherited(arguments);this._linePatternSelect=new s({baseClass:s.prototype.baseClass+" "+this.baseClass+" "+this.css.linePatternInput},this.dap_linePatternSelect);f.hide(this.dap_shapeImageUrlContainer);this.dap_shapeImageUrlInput.set("placeholder",this.labels.imageUrlInputPlaceholder);this.dap_lineWidthTextBox.selectOnClick=
!0;this.dap_shapeSizeTextBox.selectOnClick=!0;this.dap_lineWidthSlider.intermediateChanges=!0;this.dap_lineWidthTextBox.intermediateChanges=!0;this.dap_shapeSizeSlider.intermediateChanges=!0;this.dap_shapeSizeTextBox.intermediateChanges=!0;this.dap_fillColorPicker.trackColors=!1;this.dap_outlineColorPicker.trackColors=!1;this._linePatternSelect.addIconOptions(["solid","dot","dash","dashdot","dashdotdot"],this.css.linePattern);this._importRecentColors();this.createTooltips([{node:this.dap_shapeImageUrlContainer,
label:this.labels.imageUrlInputTooltip},{node:this.dap_addImage,label:this.labels.useImageTooltip},{node:this.dap_symbolSizeOptions},{node:this.dap_lineWidthOptions}]);this.dap_outlineColorPicker._enableTransparencySlider=function(){};this.dap_outlineColorPicker._disableTransparencySlider=function(){}},_updateSliderAndTextBoxConstraints:function(a){var b=a.minimum,e=a.maximum;a.textBox.set("constraints",{min:b,max:e});a.slider.set({minimum:b,maximum:e,discreteValues:Math.round(e)-Math.round(b)+1})},
_loadImage:function(a){this._clearUrlImageErrorDisplay();c.testImageUrl(a).then(d.hitch(this,function(){var b,e;b=this._customImageSymbol;e=this.shapeSize;b?(b.url=a,b.height=e,b.width=e):this._customImageSymbol=b=new m.PictureMarkerSymbol(a,e,e);this.set("shapeSymbol",b)}),d.hitch(this,function(){this._showUrlImageErrorDisplay(this.labels.imageLoadError)}))},_showUrlImageErrorDisplay:function(a){this.dap_shapeImageUrlErrorDisplay.innerHTML=a},_clearUrlImageErrorDisplay:function(){this.dap_shapeImageUrlErrorDisplay.innerHTML=
""},_getActiveTabAttr:function(){var a=this.dap_stackContainer.selectedChildWidget;return a===this.dap_outlineContainer?"outline":a===this.dap_fillContainer?"fill":"shape"},_updateTabs:function(a){this._toggleTabs(a);this._showRelevantTabs(a);this._selectActiveTab();g.ensureEnabledChildSelection(this.dap_stackContainer)},_supportsPattern:function(a){return c.isLine(a)||c.isPolygon(a)},_toggleTabs:function(a){this._shouldShowShapeTab(a)?this._enableTab("shape"):this._disableTab("shape");this._shouldShowFillTab(a)?
this._enableTab("fill"):this._disableTab("fill");this._shouldShowOutlineTab(a)?(this._enableTab("outline"),this._supportsPattern(a)?(f.show(this.dap_linePatternSelectLabel),f.show(this._linePatternSelect.domNode)):(f.hide(this.dap_linePatternSelectLabel),f.hide(this._linePatternSelect.domNode))):this._disableTab("outline")},_shouldShowShapeTab:function(a){return"simplemarkersymbol"===a.type||"picturemarkersymbol"===a.type},_enableTab:function(a){g.enable(this._getTabContainer(a))},_disableTab:function(a){g.disable(this._getTabContainer(a))},
_shouldShowFillTab:function(a){return"simplemarkersymbol"===a.type&&a.style===m.SimpleMarkerSymbol.STYLE_CIRCLE||"simplemarkersymbol"===a.type&&a.style===m.SimpleMarkerSymbol.STYLE_SQUARE||"simplemarkersymbol"===a.type&&a.style===m.SimpleMarkerSymbol.STYLE_DIAMOND||"simplefillsymbol"===a.type},_shouldShowOutlineTab:function(a){return"simplemarkersymbol"===a.type||"simplefillsymbol"===a.type||"cartographiclinesymbol"===a.type||"simplelinesymbol"===a.type},_syncControls:function(a){var b;this._hideImageUrlInput();
this._updateSizingConstraints();this._shouldShowShapeTab(a)&&(b=c.getMarkerLength(a),this.set("shapeSize",b),g.silentlyUpdateIntermediateChangingValueWidget(this.dap_shapeSizeSlider,b),g.silentlyUpdateIntermediateChangingValueWidget(this.dap_shapeSizeTextBox,b));this._shouldShowFillTab(a)&&(this.set("fillColor",a.color),this.dap_fillColorPicker.set("color",a.color,!1));this._shouldShowOutlineTab(a)&&(a=c.getOutline(a),this.set("outlineColor",a.color),this.set("outlineWidth",a.width),this.set("outlinePattern",
a.style),this.dap_outlineColorPicker.set("color",a.color,!1),g.silentlyUpdateIntermediateChangingValueWidget(this.dap_lineWidthSlider,a.width),g.silentlyUpdateIntermediateChangingValueWidget(this.dap_lineWidthTextBox,a.width),this._linePatternSelect.set("value",a.style,!1))},_updateSizingConstraints:function(){var a=c.getOutline(this._editedSymbol),a=a&&a.width>this._defaultMaxLineWidthInPx?Math.ceil(a.width):this._defaultMaxLineWidthInPx,b=c.getMarkerLength(this._editedSymbol),b=b>this._defaultMaxShapeSizeInPx?
Math.ceil(b):this._defaultMaxShapeSizeInPx;this._updateSliderAndTextBoxConstraints({textBox:this.dap_lineWidthTextBox,slider:this.dap_lineWidthSlider,minimum:this._defaultMinLineWidthInPx,maximum:a});this.findTooltip(this.dap_lineWidthOptions).set("label",w.substitute(this.labels.lineWidthTooltip,{min:this._defaultMinLineWidthInPx,max:a}));this._updateSliderAndTextBoxConstraints({textBox:this.dap_shapeSizeTextBox,slider:this.dap_shapeSizeSlider,minimum:this._defaultMinShapeSizeInPx,maximum:b});this.findTooltip(this.dap_symbolSizeOptions).set("label",
w.substitute(this.labels.symbolSizeTooltip,{min:this._defaultMinShapeSizeInPx,max:b}))},_assimilateSymbol:function(a){this._updateTabs(a);this._syncControls(a)},startup:function(){this.inherited(arguments);var a=new B(this._getSymbolPickerParams(),this.dap_symbolPicker);a.startup();this._symbolPicker=a;this._addHandlers()},_getSymbolPickerParams:function(){return{portal:this.portal||this.portalSelf||this.portalUrl}},_hideImageUrlInput:function(){this._clearUrlImageErrorDisplay();f.hide(this.dap_shapeImageUrlContainer);
this.dap_shapeImageUrlInput.set("value","")},_showRelevantTabs:function(){var a=this.dap_stackContainer,b=this.dap_shapeContainer,e=this.dap_fillContainer,c=this.dap_outlineContainer,d,h,g;q.forEach(a.getChildren(),function(b){a.removeChild(b)});this._isPoint()&&(g=h=d=!0);this._isLine()&&(g=!0);this._isPolygon()&&(g=h=!0);var k=this._tabOptions.excluded||[];-1<k.indexOf("shape")&&(d=!1);-1<k.indexOf("outline")&&(g=!1);-1<k.indexOf("fill")&&(h=!1);d&&a.addChild(b);h&&a.addChild(e);g&&a.addChild(c);
1===a.getChildren().length?f.hide(this.dap_stackController.domNode):f.show(this.dap_stackController.domNode)},_selectActiveTab:function(){var a=this._getTabContainer(this._activeTabName);-1<this.dap_stackContainer.getIndexOfChild(a)&&this.dap_stackContainer.selectChild(a)},_onFillColorChange:function(a){this.set("fillColor",a.color)},_onOutlineColorChange:function(a){this.set("outlineColor",a.color)},_getFillColor:function(){return!this._isLine()&&this._hasColorRamp()?this._getMiddleItem(this.fillColorRamp):
this.fillColor},_getMiddleItem:function(a){return a[Math.floor(0.5*(a.length-1))]},_getOutlineColor:function(){return this._shouldShowOutlineColorRamp(this._editedSymbol)?this._getMiddleItem(this.outlineColorRamp):this.outlineColor},_commitProperties:function(){var a=this._editedSymbol;this._shouldShowShapeTab(a)&&this._updateShapeSize();this._shouldShowFillTab(a)&&(c.setFillColor(a,this._getFillColor()),this._isPreppingEdit||this._ensureSupportedSfsStyle(a));this._shouldShowOutlineTab(a)&&(c.setOutlineColor(a,
this._getOutlineColor()),this._updateOutlinePattern(),this._updateOutlineWidth());this._updatePreviewSymbol();this._toggleOutlineOptions();this._isPreppingEdit=!1;this.emit("style-update")},_ensureSupportedSfsStyle:function(a){if("simplefillsymbol"===a.type&&("none"!==a.style||"solid"!==a.style))a.style="solid"},_toggleOutlineOptions:function(){var a=!!this._optimizationOptions&&this._optimizationCheckBox.checked,b=this.outlineColor,c=this._isLine(),d=a||!b,f=!b;this._toggleLabeledControls({labels:this.dap_lineWidthLabel,
controls:[this.dap_lineWidthTextBox,this.dap_lineWidthSlider],disabled:this._externalSizing&&c||!b||a});this._toggleLabeledControls({labels:this.dap_linePatternSelectLabel,controls:this._linePatternSelect,disabled:f});this._toggleLabeledControls({labels:[this.dap_outlineColorPicker.dap_transparencyLabel],controls:[this.dap_outlineColorPicker.dap_transparencySlider],disabled:d})},_updatePreviewSymbol:function(){var a=this._editedSymbol,b=this.css.alt,d=this.dap_symbolPreview;this._symbolPreviewSurface&&
this._symbolPreviewSurface.destroy();k.toggle(d,b,this._blendsIntoBackground(a));this._symbolPreviewSurface=c.renderOnSurface(a,d)},_blendsIntoBackground:function(a){return c.hasColor(a.outline)?this._isWhitish(a.outline.color):this._isWhitish(a.color)},_isWhitish:function(a){return a&&246<a.r&&246<a.g&&246<a.b},destroy:function(){this._symbolPreviewSurface&&this._symbolPreviewSurface.destroy();l.destroy(this._optimizationSection);this._optimizationCheckBox.destroy();this.dap_shapeContainer.destroy();
this.dap_fillContainer.destroy();this.dap_outlineContainer.destroy();this.inherited(arguments)},_updateSuggestedColors:function(a,b){a.set("suggestedColors",b)},_updateOutlineWidth:function(){c.setOutlineWidth(this._editedSymbol,this.outlineWidth)},_onWidthChange:function(a){this.set("outlineWidth",a)},_onSizeChange:function(a){this.set("shapeSize",a)},_updateShapeSize:function(){c.setSize(this._editedSymbol,this.shapeSize)},_updateOutlinePattern:function(){this._shouldShowOutlineTab(this._editedSymbol)&&
c.setOutlineStyle(this._editedSymbol,c.toFullLineStyle(this.outlinePattern))},_show:function(a){k.remove(f.getNode(a),this.css.hidden)},_hide:function(a){k.add(f.getNode(a),this.css.hidden)},popUp:function(a){g.popUp(this,a)}});G("extend-esri")&&d.setObject("dijit.SymbolStyler",n,x);return n});