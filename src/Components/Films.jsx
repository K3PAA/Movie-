import React from 'react'
import { useGlobalContext } from '../context'

import SingleCard from './filmComponents/SingleCard'
import SmallNav from './filmComponents/SmallNav'

function Films() {
  const { yourList } = useGlobalContext()

  return (
    <div>
      <SmallNav />

      <div>
        <SingleCard />
      </div>
    </div>
  )
}

export default Films
