import { memo } from 'react'
import './Section.css'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  variant?: 'default' | 'centered' | 'fullwidth'
  background?: boolean
}

/**
 * 通用区块组件
 */
const Section = memo(function Section({
  children,
  className = '',
  style = {},
  variant = 'default',
  background = false,
  ...props
}: SectionProps) {
  const classes = [
    'ui-section',
    `ui-section--${variant}`,
    background && 'ui-section--background',
    className
  ].filter(Boolean).join(' ')

  return (
    <section className={classes} style={style} {...props}>
      {children}
    </section>
  )
})

Section.displayName = 'Section'

export default Section
