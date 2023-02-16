import { Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { ReactNode } from 'react'
import { DropdownMenuArrow, DropdownMenuContent, TriggerButton } from './styles'

interface DropdownMenuProps {
  children: ReactNode
  trigger: ReactNode
  type: 'navbar'
}

export function DropdownMenu({ children, trigger, type }: DropdownMenuProps) {
  return (
    <Root modal={false}>
      <Trigger asChild>
        <TriggerButton title="Abrir menu" type={type}>
          {trigger}
        </TriggerButton>
      </Trigger>

      <Portal>
        <DropdownMenuContent sideOffset={2} type={type}>
          {children}

          <DropdownMenuArrow type={type} />
        </DropdownMenuContent>
      </Portal>
    </Root>
  )
}
