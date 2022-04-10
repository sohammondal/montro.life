import { IconType } from 'react-icons'
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa'

export interface Item {
  text?: string
  href?: string
  Icon?: IconType
  items?: Item[]
}

interface Link {
  title: string
  items: Item[]
}

export const links: Link[] = [
  {
    title: 'Working Hours',
    items: [
      {
        text: 'Mon - Thurs : 6 am - 9 am',
      },
      {
        text: 'Fri : 7 am - 9 am',
      },
      {
        text: 'Sat : 7 am - 10 am',
      },
      {
        text: 'Sun : 9 am - 12 pm',
      },
    ],
  },
  {
    title: 'Popular Services',
    items: [
      {
        text: 'Health Yoga Class',
      },
      {
        text: 'Pregnancy Yoga',
      },
      {
        text: 'Deep Meditation',
      },
      {
        text: 'Yoga Therapy',
      },
      {
        text: 'Advanced Courses',
      },
    ],
  },
  {
    title: 'Contact Us',
    items: [
      {
        Icon: FaMapMarkerAlt,
        text: 'Kolkata, India',
        href: 'https://goo.gl/maps/2jJtv3uzfNTCPHhs6',
      },
      {
        Icon: FaPhoneAlt,
        text: '7003355200',
        href: 'tel:+917003355200',
      },
      {
        Icon: FaEnvelope,
        text: 'contact@montro.life',
        href: 'mailto:contact@montro.life',
      },
      {
        items: [
          {
            text: 'WhatsApp',
            Icon: FaWhatsapp,
            href: 'https://api.whatsapp.com/send?phone=917003355200&text=Hi',
          },
          {
            text: 'Instagram',
            Icon: FaInstagram,
            href: 'https://www.instagram.com/montro.life/?hl=en',
          },
          {
            text: 'LinkedIn',
            Icon: FaLinkedinIn,
            href: 'https://www.linkedin.com/company/montro.life',
          },
          {
            text: 'Youtube',
            Icon: FaYoutube,
            href: 'https://www.youtube.com/channel/UCMj9VWaEvkPH1WPIaT68Q8Q',
          },
          {
            text: 'Facebook',
            Icon: FaFacebookF,
            href: 'https://www.facebook.com/montro.life/',
          },
        ],
      },
    ],
  },
]
