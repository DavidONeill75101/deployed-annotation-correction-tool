import prisma from '../../../lib/prisma'


export default async function handle(req, res) {

	const email = req.query.email
	
    
    const record = {
        email: email,
		read_guide: false,
    }
	
	var user = await prisma.User.create({
		data: record,
	})

	res.json(user)
}
