namespace SpriteKind {
    export const Wall = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let py = 0
    let px = 0
    PPB = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . 3 3 2 3 3 . . . . . . 
        . . . . . 3 2 3 2 3 . . . . . . 
        . . . . . 3 3 2 3 3 . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    PPB.setPosition(px, py)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
let PPB: Sprite = null
tiles.setCurrentTilemap(tilemap`level 1`)
scene.setBackgroundImage(assets.image`C_F`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let e1 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
info.setLife(3)
