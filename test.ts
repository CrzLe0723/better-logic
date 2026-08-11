// tests go here; this will not be compiled when this package is used as an extension.
namespace SpriteKind {
    export const Door = SpriteKind.create()
    export const Switch = SpriteKind.create()
}
let solved = false
let touchingSwitch = false
// --------------------
// PLAYER SETUP
// --------------------
let player = sprites.create(img`
    . . . 2 2 . . . 
    . . 2 2 2 2 . . 
    . 2 2 2 2 2 2 . 
    . . . 2 2 . . . 
    . . 2 . . 2 . . 
    `, SpriteKind.Player)
controller.moveSprite(player, 100, 100)
scene.cameraFollowSprite(player)
// --------------------
// FIRST DOOR STATE (persistent)
// --------------------
if (logic.getMemory(0)) {
    // door already opened
    tiles.setTileAt(tiles.getTileLocation(5, 5), assets.tile`transparency16`)
} else {
    tiles.setTileAt(tiles.getTileLocation(5, 5), assets.tile`transparency16`)
}
// --------------------
// SWITCH LOGIC OBJECT
// --------------------
let switchSprite = sprites.create(img`
    . . 5 5 5 . . 
    . 5 2 2 2 5 . 
    . 5 2 2 2 5 . 
    . . 5 5 5 . . 
    `, SpriteKind.Switch)
switchSprite.setPosition(80, 50)
// --------------------
// GAME LOOP LOGIC
// --------------------
game.onUpdate(function () {
    // use rising edge so it only triggers once
    touchingSwitch = player.overlapsWith(switchSprite)
    if (logic.risingEdge(0, touchingSwitch)) {
        if (!(logic.getMemory(0))) {
            if (controller.A.isPressed() || controller.B.isPressed()) {
                solved = true
            }
            if (solved) {
                game.splash("Solved puzzle")
                logic.setMemory(0, true)
                tiles.setTileAt(tiles.getTileLocation(5, 5), assets.tile`transparency16`)
            }
        } else {
            game.splash("Already completed")
        }
    }
})
game.onUpdate(function () {
    if (player.overlapsWith(switchSprite)) {
        console.log("TOUCHING SWITCH")
    }
    if (controller.A.isPressed()) {
        console.log("A pressed")
    }
})
