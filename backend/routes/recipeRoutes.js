const express = require('express');
const { del } = require('express/lib/application');
const res = require('express/lib/response');

const {getRecipes, createRecipe, deleteRecipe, updateRecipe, getRecipeByID} = require('../controller/recipeController')
const router = express.Router()

  
router.get('/',  getRecipes)

router.post('/create', createRecipe)

// router.put('/:id', updateRecipe)

// router.delete('/:id', deleteRecipe)

// router.get('/:id', getRecipeByID)

router.route('/id').put(updateRecipe).delete(deleteRecipe).get(getRecipeByID)

module.exports = router
