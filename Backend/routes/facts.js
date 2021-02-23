const express = require('express')
const router = express.Router()
const Fact = require('../models/Fact')

//Getting All
router.get('/', async (req, res) => {
    try{
        const facts = await Fact.find()
        res.json(facts)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})
//Get Random
router.get('/random', async (req, res) => {
    try{
        const fact = await Fact.aggregate([{ $sample: { size: 1 } }])
        res.send(fact)
    } catch (err) {
        res.status(500).json({message: err.message})
    }

})
//GettingOne
router.get('/:id', getFact, (req, res) =>{
    res.send(res.fact)
})


//Creating one
router.post('/', async (req, res) =>{
    const fact = new Fact({
        fact: req.body.fact,
        source: req.body.source
    })
    
    try{
        const newFact = await fact.save()
        res.status(201).json(newFact)
    } catch(err){
        res.status(400).json({message: err.message})
    }
})
//Updating one
router.patch('/:id', getFact, async (req, res) =>{
    if (req.body.fact != null){
        res.fact.fact = req.body.fact
    }
    if (req.body.source != null) {
        res.fact.source = req.body.source
    }
    try{
        const updatedFact = await res.fact.save()
        res.json(updatedFact)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
    
})
//Deleting one
router.delete('/:id', getFact, async (req, res) =>{
    try{
        await res.fact.remove()
        res.json({message: 'Deleted Fact'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getFact(req, res, next){
    let fact
    try{
        fact = await Fact.findById(req.params.id,)
        if (fact == null){
            return res.status(404).json({message: 'Cannot find fact'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
    res.fact = fact
    next()
}




module.exports = router