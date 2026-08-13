---
title: '用 LangChain 搭出我的第一个 Agent'
pubDate: '2026-08-10'
description: '从零到跑通：一个大学生用 LangChain 搭出第一个能调用工具、记忆上下文的小助手。'
category: 'AI 实践'
tags: ['LangChain', 'Agent', '大模型']
draft: false
coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Impressionist%20oil%20painting%20of%20circuit%20board%20and%20neural%20network%20connections%20in%20soft%20pale%20blue%20tones%2C%20light%20azure%20background%2C%20gentle%20glow%2C%20thick%20brushstrokes%2C%20minimalist%20tech%20oil%20painting&image_size=landscape_4_3'
---

前几天刷到一个视频，博主用 AI Agent 自动把周报、日报全写完了，我盯着屏幕看了好久：这也太爽了吧？于是这个周末，我决定自己动手，从零搭一个属于自己的 Agent。

## 第一步：明确目标

我不想做太复杂的。目标很朴素：一个能记住对话、还会调用一个简单工具（比如算个加减乘除）的小助手。够用、能跑、能懂原理，就够了。

## 第二步：选框架

对比了一圈：

- **LangChain** —— 生态最成熟，教程多，中文资料也丰富
- **LlamaIndex** —— 更偏 RAG 检索，暂时用不上
- **自己手写** —— 能加深理解，但轮子太多

作为新手，我选了 LangChain，遇到问题好查资料。

## 第三步：写代码

核心代码其实不多，关键就两件事：**模型** 和 **工具**。

```python
from langchain_openai import ChatOpenAI
from langchain.agents import create_tool_calling_agent, AgentExecutor
from langchain_core.tools import tool

# 1. 定义一个简单工具
@tool
def add(a: int, b: int) -> int:
    """计算两个整数的和"""
    return a + b

# 2. 初始化模型
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)

# 3. 组装 Agent
agent = create_tool_calling_agent(llm, [add])
executor = AgentExecutor(agent=agent, tools=[add], verbose=True)
```

然后跑一下：

```python
result = executor.invoke({"input": "帮我算一下 123 加 456 等于多少？"})
print(result["output"])
# 579
```

当看到终端里输出 `579` 的那一刻，我真的有点激动。不是因为数字难，而是——**一个程序会"自己决定"去调用工具，再根据结果组织语言回答我**，这种感觉很奇妙。

## 踩的坑

新手嘛，必踩坑：

1. **依赖版本不匹配** —— LangChain 现在拆成很多子包，`langchain-openai` 要单独装，不然 import 直接报错
2. **Tool 的函数签名** —— 参数不带类型注解，Agent 就识别不了这个工具，差点没发现
3. **temperature 调太高** —— 一开始设 0.9，模型回答满天飞，还容易乱调用工具，降下来就好了

## 收获

这一个下午最大的收获不是"我会 LangChain 了"，而是真正理解了 Agent 的运作机制：

> 模型负责"思考"（决定下一步做什么），工具负责"执行"（真正去算、去查），两者配合，就是 Agent。

下一步我打算给它加上**记忆**（Memory），再接入一个查询天气的 API，做成一个真正能帮上忙的小助手。

这条路，才刚刚开始。