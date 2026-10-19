const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix public assets for deployments under a repository path. */
export function assetPath(path: string) {
  return `${basePath}${path}`;
}
