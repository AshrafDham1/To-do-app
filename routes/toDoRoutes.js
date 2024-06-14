import express  from "express"
import { createToDo, getAllToDos,deleteToDo ,editToDo} from '../controllers/toDoControllers.js';


const router = express.Router();
router.post("/",createToDo)

router.get('/', getAllToDos);
router.delete('/:id', deleteToDo)
router.put("/:id",editToDo)
export default router