import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter() })

const props = {}

describe('Search_Bar', () => {
  it('renders', () => {
    expect(1).to.equal(1)
  })

  context('Methods', () => {
    it('Some Method', () => {
      expect(1).to.equal('')
    })
    it('Some Other Method', () => {
      expect(1).to.equal('')
    })
  })
})
