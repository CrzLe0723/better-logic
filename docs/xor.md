# Xor
Returns true if **one** input is true.
```sig
logic.xor()
```

## Parameters
- **a**: the first boolean condition
- **b**: the second boolean condition

## Example

```blocks
let bool1: boolean = true
let bool2: boolean = true
if (logic.xor(bool1, bool2)) {
  game.splash("true")
  else {
    game.splash("false")
  }
}
```

```package
Better-Logic=github:CrzLe0723/better-logic
```
