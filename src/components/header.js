import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#160e21',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
      }}
    >
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontFamily: 'Futura',
            fontWeight: 'normal',
            textRendering: 'optimizeLegibility',
            fontSize: '2.25rem',
            lineHeight: '1.1'
          }}
        >
          nuzzlebugs
        </Link>
    </div>
  </div>
)

export default Header
