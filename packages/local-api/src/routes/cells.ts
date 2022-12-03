import exppress from "express";
import fs from "fs/promises";
import path from "path";

interface Cell {
  id: string;
  content: string;
  type: "text" | "code";
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = exppress.Router();
  const fullPath = path.join(dir, filename);

  router.get("/cells", async (req, res) => {});

  router.post("/cells", async (req, res) => {
    const { cells }: { cells: Cell[] } = req.body;
    await fs.writeFile(fullPath, JSON.stringify(cells), "utf-8");
    res.send({ status: "ok" });
  });

  return router;
};
