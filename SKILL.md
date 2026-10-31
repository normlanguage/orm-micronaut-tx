# orm.micronaut.tx Skill

Use this skill to work with Norm module `orm.micronaut.tx` version 12. Use only declarations listed below.

## `orm.micronaut.tx`

Source: `Isolation.norm`

### `Isolation`

```norm
enum Isolation
```

#### `DEFAULT`

```norm
DEFAULT
```

#### `READ_COMMITTED`

```norm
READ_COMMITTED
```

#### `READ_UNCOMMITTED`

```norm
READ_UNCOMMITTED
```

#### `REPEATABLE_READ`

```norm
REPEATABLE_READ
```

#### `SERIALIZABLE`

```norm
SERIALIZABLE
```

## `orm.micronaut.tx`

Source: `Propagation.norm`

### `Propagation`

```norm
enum Propagation
```

#### `MANDATORY`

```norm
MANDATORY
```

#### `NESTED`

```norm
NESTED
```

#### `NEVER`

```norm
NEVER
```

#### `NOT_SUPPORTED`

```norm
NOT_SUPPORTED
```

#### `REQUIRED`

```norm
REQUIRED
```

#### `REQUIRES_NEW`

```norm
REQUIRES_NEW
```

#### `SUPPORTS`

```norm
SUPPORTS
```

## `orm.micronaut.tx`

Source: `TransactionDefinition.norm`

### `TransactionDefinition`

```norm
interface TransactionDefinition
```

## `orm.micronaut.tx`

Source: `Transactional.norm`

### `Transactional`

```norm
annotation Transactional implements TypeTarget, FunctionTarget, RuntimeRetention
```

## `orm.micronaut.tx`

Source: `TransactionalInterceptor.norm`

### `TransactionalInterceptor`

```norm
class TransactionalInterceptor implements MethodInterceptor<Any, Any>
```

#### `TransactionalInterceptor`

```norm
TransactionalInterceptor(__JarBindingToken token)
```

Parameters:

- `token`: `__JarBindingToken`

