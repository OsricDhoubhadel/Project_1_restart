let scenes = {}

function createScene(id, description, image, options) {
    if (!options) {
        options = [{"description": "GAME OVER!!!","scene":"game_over"}]
    }
    scenes[id] = {
        id, 
        description,
        image, 
        options
    }
}

function findSceneById(id) {
    let scene = scenes[id]
    if (!scene) {
        throw new Error("Scene " + id + " does not exist!")
    }
    return scene
}


module.exports = {
    createScene,
    findSceneById
}