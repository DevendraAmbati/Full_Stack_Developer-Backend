const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const {createTask, getTasks, updateTask, deleteTask} = require('../controllers/taskController');
const { validateTask } = require('../middleware/taskValidator');


router.post('/', auth, validateTask, createTask);
router.get('/', auth, getTasks);
router.put('/:id', auth, validateTask, updateTask);
router.delete('/:id', auth, validateTask, deleteTask);

module.exports = router;    