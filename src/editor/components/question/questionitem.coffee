React = require 'react'


QuestionItem = React.createClass
	onKeyDown: ->
		console.log '______________________okd'
		console.log events

	render: ->
		deleteFn = (->
			@props.deleteAnswerFn @props.answer
		).bind @

		React.createElement 'div', null,
			# React.createElement 'div', { contentEditable:true }, @props.answer.text.value
			React.createElement 'p', { contentEditable:true, onKeyDown:@onKeyDown, 'data-index':@props.index },
				Text.createElement @props.answer.text, @props.oboNode, @props.index
			React.createElement 'input', { value:@props.answer.value }
			React.createElement 'button', { onClick:deleteFn }, 'X'
			React.createElement 'hr'


module.exports = QuestionItem