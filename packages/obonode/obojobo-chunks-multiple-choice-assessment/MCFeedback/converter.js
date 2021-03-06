import Component from 'obojobo-document-engine/src/scripts/oboeditor/components/node/editor'
import withoutUndefined from 'obojobo-document-engine/src/scripts/common/util/without-undefined'

const slateToObo = node => ({
	id: node.key,
	type: node.type,
	children: node.nodes.map(child => Component.helpers.slateToObo(child)),
	content: withoutUndefined(node.data.get('content') || {})
})

const oboToSlate = node => ({
	object: 'block',
	key: node.id,
	type: node.type,
	nodes: node.children.map(child => Component.helpers.oboToSlate(child)),
	data: {
		content: node.content
	}
})

export default { slateToObo, oboToSlate }
