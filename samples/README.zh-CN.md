# 事务验证

[English](README.md) | [简体中文](README.zh-CN.md)

[HTTP 应用](transactions/application.norm) 通过公开事务 API 验证依赖注入和 Hibernate/H2 提交、读取及回滚。使用 Node.js 运行[验收脚本](../scripts/verify-transactions.mjs)；Norm 不在 PATH 时设置 NORM_EXECUTABLE。

[示例模块](transactions/module.norm) 定义正式依赖，[库模块](../orm/micronaut/tx/module.norm) 定义事务提供器。
