# 发布指南 (Publishing Guide)

## 📋 发布前检查清单

- [x] ✅ 构建配置已正确设置
- [x] ✅ LICENSE 文件已创建
- [x] ✅ .npmignore 文件已配置
- [x] ✅ README.md 已完善
- [x] ✅ package.json 配置完整
- [x] ✅ 构建测试通过

## 🚀 发布步骤

### 1. 确保已登录 npm

```bash
npm login
```

如果还没有 npm 账号，请先注册：
```bash
npm adduser
```

### 2. 检查包名是否可用

```bash
npm view genomics-ai-healthcare-ui
```

如果返回 404，说明包名可用。

### 3. 构建包

```bash
npm run build
```

确保 `dist/` 目录包含所有必要的文件：
- `index.cjs.js` (CommonJS)
- `index.esm.js` (ESM)
- `index.d.ts` (TypeScript 类型定义)
- `style.css` (样式文件)
- `components/*.d.ts` (组件类型定义)

### 4. 验证包内容（可选）

```bash
npm pack --dry-run
```

这会显示将要发布的所有文件，确保没有包含不必要的文件。

### 5. 发布到 npm

#### 首次发布

```bash
npm publish
```

#### 更新版本

发布新版本前，需要更新版本号：

```bash
# 补丁版本 (0.1.0 -> 0.1.1)
npm version patch

# 次要版本 (0.1.0 -> 0.2.0)
npm version minor

# 主要版本 (0.1.0 -> 1.0.0)
npm version major
```

然后发布：
```bash
npm publish
```

### 6. 验证发布

发布后，可以通过以下命令验证：

```bash
npm view genomics-ai-healthcare-ui
```

或者尝试安装：

```bash
npm install genomics-ai-healthcare-ui
```

## 📦 发布范围

如果需要发布到私有 npm registry 或使用作用域包，可以使用：

```bash
# 发布到作用域包（需要先更新 package.json 中的 name）
npm publish --access public
```

## ⚠️ 注意事项

1. **版本号**: 每次发布都需要更新版本号
2. **测试**: 发布前建议在本地测试安装
3. **README**: 确保 README 包含完整的使用说明
4. **LICENSE**: 确保 LICENSE 文件存在
5. **构建**: 确保 `npm run build` 成功执行

## 🔄 回滚版本

如果发布后发现问题，可以使用 `npm deprecate` 标记版本为废弃：

```bash
npm deprecate genomics-ai-healthcare-ui@0.1.0 "This version has issues, please use 0.1.1"
```

注意：npm 不允许删除已发布的版本，只能发布新版本。

## 📝 当前配置

- **包名**: `genomics-ai-healthcare-ui`
- **当前版本**: `0.1.0`
- **许可证**: MIT
- **入口文件**: 
  - CommonJS: `dist/index.cjs.js`
  - ESM: `dist/index.esm.js`
  - Types: `dist/index.d.ts`
- **样式文件**: `dist/style.css`









