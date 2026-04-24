const {body, param} = require('express-validator');

exports.validateTask = [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('status').optional().isIn(['pending', 'in-progress', 'completed']).withMessage('Status must be pending, in-progress, or completed'),
    param('id').optional().isInt().withMessage('Task ID must be an integer')
];

