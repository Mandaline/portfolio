
import * as React from "react"
import { x } from '@xstyled/styled-components'

const Tags = ({ tags }) => {
  return (
    <x.div
      display="flex"
      flexWrap="wrap"
      justifyContent={{_: "center", sm: "left"}}
      mt="10px"
    >
      {tags.map((tag, index) => (
        <x.span
          key={`${tag}-${index}`}
          fontSize="12px"
          fontWeight="700"
          mr={{_: "10px", sm: "17px"}}
          ml={{_: "10px", sm: "0"}}
          textTransform="uppercase"
        >
          {tag}
        </x.span>
      ))}
    </x.div>
  )
}

export default Tags