import clsx from 'clsx'
import { formatNumber } from 'utils/number'
import { IconCredits, IconFire, IconGrass, IconIce } from 'containers/IconImage'
import { Balance } from 'definitions/balance'

interface ReservoirsBalanceProps {
  className?: string
  balances: Balance
}

const ReservoirsBalance = ({ className, balances }: ReservoirsBalanceProps) => {
  return (
    <div
      id='reservoirs-balance-container'
      className={clsx(
        'flex h-full flex-col items-start justify-around px-2',
        className
      )}
    >
      <span id='credits' className='inline-flex'>
        <IconCredits />
        <h2>{formatNumber(balances.credits)}</h2>
      </span>
      <span id='grass' className='inline-flex'>
        <IconGrass />
        <h2>{formatNumber(balances.grass)}</h2>
      </span>
      <span id='ice' className='inline-flex'>
        <IconIce />
        <h2>{formatNumber(balances.ice)}</h2>
      </span>
      <span id='fire' className='inline-flex'>
        <IconFire />
        <h2>{formatNumber(balances.fire)}</h2>
      </span>
    </div>
  )
}

export default ReservoirsBalance
