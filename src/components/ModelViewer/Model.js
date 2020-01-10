import React from 'react';
import '@google/model-viewer';
import robot from '../../static/robot.glb'

import './style.css'

const Animation = () => (
  <model-viewer
    width='600px'
    src={robot}
    alt='Animation'
    background-color='#70BCD1'
    shadow-intensity='1'
    camera-controls
    interaction-prompt='auto'
    auto-rotate
    ar
    magic-leap>
  </model-viewer>
)

export default Animation