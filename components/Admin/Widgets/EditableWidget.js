import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faPlay,
  faFont,
  faList,
  faMousePointer,
  faCloudSun,
  faCalendar,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(faList)
library.add(faPlay)
library.add(faFont)
library.add(faMousePointer)
library.add(faCloudSun)
library.add(faCalendar)

import { WidgetType } from '../../../constants'

class EditableWidget extends React.Component {
  render() {
    const { type = WidgetType.Slideshow, onDelete = () => {} } = this.props
    return (
      <div className={'widget'}>
        <div className={'delete'} onClick={onDelete}>
          <FontAwesomeIcon icon={faTimes} size={'xs'} fixedWidth />
        </div>
        <div className={'info'}>
          <div className={'icon'}>
            <FontAwesomeIcon icon={type.icon} size={'2x'} />
          </div>
          <span className={'type'}>{type.name}</span>
          <span className={'name'}>NEWS</span>
        </div>
        <style jsx>
          {`
            .widget {
              background-color: rgba(108, 108, 108, 1);
              border-radius: 6px;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .widget .info {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              color: white;
            }
            .widget .info .icon {
              color: white;
              margin-bottom: 16px;
            }
            .widget .info .type {
              color: white;
              font-family: 'Open Sans', sans-serif;
              text-transform: uppercase;
              font-size: 16px;
              margin-bottom: 16px;
            }
            .widget .info .name {
              color: white;
              font-family: 'Open Sans', sans-serif;
              text-transform: uppercase;
              font-size: 12px;
            }
            .widget .delete {
              position: absolute;
              font-family: 'Open Sans', sans-serif;
              top: 8px;
              right: 8px;
              width: 32px;
              height: 32px;
              justify-content: center;
              align-items: center;
              color: white;
              background: rgba(0, 0, 0, 0.6);
              border-radius: 50%;
              cursor: pointer;
              display: none;
            }
            .widget:hover .delete {
              display: flex;
            }
          `}
        </style>{' '}
      </div>
    )
  }
}

export default EditableWidget
