
/**
 * A function that takes a file path string and returns a boolean.
 */
type ExtyFunction = (path: string) => boolean;

/**
 * Creates a function that checks if a file has a specific extension.
 * 
 * @param ext - The expected extension.
 * @returns - A function that takes a file path string and returns a boolean.
 */
export function isExtFactory(ext: string): ExtyFunction;

/**
 * Checks if a file is a JavaScript file.
 */
export const isJS: ExtyFunction;

/**
 * Checks if a file is a TypeScript file.
 */
export const isTS: ExtyFunction;

/**
 * Checks if a file is a JSON file.
 */
export const isJSON: ExtyFunction;
