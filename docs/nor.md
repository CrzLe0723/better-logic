# Nor
True when both inputs are false.
```sig
logic.nor()
```

## Parameters
- **a**: first boolean condition
- **b**: second boolean condition

## Example

```blocks
let bool1: boolean = false
let bool2: boolean = false

if (logic.nor(bool1, bool2)) {
  game.splash("true")
}
```

```package
Better-Logic=github:CrzLe0723/better-logic
```
