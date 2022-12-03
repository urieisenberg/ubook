import { Command } from "commander";

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("Open a file for editing")
  .action((filename = "notebook.js") => {
    console.log("Opening", filename);
  });
