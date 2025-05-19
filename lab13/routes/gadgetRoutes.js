const express = require('express');
const router = express.Router();
const gadget_controller = require('../controllers/gadget_controller');

router.post('/gadgets', gadget_controller.create_gadget);
router.get('/gadgets', gadget_controller.get_all_gadgets);
router.get('/gadgets/:id', gadget_controller.get_gadget_by_id);
router.get('/character-gadgets/:id', gadget_controller.get_gadgets_by_character);
router.patch('/gadgets/:id', gadget_controller.update_gadget);
router.delete('/gadgets/:id', gadget_controller.delete_gadget);

module.exports = router;
