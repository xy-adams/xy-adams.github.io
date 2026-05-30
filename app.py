from flask import Flask, render_template
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

@app.route('/')
@app.route('/index.html')
def index():
    """单页个人主页 - 所有内容整合在一页内，导航锚点平滑滚动"""
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
