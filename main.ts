namespace SpriteKind {
    export const Wall = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
tiles.setCurrentTilemap(tilemap`level 1`)
scene.setBackgroundImage(assets.image`C_F`)
