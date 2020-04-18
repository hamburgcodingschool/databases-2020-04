// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const Student = require('../models/Students')

router.get('/students', (req, res) => {

	Student.find()
		.then(students => {
			res.json({
				confirmation: 'success',
				data: students
			})
		})
		.catch(error => {
			res.json({
				confirmation: 'fail',
				message: error.message
			})
		})
})

module.exports = router
