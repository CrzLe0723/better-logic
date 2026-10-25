# Nand
Returns false when both inputs are true
```sig
logic.nand()
```

## Parameters
- **a**: the first boolean condition
- **b**: the second boolean condition

## Example

```blocks
let bool1: boolean = true
let bool2: boolean = true

if (!logic.nand(bool1, bool2)) {
  game.splash("false")
}
```

```package
Better-Logic=github:CrzLe0723/better-logic
```
