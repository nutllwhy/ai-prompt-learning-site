# AI 图像生成提示词教学手册

一个简洁现代的学习网站，用于展示 AI 图像生成提示词的写法、拆解方法和可复用案例。

## 功能特点

- **章节导航**：左侧固定导航栏，快速跳转到各个章节
- **案例展示**：56 个实战案例，按类别分组展示
- **提示词复制**：一键复制提示词，方便学员使用
- **图片预览**：点击案例图片可放大查看
- **响应式设计**：适配桌面端和移动端

## 项目结构

```
ai-prompt-learning-site/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── script.js       # 交互脚本
├── images/         # 案例图片（56张）
└── README.md       # 说明文档
```

## 本地预览

直接在浏览器中打开 `index.html` 文件即可预览。

或者使用本地服务器：

```bash
# 使用 Python
python3 -m http.server 8080

# 使用 Node.js
npx serve .
```

然后访问 `http://localhost:8080`

## 部署到 GitHub Pages

### 方法一：直接上传

1. 在 GitHub 上创建新仓库，例如 `ai-prompt-learning-site`
2. 上传所有文件到仓库
3. 进入仓库 Settings → Pages
4. Source 选择 `Deploy from a branch`
5. Branch 选择 `main`，文件夹选择 `/ (root)`
6. 点击 Save，等待部署完成
7. 访问 `https://你的用户名.github.io/ai-prompt-learning-site/`

### 方法二：使用 Git 命令行

```bash
# 进入项目目录
cd ai-prompt-learning-site

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: AI 提示词教学网站"

# 添加远程仓库
git remote add origin https://github.com/你的用户名/ai-prompt-learning-site.git

# 推送到 GitHub
git push -u origin main

# 然后在 GitHub 仓库设置中启用 Pages
```

## 内容说明

### 章节结构

1. **使用导读**：学习目标和核心特色
2. **第一章：基础认知**：GPT Image 2 介绍和核心特性
3. **第二章：使用准备**：权限说明、账号注册、风险提醒
4. **第三章：提示词基础**：核心原则、万能公式、模块拆解
5. **第四章：提示词进阶**：权重控制、风格模板、文字生成
6. **第五章：实战案例库**：56 个分类案例
7. **附录：工具库**：关键词库、万能模板

### 案例分类

- 🎨 文创类（11 个案例）
- 🎬 影视类（10 个案例）
- 🎮 跨 IP 类（10 个案例）
- 🏷️ 品牌联动类（11 个案例）
- 😂 恶搞类（12 个案例）
- 🏛️ 建筑设计类（2 个案例）

## 自定义修改

### 修改网站标题

编辑 `index.html` 中的 `<title>` 标签和 `.hero h1` 内容。

### 修改样式

编辑 `styles.css` 文件，主要变量在 `:root` 中定义：

```css
:root {
    --primary-color: #2563eb;    /* 主色调 */
    --text-color: #1f2937;       /* 文字颜色 */
    --bg-color: #ffffff;         /* 背景色 */
    --sidebar-width: 280px;      /* 侧边栏宽度 */
}
```

### 添加新案例

编辑 `script.js` 中的 `casesData` 对象，按格式添加新案例：

```javascript
{
    id: 57,
    title: "案例标题",
    method: "文生图",
    image: "images/案例图片.png",
    prompt: "提示词内容..."
}
```

## 技术栈

- HTML5
- CSS3（原生，无框架）
- JavaScript（原生，无框架）
- Google Fonts（Noto Sans SC）

## 许可证

内容仅供学习参考，请遵守相关法律法规。
