import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu'
import router from 'next/router'
import { destroyCookie } from 'nookies'
import React from 'react'

import { Body } from 'components/Typography'
import { useAppContext } from 'context'
import { parseFullName } from 'helpers/name'

import { DashNav, containerStyles } from './styles'

import { Header } from '../../Header'

export const DashboardNav = () => {
  const { user, setUser } = useAppContext()
  return (
    <Header
      outerStyles={containerStyles.outerStyles}
      innerStyles={containerStyles.innerStyles}
    >
      <DashNav>
        <Menu
          menuButton={
            <MenuButton className="avatar">
              {parseFullName(user?.name || '')?.initials}
            </MenuButton>
          }
          offsetY={12}
        >
          <MenuItem className="profile-info">
            <div>
              <Body bold>{user?.name}</Body>
              <Body variant="sm">{user?.email}</Body>
            </div>
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onClick={() => {
              window !== undefined && router.push('/')
              setTimeout(() => {
                destroyCookie(null, 'jwt')
                destroyCookie(null, 'user')
                setUser(null)
              }, 1000)
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </DashNav>
    </Header>
  )
}
