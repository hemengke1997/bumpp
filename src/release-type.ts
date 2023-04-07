import type { ReleaseType } from 'semver'

export type { ReleaseType }

/**
 * The different types of pre-releases.
 */
export const prereleaseTypes: ReleaseType[] = ['premajor', 'preminor', 'prepatch', 'prerelease']

/**
 * All possible release types.
 */
export const releaseTypes: ReleaseType[] = prereleaseTypes.concat(['major', 'minor', 'patch'])

/**
 * Determines whether the specified value is a pre-release.
 */
export function isPrerelease(value: any): boolean {
  return prereleaseTypes.includes(value)
}

/**
 * Determines whether the specified value is a valid ReleaseType string.
 */
export function isReleaseType(value: any): value is ReleaseType {
  return releaseTypes.includes(value)
}

export function isSkipRelease(value: any): value is 'none' {
  return value === 'none'
}
