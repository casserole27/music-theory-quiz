import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../../App.vue'
import Quiz from '../Quiz.vue'
import Results from '../Results.vue'

describe('App', () => {
  it('renders Quiz component initially', () => {
    //Purpose: verifies the app starts in the correct state
    //mount App component --> does for each test
    const wrapper = mount(App)
    
    //Quiz component is rendered initially
    expect(wrapper.findComponent(Quiz).exists()).toBe(true)
    //Results component is not rendered initally
    expect(wrapper.findComponent(Results).exists()).toBe(false)
  })

  it('passes correct initial props to Quiz component', () => {
    //Purpose: ensures proper prop initialization
    const wrapper = mount(App)
    //find Quiz component
    const quizComponent = wrapper.findComponent(Quiz)
    
    //verify that the score prop starts at 0
    expect(quizComponent.props('score')).toBe(0)
  })

  it('switches to Results component when quiz is completed', async () => {
    //Purpose: tests the core navigation logic
    const wrapper = mount(App)
    const quizComponent = wrapper.findComponent(Quiz)
    
    //emit quizComplete event
    //.vm is View Model
    //provides access to the actual Vue component instance
    // wrapper - the test wrapper around the component
    // wrapper.vm - the actual Vue component instance
    await quizComponent.vm.$emit('quizComplete')
    
    //verify Quiz component is not rendered
    expect(wrapper.findComponent(Quiz).exists()).toBe(false)
    //verify Results component is rendered instead
    expect(wrapper.findComponent(Results).exists()).toBe(true)
  })

  it('updates score when Quiz emits updateScore event', async () => {
    //Purpose: tests score accumulation
    const wrapper = mount(App)
    const quizComponent = wrapper.findComponent(Quiz)
    
    //simulate Quiz emits updateScore with a value of 10
    await quizComponent.vm.$emit('updateScore', 10)
    
    //score prop on Quiz updates to 10
    //verify reactive score system works
    expect(quizComponent.props('score')).toBe(10)
  })

  it('tracks wrong answers when Quiz emits updateIncorrect event', async () => {
    //Purpose: tests wrong answer tracking
    const wrapper = mount(App)
    const quizComponent = wrapper.findComponent(Quiz)
    
    //emits updateIncorrest with value 1
    await quizComponent.vm.$emit('updateIncorrect', 1)
    //completes the quiz to switch to results
    await quizComponent.vm.$emit('quizComplete')
    
    //verify incorrect prop is passed correctly to Results
    const resultsComponent = wrapper.findComponent(Results)
    expect(resultsComponent.props('incorrect')).toBe(1)
  })

  it('passes correct props to Results component', async () => {
    //Purpose: integration test for Results prop passing
    //An integration test verifies that multiple components or systems work together correctly
    //Rather than testing individual pieces in isolation
    const wrapper = mount(App)
    const quizComponent = wrapper.findComponent(Quiz)
    
    //simulates scoring 20 points and 2 wrong answers
    await quizComponent.vm.$emit('updateScore', 20)
    await quizComponent.vm.$emit('updateIncorrect', 2)
    //completes the quiz
    await quizComponent.vm.$emit('quizComplete')
    
    const resultsComponent = wrapper.findComponent(Results)
    //verify props passed to Results
    expect(resultsComponent.props('score')).toBe(20)
    expect(resultsComponent.props('incorrect')).toBe(2)
  })

  it('resets state when starting quiz over', async () => {
    //Purpose: tests reset functionality
    const wrapper = mount(App)
    const quizComponent = wrapper.findComponent(Quiz)
    
    // Complete quiz with some score and wrong answers
    await quizComponent.vm.$emit('updateScore', 30)
    await quizComponent.vm.$emit('updateIncorrect', 3)
    await quizComponent.vm.$emit('quizComplete')
    
    const resultsComponent = wrapper.findComponent(Results)
    await resultsComponent.vm.$emit('quizStartOver')
    
    // Should be back to Quiz component with reset state
    expect(wrapper.findComponent(Quiz).exists()).toBe(true)
    expect(wrapper.findComponent(Results).exists()).toBe(false)
    expect(wrapper.findComponent(Quiz).props('score')).toBe(0)
  })

  it('accumulates multiple score updates correctly', async () => {
    //purpose: test score addition logic
    const wrapper = mount(App)
    const quizComponent = wrapper.findComponent(Quiz)
    
    //emit 3 scores, 10 each
    await quizComponent.vm.$emit('updateScore', 10)
    await quizComponent.vm.$emit('updateScore', 10)
    await quizComponent.vm.$emit('updateScore', 10)
    
    //confirm score accumulates to 30
    //validate score and event logic
    expect(quizComponent.props('score')).toBe(30)
  })

  it('accumulates multiple incorrect answers correctly', async () => {
    //Purpose: test wrong answer counting
    const wrapper = mount(App)
    const quizComponent = wrapper.findComponent(Quiz)
    
    //emit two updateIncorrect events
    await quizComponent.vm.$emit('updateIncorrect', 1)
    await quizComponent.vm.$emit('updateIncorrect', 1)
    //complete quiz
    await quizComponent.vm.$emit('quizComplete')
    
    //check results
    const resultsComponent = wrapper.findComponent(Results)
    expect(resultsComponent.props('incorrect')).toBe(2)
  })
})

/*
  Key Testing Concepts Used:
  - mount(): Creates component instance for testing
  - findComponent(): Locates child components
  - $emit(): Simulates event emissions
  - await: Handles Vue's reactivity updates
  - props(): Accesses component props
  - exists(): Checks if component is rendered
  */

  /*
    Why Integration Tests Matter:

  They catch issues like:
  - Component communication failures
  - Event handling bugs
  - State management problems
  - Prop passing errors
  - Navigation logic issues
  */