#include Tools.jsxinc

#include i18n_tools.jsxinc

#include i18n_translate.jsxinc


i18n.init();

(function () {
	var srcFolder = Folder.selectDialog( 'Select the folder of Illustrator files in which you want to replace text', pagesFolder);
	if (srcFolder === null) {
	  return;
	}

	var dstFolder = Folder.selectDialog('Select a destination folder into which to save translated files', pagesFolder+'Languages/');
	if (dstFolder === null) {
	  return;
	}

	var messagesFile = File.openDialog("Translation CSV file", "*.csv");
	if (messagesFile === null) {
	  return;
	}

	i18n.enableFontSubstitutions();
	i18n.loadTranslations(messagesFile);
	i18n.applyTranslationsFolder(srcFolder, dstFolder);

	log("i18n: Translated "+i18n.countTranslatedLines+" strings from "+i18n.countTranslatedFiles+" files");
	alert("Done!");
})();