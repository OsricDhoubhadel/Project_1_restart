const express = require('express')
const scenes = require('../model/scenes')

let router = express.Router()
router.get('/:sceneId', (req, res) => {
    let sceneId = req.params.sceneId
    try {
        let scene = scenes.findSceneById(sceneId)
        res.render('formatSceneAsHTML.pug',{
            scene_Id: scene.id,
            scene_Description: scene.description,
            scene_Option: scene.options,
            scene_Image: scene.image})
        }
    catch (error) {
        console.log(error)
        res.status(404).send("Scene " + sceneId + " not found.\n")
        }
})

module.exports = router