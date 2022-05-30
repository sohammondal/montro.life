import React from 'react'
import { IoMdClose } from 'react-icons/io'
import StyledReactModal, {
  ModalProps as StyledModalProps,
} from 'styled-react-modal'

import { colors } from 'theme/colors'
import { media } from 'theme/common.styles'

export const StyledModal = StyledReactModal.styled`
    width: 90%;
    height: 50%;
    border-radius: 27px;
    background-color: #fff;
  
    position: relative;
    overflow: hidden;

    :before{
      content: "";
      display: block;
      padding-top: 100%; 
    }

    ${media.tabletLandscape}{
        width: 50%;
        height: 75%;
        border-radius: 27px;
    }

    .contents{
        padding: 50px;
        position:  absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        > .modal-close-button {
            height: 1.5rem;
            width: 1.5rem;
            position: absolute;
            right: 20px;
            top: 20px;
            cursor: pointer;
            transition: ease 0.3s all;
            :hover{
              color: ${colors.WestSide}
            }

            ${media.desktop}{
                height: 2rem;
                width: 2rem;
            }
        }
    }
`

export interface ModalProps extends StyledModalProps {
  showCloseBtn?: boolean
}

export const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  return (
    <StyledModal {...props}>
      <div className="contents">
        {props.showCloseBtn && (
          <IoMdClose
            className="modal-close-button"
            role="button"
            onClick={(ev: never) => {
              if (props.onBackgroundClick) {
                props.onBackgroundClick(ev)
              }
            }}
          />
        )}
        {children}
      </div>
    </StyledModal>
  )
}

Modal.defaultProps = {
  ...Modal.defaultProps,
  showCloseBtn: true,
}

export { ModalProvider, BaseModalBackground } from 'styled-react-modal'
