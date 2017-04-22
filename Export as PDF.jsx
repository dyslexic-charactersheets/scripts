#include Tools.jsxinc

#include i18n_tools.jsxinc

var sourceFolder = Folder.selectDialog( 'Select the folder of Illustrator files you want to export as PDFs', pagesFolder );
var destinationFolder = Folder.selectDialog( 'Select the destination folder into which PDFs will be saved', assetsFolder );

exportFolderAsPDF(sourceFolder, destinationFolder);
alert("Done!");