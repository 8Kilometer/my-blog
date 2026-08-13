---
title: '大学生学 AI 开发，我的三个月路线图'
pubDate: '2026-07-26'
description: '从一个完全不懂的萌新，到能独立跑通小项目：我的 AI 开发自学路线、踩坑和资源推荐。'
category: '学习路线'
tags: ['自学', '路线图', 'AI']
draft: false
coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Impressionist%20oil%20painting%20of%20a%20calm%20pale%20blue%20river%20flowing%20through%20a%20modern%20city%2C%20soft%20light%20azure%20tones%2C%20gentle%20reflections%2C%20thick%20brushstrokes%2C%20atmospheric%20minimalist%20oil%20painting&image_size=landscape_4_3'
---

三个月前，我还是一个只会写点 Python 基础、完全不懂 AI 的普通大学生。现在，我能独立用 LangChain 搭 Agent、调用大模型 API 做小应用。把这段经历和路线整理出来，希望能帮到想入门的朋友。

## 第一个月：打基础，别急着上模型

我见过太多人一上来就"我要训练自己的大模型"——结果必然是劝退。第一个月我做的都是**地基**工作：

- **Python 语法巩固**：列表推导、字典、异常处理、类
- **NumPy / Pandas**：学会处理数据，因为后面很多示例都离不开它们
- **基础的 HTTP 和 API 概念**：搞懂什么是请求、响应、JSON——这是调用模型 API 的必备知识

> 忠告：这个月可能有点枯燥，但跳过去后面会反复回来补。

## 第二个月：上手大模型 API

这是最有成就感的一个月。我做了：

1. **注册 API、拿到 Key**：用官方文档跑通第一个"你好，大模型"
2. **弄懂 API 的核心参数**：`model`、`temperature`、`max_tokens`、`system prompt` 的作用
3. **写一个命令行聊天机器人**：把多轮对话存进列表，再传给 API，实现简单的记忆

当你第一次用代码调用一个能"理解"你话的模型时，那种感觉无可替代。

## 第三个月：做项目，用输出倒逼输入

第三个月我开始做真实的小项目，边做边学：

- **RAG 知识库问答**：把几份文档切块、做向量化，让模型能基于我的资料回答
- **AI 摘要小工具**：批量给文章生成摘要，跑通后特别有成就感
- **Agent 实验**：让模型学会调用工具，比如查天气、算数字

## 我的资源推荐

- **官方文档**：永远是最好的学习资料（OpenAI / Anthropic / 各大国产模型）
- **LangChain / LlamaIndex 文档**：跟着 quickstart 跑一遍
- **GitHub 优秀项目**：找 1-2 个 star 高的开源项目读代码
- **AI 视频教程**：用于建立整体认知，但一定要动手敲

## 避坑清单

1. **不要囤课**：收藏 100 个教程不如跑通 1 个 Demo
2. **不要怕英文文档**：AI 翻译很好用，别让语言成为障碍
3. **不要一上来就炼丹**：先会用 API，再谈训练
4. **多记笔记**：我把自己踩的坑都写进了博客，既是记录也是整理

## 写在最后

> AI 开发的学习，最重要的不是聪明，而是**行动力**。每天写一点代码，三个月后回头看，你会感谢现在的自己。

这条路才刚开始，我还在路上。希望这篇路线能帮你少走点弯路。