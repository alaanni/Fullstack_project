const jwt = require('jsonwebtoken')
const buildingsRouter = require('express').Router()
const Building = require('../models/buildingSchema')
const Customer = require('../models/customerSchema')
const User = require('../models/userSchema')

buildingsRouter.get('/', async (request, response) => {
  const buildings = await Building.find({})
  response.json(buildings.map(building => building.toJSON()))
  })
  
buildingsRouter.get('/:id', async (request, response) => {
  const building = await Building.findById(request.params.id)
  if (building) {
    response.json(building.toJSON())
  } else {
    response.status(404).end()
  }
})

buildingsRouter.post('/', async (request, response) => {
  const body = request.body
/*
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id) */
  const buildingOwner = await Customer.findById(body.customer)

  const building = new Building({
      customer: buildingOwner,
      type: body.type,
      street: body.street,
      city: body.city,
      postalCode: body.postalCode,
      comment: body.comment
  })
  const savedBuilding = await building.save()
  buildingOwner.buildings = buildingOwner.buildings.concat(savedBuilding.id)
  await buildingOwner.save();

  response.json(savedBuilding.toJSON())
})

buildingsRouter.put('/:id', async (request, response) => {
  const body = request.body
  const buildingBeforeUpdate = await Building.findById(request.params.id)

  const building = {

  }

  const updateBuilding = await Building.findByIdAndUpdate(request.params.id, building, {new: true})
  response.json(updateBuilding.toJSON())
})

buildingsRouter.delete('/:id', async(request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
   const user = await User.findById(decodedToken.id)
   const building = await Building.findById(request.params.id)

   if ( building.user.toString() === user._id.toString() ) {   }
    
   await Building.findByIdAndRemove(request.params.id)
   response.status(204).end()

  response.status(401).end()
})

module.exports = buildingsRouter