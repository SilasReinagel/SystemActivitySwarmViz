import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero component', () => {
  it('should have correct title prop type', () => {
    const hero = <Hero title="Test Title" />
    expect(hero.props.title).toBe('Test Title')
  })

  it('should handle subtitle prop correctly', () => {
    const hero = <Hero title="Test Title" subtitle="Test Subtitle" />
    expect(hero.props.subtitle).toBe('Test Subtitle')
  })

  it('should handle CTA text prop correctly', () => {
    const hero = <Hero title="Test Title" ctaText="Click Me" />
    expect(hero.props.ctaText).toBe('Click Me')
  })

  it('should accept custom CTA link when provided', () => {
    const hero = <Hero title="Test Title" ctaText="Click Me" ctaLink="/custom" />
    expect(hero.props.ctaLink).toBe('/custom')
  })
}) 