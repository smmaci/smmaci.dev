import React from 'react'
import { Link } from 'gatsby'

import './navigation.css'
import GithubLogoPNG from './GitHub-Mark-32px.png'

export const Navigation = () =>
    <nav class="Navigation">
        <ul class="Navigation-list">
            <li class="Navigation-listitem"><Link activeClassName="Navigation-link" class="Navigation-link" to="/">Home</Link></li>
            <li class="Navigation-listitem"><Link activeClassName="Navigation-link" class="Navigation-link" to="/about">About</Link></li>
            <li class="Navigation-listitem"><Link activeClassName="Navigation-link" class="Navigation-link" to="/side-projects">Side Projects</Link></li>
        </ul>
        <a href="https://github.com/smmaci"><img src={GithubLogoPNG} alt="The Github Logo"/></a>
    </nav>