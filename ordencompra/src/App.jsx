import React from 'react'
import { ApplicationContextComponent } from './context/ApplicationContext'
import Layout from './Components/Layouts'

export default function App() {

  return (
    <ApplicationContextComponent>
      <Layout></Layout>
    </ApplicationContextComponent>
  )
}
