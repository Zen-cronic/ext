import { isExtFactory, isJS, isTS, isJSON } from "./index.js";
import { isDotFile } from "./utils.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("exty", () => {
  //fixtures
  const jsPath = "./index.js";
  const tsPath = "index.ts";
  const envPath = ".env";
  const localEnvPath = ".env.local";
  const makeFilePath = "Makefile";
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
      const isEnv = isExtFactory(".env");
      const isLocalEnv = isExtFactory(".env.local");
      const isMakefile = isExtFactory("Makefile");

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

describe("exty utils", () => {
  describe("isDotFile function", () => {
    it("should recognize single dot files", () => {
      const envFile = ".env";
      assert.strictEqual(isDotFile(envFile), true, ".env should be recognized");
    });
    it("should recognize dot files with more than 1 dot", () => {
      const envLocalFile = ".env.local";
      assert.strictEqual(
        isDotFile(envLocalFile),
        true,
        ".env.local should be recognized"
      );
    });
    it("should honor dot files in relative paths", () => {
      const envLocalFileWithPath = "../.env.local"
      assert.strictEqual(
        isDotFile(envLocalFileWithPath),
        true,
        ".env.local in relative paths should be recognized"
      );
    });
    it("should honor dot files in absolute paths", () => {
      const envLocalFileWithPath = "/home/user/projects/p1/.env.local"
      assert.strictEqual(
        isDotFile(envLocalFileWithPath),
        true,
        ".env.local in absolute path should be recognized"
      );
    });
  });
});
