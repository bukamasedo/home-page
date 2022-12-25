import {
  RightNavStyle,
  HamburgerButtonStyle,
  HamburgerIconStyle,
  PopupStyle,
  AnchorStyle,
} from '@/components/Header/RightNavStyle'
import Switch from '@/components/Header/Switch'
import { useState } from 'react'
import Link from 'next/link'

const RightNav = () => {
  const [isPopup, setIsPopup] = useState<boolean>(false)
  const githubUrl: string = process.env.NEXT_PUBLIC_GITHUB_URL ?? ''

  const togglePopup = () => {
    setIsPopup(!isPopup)
  }

  return (
    <RightNavStyle>
      <Switch />
      <HamburgerButtonStyle onClick={togglePopup}>
        <HamburgerIconStyle />
      </HamburgerButtonStyle>
      <PopupStyle
        style={{
          visibility: isPopup ? 'visible' : 'hidden',
          right: isPopup ? '1.5rem' : '0',
          opacity: isPopup ? '1' : '0',
        }}
      >
        <Link href="/work" passHref legacyBehavior>
          <AnchorStyle>Work</AnchorStyle>
        </Link>
        <Link href={githubUrl} passHref legacyBehavior>
          <AnchorStyle>Git Source</AnchorStyle>
        </Link>
      </PopupStyle>
    </RightNavStyle>
  )
}

export default RightNav
