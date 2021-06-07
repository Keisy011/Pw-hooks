import './Content.css'
import React from "react"
import {Switch, Route } from 'react-router-dom'
import Hooks from '../../views/Contents/Hooks'
import UseState from '../../views/Contents/UseState'
import NaoEncontrado from '../../views/Contents/NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Hooks />
            </Route>
            <Route exact path="/UseState">
                <UseState />
            </Route>
            <Route exact path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content
