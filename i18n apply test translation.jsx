#include Tools.jsxinc

#include i18n_tools.jsxinc

#include i18n_translate.jsxinc


i18n.init();

(function () {
	var filename = "Pathfinder/Core/Character info.ai";
	var language = "Chinese (traditional)";

	var srcFile = new File(pagesFolder+filename);
	var dstFile = new File(pagesFolder+"Languages/"+language+"/"+filename);
	var messagesFile = new File(pagesFolder+"Languages/"+language+".csv");

	i18n.enableFontSubstitutions();
	i18n.loadTranslations(messagesFile);
	i18n.applyTranslationsFile(srcFile, dstFile);

	log("i18n: Translated "+i18n.countTranslatedLines+" strings from "+i18n.countTranslatedFiles+" files");
	alert("Done!");
})();