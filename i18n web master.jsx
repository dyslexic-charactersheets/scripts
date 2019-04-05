#include Tools.jsxinc
#include i18n_tools.jsxinc

/*
i18n web master
Walk the entire repo producing a CSV of all translatable strings in all files,
in a format suitable for the Translator app
*/

i18n.init();

var webMaster = {
  entries: {},
  extractedFiles: {},
  volume: "",
  game: "",
  level: 1,

  baseURI: new Folder(pagesFolder).absoluteURI+"/",
  altBaseURI: new Folder(pagesFolder.replace(baseFolder, altBaseFolder)).absoluteURI+"/",

  clear: function() {
    entries = {};
  },

  pushEntry: function(text, partOf, filename) {
    if (partOf == text || typeof partOf !== 'string')
      partOf = '';
    var replacement = i18n.getTranslationReplacement(text, partOf, filename);
    text = replacement[0];
    partOf = replacement[1];

    if (partOf == '' && (text.match(/^d[0-9]+$/) || text == '0' || text == '')) {
      text = 'd00';
    }

    var normal = i18n.normalise(text);
    // log("Push entry", text, normal, partOf, filename);
    text = normal;
    if (text.length <= 1) return;

    var simpletext = text.replace(/[^a-zA-Z]*/g, '');
    if (simpletext.length == 0) return;

    partOf = i18n.normalise(partOf);
    if (partOf == text) partOf = '';

    filename = filename.substring(0, filename.length - 3);

    var key = text+"%%%"+partOf+"%%%"+filename
    if (this.entries[key]) {
      this.entries[key].Count++;
    } else {
      this.entries[key] = {
        'Original': text,
        'Part of': partOf,
        'Count': 1,
        'File': filename,
        'Volume': this.volume,
        'Game': this.game,
        'Level': this.level
      };
    }
  },

  extractFile: function(file) {
    if (file in webMaster.extractedFiles && webMaster.extractedFiles[file.fullName] == 1) {
      log("Already processed file", file.fullName);
      return;
    }
    webMaster.extractedFiles[file.fullName] = 1;

    var num = 0;
    try {
      // var filename = file.absoluteURI.replace(webMaster.baseURI, '').replace(webMaster.altBaseURI, '');
      var filename = file.simpleFilename();
      log("Extracting from file", file.fullName, filename);
      var doc = app.open(file);

      var frames = doc.textFrames;
      for ( var j = 0; j < frames.length; j++ ) {
        var frame = frames[j];
        var partspushed = 0;
        var fullrange = frame.textRange;
        var fullstr = fullrange.contents;

        // split range based on continuous font, size and colour
        var str = '';
        var ranges = frame.textRanges;
        var prev = false;
        for ( var k = 0; k < ranges.length; k++ ) {
          var range = ranges[k];
          if (prev == false || 
            (  isEqual(range.characterAttributes.fillColor, prev.characterAttributes.fillColor)
            && isEqual(range.characterAttributes.textFont, prev.characterAttributes.textFont)
            && isEqual(range.characterAttributes.size, prev.characterAttributes.size)
            )) {
            str = str+String(range.contents);
          } else {
            // log(" - Adding part of frame", str);
            this.pushEntry(str, fullstr, filename);
            partspushed++;
            num++;
            str = String(range.contents);
          }
          prev = range;
        }
        if (str !== '') {
          // log(" - Adding tail of frame", str);
          this.pushEntry(str, fullstr, filename);
          partspushed++;
          num++;
        }

        if (partspushed == 0) {
          // log(" - Adding whole frame", fullstr);
          this.pushEntry(fullstr, "", filename);
          num++;
        }
      }
      doc.close(SaveOptions.DONOTSAVECHANGES);

      var additions = i18n.getPageAdditions(filename);
      // log("Page additions", additions);
      for ( var i = 0; i < additions.length; i++ ) {
        var add = additions[i];
        // log(" - Adding entry", add);
        this.pushEntry(add, "", filename);
        num++;
      }
    } catch (e) {
      log("Error in file", file, { "Error": e.message } );
    }
    i18n.tick();
    return num;
  },

  extractFolder: function(folder) {
    var num = 0;
    var files = folder.getAllFiles();
    log('Scanning '+files.length+' files for translatable strings', folder);

    for ( var i = 0; i < files.length; i++ ) {
      var file = files[i];
      log("Scanning file "+(i+1)+" of "+files.length, file);
      num += this.extractFile(file);
    }
    log("Extracted "+num+" strings from "+files.length+" files");
  },

  saveCSV: function(file) {
    var entries = [];
    for(var key in this.entries) {
      entries.push(this.entries[key]);
    }

    data = entries.dissociate(['Original', 'Part of', 'Count', 'File']);
    file.writeCSV(data);
  }
}

log("Base URI", webMaster.baseURI)

webMaster.game = "Pathfinder"
webMaster.level = 1;
webMaster.volume = "Core Rulebook";
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Core'));
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Extra'));

webMaster.level = 2;
webMaster.volume = "Advanced Players Guide"
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Advanced'));
webMaster.volume = "Ultimate Magic"
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Ultimate Magic'));
webMaster.volume = "Ultimate Combat"
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Ultimate Combat'));
webMaster.volume = "Advanced Class Guide"
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Advanced Class Guide'));
webMaster.volume = "Occult Adventures"
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Occult'));
webMaster.volume = "Pathfinder Unchained"
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Unchained'));

webMaster.level = 3;
webMaster.volume = ""
webMaster.extractFolder(new Folder(pagesFolder+'All'));
webMaster.extractFolder(new Folder(pagesFolder+'Extra'));
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Archetypes'));
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Prestige Classes'));
webMaster.volume = "Mythic Adventures"
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Mythic'));
webMaster.volume = "Pathfinder Unchained"
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Unchained'));

webMaster.level = 4;
webMaster.volume = "Psionics Unleashed"
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Psionics'));
webMaster.volume = "Tome of Secrets"
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/Tome of Secrets'));
webMaster.volume = "NeoExodus"
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/NeoExodus'));
webMaster.volume = "TPK"
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/TPK'));

webMaster.level = 3;
webMaster.volume = "Ultimate Campaign"
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/GM/Kingdom'));
webMaster.volume = "Core Rulebook"
webMaster.level = 1;
webMaster.extractFolder(new Folder(pagesFolder+'Pathfinder/GM'));


webMaster.game = "3.5";
webMaster.level = 1;
webMaster.volume = "Players Handbook"
webMaster.extractFolder(new Folder(pagesFolder+'3.5/Core'));
webMaster.extractFolder(new Folder(pagesFolder+'3.5/Barbarian'));
webMaster.extractFolder(new Folder(pagesFolder+'3.5/Variants'));
webMaster.extractFolder(new Folder(pagesFolder+'3.5/DM'));

webMaster.level = 2;
webMaster.volume = "";
webMaster.extractFolder(new Folder(pagesFolder+'3.5/Extended'));

webMaster.level = 3;
webMaster.volume = ""
webMaster.extractFolder(new Folder(pagesFolder+'All'));
webMaster.extractFolder(new Folder(pagesFolder+'Extra'));
webMaster.volume = "Dragon Compendium";
webMaster.extractFolder(new Folder(pagesFolder+'3.5/Dragon Compendium'));

webMaster.level = 4;
webMaster.volume = "";
webMaster.extractFolder(new Folder(pagesFolder+'3.5/Psionics'));
webMaster.extractFolder(new Folder(pagesFolder+'3.5/Tomes'));
webMaster.extractFolder(new Folder(pagesFolder+'3.5/Incarnum'));


webMaster.game = "Starfinder"
webMaster.level = 1;
webMaster.volume = "Core Rulebook";
webMaster.extractFolder(new Folder(pagesFolder+'Starfinder/Core'));
webMaster.extractFolder(new Folder(pagesFolder+'Starfinder/Starship'));
webMaster.extractFolder(new Folder(pagesFolder+'Starfinder/Maps'));
webMaster.extractFolder(new Folder(pagesFolder+'Starfinder/Extra'));
webMaster.extractFolder(new Folder(pagesFolder+'Starfinder/GM'));

webMaster.level = 2;
webMaster.volume = "Archetypes";
webMaster.extractFolder(new Folder(pagesFolder+'Starfinder/Archetypes'));


webMaster.game = "Extra"
webMaster.level = 2;
webMaster.volume = "";
webMaster.extractFolder(new Folder(pagesFolder+'All'));
webMaster.extractFolder(new Folder(pagesFolder+'Extra'));

var outfile = new File(pagesFolder+"Languages/Master.csv");
log("Saving to "+outfile.absoluteURI);
webMaster.saveCSV(outfile);
webMaster.clear();
log("Done");
alert("Done");