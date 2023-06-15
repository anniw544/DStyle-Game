namespace SpriteKind {
    export const Wall = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (WGun == true) {
        WGun = false
    } else {
        WGun = true
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (WGun == true) {
        projectile = sprites.createProjectileFromSprite(img`
            2 2 
            2 2 
            `, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 50, Render.getAttribute(Render.attribute.dirY) * 50)
    } else if (WGun == false) {
        projectile = sprites.createProjectileFromSprite(img`
            2 2 
            2 2 
            `, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 50 + Render.getAttribute(Render.attribute.dirX) * randint(-20, 20), Render.getAttribute(Render.attribute.dirY) * 50 + Render.getAttribute(Render.attribute.dirY) * randint(-20, 20))
        projectile = sprites.createProjectileFromSprite(img`
            2 2 
            2 2 
            `, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 50 + Render.getAttribute(Render.attribute.dirX) * randint(-20, 20), Render.getAttribute(Render.attribute.dirY) * 50 + Render.getAttribute(Render.attribute.dirY) * randint(-20, 20))
        projectile = sprites.createProjectileFromSprite(img`
            2 2 
            2 2 
            `, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 50 + Render.getAttribute(Render.attribute.dirX) * randint(-20, 20), Render.getAttribute(Render.attribute.dirY) * 50 + Render.getAttribute(Render.attribute.dirY) * randint(-20, 20))
        projectile = sprites.createProjectileFromSprite(img`
            2 2 
            2 2 
            `, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 50 + Render.getAttribute(Render.attribute.dirX) * randint(-20, 20), Render.getAttribute(Render.attribute.dirY) * 50 + Render.getAttribute(Render.attribute.dirY) * randint(-20, 20))
        projectile = sprites.createProjectileFromSprite(img`
            2 2 
            2 2 
            `, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 50 + Render.getAttribute(Render.attribute.dirX) * randint(-20, 20), Render.getAttribute(Render.attribute.dirY) * 50 + Render.getAttribute(Render.attribute.dirY) * randint(-20, 20))
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
let projectile: Sprite = null
let WGun = false
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer4)
tiles.setCurrentTilemap(tilemap`level 1`)
let e1 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
info.setLife(3)
Render.moveWithController(2, 3, 1)
WGun = true
