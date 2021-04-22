const express = require('express')
const scenes = require('../model/scenes')

// Count the number of decisions made
var log_count = 0
function counter (req,res,next){
  if (req.path === '/intro'){log_count = 0}
  // console.log(req.path)
  else if (req.path !== '/game_over'){log_count +=1}
  console.log(log_count)
  next()
}

let router = express.Router()
router.get('/:sceneId', (req, res) => {
    let sceneId = req.params.sceneId
    try {
        let scene = scenes.findSceneById(sceneId)
        res.render('formatSceneAsHTML.pug',{
            scene_Id: scene.id,
            scene_Description: scene.description,
            scene_Option: scene.options,
            scene_Image: scene.image,
            survive_count: log_count})
        }
    catch (error) {
        console.log(error)
        res.status(404).send("Scene " + sceneId + " not found.\n")
        }
})

module.exports = {router,counter}