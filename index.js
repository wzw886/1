const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 直接渲染报告内容（简单版）
app.get('/', (req, res) => {
  const reportContent = `
    <h1>自然语言处理综合实践报告</h1>
    <p>这里是你的报告正文...</p>
  `;
  res.send(reportContent);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
