const express = require('express')
const {
    getCategoriesPage,
    getWorkCategory,
    getHomeCategory,
    getNoneCategory
} = require('../controllers/categoriesPage.controller')
const router = express.Router()

//@route GET /categories
//@desc get categories page
router.get('/categories', getCategoriesPage)

//@route GET /categories/work_category
//@desc get category page
router.get('/categories/work_category', getWorkCategory)

//@route GET /categories/home_category
//@desc get category page
router.get('/categories/home_category', getHomeCategory)

//@route GET /categories/none_category
//@desc get categories page
router.get('/categories/none_category', getNoneCategory)

module.exports = router