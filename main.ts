blocks.onBlockPlaced(GRASS, function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
blocks.onBlockBroken(GRASS, function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("run", function () {
	
})
