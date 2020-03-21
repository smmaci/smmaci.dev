import React from 'react'

import './navigation.css'

export const Navigation = () =>
    <nav class="navigation">
        <ul>
        <li class="navigation-listitem"><a class="navigation-link" href="/">Home</a></li>
        <li class="navigation-listitem"><a class="navigation-link" href="/blog">Blog</a></li>
        <li class="navigation-listitem"><a class="navigation-link" href="/about">About</a></li>
        </ul>
    </nav>