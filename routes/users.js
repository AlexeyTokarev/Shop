const express = require('express');
const router = express.Router();
const accountService = require('./../services/account');

router.get('/all', async (req, res, next) => {
    const result = await accountService.getAccountsList();
    // result.forEach(async (data) => {
        res.send(result);
    // });
});

module.exports = router;
