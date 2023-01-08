import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

import SingleCard from './filmComponents/SingleCard'
import SmallNav from './filmComponents/SmallNav'

function Films() {
  const { yourList } = useGlobalContext()

  return (
    <div className='relative translate-y-0  flex-row gap-3 align-center'>
      <SmallNav />

      <div className='flex flex-wrap gap-6 pb-10 justify-center'>
        {yourList.length > 0 ? (
          yourList.map((item, index) => {
            return item.display && <SingleCard key={index} {...item} />
          })
        ) : (
          <h1 className='font-bold text-[30px] text-white'>
            Your List is Currently empty
          </h1>
        )}
      </div>
    </div>
  )
}

export default Films
