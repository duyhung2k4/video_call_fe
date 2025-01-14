import {
  Icon,
  IconPhoneCall,
  IconPlug,
  IconProps,
} from "@tabler/icons-react"

export type ObjectRouter = {
  href: string
  name?: string
  type: "public" | "protected"
  icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>
  hash?: Record<string, string>
}

export type FieldRouter =
  | "CONNECTION"
  | "CALL"
export const ROUTER: Record<FieldRouter, ObjectRouter> = {
  CONNECTION: {
    href: "/",
    type: "protected",
    name: "Kết nối",
    icon: IconPlug
  },
  CALL: {
    href: "/call",
    type: "protected",
    name: "Call",
    icon: IconPhoneCall
  }
}