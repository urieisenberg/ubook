"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveCommand = void 0;
const commander_1 = require("commander");
exports.serveCommand = new commander_1.Command()
    .command("serve [filename]")
    .description("Open a file for editing")
    .action((filename = "notebook.js") => {
    console.log("Opening", filename);
});
