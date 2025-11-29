# Genomics AI Healthcare UI

A reusable React UI component library for the Genomics and AI in Healthcare Lab.

## 📦 Installation

```bash
npm install genomics-ai-healthcare-ui
```

## 🚀 Quick Start

```tsx
import { Button, Card, Modal, Tabs } from 'genomics-ai-healthcare-ui'

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
      
      <Card elevated>
        <h2>Card Title</h2>
        <p>Card content goes here</p>
      </Card>
    </div>
  )
}
```

## 📚 Components

This library provides the following React components:

### Button
A versatile button component with multiple variants and sizes.

**Props:**
- `variant`: `'text' | 'primary' | 'secondary'` (default: `'text'`)
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `active`: `boolean` (default: `false`)
- `disabled`: `boolean` (default: `false`)
- `type`: `'button' | 'submit' | 'reset'` (default: `'button'`)
- `onClick`: `() => void`
- `className`: `string`
- `style`: `React.CSSProperties`

**Example:**
```tsx
<Button variant="primary" size="large" onClick={handleClick}>
  Submit
</Button>
```

### Card
A container component for displaying content in a card format.

**Props:**
- `elevated`: `boolean` (default: `false`) - Adds shadow elevation
- `outlined`: `boolean` (default: `false`) - Adds border outline
- `className`: `string`
- `style`: `React.CSSProperties`

**Example:**
```tsx
<Card elevated>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Container
A layout component for constraining content width.

**Props:**
- `className`: `string`
- `style`: `React.CSSProperties`

### Section
A semantic section component for organizing content.

**Props:**
- `className`: `string`
- `style`: `React.CSSProperties`

### Modal
A modal dialog component for displaying content in an overlay.

**Props:**
- `isOpen`: `boolean`
- `onClose`: `() => void`
- `className`: `string`
- `style`: `React.CSSProperties`

**Example:**
```tsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <h2>Modal Title</h2>
  <p>Modal content</p>
</Modal>
```

### Dropdown
A dropdown menu component.

**Props:**
- `options`: `Array<{ label: string; value: any }>`
- `onSelect`: `(value: any) => void`
- `placeholder`: `string`
- `className`: `string`
- `style`: `React.CSSProperties`

### Tabs
A tabbed interface component.

**Props:**
- `tabs`: `Array<{ label: string; content: React.ReactNode }>`
- `defaultTab`: `number` (default: `0`)
- `className`: `string`
- `style`: `React.CSSProperties`

**Example:**
```tsx
<Tabs
  tabs={[
    { label: 'Tab 1', content: <div>Content 1</div> },
    { label: 'Tab 2', content: <div>Content 2</div> }
  ]}
/>
```

### Link
A styled link component.

**Props:**
- `href`: `string`
- `target`: `string`
- `className`: `string`
- `style`: `React.CSSProperties`

### Image
An image component with styling options.

**Props:**
- `src`: `string`
- `alt`: `string`
- `className`: `string`
- `style`: `React.CSSProperties`

## 🛠️ Development

### Prerequisites

- Node.js >= 18
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure

```
genomics-ai-healthcare-ui/
├── src/
│   ├── components/      # React components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Image.tsx
│   │   ├── Link.tsx
│   │   ├── Modal.tsx
│   │   ├── Section.tsx
│   │   └── Tabs.tsx
│   └── index.ts         # Main export file
├── package.json
├── tsconfig.json
└── vite.config.mts
```

## 📋 Requirements

- React >= 18
- React DOM >= 18

These are peer dependencies and should be installed in your project.

## 📝 License

MIT License - see LICENSE file for details

## 👥 Author

Genomics and AI in Healthcare Lab

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 中文说明

这是一个用于基因组学和人工智能医疗实验室的可复用 React UI 组件库。

### 安装

```bash
npm install genomics-ai-healthcare-ui
```

### 使用示例

```tsx
import { Button, Card } from 'genomics-ai-healthcare-ui'

function App() {
  return (
    <Button variant="primary">点击我</Button>
  )
}
```

### 可用组件

- **Button** - 按钮组件
- **Card** - 卡片组件
- **Container** - 容器组件
- **Section** - 区域组件
- **Modal** - 模态框组件
- **Dropdown** - 下拉菜单组件
- **Tabs** - 标签页组件
- **Link** - 链接组件
- **Image** - 图片组件

### 开发

```bash
npm install    # 安装依赖
npm run dev    # 启动开发服务器
npm run build  # 构建生产版本
```

