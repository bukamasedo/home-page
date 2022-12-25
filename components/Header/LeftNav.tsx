import {
  LeftNavStyle,
  GithubIconStyle,
  AnchorStyle,
  LogoStyle,
} from '@/components/Header/LeftNavStyle'
import Link from 'next/link'
import { githubUrl } from '@/constants/url'

const LeftNav = () => {
  return (
    <LeftNavStyle>
      <Link href="/" passHref legacyBehavior>
        <LogoStyle>Shu Hirouchi</LogoStyle>
      </Link>
      <Link href="/work" passHref legacyBehavior>
        <AnchorStyle>Work</AnchorStyle>
      </Link>
      <Link href={githubUrl} passHref legacyBehavior>
        <AnchorStyle>
          <GithubIconStyle />
          Source
        </AnchorStyle>
      </Link>
    </LeftNavStyle>
  )
}

export default LeftNav
