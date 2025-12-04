import { memo } from 'react'
import './Container.css'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  size?: 'small' | 'medium' | 'large' | 'full'
}

/**
 * 通用容器组件（统一最大宽度和内边距）
 */
const Container = memo(function Container({
  children,
  className = '',
  style = {},
  size = 'medium',
  ...props
}: ContainerProps) {
  const classes = [
    'ui-container',
    `ui-container--${size}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} style={style} {...props}>
      {children}
    </div>
  )
})

Container.displayName = 'Container'

export default Container
