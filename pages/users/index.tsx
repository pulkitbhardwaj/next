//@ts-nocheck

import Link from 'next/link'
import { QueryRenderer, graphql } from 'react-relay'
// import { graphql } from 'babel-plugin-relay/macro'
import { User } from '../../interfaces'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { environment } from '../../environment'
import { FC } from 'react'
import { usersQueryResponse } from '../../__generated__/usersQuery.graphql'

type Props = {
	items: User[]
}

const Users: FC<Props> = () => {
	const query = graphql`
		query usersQuery {
			users {
				id
				firstName
				email
			}
		}
	`

	const renderQuery = ({ error, props }: usersQueryResponse) => {
		if (error) return 'Loading...'

		return <List items={props.users} />
	}

	return (
		<Layout title="Users List | Next.js + TypeScript Example">
			<h1>Users List</h1>
			<p>
				Example fetching data from inside <code>getStaticProps()</code>.
			</p>
			<p>You are currently on: /users</p>
			<QueryRenderer
				environment={environment}
				query={query}
				variables={{}}
				render={renderQuery}
			/>

			<p>
				<Link href="/">
					<a>Go home</a>
				</Link>
			</p>
		</Layout>
	)
}

export default Users
