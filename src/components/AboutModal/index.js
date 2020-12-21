import React, { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import {
  Background,
  CloseModalButton,
  ModalContainer,
  ModalH1,
  ModalH2,
  ModalP,
  ModalUl,
  ModalLi
} from './AboutModalElements'

const AboutModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef()

  const slideUp = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`
  })

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  const escPressed = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    },
    [setShowModal, showModal]
  )

  useEffect(() => {
    document.addEventListener('keydown', escPressed)
    return () => document.removeEventListener('keydown', escPressed)
  }, [escPressed])

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={slideUp}>
            <ModalContainer>
              <ModalH1>Vision</ModalH1>
              <ModalP>
                Our vision is the continuity of the ministry of Jesus Christ and
                can be summed up in two words:{' '}
                <span
                  style={{
                    fontSize: '16px',
                    color: 'var(--blue)',
                    fontWeight: '600'
                  }}
                >
                  Changed Lives
                </span>
                .
              </ModalP>
              <ModalH2>At Rhema we seek to change lives through:</ModalH2>
              <ModalUl>
                <ModalLi>
                  <span
                    style={{
                      color: 'var(--blue)',
                      fontWeight: '600'
                    }}
                  >
                    Education:
                  </span>{' '}
                  Establishing world class schools for academic excellence.
                </ModalLi>
                <ModalLi>
                  <span
                    style={{
                      color: 'var(--blue)',
                      fontWeight: '600'
                    }}
                  >
                    Spirituality:
                  </span>{' '}
                  Growing healthy churches that connect people to Jesus &
                  others.
                </ModalLi>
                <ModalLi>
                  <span
                    style={{
                      color: 'var(--blue)',
                      fontWeight: '600'
                    }}
                  >
                    Life Care:
                  </span>{' '}
                  Establishing world class community centers for wellness and
                  recreation.
                </ModalLi>
                <ModalLi>
                  <span
                    style={{
                      color: 'var(--blue)',
                      fontWeight: '600'
                    }}
                  >
                    Housing:
                  </span>{' '}
                  Developing housing for seniors, families and individuals.
                </ModalLi>
                <ModalLi>
                  <span
                    style={{
                      color: 'var(--blue)',
                      fontWeight: '600'
                    }}
                  >
                    Edutainment:
                  </span>{' '}
                  Establishing multi-use facilities for community learning and
                  fun.
                </ModalLi>
                <ModalLi>
                  <span
                    style={{
                      color: 'var(--blue)',
                      fontWeight: '600'
                    }}
                  >
                    Economics:
                  </span>{' '}
                  Providing financial and retail services to all.
                </ModalLi>
                <ModalLi>
                  <span
                    style={{
                      color: 'var(--blue)',
                      fontWeight: '600'
                    }}
                  >
                    Community:
                  </span>{' '}
                  Empowering & equipping local and global communities.
                </ModalLi>
              </ModalUl>
              <CloseModalButton onClick={() => setShowModal((show) => !show)} />
            </ModalContainer>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}

export default AboutModal
