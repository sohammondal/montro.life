import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import nookies, { setCookie } from 'nookies'
import React, { useEffect, useState } from 'react'
import { css } from 'styled-components'

import { authCallback } from 'api/axios'
import { Loader } from 'components/Loader'
import { H3, Body } from 'components/Typography'
import { useAppContext } from 'context'
import { defaultCookieOptions } from 'helpers/user'

const copyCss = css`
  .contents {
    padding: 50px 10px;
    .loader-copy {
      margin-top: 20px;
      color: ${(props) => props.theme.colors.Caramel};
      text-align: center;
    }
  }
`

const Redirect = () => {
  const router = useRouter()
  const { setUser } = useAppContext()
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        if (!router.query.access_token) return

        const { data } = await authCallback(router.query.provider as string, {
          access_token: router.query.access_token,
        })

        setCookie(null, 'jwt', data.jwt, defaultCookieOptions(data.jwt))
        setCookie(
          null,
          'user',
          JSON.stringify(data.user),
          defaultCookieOptions(data.jwt)
        )

        setUser(data.user)

        setShowLoader(false)

        router.replace('/dashboard')
      } catch (error) {
        console.error('[ERROR] Failed to fetch jwt token')
        console.error(error)
      }
    })()
  }, [router, setUser])

  return (
    <Loader isOpen={showLoader} css={copyCss}>
      <div className="loader-copy">
        <H3>
          Login Successful
          <br />
        </H3>
        <Body font="AfterGlow">Redirecting to dashboard...</Body>
      </div>
    </Loader>
  )
}

export default Redirect

export const getServerSideProps = async (ctx: NextPageContext) => {
  const cookies = nookies.get(ctx)

  if (cookies.jwt && cookies.user)
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: '/dashboard',
      },
    }

  if (!ctx.query.access_token)
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: '/',
      },
    }

  return {
    props: {},
  }
}
