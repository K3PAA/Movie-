import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

import SingleCard from './filmComponents/SingleCard'
import SmallNav from './filmComponents/SmallNav'

function Films() {
  const { yourList } = useGlobalContext()

  useEffect(() => {
    console.log(yourList.length)
  }, [yourList])

  return (
    <div className='relative'>
      <SmallNav />

      <div className='flex flex-wrap gap-6'>
        {yourList.length > 0 ? (
          yourList.map((item, index) => {
            console.log(item)
            return <SingleCard key={index} {...item} />
          })
        ) : (
          <h1>Your List is Currently empty</h1>
        )}
      </div>
    </div>
  )
}

export default Films
