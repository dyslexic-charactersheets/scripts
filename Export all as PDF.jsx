#include Tools.jsxinc

#include i18n_tools.jsxinc

var sourceFolder = pagesFolder;
var destinationFolder = assetsFolder;

i18n.init();

exportFolderAsPDF(new Folder(sourceFolder+'Pathfinder'), new Folder(destinationFolder+'pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'3.5'), new Folder(destinationFolder+'dnd35'));
exportFolderAsPDF(new Folder(sourceFolder+'All'), new Folder(destinationFolder+'pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'All'), new Folder(destinationFolder+'dnd35'));

exportFolderAsPDF(new Folder(sourceFolder+'Languages/Italian/Pathfinder'), new Folder(destinationFolder+'languages/italian/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Italian/3.5'), new Folder(destinationFolder+'languages/italian/dnd35'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Italian/All'), new Folder(destinationFolder+'languages/italian/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Italian/All'), new Folder(destinationFolder+'languages/italian/dnd35'));

exportFolderAsPDF(new Folder(sourceFolder+'Languages/Spanish/Pathfinder'), new Folder(destinationFolder+'languages/spanish/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Spanish/3.5'), new Folder(destinationFolder+'languages/spanish/dnd35'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Spanish/All'), new Folder(destinationFolder+'languages/spanish/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Spanish/All'), new Folder(destinationFolder+'languages/spanish/dnd35'));

exportFolderAsPDF(new Folder(sourceFolder+'Languages/Polish/Pathfinder'), new Folder(destinationFolder+'languages/polish/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Polish/3.5'), new Folder(destinationFolder+'languages/polish/dnd35'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Polish/All'), new Folder(destinationFolder+'languages/polish/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Polish/All'), new Folder(destinationFolder+'languages/polish/dnd35'));

exportFolderAsPDF(new Folder(sourceFolder+'Languages/Portuguese/Pathfinder'), new Folder(destinationFolder+'languages/portuguese/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Portuguese/3.5'), new Folder(destinationFolder+'languages/portuguese/dnd35'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Portuguese/All'), new Folder(destinationFolder+'languages/portuguese/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Portuguese/All'), new Folder(destinationFolder+'languages/portuguese/dnd35'));

exportFolderAsPDF(new Folder(sourceFolder+'Languages/French/Pathfinder'), new Folder(destinationFolder+'languages/french/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/French/3.5'), new Folder(destinationFolder+'languages/french/dnd35'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/French/All'), new Folder(destinationFolder+'languages/french/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/French/All'), new Folder(destinationFolder+'languages/french/dnd35'));

exportFolderAsPDF(new Folder(sourceFolder+'Languages/German/Pathfinder'), new Folder(destinationFolder+'languages/german/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/German/3.5'), new Folder(destinationFolder+'languages/german/dnd35'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/German/All'), new Folder(destinationFolder+'languages/german/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/German/All'), new Folder(destinationFolder+'languages/german/dnd35'));

exportFolderAsPDF(new Folder(sourceFolder+'Languages/Russian/Pathfinder'), new Folder(destinationFolder+'languages/russian/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Russian/3.5'), new Folder(destinationFolder+'languages/russian/dnd35'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Russian/All'), new Folder(destinationFolder+'languages/russian/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Russian/All'), new Folder(destinationFolder+'languages/russian/dnd35'));

exportFolderAsPDF(new Folder(sourceFolder+'Languages/Norwegian/Pathfinder'), new Folder(destinationFolder+'languages/norwegian/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Norwegian/3.5'), new Folder(destinationFolder+'languages/norwegian/dnd35'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Norwegian/All'), new Folder(destinationFolder+'languages/norwegian/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Norwegian/All'), new Folder(destinationFolder+'languages/norwegian/dnd35'));

exportFolderAsPDF(new Folder(sourceFolder+'Languages/Dutch/Pathfinder'), new Folder(destinationFolder+'languages/dutch/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Dutch/3.5'), new Folder(destinationFolder+'languages/dutch/dnd35'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Dutch/All'), new Folder(destinationFolder+'languages/dutch/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/Dutch/All'), new Folder(destinationFolder+'languages/dutch/dnd35'));

exportFolderAsPDF(new Folder(sourceFolder+'Languages/US English/Pathfinder'), new Folder(destinationFolder+'languages/american/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/US English/3.5'), new Folder(destinationFolder+'languages/american/dnd35'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/US English/All'), new Folder(destinationFolder+'languages/american/pathfinder'));
exportFolderAsPDF(new Folder(sourceFolder+'Languages/US English/All'), new Folder(destinationFolder+'languages/american/dnd35'));

alert("Done");

