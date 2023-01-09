import Link from 'next/link'
import React from 'react'

function Nav(props: { name: string }) {
	return <Link href={`/${props.name}`}>{props.name}</Link>
}

export default Nav
