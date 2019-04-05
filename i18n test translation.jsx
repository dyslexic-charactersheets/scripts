#include Tools.jsxinc

#include i18n_tools.jsxinc

#include i18n_translate.jsxinc


i18n.init();

(function () {
	var file = "Starfinder/Core/Build a character.ai";
	var language = "French";
	var srcFile = new File(baseFolder+'pages/'+file);
	var dstFile = new File(baseFolder+'pages/Languages/'+language+'/'+file);
	var messagesFile = new File(baseFolder+'pages/Languages/'+language+'.csv');

	i18n.loadTranslations(messagesFile);
	i18n.applyTranslationsFile(srcFile, dstFile);

	log("i18n: Translated "+i18n.countTranslatedLines+" strings from "+i18n.countTranslatedFiles+" files");
	alert("Done!");
})();