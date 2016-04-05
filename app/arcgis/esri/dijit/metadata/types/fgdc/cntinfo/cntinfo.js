//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/cntinfo/templates/cntinfo.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'cntinfo\',minOccurs:0,\r\n      label:\'${i18nFgdc.cntinfo.caption}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n    \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nFgdc.cntinfo.section.primary}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/ElementChoice"\x3e\r\n        \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'cntorgp\',showHeader:false,\r\n              label:\'${i18nFgdc.cntinfo.cntorgp.caption}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n              data-dojo-props\x3d"target:\'cntorg\',label:\'${i18nFgdc.cntinfo.cntorgp.cntorg}\'"\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n              data-dojo-props\x3d"target:\'cntper\',minOccurs:0,label:\'${i18nFgdc.cntinfo.cntorgp.cntper}\'"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'cntperp\',showHeader:false,\r\n              label:\'${i18nFgdc.cntinfo.cntperp.caption}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n              data-dojo-props\x3d"target:\'cntper\',label:\'${i18nFgdc.cntinfo.cntperp.cntper}\'"\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n              data-dojo-props\x3d"target:\'cntorg\',minOccurs:0,label:\'${i18nFgdc.cntinfo.cntperp.cntorg}\'"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'cntpos\',minOccurs:0,label:\'${i18nFgdc.cntinfo.cntpos}\'"\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'cntaddr\',maxOccurs:\'unbounded\',\r\n          label:\'${i18nFgdc.cntinfo.cntaddr.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'addrtype\',\r\n            label:\'${i18nFgdc.cntinfo.cntaddr.addrtype.caption}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                data-dojo-props\x3d"label:\'${i18nFgdc.cntinfo.cntaddr.addrtype.mailing}\',value:\'mailing\',selected:true"\x3e\x3c/div\x3e  \r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                data-dojo-props\x3d"label:\'${i18nFgdc.cntinfo.cntaddr.addrtype.physical}\',value:\'physical\'"\x3e\x3c/div\x3e  \r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                data-dojo-props\x3d"label:\'${i18nFgdc.cntinfo.cntaddr.addrtype.mailingAndPhysical}\',value:\'mailing and physical\'"\x3e\x3c/div\x3e  \r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                data-dojo-props\x3d"label:\'${i18nFgdc.alternates.other}\',value:\'_other\',isOther:true"\x3e\x3c/div\x3e  \r\n            \x3c/div\x3e            \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'address\',minOccurs:0,maxOccurs:\'unbounded\',\r\n            label:\'${i18nFgdc.cntinfo.cntaddr.address}\'"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'city\',\r\n            label:\'${i18nFgdc.cntinfo.cntaddr.city}\'"\x3e\x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'state\',\r\n            label:\'${i18nFgdc.cntinfo.cntaddr.state}\'"\x3e\x3c/div\x3e    \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'postal\',\r\n            label:\'${i18nFgdc.cntinfo.cntaddr.postal}\'"\x3e\x3c/div\x3e    \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'country\',minOccurs:0,\r\n            label:\'${i18nFgdc.cntinfo.cntaddr.country}\'"\x3e\x3c/div\x3e              \r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,\r\n          label:\'${i18nFgdc.cntinfo.section.phoneAndEmail}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'cntvoice\',maxOccurs:\'unbounded\',\r\n            label:\'${i18nFgdc.cntinfo.cntvoice}\'"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'cnttdd\',minOccurs:0,maxOccurs:\'unbounded\',\r\n            label:\'${i18nFgdc.cntinfo.cnttdd}\'"\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'cntfax\',minOccurs:0,maxOccurs:\'unbounded\',\r\n            label:\'${i18nFgdc.cntinfo.cntfax}\'"\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'cntemail\',minOccurs:0,maxOccurs:\'unbounded\',preferOpen:true,\r\n            label:\'${i18nFgdc.cntinfo.cntemail}\'"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,\r\n          label:\'${i18nFgdc.cntinfo.section.hoursAndInstructions}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'hours\',minOccurs:0,\r\n            label:\'${i18nFgdc.cntinfo.hours}\'"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'cntinst\',minOccurs:0,\r\n            label:\'${i18nFgdc.cntinfo.cntinst}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e  \r\n      \r\n    \x3c/div\x3e  \r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/fgdc/cntinfo/cntinfo","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/ElementChoice ../../../form/InputSelectOne ../../../form/InputTextArea ../../../form/Options ../../../form/Option ../../../form/Section ../../../form/Tabs dojo/text!./templates/cntinfo.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,p,q,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.cntinfo.cntinfo",
a,f);return a});