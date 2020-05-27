import React from 'react'

import BaseColor from './BaseColor'
import ActionType from './ActionType'
import SelectedObjectsMenu from './SelectedObjectsMenu'
import BaseStroke from './Stroke/BaseStroke'
import KeyControls from './KeyControls'
import FileMenu from './FileMenu'

import './Menu.css'

const Menu = () => (
  <nav id="sidebar" className={'sidebar'}>
    <ActionType/>
    <BaseStroke/>
    <BaseColor/>
    <SelectedObjectsMenu/>
    <FileMenu/>
    <KeyControls/>
  </nav>
)

export default Menu;
