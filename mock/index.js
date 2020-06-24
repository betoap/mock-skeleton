const glob = require("glob").Glob;
module.exports = () => {
  const pattern = './mock/**/*.json';
  const options = { sync: true, dot: true, mark: false, ignore: [] };
  const files = glob( pattern, options );
  const data = {};
  files.found.forEach( ( archive ) => {
    var nodeName = archive.substring(archive.lastIndexOf('/')+1).replace(/\.[^/.]+$/, "");
    try {
      data[nodeName] = require( `./../${archive}` );
    } catch (error) {
      console.error(`Error load file: ${archive}` );
    }
  });
  return data;
};