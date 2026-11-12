import './Content.css'
import { memo } from 'react';

const Content = () => {
  return (
    <div className="Content">
      <p>2006.08.23</p>
      <p>컴퓨터공학부_202501411</p>
      <p>mbti: ISFP</p>
      <p>특이사항: 중간고사 끝남🔥</p>
      <p>
        <a
          href='https://www.instagram.com/dbrud__6/'
          target='_blank'
          rel='noopener noreferrer'
        >@dbrud__6</a>
      </p>
    </div>
  )
}
export default memo(Content);