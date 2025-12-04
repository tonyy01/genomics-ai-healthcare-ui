import { memo } from 'react'
import './Image.css'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  lazy?: boolean
  baseUrl?: string
}

/**
 * 通用图片组件（支持base URL配置）
 */
const Image = memo(function Image({
  src,
  alt,
  className = '',
  style = {},
  lazy = true,
  baseUrl = '',
  ...props
}: ImageProps) {
  // 处理图片路径
  let imageSrc = src
  if (!src.startsWith('http') && !src.startsWith('//')) {
    // 确保路径以 / 开头
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`
    // 如果 baseUrl 是 / 或空，避免双斜杠
    if (baseUrl === '/' || !baseUrl) {
      imageSrc = normalizedSrc
    } else {
      const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
      imageSrc = `${normalizedBaseUrl}${normalizedSrc}`
    }
  }

  const classes = ['ui-image', className].filter(Boolean).join(' ')

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={classes}
      style={style}
      loading={lazy ? 'lazy' : 'eager'}
      {...props}
    />
  )
})

Image.displayName = 'Image'

export default Image
