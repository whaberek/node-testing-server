const paginate = require('jw-paginate');
const { exampleData } = require('./items.mocks');

const itemsController = {
	async generateItems(req, res) {
		const items = [...Array(1000).keys()].map(i => ({ id: (i + 1), name: `Example ${i + 1}`, ...exampleData }));
		
		const page = parseInt(+req.query.page + 1) || 1;
		const pageSize = parseInt(req.query.limit) || 10;
		
		const pager = paginate(items.length, page, pageSize);
		
		const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
		
		return res.json({ total: pager.totalItems, data: pageOfItems });
	},
};

module.exports = { itemsController };
