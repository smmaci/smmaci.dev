import React from 'react'
import { Link } from 'gatsby'

import './navigation.css'
import GithubLogoPNG from './GitHub-Mark-32px.png'

export const Navigation = () =>
    <nav class="Navigation">
        <input type="checkbox" id="Navigation-toggle" />
        <label for="Navigation-toggle" class="Navigation-toggleLabel">Menu</label>
        <ul class="Navigation-list">
            <li class="Navigation-listitem"><Link activeClassName="Navigation-link" class="Navigation-link" to="/">Home</Link></li>
            <li class="Navigation-listitem"><Link activeClassName="Navigation-link" class="Navigation-link" to="/about">About</Link></li>
            <li class="Navigation-listitem"><Link activeClassName="Navigation-link" class="Navigation-link" to="/side-projects">Side Projects</Link></li>
            <li class="Navigation-listitem"><a href="https://github.com/smmaci"><img src={GithubLogoPNG} alt="The Github Logo"/></a></li>
        </ul>
    </nav>