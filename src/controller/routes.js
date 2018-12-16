const router = require('express').Router()
const path = require('path')
const gene_model = require('../model/gene_model')

router.get('/geneName/:partialName', (req, res) => {
  gene_model.getPossibleGeneNames(req.params.partialName)
    .then(possibleGeneNames => res.json(possibleGeneNames) )
})

router.get('/fullGene/:geneName', (req, res) => {
  gene_model.getFullGene(req.params.geneName)
    .then( FullGene => res.json(FullGene) )
})

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

module.exports = router
