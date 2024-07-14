const {Router} = require ("express");
const { saveTodo, updateTodo, deleteTodo } = require("../controllers/Todo_contrller");
const router = Router()

router.get('/', getTodo)
router.post('/save', saveTodo)
router.post('/update', updateTodo)
router.post('/update', deleteTodo)


module.export = router;