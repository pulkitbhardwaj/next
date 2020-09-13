import React from 'react'
import { useEffect } from 'react'
import { ThemeProvider } from 'react-jss'

import { AppProps } from 'next/app'
import { theme } from '../theme'
import { createClient, Provider } from 'urql'

const client = createClient({
	url: 'http://localhost:4000',
	fetchOptions: {
		credentials: 'include',
	},
})

export default function App({ Component, pageProps }: AppProps) {
	// For React JSS
	useEffect(() => {
		const style = document.getElementById('server-side-styles')

		if (style) {
			style.parentNode?.removeChild(style)
		}
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<Provider value={client}>
				<Component {...pageProps} />
			</Provider>
		</ThemeProvider>
	)
}
