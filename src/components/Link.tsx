import { memo } from 'react'
import './Link.css'

export interface LinkProps {
  children: React.ReactNode
  to?: string
  href?: string
  external?: boolean
  variant?: 'default' | 'button' | 'tag'
  className?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  style?: React.CSSProperties
  [key: string]: any
}

/**
 * 通用链接组件（支持内部路由和外部链接）
 * 注意：如果使用react-router-dom，需要从外部传入Link组件
 */
const Link = memo(function Link({
  children,
  to,
  href,
  external = false,
  variant = 'default',
  className = '',
  onClick,
  style,
  ...props
}: LinkProps) {
  const classes = [
    'ui-link',
    `ui-link--${variant}`,
    className
  ].filter(Boolean).join(' ')

  // 外部链接
  if (href || external) {
    return (
      <a
        href={href || to}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        style={style}
        {...props}
      >
        {children}
      </a>
    )
  }

  // 内部路由链接 - 如果没有react-router，回退到普通链接
  if (to) {
    return (
      <a
        href={to}
        className={classes}
        onClick={onClick}
        style={style}
        {...props}
      >
        {children}
      </a>
    )
  }

  return null
})

Link.displayName = 'Link'

export default Link
