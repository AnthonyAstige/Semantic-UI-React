import React from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

import { Message, Icon } from 'src'

const FormFormUsageExamples = () => (
  <ExampleSection title='Usage'>
    <Message info icon>
      <Icon name='pointing right' />
      <Message.Content>
        <Message.Header>Tip</Message.Header>
        <p>
          Our <code>{'<Form />'}</code> handles data just like a vanilla React <code>{'<form />'}</code>.
          See React's
          <a href='https://facebook.github.io/react/docs/forms.html#controlled-components' target='_blank'>
            {' '}controlled components{' '}
          </a>
          docs for more.
        </p>
      </Message.Content>
    </Message>
    <ComponentExample
      title='Capture Values'
      description='You can capture form data on change or on submit.'
      examplePath='collections/Form/Usage/FormExampleCaptureValues'
    />
    <ComponentExample
      title='Clear On Submit'
      description='You can clear form values on submit.'
      examplePath='collections/Form/Usage/FormExampleClearOnSubmit'
    />
  </ExampleSection>
)

export default FormFormUsageExamples
