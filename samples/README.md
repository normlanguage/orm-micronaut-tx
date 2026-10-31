# Transaction verification

[English](README.md) | [简体中文](README.zh-CN.md)

[HTTP application](transactions/application.norm) verifies dependency injection and Hibernate/H2 commit, read and rollback through the public transaction API. Run [the acceptance script](../scripts/verify-transactions.mjs) with Node.js; set NORM_EXECUTABLE when Norm is outside PATH.

The [sample module](transactions/module.norm) defines its published dependencies. The [library module](../orm/micronaut/tx/module.norm) defines the transaction provider.
