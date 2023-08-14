import girl from '../../assets/avatar-michelle.jpg'
import ShareIcon from '../ShareIcon/ShareIcon'
import { RiFacebookBoxFill, RiTwitterFill, RiPinterestFill } from "react-icons/ri";
import { useState } from 'react';
import './Target.css'


const Target = () => {

  const [menu, setMenu] = useState(false)

  return (
    <div className='container'>
      <div className='img_container'>
      </div>
      <div className='container_info'>
        <h1>
          Shift the overall look and feel by adding these wonderful
          touches to furniture in your home
        </h1>
        <p className='text'>
          Ever been in a room and felt like something was missing? Perhaps
          it felt slightly bare and uninviting. I’ve got some simple tips
          to help you make any room feel complete.
        </p>
        <div className='avatar_container'>
          <div className='avatar_left'>
            <img src={girl} alt="avatar" className='avatar' />
            <div>
              <h2>Michelle Appleton</h2>
              <p>28 jun 2020</p>
            </div>
          </div>
          <div className='avatar_right'>
            <div className='icon_container' onClick={() => setMenu(!menu)}>
              <ShareIcon color={'#6E8098'} />
            </div>
            <div className={`float ${menu ? '' : 'disabled'}`}>
              <p className='share_text'>
                SHARE
              </p>
              <RiFacebookBoxFill size='28px' color='#FFF' />
              <RiTwitterFill size='26px' color='#FFF' />
              <RiPinterestFill size='26px' color='#FFF' />
            </div>
          </div>
        </div>
      </div>
      <div className={`floatTwo ${menu ? '' : 'disabled'}`}>
        <div className='social_icons'>
          <p className='share_text'>
            SHARE
          </p>
          <RiFacebookBoxFill size='28px' color='#FFF' />
          <RiTwitterFill size='26px' color='#FFF' />
          <RiPinterestFill size='26px' color='#FFF' />
        </div>
        <div className='icon_container_two' onClick={() => setMenu(!menu)}>
          <ShareIcon color='#FFF' />
        </div>
      </div>
    </div>
  )
}

export default Target