import { memo } from 'react'
import './Card.css'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  elevated?: boolean
  outlined?: boolean
}

/**
 * 通用卡片组件
 */
const Card = memo(function Card({
  children,
  className = '',
  style = {},
  elevated = false,
  outlined = false,
  ...props
}: CardProps) {
  const classes = [
    'ui-card',
    elevated && 'ui-card--elevated',
    outlined && 'ui-card--outlined',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} style={style} {...props}>
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export default Card
