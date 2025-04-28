import { versionCheckLt, versionCheckGte } from '../../utils'

describe('versionCheckLt', () => {
  it('should return true when version1 is less than version2', () => {
    expect(versionCheckLt('1.0.0', '2.0.0')).toBe(true)
    expect(versionCheckLt('1.2.3', '1.3.0')).toBe(true)
    expect(versionCheckLt('1.0.0', '1.0.1')).toBe(true)
    expect(versionCheckLt('1.0.0-alpha', '1.0.0')).toBe(true)
  })

  it('should return false when version1 is greater than version2', () => {
    expect(versionCheckLt('2.0.0', '1.0.0')).toBe(false)
    expect(versionCheckLt('1.3.0', '1.2.3')).toBe(false)
    expect(versionCheckLt('1.0.1', '1.0.0')).toBe(false)
    expect(versionCheckLt('1.0.0', '1.0.0-alpha')).toBe(false)
  })

  it('should return false when version1 is equal to version2', () => {
    expect(versionCheckLt('1.0.0', '1.0.0')).toBe(false)
    expect(versionCheckLt('1.2.3', '1.2.3')).toBe(false)
    expect(versionCheckLt('1.0.0-alpha1', '1.0.0-alpha1')).toBe(false)
  })

  it('should handle versions with different lengths correctly', () => {
    expect(versionCheckLt('1.0', '1.0.1')).toBe(true)
    expect(versionCheckLt('1.0.1', '1.0')).toBe(false)
    expect(versionCheckLt('1', '1.0.0')).toBe(false)
    expect(versionCheckLt('1.0.0', '1')).toBe(false)
  })

  it('should handle leading zeros in version numbers', () => {
    expect(versionCheckLt('1.01.0', '1.1.0')).toBe(false)
    expect(versionCheckLt('1.0.0', '1.00.1')).toBe(true)
  })
})

describe('versionCheckGte', () => {
  it('should return true when version1 is greater than version2', () => {
    expect(versionCheckGte('2.0.0', '1.0.0')).toBe(true)
    expect(versionCheckGte('1.3.0', '1.2.3')).toBe(true)
    expect(versionCheckGte('1.0.1', '1.0.0')).toBe(true)
    expect(versionCheckGte('2.0.0-alpha1', '1.0.0-alpha1')).toBe(true)
  })

  it('should return true when version1 is equal to version2', () => {
    expect(versionCheckGte('1.0.0', '1.0.0')).toBe(true)
    expect(versionCheckGte('1.2.3', '1.2.3')).toBe(true)
    expect(versionCheckGte('1.0.0-alpha1', '1.0.0-alpha1')).toBe(true)
  })

  it('should return false when version1 is less than version2', () => {
    expect(versionCheckGte('1.0.0', '2.0.0')).toBe(false)
    expect(versionCheckGte('1.2.3', '1.3.0')).toBe(false)
    expect(versionCheckGte('1.0.0', '1.0.1')).toBe(false)
    expect(versionCheckGte('1.0.0-alpha1', '2.0.0-alpha1')).toBe(false)
  })

  it('should handle versions with different lengths correctly', () => {
    expect(versionCheckGte('1.0', '1.0.1')).toBe(false)
    expect(versionCheckGte('1.0.1', '1.0')).toBe(true)
    expect(versionCheckGte('1', '1.0.0')).toBe(true)
    expect(versionCheckGte('1.0.0', '1')).toBe(true)
  })

  it('should handle leading zeros in version numbers', () => {
    expect(versionCheckGte('1.01.0', '1.1.0')).toBe(false)
    expect(versionCheckGte('1.0.0', '1.00.1')).toBe(false)
  })
})
