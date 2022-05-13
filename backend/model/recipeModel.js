const app = require('express');
const mongoose = require('mongoose');


const recipeSchema = mongoose.Schema
(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },

        ingredients: {
            type: String,
            required: true,
        },

        instructions: {
            type: String,
            required: true,

        },
    },
    {
        timestamps: true,
    }
);

const recipeModel = mongoose.Model('Recipe', recipeSchema);
module.exports = recipeModel;


