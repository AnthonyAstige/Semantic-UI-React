import React, { Component } from 'react'
import { Button, Form, Grid, Image, Transition } from 'semantic-ui-react'

const transitions = [
  'scale',
  'fade', 'fade up', 'fade down', 'fade left', 'fade right',
  'jiggle', 'flash',
]
const options = transitions.map(transition => ({ text: transition, value: transition }))

export default class TransitionExampleSingleExplorer extends Component {
  state = {
    duration: 500,
    animation: 'scale',
    visible: true,
  }

  handleDuration = (e, { value: duration }) => this.setState({ duration })

  handleTransition = (e, { value: animation }) => this.setState({ animation })

  handleVisibility = () => {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }

  render() {
    const { animation, duration, visible } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column as={Form}>
          <Form.Select
            label='Choose transition'
            onChange={this.handleTransition}
            options={options}
            value={animation}
          />
          <Form.Input
            label={`Duration: ${duration}ms `}
            min={500}
            max={5000}
            onChange={this.handleDuration}
            step={500}
            type='range'
            value={duration}
          />
          <Form.Button
            content={visible ? 'Hide' : 'Show'}
            onClick={this.handleVisibility}
            type='button'
          />
        </Grid.Column>

        <Grid.Column>
          <Transition
            animation={animation}
            duration={duration}
            into={visible}
          >
            <Image size='medium' src='http://semantic-ui.com/images/leaves/4.png' />
          </Transition>
        </Grid.Column>
      </Grid>
    )
  }
}
