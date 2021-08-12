const { slayersDBJSON } = require("slayer.db");

interface slayersdb {
  set: Function;
  delete: Function;
  save: Function;
  get: Function;
}

let db = <slayersdb>new slayersDBJSON({
  saveReadable: true,
});

export default db;
