import {Router} from 'express'


const router = Router()

// product

router.get('/product', (req,res) => {
    res.json({message:"hello"})
})
router.post('/product', () => {})
router.get('/product/:id', () => {})
router.put('/product/:id', () => {})
router.delete('/product/:id', () => {})

// update

router.get('/update', () => {})
router.post('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', () => {})
router.delete('/update/:id', () => {})

// update point

router.get('/updatepoint', () => {})
router.post('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', () => {})
router.delete('/updatepoint/:id', () => {})

export default router