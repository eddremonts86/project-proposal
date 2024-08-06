import React from 'react'
import ReactDOM from 'react-dom'

import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js'

import './styles/reset.css'
import './styles/iframe.css'

import Component1 from '../src/components/containers/FlexContainer.tsx'
import Component2 from '../src/components/globals/Table/components/actions/TableLoading.tsx'
import Component0 from '../src/components/globals/Table/components/filters/TableFilters.tsx'

window.reactComponents = {}

window.vueComponents = {}

window.React = React

window.ReactDOM = ReactDOM

window.ReactWrapper = ReactWrapper

reactComponents['TableFiltersProps'] = Component0

reactComponents['exports'] = Component1

reactComponents['exports'] = Component2
