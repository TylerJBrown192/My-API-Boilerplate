import express = require('express');
import UserService from '../domain/user-service';
import IUser from '../shared/models/user';
import logger = require('../util/logger');

exports.GetAllUsers = (req: express.Request, res: express.Response, next: express.NextFunction): void => {

    UserService.getAllUsers()
        .then((users: IUser[]) => {
            console.log(users);
            res.status(200)
                .json(users);
        })
        .catch(err => {
            // logger.log({})
        });
};
