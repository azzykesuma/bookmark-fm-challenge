import { ReactNode } from 'react'

const PaddedLayout = ({children} : {children:ReactNode}) => {
  return (
    <div className='px-4 lg:px-32'>
        {children}
    </div>
  )
}

export default PaddedLayout
