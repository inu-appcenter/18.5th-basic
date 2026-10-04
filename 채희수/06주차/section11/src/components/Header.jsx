import './Header.css'
import {memo} from 'react'

const Header= () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3> {/*Command+Ctrl+Spacebar하면 이모지 나옴 */}
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

// const memoisedHeader = memo(Header);

// export default memoisedHeader;

export default memo(Header);