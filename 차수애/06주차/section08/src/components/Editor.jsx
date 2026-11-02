import './Editor.css'
import { useState, useRef, useContext } from 'react'
import { TodoDispatchContext } from '../App'

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState('')
  const inputRef = useRef()

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit()
    }
  }

  const onSubmit = () => {
    if (content === '') {
      inputRef.current.focus()
      return
    }
    onCreate(content)
    setContent('')
  }

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor
