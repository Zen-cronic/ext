import { isExtGenerator, isJS, isTS, isJSON } from "./index.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("exty", () => {

  //fixtures
  const jsPath = "index.js";
  const jsxPath = "index.jsx";
  const tsPath = "index.ts";
  const tsxPath = "index.tsx";
  const envPath = ".env";
  const localEnvPath = ".env.local";
  const makeFilePath = "makefile";
  const jsonPath = "package.json";

  describe("exported functions", () => {
    it("should return true", () => {
    
      assert.strictEqual(
        isJS(jsPath),
        true,
        "jsPath should be recognized as JS"
      );
      assert.strictEqual(
        isTS(tsPath),
        true,
        "tsPath should be recognized as TS"
      );
      assert.strictEqual(
        isJSON(jsonPath),
        true,
        "jsonPath should be recognized as JSON"
      );
    });
  });
  describe("create functions from factory", () => {
    it("should return true", () => {
      const isEnv = isExtGenerator(".env");
      const isLocalEnv = isExtGenerator(".env.local");
      const isMakefile = isExtGenerator("makefile");

      assert.strictEqual(
        isEnv(envPath),
        true,
        "envPath should be recognized by isEnv"
      );
      assert.strictEqual(
        isLocalEnv(localEnvPath),
        true,
        "localEnvPath should be recognized by isLocalEnv"
      );
      assert.strictEqual(
        isMakefile(makeFilePath),
        true,
        "makeFilePath should be recognized by isMakefile"
      );
    });
  });
});

