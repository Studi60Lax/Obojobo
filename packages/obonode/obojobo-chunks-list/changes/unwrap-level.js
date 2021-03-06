import ListStyles from '../list-styles'

const LIST_LEVEL_NODE = 'ObojoboDraft.Chunks.List.Level'

const unwrapLevel = (event, editor) => {
	event.preventDefault()
	let bullet = 'disc'
	let type = 'unordered'

	// get the bullet and type of the closest parent level
	editor.value.blocks.forEach(block => {
		const level = editor.value.document.getClosest(
			block.key,
			parent => parent.type === LIST_LEVEL_NODE
		)
		const content = level.data.get('content')
		bullet = content.bulletStyle
		type = content.type
	})

	// get the proper bullet for the next level
	const bulletList =
		type === 'unordered' ? ListStyles.UNORDERED_LIST_BULLETS : ListStyles.ORDERED_LIST_BULLETS
	const nextBullet = bulletList[(bulletList.indexOf(bullet) + 1) % bulletList.length]

	// add in the new level around the lines
	return editor.wrapBlock({
		type: LIST_LEVEL_NODE,
		data: { content: { type: type, bulletStyle: nextBullet } }
	})
}

export default unwrapLevel
