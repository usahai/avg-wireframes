import Image from 'next/image'
import icon_credits from 'assets/icon_credits.png'
import icon_grass from 'assets/icon_grass.png'
import icon_ice from 'assets/icon_ice.png'
import icon_fire from 'assets/icon_fire.png'

export const IconCredits = () => (
  <Image src={icon_credits} alt={'icon-credits'} width={20} height={20} />
)

export const IconGrass = () => (
  <Image src={icon_grass} alt={'icon-grass'} width={20} height={20} />
)

export const IconIce = () => (
  <Image src={icon_ice} alt={'icon-ice'} width={20} height={20} />
)

export const IconFire = () => (
  <Image src={icon_fire} alt={'icon-fire'} width={20} height={20} />
)
