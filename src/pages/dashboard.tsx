import { NextPageContext } from 'next'
import nookies, { setCookie } from 'nookies'
import React, { useEffect } from 'react'

import { getUser } from 'api/axios'
import { useAppContext } from 'context'
import { defaultCookieOptions } from 'helpers/user'
import { DashboardNav } from 'sections/Dashboard/Header'
import { UserOnboardingForm } from 'sections/Dashboard/UserOnboardingForm'
import { ClientView } from 'sections/Dashboard/Views/ClientView'
import { DefaultView } from 'sections/Dashboard/Views/DefaultView'
import { TrainerView } from 'sections/Dashboard/Views/TrainerView'
import { UserInfo } from 'types'

const Dashboard = ({ user }: { user: UserInfo }) => {
  const { user: appUser, setUser } = useAppContext()

  useEffect(() => {
    setCookie(null, 'user', JSON.stringify(user), defaultCookieOptions())
    setUser(user)
  }, [user, setUser])

  const renderRoleBasedView = (role: string | undefined) => {
    switch (role) {
      case 'client':
        return <ClientView />

      case 'trainer':
        return <TrainerView />

      default:
        return <DefaultView />
    }
  }

  return (
    <>
      <DashboardNav />
      <UserOnboardingForm />
      {renderRoleBasedView(appUser?.role?.type)}
    </>
  )
}

export default Dashboard

export const getServerSideProps = async (ctx: NextPageContext) => {
  const cookies = nookies.get(ctx)
  const user = JSON.parse(cookies.user)

  if (!cookies.jwt)
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: '/',
      },
    }

  if (!user?.role || !['client', 'trainer'].includes(user?.role?.type)) {
    const { data } = await getUser(
      'me',
      {
        populate: ['role'],
      },
      {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      }
    )

    return {
      props: {
        user: data,
      },
    }
  }

  return {
    props: {
      user,
    },
  }
}
