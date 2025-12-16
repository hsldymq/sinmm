# SINMM 2026 - Social Intelligence for Networked Multimedia

ICME 2026 Workshop 官方网站

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 修改内容

所有内容都在 `src/App.vue` 文件中，直接编辑即可：

### 修改组织者信息

```typescript
const organizers: Organizer[] = [
  {
    name: 'Prof. Dapeng Wu',
    email: 'wudp@cqupt.edu.cn',
    affiliation: 'Chongqing University of Posts and Telecommunications',
    role: 'Director of the Chongqing Key Laboratory',
    expertise: 'Ubiquitous sensing, social computing'
  },
  // 添加更多...
]
```

### 修改研究主题

```typescript
const topics: string[] = [
  'Social interaction analysis in networked multimedia',
  // 添加更多...
]
```

### 修改重要日期

```typescript
const importantDates: ImportantDate[] = [
  { event: 'Paper Submission Deadline', date: 'TBA' },
  // 添加更多...
]
```

## 自定义样式

在 `src/style.css` 中修改CSS变量来改变配色：

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
}
```

## 添加图片

将图片放入 `public/images/` 文件夹，然后在代码中引用：

```vue
<img src="/images/your-image.jpg" alt="Description" />
```

## 技术栈

- Vue 3 + TypeScript
- Vite
- CSS3
