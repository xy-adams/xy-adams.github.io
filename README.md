# 晓勇的个人主页

一个基于 Flask 构建的现代化单页个人主页，深色玻璃拟态（glassmorphism）设计，部署在 GitHub Pages 上。

## 功能特点

- 🌌 单页长滚动 + 锚点平滑导航，导航随滚动自动高亮
- 🎨 深色背景 + 紫→青渐变光效 + 玻璃模糊卡片
- 📱 完全响应式，适配桌面 / 平板 / 手机
- ⚡ 滚动揭示动画、数字计数动画、项目分类过滤
- 🖼️ 自包含 SVG 占位图，无需外网即可正常显示
- ♿ 支持键盘导航与「减弱动画」偏好

## 技术栈

- **后端**: Flask + Python
- **前端**: HTML5 + CSS3（CSS 变量 / Grid / Flex / backdrop-filter）+ JavaScript
- **构建**: Frozen-Flask（生成静态文件到 `docs/`）
- **部署**: GitHub Pages（GitHub Actions 自动构建部署）
- **图标**: Font Awesome

## 快速开始

```bash
# 1. 安装依赖
pip install -r requirements.txt

# 2. 本地开发预览
python app.py            # 打开 http://127.0.0.1:5000/

# 3. 生成静态网站到 docs/
python build.py
```

## 自定义配置

编辑 `config.py` 修改个人信息：

- `AUTHOR_NAME`：姓名（晓勇）
- `AUTHOR_TITLE`：职位头衔
- `AUTHOR_EMAIL` / `GITHUB_URL` / `LINKEDIN_URL`：联系方式与社交链接
- `SITE_TITLE` / `SITE_DESCRIPTION`：站点标题与描述

页面内容在 `templates/index.html`，样式在 `static/css/style.css`，交互在 `static/js/main.js`。

### 替换占位图片

`static/images/` 下为本地生成的 SVG 占位图（头像 `profile.svg`、关于 `about.svg`、项目 `project-*.svg`）。
替换为真实照片/截图时，放入同名文件并在 `templates/index.html` 中更新对应的 `filename`。

## 部署

网站会生成到 `docs/` 文件夹，推送到 `main` 分支后由 GitHub Actions 自动构建并部署到 GitHub Pages。

## 许可证

MIT License
