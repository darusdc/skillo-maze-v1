namespace SpriteKind {
    export const FinishLine = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
})
function whenWin (bool: boolean) {
    if (bool) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
        if (kucingCount > 2) {
            game.showLongText("Karena telah menyelamatkan semua kucing \n kamu berhak mendapat voucher gratis 'UjiSkillLo' berikan kode ini saat mendaftar, agar kamu mendapatkan kelas gratis 1x", DialogLayout.Full)
        } else {
            game.showLongText("Selamat kamu berhasil menyelamatkan kucing. Mau bisa bikin game kaya gini? Yuk, Daftar ke Skillo", DialogLayout.Full)
        }
        game.gameOver(true)
    } else {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
        game.showLongText("Seru banget ya! tapi sayang kamu kalah. Jangan khawatir Kamu boleh ulangi lagi kok \n eh btw, kamu pengen gak bikin game kaya gini juga? yuk daftar ke Skillo", DialogLayout.Full)
        game.gameOver(false)
    }
}
function initPlayer () {
    player1 = sprites.create(img`
        ........................
        .....ffff...............
        ...fff22fff.............
        ..fff2222fff............
        .fffeeeeeefff...........
        .ffe222222eef...........
        .fe2ffffff2ef...........
        .ffffeeeeffff...........
        ffefbf44fbfeff..........
        fee41fddf14eef..........
        .ffffdddddeef...........
        fddddf444eef............
        fbbbbf2222f4e...........
        fbbbbf2222fd4...........
        .fccf45544f44...........
        ..ffffffff..............
        ....ff..ff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
    scene.cameraFollowSprite(player1)
    controller.player1.moveSprite(player1)
    info.setLife(3)
    info.setScore(0)
    tiles.placeOnTile(player1, tiles.getTileLocation(0, 15))
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player1)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FinishLine, function (sprite, otherSprite) {
    info.stopCountdown()
    whenWin(true)
})
info.onCountdownEnd(function () {
    whenWin(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.stopAllSounds()
    music.play(music.createSong(hex`0078000408020302001c000c960064006d019001000478002c010000640032000000000a060005120008000c00012418001c00012428002c00012a03001c0001dc00690000045e01000400000000000000000000056400010400032a0000000400011b08000c00011d1000140001201400180001191c002000011d24002800012028002c00011b04001c00100500640000041e000004000000000000000000000000000a0400042a0000000400011d08000c00011e10001400012214001800011d1c002000011e20002400012424002800011d`), music.PlaybackMode.LoopingInBackground)
    answer = game.askForNumber(question[randomQue])
    if (answer == answers[randomQue]) {
        info.changeScoreBy(1)
        sprites.destroy(otherSprite)
        player1.sayText("Yeah, Berhasil!", 5000)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    } else {
        randomDog = randint(0, sprites.allOfKind(SpriteKind.Enemy).length - 1)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        player1.sayText("Tidak!! 1 kucing mati!!", 5000)
        sprites.destroy(sprites.allOfKind(SpriteKind.Enemy)[randomDog])
        sprites.destroy(otherSprite)
        info.changeLifeBy(-1)
    }
    randomQue++
    music.stopAllSounds()
    music.play(music.createSong(hex`0078000408020300001c00010a006400f4016400000400000000000000000000000000050000043b0000000400011904000800031d202408000c0001240c001000012710001400012a14001800012418001c0002202420002400021b1e28002c0002191b05001c000f0a006400f4010a0000040000000000000000000000000000000002250000000400011d08000c00012010001400012418001c0001272000240002222528002c00011e06001c00010a006400f401640000040000000000000000000000000000000002180004000800012008000c00012710001400012c18001c000129`), music.PlaybackMode.LoopingInBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.follow(sprite)
    if (spriteHasTouched.filter((v) => { return v == otherSprite }).length < 1) {
        spriteHasTouched.push(otherSprite)
        kucingCount += 1
        console.log(kucingCount)
    }
})
function initHartaKarun () {
    for (let value2 of tiles.getTilesByType(sprites.dungeon.chestClosed)) {
        hartaKarun = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(hartaKarun, value2)
        tiles.setTileAt(value2, sprites.dungeon.darkGroundCenter)
        animation.runImageAnimation(
        hartaKarun,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 5 5 5 5 1 4 4 . . 
            . . 3 3 3 3 3 5 5 5 5 1 5 4 . . 
            . 4 3 3 3 3 5 5 5 5 5 5 5 4 4 . 
            . 4 3 3 3 5 5 5 4 4 4 4 5 4 4 . 
            . 4 4 3 3 5 5 4 4 4 4 4 4 4 4 . 
            . 4 5 3 3 5 5 4 4 4 4 4 4 4 4 . 
            . . 5 5 3 3 5 4 4 4 4 4 5 4 . . 
            . . 4 5 5 3 5 5 4 4 4 5 5 4 . . 
            . . . 5 5 5 5 5 5 5 5 5 4 . . . 
            . . . . 4 4 5 5 5 5 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 3 3 3 3 3 4 4 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . 4 3 3 3 3 3 3 3 3 3 3 3 3 4 . 
            . 4 3 3 3 3 3 3 4 4 4 3 3 4 4 . 
            . 4 4 3 3 3 3 3 4 4 4 4 4 4 4 . 
            . 4 3 3 3 3 3 4 4 4 4 4 4 4 4 . 
            . . 3 3 3 3 3 4 4 4 4 4 3 4 . . 
            . . 4 3 3 3 3 3 4 4 4 3 3 4 . . 
            . . . 4 3 3 3 3 3 3 3 3 4 . . . 
            . . . . 4 3 3 3 3 3 3 3 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
}
let allGone = false
let mySprite: Sprite = null
let hartaKarun: Sprite = null
let randomDog = 0
let answer = 0
let randomQue = 0
let kucingCount = 0
let player1: Sprite = null
let challanger1: Sprite = null
let answers: number[] = []
let question: string[] = []
let spriteHasTouched: Sprite[] = []
let countDown = 10
question = ["2+2x2?", "2x5+3?", "3000:2"]
answers = [6, 13, 1500]
game.splash("Labirin Kehidupan", "Apakah kamu bisa sukses?")
tiles.setCurrentTilemap(tilemap`level0`)
initPlayer()
initHartaKarun()
for (let value22 of tiles.getTilesByType(sprites.dungeon.collectibleInsignia)) {
    challanger1 = sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(challanger1, value22)
    tiles.setTileAt(value22, sprites.dungeon.darkGroundCenter)
    animation.runImageAnimation(
    challanger1,
    [img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e b f b . 
        f d d f d d f d d f f d f . 
        f b d d b b d d 2 b f d f . 
        . f 2 2 2 2 2 2 d b d b f . 
        . f d d d d d d d f f f . . 
        . f d b d f f f d f . . . . 
        . . f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 b f f d f 
        . f 2 2 2 2 2 2 d b b d b f 
        . f d d d d d d d f f f f . 
        . . f d b d f d f . . . . . 
        . . . f f f f f f . . . . . 
        `],
    500,
    true
    )
}
game.showLongText("Dalam labirin ini terdapat mutiara, dalam setiap mutiara terdapat pertanyaan", DialogLayout.Bottom)
game.showLongText("Untuk menyelamatkan kucing di labirin ini, kamu harus menjawab setiap pertanyaan", DialogLayout.Bottom)
game.showLongText("setiap kali kamu gagal menjawab maka ada kucing yang akan mati!", DialogLayout.Bottom)
game.showLongText("mari kita lihat apakah kamu bisa menyelamatkan semua kucing yang ada!", DialogLayout.Bottom)
game.setGameOverEffect(true, effects.confetti)
game.setGameOverMessage(true, "Selamat kamu berhasil!")
game.setGameOverMessage(false, "Kamu kalah!")
game.setGameOverEffect(false, effects.melt)
music.play(music.createSong(hex`0078000408020300001c00010a006400f4016400000400000000000000000000000000050000043b0000000400011904000800031d202408000c0001240c001000012710001400012a14001800012418001c0002202420002400021b1e28002c0002191b05001c000f0a006400f4010a0000040000000000000000000000000000000002250000000400011d08000c00012010001400012418001c0001272000240002222528002c00011e06001c00010a006400f401640000040000000000000000000000000000000002180004000800012008000c00012710001400012c18001c000129`), music.PlaybackMode.LoopingInBackground)
game.onUpdate(function () {
    if (sprites.allOfKind(SpriteKind.Food).length < 1) {
        if (info.score() >= 1) {
            for (let value3 of tiles.getTilesByType(sprites.dungeon.purpleSwitchUp)) {
                tiles.setWallAt(value3, false)
                mySprite = sprites.create(img`
                    ................86..................
                    ...........6688867886...............
                    ...........8666877688868............
                    ............868777767768............
                    .........688667777776688............
                    ........67767777777778666...........
                    .........6776667767666868...........
                    ..........866667667677688...........
                    .........8666666666667778...........
                    ........667766666666666676..........
                    .......67766667666776667776.........
                    ......886667776676777666688.........
                    .....67766777667767777666768........
                    ....6776666666777667776666776.......
                    .....8667776667766676677776776......
                    ......8777666666667776777776688.....
                    ....6887766776677677777777776776....
                    ..8866666677767777777777766666778...
                    .86666666777667767777766666776668...
                    ..88677666666777677677666667776668..
                    ..86776677666666666666667776666668..
                    886666677766667666666776677766668...
                    6668666676667766767767766677666668..
                    88866666666777677677667666666776668.
                    .86668866666766776776666667766666668
                    .86688666666666776666667667776666688
                    .668866666666666666666677666666688..
                    ..8866686666666666677667776666668...
                    ...866886666666666677667776666668...
                    ...86886668666666667666666666888....
                    ....88866886686666666666666668......
                    ......86886668666866668666868.......
                    ......88866688668866688866888.......
                    ........8888888688888ce868..........
                    ..............e88e88.ec.8...........
                    ...............eeee..e..............
                    ...............ceef.ce..............
                    ...............ceefcec..............
                    ...............feefce...............
                    ...............fceeec...............
                    ...............ffceec...............
                    `, SpriteKind.FinishLine)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 0))
                tiles.setTileAt(value3, sprites.dungeon.darkGroundCenter)
            }
            if (!(allGone)) {
                game.showLongText(`Kamu telah menjawab semua pertanyaan, sekarang waktu kamu ${countDown} detik untuk menyelamatkan semua kucing!`, DialogLayout.Full)
                info.startCountdown(countDown)
            }
            allGone = true
        } else {
            whenWin(false)
        }
    }
})
