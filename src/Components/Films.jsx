import React from 'react'

import SingleCard from './filmComponents/SingleCard'
import SmallNav from './filmComponents/SmallNav'

function Films() {
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
