/**
 * Generates an Obojobo YouTube node from a Slate node.
 * Copies the id, type, and triggers.  The conversion also saves the
 * src, title, type, border, fit, width, height, initalZoom, autoload,
 * and controlls attributes.
 * @param {Object} node A Slate Node
 * @returns {Object} An Obojobo YouTube node 
 */
const slateToObo = node => ({
	id: node.id,
	type: node.type,
	children: [],
	content: {
		triggers: node.content.triggers,
		videoId: node.content.src,
	}
})

/**
 * Generates a Slate node from an Obojobo YouTube. Copies all attributes, and adds a dummy child
 * @param {Object} node An Obojobo YouTube node 
 * @returns {Object} A Slate node
 */
const oboToSlate = node => {
	const slateNode = Object.assign({}, node)
	slateNode.children = [{ text: '' }]

	return slateNode
}

export default { slateToObo, oboToSlate }
