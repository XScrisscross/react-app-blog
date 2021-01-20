import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import {Container, baseStyles} from 'unified-ui'

import CodeBlock from './CodeBlock'

const Style = ({children}) => (
  <style
    dangerouslySetInnerHTML={{
      __html: children
    }}
  />
)

const components = {
  h1: props => <h1 {...props} />,
  pre: props => <div style={{backgroundColor: '#d3dcbc'}} {...props} />,
  code: CodeBlock
}

export default props => (
  <MDXProvider components={components}>
    <>
      <Style>{baseStyles}</Style>
      <Container {...props} />
    </>
  </MDXProvider>
)