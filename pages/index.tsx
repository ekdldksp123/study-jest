
import type { NextPage } from 'next'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { beforeAuthorize } from '../src/test/mock/auth_result'
import Router from 'next/router'

const App: NextPage = ({ status }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <>Main</>
}

export default App

export const getServerSideProps: GetServerSideProps = (): any => {
    const authStatus = beforeAuthorize()

    if (!authStatus) return {
        redirect: {
            permanent: false,
            destination: '/login'
        },
        props: { status: 'non-member' },
    }

    return { props: { status: 'member' } }
}