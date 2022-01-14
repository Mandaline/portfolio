
import * as React from "react"
import { x } from '@xstyled/styled-components'

const Tags = ({ tags }) => {
  return (
    <x.div
      display="flex"
      flexWrap="wrap"
      mt="10px"
    >
      {tags.map(tag => (
        <x.span
          fontSize="12px"
          fontWeight="700"
          mr="17px"
          textTransform="uppercase"
        >
          {tag}
        </x.span>
      ))}
    </x.div>
  )
}

export default Tags