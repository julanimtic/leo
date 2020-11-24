sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    burger.destroy(effects.hearts, 500)
    music.magicWand.playUntilDone()
    léo.say("Miam miam", 1000)
    Monstre.destroy(effects.disintegrate, 500)
    monstre2.destroy(effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    léo.destroy(effects.fire, 500)
    burger.destroy(effects.disintegrate, 500)
    music.playMelody("C D C D C D C D ", 120)
})
let burger: Sprite = null
let léo: Sprite = null
let monstre2: Sprite = null
let Monstre: Sprite = null
scene.setBackgroundColor(6)
Monstre = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ............fffffff.............
    ..........ff.......ff...........
    .........f...........f..........
    .........f......ffffff..........
    ........f.fff...f...f.f.........
    ........f.f.f...f...f.f.........
    ........f.fff...f...f.f.........
    ........f.......fffff.f.........
    ........f.............f.........
    ........f...ffffff....f.........
    ........f..ff....ff...f.........
    .........f.f......f..f..........
    .........f...........f..........
    ..........ff.......ff...........
    ............fffffff.............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Enemy)
monstre2 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ............fffffff.............
    ..........ff.......ff...........
    .........f...........f..........
    .........f......ffffff..........
    ........f.fff...f...f.f.........
    ........f.f.f...f...f.f.........
    ........f.fff...f...f.f.........
    ........f.......fffff.f.........
    ........f.............f.........
    ........f...ffffff....f.........
    ........f..ff....ff...f.........
    .........f.f......f..f..........
    .........f...........f..........
    ..........ff.......ff...........
    ............fffffff.............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Enemy)
léo = sprites.create(img`
    . . . . . . . 
    . . e e e . . 
    . e e e e e . 
    . e e e e e . 
    . e e e e e . 
    . . f f f . . 
    . . . f . . . 
    . f f f f f . 
    . . . f . . . 
    . . . f . . . 
    . f f f f f . 
    . f . . . f . 
    `, SpriteKind.Player)
let spider = sprites.create(img`
    . . f f f . . . . . . . . . f f f . . 
    . f f . f . f f f f f f f . f . f f . 
    . . . . f f f f f f f f f f f . . . . 
    . . . . . f f f f f f f f f . . . . . 
    . f f f f f f f f f f f f f f f f f . 
    f f . . . f f f f f f f f f . . . f f 
    . . . . . f f 2 f f f 2 f f . . . . . 
    . . f f f f f f f f f f f f f f f . . 
    . f f . . . . f f f f f . . . . f f . 
    f f . . . . . f . . . f . . . . . f f 
    . . . . . . . f f . f f . . . . . . . 
    . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
spider.setPosition(0, 54)
Monstre.setPosition(0, 26)
monstre2.setPosition(150, 69)
léo.setPosition(80, 96)
controller.moveSprite(léo)
burger = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Food)
burger.setPosition(76, 8)
forever(function () {
    for (let index = 0; index < 14; index++) {
        pause(200)
        Monstre.x += 10
    }
    for (let index = 0; index < 14; index++) {
        pause(200)
        Monstre.x += -10
    }
})
forever(function () {
    for (let index = 0; index < 14; index++) {
        pause(100)
        monstre2.x += -10
    }
    for (let index = 0; index < 14; index++) {
        pause(100)
        monstre2.x += 10
    }
})
forever(function () {
    for (let index = 0; index < 14; index++) {
        pause(50)
        spider.x += 10
    }
    for (let index = 0; index < 14; index++) {
        pause(50)
        spider.x += -10
    }
})
