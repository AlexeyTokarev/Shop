const express = require('express');
const router = express.Router();
const accountService = require('./../services/account');

// Получение всех пользователей
router.get('/list', async (req, res, next) => {
    req.result = await accountService.getAccountsList();
    res.send(req.result);
});

// Получение пользователя по Id
router.get('/:id', async (req, res, next) => {
    req.result = await accountService.getAccountById(req.params.id);
    res.send(req.result);
});

// Удаление аккаунта
router.post('/delete/:id', async (req, res, next) => {
    req.result = await accountService.deleteAccount(req.params.id);
    res.send(req.result);
});


module.exports = router;
