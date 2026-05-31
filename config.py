import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your-secret-key-here'
    SITE_TITLE = "晓勇 · 个人主页"
    SITE_DESCRIPTION = "晓勇的个人主页 —— AI 应用开发工程师，热爱用代码打造智能、优雅、高效的产品。"
    AUTHOR_NAME = "晓勇"
    AUTHOR_TITLE = "AI 应用开发工程师"
    AUTHOR_EMAIL = "xz.wbfq@gmail.com"
    GITHUB_URL = "https://github.com/xy-adams"
    LINKEDIN_URL = "https://linkedin.com/in/xiaoyong"
