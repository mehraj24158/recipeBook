


// @ desc get all recipes


const getRecipes = ((req, res) => {
    res.status(200).json({recipe: "this is an example recipe"});
});

const createRecipe = ('/create', (req, res) => {
    res.json({create:"this is the create recipe page"}) 
});

const updateRecipe = ('/:id', (req, res) => {
    res.json({msg: `updated recipe ${req.params.id}`})

});

const deleteRecipe = ('/:id', (req, res) => {
    res.json({msg: `deleted recipe ${req.params.id}`})
});

const getRecipeByID = ((req, res) => {
    es.status(200).json({recipe: `this is an example recipe with id: ${req.params.id}`});
})

module.exports = {
    getRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipeByID,
}