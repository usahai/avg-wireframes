import { IconCredits, IconFire, IconGrass, IconIce } from 'containers/IconImage'
import { Balance } from 'definitions/balance'
import { formatNumber } from 'utils/number'
import clsx from 'clsx'

interface BalancesBase {
  className?: string
}

interface BalancesProps extends BalancesBase {
  balances: Balance
  title: string
  isIcon?: never
}

interface IconsProps extends BalancesBase {
  title?: never
  balances?: never
  isIcon: boolean
}

type StatsBalancesProps = BalancesProps | IconsProps

const StatsBalances = ({
  className,
  title,
  balances,
  isIcon = false,
}: StatsBalancesProps) => {
  return (
    <>
      {!isIcon && (
        <>
          <h3 className='leading-none'>{title}</h3>
          <div
            id='icons-row'
            className={clsx('grid grid-cols-4 gap-4', className)}
          >
            <h3 className='flex justify-center text-appPurple'>
              {formatNumber(balances?.credits || 0)}
            </h3>
            <h3 className='flex justify-center text-green-600'>
              {formatNumber(balances?.grass || 0)}
            </h3>
            <h3 className='flex justify-center text-blue-300'>
              {formatNumber(balances?.ice || 0)}
            </h3>
            <h3 className='flex justify-center text-red-600'>
              {formatNumber(balances?.fire || 0)}
            </h3>
          </div>
        </>
      )}
      {isIcon && (
        <div
          id='stats-row'
          className={clsx('grid h-full w-full grid-cols-4 gap-4', className)}
        >
          <span className='flex justify-center'>
            <IconCredits />
          </span>
          <span className='flex justify-center'>
            <IconGrass />
          </span>
          <span className='flex justify-center'>
            <IconIce />
          </span>
          <span className='flex justify-center'>
            <IconFire />
          </span>
        </div>
      )}
    </>
  )
}

export default StatsBalances
