import './Today.css'
import { memo } from 'react'; //불필요한 리렌더링 방지

const Today = () => {
  return (
    <div className="Today">
      <h3>{new Date().toDateString()}</h3>
    </div>
  )
};

export default memo(Today);