    const express = require('express')
    const { home, insertData, deleteData, edit, updateData } = require('../controllers/controllers') 

    const router = express.Router()

    router.get('/',home)
    router.get('/editData/:id',edit)
    router.post('/insertData', insertData)
    router.get('/deleteData/:id',deleteData)
    router.post('/updateData', updateData);


    module.exports = router