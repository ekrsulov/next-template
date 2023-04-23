import {
  Laptop,
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path fill="currentColor" d="M3.6 1.6C1 4.1 1.8 7.4 6 12.3c3.6 4.1 4 5 4 9.9 0 6.2 2 9.8 5.4 9.8 3.8 0 5.6-3 5.6-9.4 0-5.2.3-6 4.1-10.1 8.1-8.8 2.4-17.2-6.4-9.5-3.4 2.9-3.4 2.9-6.2 0C9.3-.3 6-.8 3.6 1.6z"/>
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  headImg: (props: LucideProps) => (
    <svg viewBox="0 0 512 640" {...props}>
      <g>
        <path d="M242.8 8.6c-.5.4-.8 2-.8 3.5 0 2.1-.4 2.7-1.5 2.3-4.4-1.7-30.5 8.6-30.5 12.1 0 1.8-1.3 3.3-5.2 5.8-2.9 1.9-6.2 4.4-7.2 5.6-2.4 2.6-4 2.8-2.7.2 2.7-5-4.8-4.6-8.8.5-2.1 2.7-2.9 7.4-1.2 7.4.6 0-1.3 2.4-4.1 5.2-7 7.3-13.9 16.8-13.6 18.7.1.9-.5 3.2-1.5 5.3-2 4.2-1.4 6.6 2 7.9 2.1.8 2.2 1.2 1.2 3-.8 1.6-.8 2.7.1 4.4 1 1.9.8 3.5-1.3 9.6-3.5 10.5-4.1 13.6-2.7 16.8 1.3 3.3-4.2 16.5-8.3 19.8-8.6 6.9-10.2 21.3-2.8 25.2 1 .6 2.1 2.1 2.5 3.5.3 1.3 2.6 4.4 5.2 6.8 8.1 7.8 7.5 11.8-4.2 28.1-11.4 15.9-11.9 23.9-1.9 30.4 12.4 8.2 12.5 17.7.4 28.5-7.1 6.3-9.9 10.1-9.9 13.6 0 1.1-1.5 3.9-3.4 6.2-4.6 5.8-5.3 10.1-2.7 14.6 1.2 1.9 2.1 4.8 2.1 6.5 0 1.6.4 2.9.9 2.9 1.2 0 2.3-2.9 1.5-4.1-.8-1.3.3-1.1 3.5.5 5.8 3 5.5 3.8-3.1 9-26 15.5-33.5 21.8-27.8 23.3 2.4.6 2.5 1.2.7 3.8-.8 1.1-2.1 4-3.1 6.5-2.6 6.7-17.4 41.6-20.3 48-1.4 3-3.6 8.2-4.9 11.5-9.6 25.4-25.5 59.9-28.2 61.4-1.4.8-1.4 1.1.2 3.5 1.7 2.7 1.7 2.7-1.3 5.5-1.7 1.6-3.1 3.6-3.1 4.4 0 1.2-.9 1.4-3.9 1-5.5-.8-6.6 2.7-1.6 5.5 1.1.5 2 2.1 2 3.4 0 2.3 16.8 12.1 38.7 22.6 4.3 2 8.1 4.5 8.4 5.5.3 1 1.6 2.2 2.8 2.7 2.5.9 0 17.5-3.2 21.3-1.7 2-3.9 21-6.7 56.7-2.4 30.9-2.1 45 .8 45 2.3 0 2.3 0 3.6-22.3 1.2-22.4 1.7-27.5 5.2-53.7 1-8 2.4-18.3 3-23 1.9-15.4 3.1-22 3.8-22 1.7 0 27.8 13 29 14.4.8.9 2 1.6 2.9 1.6 1.2 0 1.4 1.2.8 7.8-.3 4.2-.6 12.4-.5 18.2 0 18.1-4.1 53.3-8.2 69.2-2.4 9.6-2.4 9.8.5 9.8 5.4 0 12.7-49.5 12.7-86.5 0-18.4.2-20.1 2-21.8 2.1-2 2.5-4.2.8-5.2-.7-.5-.5-1.3.6-2.5 1-1.1 1.5-3 1.3-4.7-.2-1.5.2-3 .7-3.3 3.5-1.7.1 56.6-5.1 89-3 18-2.8 18.5 5.8 17.4 4.4-.6 4.8-.5 4.8 1.4 0 2.6 1.6 3.7 2.4 1.7.3-.9 1.8-1.5 3.4-1.5 1.6 0 4.7-1.3 7-3 5.2-3.7 5.1-3.8 8.4 1 3.2 4.6 6.1 5.1 10.1 2 3.1-2.5 3.1-2.5 6.8.2 3 2.2 3 2.2.8 3.9-2.5 1.9-2 4.9.9 4.9 2.3 0 7.2-5 7.2-7.4 0-.9.4-1.5 1-1.1.5.3.7 1.2.4 1.9-.6 1.6 2.1 8.6 3.4 8.6.4 0 9.3-.8 19.8-1.9 15.2-1.5 24-1.8 44.9-1.4 39.1.7 37 1.1 36-6.6-.7-5.5 1-3.6 3 3.4 1 3.2 1.7 4 3.6 4 2.8 0 3.9-3.4 1.5-4.7-2.5-1.4-1.9-3.3 1.8-5 1.8-.9 4.9-3 6.9-4.7 4.2-3.7 4.7-3.8 4.7-.6 0 3.2 3.4 3.4 9.1.5 4.5-2.3 5.9-2 5.9 1.5 0 3 1.6 4.1 3.6 2.4 1.4-1.2 4.3 1 4.4 3.3 0 1.9 4.6.6 5.5-1.5.6-1.2 2-2.3 3.3-2.5 2.6-.4 2.8-2.2 1.2-13.4-1.2-8.3-7-77.1-6.6-77.6.2-.1 1.4.2 2.8.7 4 1.5 5.1 11.1 2.3 19.1-3.4 9.6 10.2 90 15.1 90 2.8 0 2.9-.5.8-9-4.9-20.9-8.6-46.7-8.9-62.5-.1-7.7-.6-18.5-1-24.1-.8-10.1-.8-10.1 6.1-12.7 19.7-7.4 25.8-9.6 26.1-9.3.2.1.7 3.8 1.3 8 .5 4.3 1.2 8.2 1.6 8.7.3.5 1 3.5 1.4 6.7.5 3.1 1.6 10.2 2.5 15.7 1.5 9.8 6.7 55.3 8 70.7.6 7.5.8 7.8 3.2 7.8 3.1 0 2.9-4.7-1.2-42.5-4.9-44.1-5.5-48.9-6.5-49.5-.5-.3-1.8-4.8-2.9-10-3.3-16.9-3.3-15.8-.9-16.6 2-.6 2-.8.5-1.9-1.5-1.1-.1-1.9 10-6 6.5-2.7 15.8-6.8 20.7-9.2 4.9-2.3 9.5-4.3 10.1-4.3 1.3 0 10.5-8.8 10.5-10 0-.4-.7-1.3-1.5-2-1.4-1.2-1.4-1.5.2-3.2 2.1-2.4-.6-6.3-2.9-4s-6.5-3-4.7-5.9c.5-.8.1-2.6-1-4.4-1-1.6-3.5-7.5-5.6-13-2-5.5-4.6-12.3-5.8-15-1.1-2.8-3.5-9.3-5.2-14.5-1.8-5.2-6.4-18.7-10.2-30-9.1-26.9-15.8-47.9-17.9-56.4-1-3.8-3.2-9.1-5.1-11.9-1.8-2.7-3.2-5-3.1-5.1 4.2-1.6 6.1-4.6 3-4.6-1.1 0-6.4-3-11.9-6.6-5.4-3.6-10.5-6.9-11.3-7.4-1.3-.7-1.2-1.4.3-5.7 2.5-7.1 2.2-12.1-.9-15.4-2.5-2.6-2.5-2.7-1-7.3 4-11.8 1.7-18.1-9.2-25.4-8.1-5.4-8.2-5.8-3.8-14.5 5.9-11.5 3.6-23.2-5.5-28.8-4.2-2.6-4.5-3.1-5.4-10.5-.6-4.7-.4-5.3 2.9-9.5 11.4-14.3 14.3-24.7 9.7-34.3-2.2-4.4-8.6-10.6-11.1-10.6-1 0-1.1-1.5-.5-6.3.9-7.5.9-8.9-.8-19.9-1.2-7.9-1.1-8.8.5-10.8 1.3-1.6 1.8-4 1.8-8.3 0-3.9.5-6.6 1.5-7.7 2.4-2.6.6-13.9-2.8-17.9-1.4-1.8-3.2-5-3.9-7.2-.6-2.2-1.9-4.6-2.8-5.2-.9-.7-2.6-2.8-3.7-4.7-1.2-1.9-3.8-5.1-5.7-6.9-2.5-2.4-3.4-4.1-3-5.4.6-1.9-7.7-11.9-10.6-12.6-.8-.2-5.5-3-10.3-6.2-8.8-5.9-11-6.8-12.2-4.9-.8 1.3-6.1 1.3-8.6-.1-1.6-.8-1.8-1.3-.9-2.4 1.6-1.9.4-3.5-2.6-3.5-2 0-2.4-.4-1.9-1.9.4-1.2 0-2.1-1.2-2.7-2.3-1-41.6-1.8-42.5-.8zm19.7 33.2c7.7.6 12.5.5 13.3-.1.8-.7 2.5-.5 5 .6 2 .8 5.6 2 8 2.6 4.2 1.2 5.3 2.5 3 3.4-2 .8 1.3 2.8 3.5 2.1 1.2-.4 2.9.4 4.8 2.2 1.6 1.6 6.4 4.9 10.7 7.5 7.2 4.4 7.8 5 9.9 10.5 2.2 5.7 4.8 8.8 6.4 7.8 1.3-.7 8.9 10 8.9 12.7.1 1.3 1 5.8 2 9.9 2 7.5 2 7.5 1.7 1.8-.3-7 .4-6.4 2.7 2.3 1.8 6.7 1.1 13-3 27.6-.4 1.6.4 3.2 3.5 6.6 2.3 2.4 4.1 5.1 4.1 6 0 1 1.4 2 3.8 2.7 10.2 2.7 14.3 15.9 8.2 26.5-4.8 8.3-6 8.8-6 2.4 0-7.7-2.5-12-8.1-13.8-7.5-2.4-11.8-4.3-13.4-6.1-.9-1-4.5-3.2-8-5-11.6-5.9-19.3-24.7-9-21.9 2.6.8 4 .7 5.1-.2 2.5-2 1.6-3.9-1.7-3.9-7.5 0-13.1-11-9.2-17.9 2.4-4.1 1-5-4-2.3-7 3.7-8 3.1-4.2-2.4 2.7-4 4.1-9.5 3-12.1-.5-1.4-1.2-.4-2.5 3.6-2.6 7.6-7.7 11.4-9.9 7.3-.8-1.5-.1-3.6 2.9-9.3 4.3-8.1 4.8-10.8 2.4-14.4-1.2-1.9-1.3-2.8-.4-4.5 1.5-2.8 3.3-2.1 4.5 1.8 1 3.6 2.5 4.3 2.5 1.2 0-7.1-7.9-9.9-10.7-3.8-3.7 8-3.5 7.9-12.3 10.9-12 4.1-15.4 3.7-11.5-1.5 3.2-4.2 2-8.6-2.4-8.6-4.6 0-5.8 1.3-6.3 6.5-.4 4.7-5 6.2-5.6 1.7-.2-1.2.1-2.2.7-2.2s1.1-.7 1.1-1.5c0-1.7-3.5-2.1-4.5-.5-1.3 2.1-2.2.9-2.2-2.8 0-7-1-8.5-5.2-7.8-19.9 3.1-46.4 16.6-41.8 21.2 1.1 1.2 1.7 1.4 1.7.6 0-4.1 16-12.9 30.3-16.7 12-3.3 11.7-3.3 11.7 1.9 0 5.6-.7 6.1-11.3 8.2C222.2 85 218 89.2 218 98.9c0 3.1-.3 3.9-1.5 3.5-.9-.4-2.3.9-4.2 3.9-2.9 4.9-14.6 12.4-20.9 13.4-4.7.8-8.4-3.1-8.4-8.7 0-2.9-.4-4-1.5-4-3 0-2 9.7 1.5 13.1 2.5 2.6 2.8 3.3 1.8 5.4-.6 1.3-.7 3.2-.3 4.2.6 1.5.9 1.2 1.8-1.7 1.8-5.3 2.6-4.9 6 3.1 1.2 2.7 2.3 3.8 4.7 4.2 4.1.9 2.7 3.6-7 14.1-4.7 5.1-6.8 8.1-6.4 9.1.4.9-.2 2.5-1.4 3.8-2.3 2.4-6.6 17-4.9 16.4.6-.2 1.8-3 2.7-6.3 2.7-10.1 3.8-10.6 8.8-3.9 2.7 3.7 3.2 5.3 3.2 9.9 0 4.9.4 6 3.1 8.8 3.1 3.3 3.1 3.3.9-.5-1.7-2.9-2.1-4.6-1.5-7.4.8-4.5 1.9-3.3 3.4 3.7.6 3 1.4 6.6 1.7 8 1.5 5.9.7 11-2.4 16-1.7 2.7-2.7 5.2-2.3 5.5 1.3.7 5.9-6.9 7.3-12 2.3-8.7 4-4.9 3.2 7.7-.4 7.4-1 10.1-3.1 14-2.8 5.2-2.5 9.6.7 10.6 1.2.4 1.3.2.3-.9-1.9-1.9-1.6-4.5 1.2-9.7 1.5-2.8 2.5-6.3 2.5-8.9 0-10.1 2.2-11.2 7.3-3.6 4.8 7 4.2 10.4-3.6 22.1-5 7.4-5 7.4-2.1 12.8s2.9 5.4-.2 11.2c-1.7 3.1-3.4 7.4-3.8 9.4-.5 3-2.3 5.2-9.6 11.8-4.9 4.5-8.7 8.7-8.4 9.4.3.8-2.6 2.6-7.6 4.8-10.9 5-10.7 3.7 2.3-12.6 11.5-14.5 12.9-19.8 8-30.2-3.1-6.4-4.3-5-1.7 2.1 3.9 10.8 2.7 14.3-10.9 30.8-3.1 3.7-6.5 8.8-7.6 11.2-3.9 8.8-17.6 12.1-15.2 3.7 1.4-4.9 4.1-9.1 9.1-14.7 4.7-5.2 7.1-10.9 5.5-13.4-1.2-2.1-2-1.1-2 2.8-.1 3.3-.9 4.8-5.8 10-3.5 3.8-6.3 8-7.4 11.1-2 5.8-3.3 6.1-7.4 2.1-4.9-5-2.4-13.4 4.8-16.2 3.1-1.2 4.1-3.9 1.9-5.4-2.4-1.8-1.2-3.8 5-8.6 14.2-10.9 15.7-29.2 3-35.6-10.1-5.1-9.2-13.9 2.7-28.7 10.9-13.5 11-21.5.6-31.8-2.5-2.4-3.9-4.8-3.9-6.4 0-1.7-.8-2.7-2.5-3.4-7.4-2.8-1-19.6 9.2-23.9 6.9-2.9 9.9-14.8 5-19.9-3-3.2-.8-11.5 5.8-22.3 1.8-3 4.3-8 5.5-11 4-10.4 16.6-23.4 27.5-28.3 2.8-1.3 6.5-3.6 8.4-5.2 2.3-1.9 3.6-2.4 3.9-1.6.6 1.8 12.4-.9 24.7-5.7 1.1-.5 2.2-.5 2.5 0 .3.5 6 1.2 12.5 1.7zM287 95.2c-1.2 1-3.2 1.8-4.4 1.8-4.3 0-6.5 7.4-3.3 11 .6.8.2.6-1-.4-3.4-2.8-2.8-.4.6 2.9 3 2.8 4.3 2.9 11.1 1.3.9-.2 1.6.6 1.8 2.1.3 2 .1 2.3-1.5 1.6-4.5-1.9-5.9-1.9-4.2-.1.9.9 2.6 1.8 3.8 1.9 1.4.1 2.9 1.3 3.8 3.2 2.4 4.7 4.3 6.4 8.5 7.5 4 1.1 5.5 3.6 1.6 2.7-9.4-2.3-27.2-3.5-28.2-1.8-3.4 5.5-1.5 6.6 13 7.2 15.2.7 17.8 1.5 18.8 5.5 1 3.7.6 3.8-7.8 2.5-6.9-1.1-7.9-1.1-12.1.8-4.6 2-6.1 3.8-2.5 2.8 1.8-.5 2 0 2 3.8 0 12.8 8.9 13.2 9.3.4.2-5 2.9-7.1 4.3-3.4.4 1 1.3 1.3 2.6.9 2.9-.9 6.7 1.5 8.3 5.3.9 2.2 2.1 3.3 3.4 3.3 2.6 0 2.6 1.1 0 9.6-6.2 20.1-17.5 34.6-38.4 49.3-18.2 12.9-18.4 12.9-27.5 7-26.7-17.2-39.3-33.5-44.9-58.1-3.3-14.6-3.4-15-1.1-14.3 2.6.8 2.6-.7 0-2.3-2.4-1.5-2.8-6.2-.5-6.2.9 0 1.5-.6 1.4-1.3-.1-.6-.1-1.7 0-2.3.1-1.4 12.4-3.3 27.6-4.2 9-.6 11-1 11.3-2.3.9-4.6-7.9-6.1-22.8-4-7.1 1.1-7 1.2-1.6-6 3.6-4.8 4.6-6.9 4.6-10 0-3.8 0-3.8 3.5-1.8 1.9 1.2 3.5 2.5 3.5 3 0 2.1 2.9.6 4-2.1 1.3-3.2 3-4 3-1.4 0 .8-1.3 2.9-3 4.6-3.3 3.2-3.6 3.8-2 3.8 6 0 7.5-9.3 2.5-14.9-4.5-5-4.4-5.8 1-7.2 2.5-.6 4.8-1.5 5.1-2 .3-.5 2.3-.9 4.6-.9 3.4 0 3.9.2 2.8 1.5-1.3 1.6-.6 4.8 1.6 7 3 3 8.6 1.7 16.8-3.9 2.1-1.4 5.6-2.5 8.8-2.9 3-.3 7.2-1.4 9.4-2.4 4.4-2.1 5.9-.9 2.4 1.9zm-69.4 14.2c1.7 6.8-3 12.6-10.2 12.6-4.4 0-4.4-.1 2.1-6.5 3-2.9 5.5-6 5.5-6.9 0-2.5 1.9-1.9 2.6.8zm84.4 4.1c.4 1.7 1.4 4.4 2.3 6.2 2.1 3.9 2.1 4.3.3 4.3-2.8 0-6.6-5.9-6.6-10.2 0-4.9 3-5.1 4-.3zm45.9 16.7c.1 7.7-.8 9.6-2.9 5.9-1.3-2.6-1.3-8.5.2-13.4 1.6-5.4 2.6-2.6 2.7 7.5zm-11.5 35.3c1.1.8 3.9 1.5 6.2 1.5 4 0 6.3 1.8 4.9 4-.3.5.6 2.5 2 4.6 3 4.5 3.1 4.9.4 10.4-4.6 9.6-2.8 20.5 4.3 26.1 8 6.4 9.2 16.7 3 26.3-3.4 5.4-4.8 10.2-3.7 13.5.9 2.9 2.5 2.6 2.5-.5 0-2.6 0-2.6 2.6.6 1.5 1.7 4.3 3.9 6.3 4.9 7.1 3.7 9.6 9.9 7.1 17.5-1 3.2-3 5-3 2.8 0-2.6-10.5-4.3-12.8-2-2 2-1.4 2.3 3.8 2 5.7-.4 8 .8 8 4.4 0 2.2 1 3.5 5.5 7.3 1.9 1.5 1.7 7.2-.4 12.4-1.1 2.8-1.1 2.8-11.9-2.8-5.9-3.1-14.5-6.7-19.1-8-4.6-1.4-9.1-3.1-10-3.9-.9-.8-3.4-1.9-5.6-2.5-6.9-1.9-8.4-4.6-8.5-15.2 0-5.3-1.9-7.5-6.5-8.1-3.7-.4-4.4-3.2-2.1-8.9 2.6-6.4 2.1-8.7-2.9-14-5.1-5.4-5.3-6.4-2.5-11.6 1.1-2.1 2-4.7 2-5.8 0-3.3 9.2-20.4 13.4-24.8 4.7-4.9 6.2-7.5 7.6-12.8.6-2.2 1.5-3.7 2-3.4 1.9 1.1 1 9-1.5 14-3.2 6.5-3.1 7.6.5 10.8 3.8 3.4 3.7 3.7-.5 11.3-3.5 6.2-4.5 11.7-2.4 13 .7.4.9 2.2.6 4.5-.5 3.9.5 5.3 1.7 2.3.9-2.4.7-5.4-.5-8.9-1-2.8-.8-3.8 2.5-10.1 4.2-8.2 4.3-9.4 1.5-12-3.9-3.5-4.2-5.1-1.8-10.1 2.7-5.7 3.8-15.1 1.8-16.3-1-.7-1-1.4-.1-3.5.7-1.4 1.2-4.4 1.2-6.5 0-4.3 1.2-5 4.4-2.5zm-12.8 20.3c-.4 1-3.1 5.2-6.1 9.2-3 4-6.9 10.2-8.6 13.6-3.9 7.7-4.9 7.6-2-.1 3.6-9.5 11.9-24.9 10.8-19.8-.7 3.1-.4 2.9 2.7-1.8 2.8-4.1 4.3-4.7 3.2-1.1zM300.9 226c-.9 2.5-1.4 6.1-1.2 8.2.5 3.8-4.1 19.8-5.7 19.8-1.3 0-2.3-15.5-1.1-17.8.6-1.1 1.1-3.1 1.1-4.3 0-1.3 1.7-5.9 3.8-10.3 3.7-8 3.7-8 4.2-4.1.4 2.5 0 5.7-1.1 8.5zm-77.7-1c-.1 1.9-.3 8-.5 13.5s-1 11.1-1.7 12.4c-1 2-1 3.4.1 7.9 1.5 6.2-.5 8.7-12.8 17-2.9 1.9-5.3 3.8-5.3 4.3 0 .9-10.3 6.9-11.9 6.9-2.6 0-.6-2.9 6.7-10 6.5-6.3 8-8.3 9-12.4.7-2.7 2.2-6.3 3.4-7.9 2.7-3.8 2.7-8.4-.2-13.5-2.2-3.9-2.2-3.9 1.8-9.8 2.1-3.2 5-8.7 6.3-12.2 2.4-6.3 2.4-6.3 3.8-3 .8 1.8 1.4 4.9 1.3 6.8zm6.9 4c2.6 0 .1 19.5-3.2 24.9-5.8 9.3-6 .6-.1-10.2 1.4-2.6 2.3-5 1.9-5.3-.3-.3-1.3.9-2.3 2.8-3.4 6.4-3.8-2.1-.6-10.6 2.2-5.5 2.8-6.4 3-4.2.2 1.4.8 2.6 1.3 2.6zm17.2 3.3c3.7 2.6 7.2 4.7 7.8 4.7.6 0 .5.9-.2 2.2-.9 1.9-.9 2.1.2 1 2.2-2.1 3.3-1.3 1.3 1-1.9 2.2-1.9 2.2 1.1.3 1.7-1 4.9-2.9 7.2-4.2 2.2-1.3 4.7-3 5.3-3.8.7-.8 1.7-1.5 2.3-1.5.5 0 .3.8-.6 1.8-2.4 2.7-2.2 4.5.4 3.7 2-.7 2.1-.5 1.5 2.1-.4 1.6-1.4 6.9-2.2 11.7-.8 4.9-2.4 10.7-3.5 12.9-1.1 2.2-1.8 4.2-1.5 4.5 1.1 1.1 4.7-8.3 6-15.7 1.6-9.2 5.3-20.7 6.8-21.7.8-.4.9 0 .4 1.3-.4 1-1.2 5.5-1.7 9.9-.8 6.9-1.6 10.5-4.6 21-.3 1.1-.3 1.8 0 1.5 1.4-1.3 5.8-16.6 6.8-23.6 1.8-13.5 4.2-14.5 5.4-2.4 2.1 22.8 8.5 40.2 16 43.5 5.3 2.3 5.2 2.1 2 8.4-3 6-2.9 6-19.4 6.7-13.2.6-13.7.7-16.6 3.5-5.2 4.8-11.5 6.1-11.5 2.4 0-.9-.4-1.4-.9-1.1-.4.3-2.9-1.5-5.6-4-4.6-4.5-4.8-5-3-9.9.7-1.9.6-1.8-1.3.2-1.2 1.2-1.9 2.8-1.6 3.6.9 2.6-14.5 6.1-23.9 5.4-17.6-1.2-13.5-9.8 7.9-16.7 2.1-.7 4.2-1.5 4.7-1.9.7-.7 2.7-16.3 4.7-37.1 1.2-13.5 1.9-16.8 2.9-15.3.3.5 3.7 3 7.4 5.6zm59.2 8.7c2.9 3 2.9 3 1.1 8.5-1.3 3.8-1.7 6.9-1.3 10.3.9 7.7-.9 9.4-6.2 5.9-5.1-3.4-5.1-4.6-1-17.8 3.6-11.1 3.5-11 7.4-6.9zm9.1 29.5c.6 3.3 1.4 7 1.8 8.2.9 2.9-.3 2.9-4.7.3-2.5-1.5-3.6-2.9-4-5.3-1.5-10.5 5-13.6 6.9-3.2zm-93-2c-.3.8-.9 2.2-1.2 3-.9 2.3 2.2 1.8 4.6-.7 1.6-1.7 2-1.9 2-.6 0 1.9-16.4 11.8-19.5 11.8-4.9-.1-4.4-1.7 1.8-5.8 3.5-2.3 7.4-5.3 8.7-6.7 2.6-2.8 4.5-3.3 3.6-1zm89.9 19.5c.3.5 1.5 1 2.6 1 2.6 0 2.5 1-1.8 10.9-13.1 30.8-42.1 49.2-67.2 42.6-18.9-4.9-40-23.6-46-40.7-1.1-2.9-2.2-6.1-2.6-7-.5-1.3.1-2.1 2.7-3.1 3.9-1.7 4.8-1.4 4.8 1.5 0 3.7 6.7 16.1 12.3 22.9 28.3 34.2 72.9 23.2 90.2-22.2 2.6-6.7 3.7-8 5-5.9zm-63.8 15c1.8 1.6 4.1 3 4.9 3 1.1 0 1.4.8 1.2 2.7-.7 5.9 10.8 3.1 14.3-3.5.8-1.4 1.9-2 2.9-1.7.9.3 6.6-.1 12.5-1 15.9-2.2 15.1-2.5 11.8 3.7-13.6 25.6-45.8 33.3-66.2 16-6.7-5.7-17.1-18.1-17.1-20.4 0-.2 4.2-.2 9.3 0 5 .2 10.8-.1 12.7-.6 6.5-1.9 10-1.4 13.7 1.8zm47.3 67.9c20.1.6 40 1.3 44.4 1.7 7.9.7 7.9.7 7.5 72.5-.4 68.7-.5 71.9-2.2 71.9-1.4 0-1.7.5-1.2 1.9.5 1.7 0 2-3.7 2.5-10.5 1.3-30 2.8-30.4 2.3-1.1-1-.7-6.9.6-9.2 1.6-3.1.4-4.7-1.6-2.1-.8 1.1-1.4 4.3-1.4 7.3 0 5.3 0 5.3-4 5.3-7.6 0-6.5-3.4 4.7-15.2 7.8-8.2 8.4-9.7 5.3-14.3-3.7-5.5-2.1-12.4 4.5-19.6 9.1-9.8 9.7-19 1.6-23.7-1.9-1-3.3-2.8-3.7-4.6-.3-1.6-1.5-4.3-2.5-6.1-2-3.4-2-5 .3-12.8.9-2.8.8-4.1 0-4.9-.7-.7-1.2-3.1-1.2-5.5 0-3.4-.6-4.8-2.5-6.5-1.4-1.2-2.5-2.8-2.5-3.5 0-.8-4.2-5.8-9.3-11.1-5.2-5.3-9.7-10.5-10-11.5-.7-1.9-3.3-2.3-3.9-.6-.2.7-1.8.1-4.1-1.4-26.9-18.2-77 2.5-83.7 34.6-.6 3-1.8 6.1-2.6 6.7-1.6 1.4-1.9 4-.4 4 2.2 0 .8 4.1-2.4 7.3-4.2 4.3-11.2 6.4-15.7 4.8-4.5-1.5-5.2-1.4-4.6 1 .3 1.1-.1 3.6-.9 5.4-3 7.3 4.6 16.2 15.4 18 5.8.9 5.5 5.9-.8 13.2-4.4 5-4 8.3 1.5 12.9 6.5 5.3 6.8 7.5 1.4 13-5.3 5.4-4.5 6.7 1.8 2.8 7.1-4.4 7.8-12 1.6-17.2-2.8-2.2-2.8-2.2-.3-4.1 2.4-1.9 2.4-1.9 4.1.7 3.1 5.2 5.5 6.3 3 1.4-1.2-2.3-2.5-4.2-3-4.2s.6-2.6 2.5-5.7 4-7.2 4.6-9c.7-1.8 1.8-3.3 2.4-3.3 2.2 0 2.1 4.4-.3 9.2-4.3 8.8-2.5 9.1 2.1.4 3.6-6.7 3.7-1.8.2 8.1-1.9 5.2-2.3 8.2-2 12.7.5 6.7-1.4 9.6-8.8 13.9-2.1 1.1-3.8 2.4-3.8 2.9 0 1.3.9 1 5.3-2.1 6.5-4.5 8.8-7.5 9.4-12.3.3-2.3 1-4.9 1.6-5.6.6-.8.6-1.2-.2-1.2-1.5 0-1.4-3.1.4-7.4 1.9-4.5 2.5-4.6 1.5-.2-.6 2.7-.5 3.3.6 2.9 1.7-.6 1.8.2.3 2.8-.8 1.6-.6 3 .9 6.3 3.2 6.7 3.8 11.3 1.7 13.6-1 1.1-1.4 2-.8 2 2.4 0 4.7-4.2 4.6-8.3-.2-3 .1-3.7.7-2.7.8 1.2 1 1.2 1.1-.5.1-1.1.5.2 1 3 1.2 6.7.6 8.8-4.1 13.6-4.2 4.3-4.7 5.4-3 6.4.6.3 1 0 1-.7 0-1.2 7.6-9.8 8.6-9.8.2 0 .2 1.7-.2 3.7-.4 2.7-.1 4.4 1.1 5.8 1 1.4 1.5 1.5 1.3.5-.4-2.4 2.4-13 3.4-12.4.4.3.9 2.2.9 4.2.1 2.1.3 2.8.6 1.7.8-3.2 2.3-4.2 2.3-1.5 0 6.9-3.1 13-5.6 10.9-1.5-1.2-1.6-1.2-1 .9.4 1.2.4 2.2-.1 2.2-.4 0-14.7 1.3-31.8 3-17 1.6-31.2 2.6-31.5 2.4-.3-.3-.5-36-.5-79.2 0-78.7 0-78.7 5-78.9 2.8-.1 10.6-.9 17.5-1.8 6.9-.8 22.6-2.2 35-3.1 12.4-.8 22.7-1.8 23-2.1.3-.2 4.3-.2 9 .1 4.7.3 24.9.9 45 1.5zm-37.7 11.4c.6 1.5 10.7 3.9 10.7 2.6 0-.4-1.6-1.1-3.5-1.5-2-.3-3.4-.9-3.1-1.2 1.2-1.1 13.4 2.3 17.3 5 2.3 1.5 4.5 2.8 5 2.8 1.8 0 15.1 13.1 18.8 18.4 2.1 3.1 4.2 5.6 4.7 5.6.6 0 .8 5.8.7 13.2-.2 12.1 0 13.7 2 17.6 2.7 5.3 2.2 6.1-1.8 3.2-2.3-1.5-3.1-2.9-3.1-5.1 0-3.1-.4-3.4-6.2-4.4-4.2-.7-5.2-3.2-1.5-3.7 3-.4 3.9-5.8.8-5.8-1.1 0-2.3.5-2.7 1.1-1.3 2.2-4.4-3.3-4.4-7.9 0-5-.9-5.3-3.4-1.1-1.3 2.1-2.1 2.8-2.9 2-1.2-1.2.9-7 3.1-8.7 2.5-1.9 1-4.9-2.2-4.6-2.6.3-2.8.1-2.1-2 2-6.4 1.9-8.4-.2-6.6-1.1 1-2.5 1.8-3.1 1.8-.6 0-1.4.5-1.8 1.2-.5.8-.2.9.9.5 1-.3 1.7-.3 1.7.1 0 1.4-4 7.2-5 7.2-1.4 0-1.2-1.1.5-3.4 2.2-2.9 1.8-4.2-.5-2.1-1.1 1-2 2.6-2 3.6 0 2.4-3.3 4.1-7.3 3.7-3.2-.3-3.2-.3-3.1-8.1.1-4.2-.2-7.7-.7-7.7-.4 0-2.9.4-5.6 1-2.6.5-8.1 1.4-12.1 2-11.9 1.7-25.2 10.9-25.2 17.5 0 1.5 2.8.2 3.8-1.9 2.9-6.4 14.9-12.9 26-14.2 7-.7 7-.8 4.1 4-2.1 3.6-2.1 3.6-10 3.6-7.4 0-7.9.1-8.5 2.4-.3 1.3-2.3 3.6-4.6 5.2-9.9 7.2-9.7 6.9-9.1 12.9.7 6.7-3 13.2-11.4 20.1-5.4 4.3-8.8 5.9-6.3 2.9 3.8-4.6-2.4-5.5-10.8-1.5-7.3 3.4-8.5 3.6-10.2 1.5-.7-.9-1.5-1.3-1.8-1-.3.3.3 1.5 1.4 2.6 1.9 2.2 1.9 2.2-.6 1.5-6.1-1.8-11.6-10.6-6.6-10.6.9 0 1.6.3 1.6.7 0 .5.9 1.9 2 3.3 2 2.5 2 2.5 1.4-.7-.6-3-.4-3.2 3.1-4.2 7.9-2.1 16.5-11.6 16.5-18 0-1.4.1-1.4 1-.1.5.8 1 2.6 1 3.9 0 1.6.4 2.1.9 1.5 1.5-1.4.1-13.4-1.5-13.4-1.7 0-1.7 0 .2-4.6 2.1-4.9 4.9-9.1 10.2-14.9 5.3-5.7 6.7-5.1 2.4 1-1.7 2.5-2.8 4.5-2.3 4.5 1.6 0 7.2-7.4 7.8-10.3 1.1-5.2 13.2-11.2 25.7-12.6 10.5-1.2 11.3-1.2 11.9.2zm-27.7 43.4c-.3 1.6-.8 4.8-1.1 7.3-.7 4.7-2.9 9-4.5 9-.6 0-.6-1 0-2.6.6-1.4 1-5.2 1-8.4 0-4.6.4-6.1 1.8-6.9 2.8-1.7 3.4-1.3 2.8 1.6zm13.1-.7c.6 2.2 1.8 2.6 2.8 1 1.1-1.7 3.7-1.1 4.2 1 .5 1.9 2.3 2.9 2.3 1.2 0-.4 2-.8 4.5-.8 2.7-.1 5.3-.8 6.4-1.8 2.4-2.2 4.8-2 5.6.3.7 2.4 8.3 6.2 11.6 5.9 1.9-.2 2.4.2 2.4 1.8 0 2.6 3.1 6.3 6.3 7.5 2.8 1.1 3 3.3.2 2.4-2-.6-20.9-.9-21.5-.3-3.8 3.8-1.4 5.6 6.8 5.1 11.2-.7 17.4.2 18.2 2.7 1 3.3 0 3.6-8 2.9-12.1-1.2-14.3 1.4-10.4 11.9 1.9 5 6.9.2 6.9-6.6 0-3.6.7-3.9 3.6-1.7 1.2.9 3.2 1.2 5.5.8 4-.6 4.1 5.4.3 17.2-.9 2.7-1.8 5.8-2 6.8-1.7 9.1-35.2 35-41.1 31.8-12.5-6.7-27.9-24.8-32.8-38.6-1-2.8-2.2-5.4-2.6-5.9-.5-.5.1-1.4 1.3-2 1.2-.6 3.9-3.6 6-6.6 4.7-6.8 5.8-7.2 5.8-2.2 0 6.4 5.1 8.5 6.6 2.7 1.1-4.5-.8-9-3.9-9.3-5.7-.7-1.3-4.8 6.4-5.9 5.3-.8 8.3-4.5 3.9-4.9-.8-.1-1.9-.3-2.5-.4-.5-.1-1.8-.2-2.7-.1-1.9.2-2.4-2.4-.9-4.7.6-1 1-1 2.1.2.7.9 1.6 1.3 2.1 1 1.5-.9 1-4.4-.6-5-.8-.4-1.5-1.3-1.5-2 0-.8.7-1.7 1.5-2 .8-.4 1.5-1.4 1.5-2.3 0-3.6 4.8-4.5 5.7-1.1zm69.3 30c0 .5.9.6 2 .3 5.3-1.4 8.5 7.5 4.9 13.4-2.4 3.8-2.4 3.8-2.9-.7-.7-5.8-2.5-8.4-6.4-9.6-3.1-.9-4.3-3.2-3.2-6 .6-1.6 5.6.8 5.6 2.6zm.4 9.6c1.1 2.9.6 5.4-1.4 7.1-1.1 1-2 2.1-2 2.6s.9.5 2 .2c3.2-1 1.3 2.1-8 13.7-2 2.4-2.6 3.8-1.7 4.1.6.3 2.8 3.4 4.7 7 3.4 6.6 3.4 6.6-2.3 12.6-3.2 3.3-6.3 7.4-6.9 9.1-1.1 3.3-4.7 5.4-7.3 4.4-2.5-1-1.8-2.8 4.5-10.9 6.6-8.5 6.7-9 4.4-12.3-4.6-6.6-3.2-13.3 4.5-20.6 2.4-2.3 3.6-4.3 3-4.6-.7-.5-.5-2.1.7-4.9.9-2.3 1.4-5.2 1.2-6.6-.6-2.9 3.5-3.7 4.6-.9zm-115.6 1c2.8.8 2.8 2.3-.4 8.9-3.3 7-11.4 13.7-11.4 9.4 0-.4 1.6-2.6 3.5-4.9 2.5-3 3.6-5.5 4.1-9.1.4-2.7.9-4.9 1.3-4.9.3 0 1.6.3 2.9.6zM312.5 496c1.7 3.3 1.7 8.1 0 8.6-3.5 1.1-7.4-13.2-4.8-17.3 1.8-2.7 1.8-2.7 2.5 1.4.4 2.3 1.4 5.6 2.3 7.3zm45.6 2.7c.6 4.3 1.7 8.8 2.5 10.1 1.3 2 1.3 2.4-.1 3.8-1.7 1.7-2.1 6.4-.5 6.4.6 0 1 .4 1 1 0 .5-.6.7-1.4.4-1-.4-1.6-3.4-2-11.2-.4-5.9-.9-12.7-1.1-15.1-.3-2.5-.2-4.2.1-3.9.3.4 1 4.2 1.5 8.5zm-60.5 3.4c1.4 4.1 1 5.1-5.8 13.4-2.7 3.3-5.1 7-5.4 8.2-.4 1.4-1.4 2.3-2.5 2.3-2.5 0-2.6-5.5-.2-8.2.9-1 1.6-3.4 1.6-5.6-.1-3.7-.1-3.7.9-.2 1.2 3.9 2.6 2.2 2.7-3.3.1-1.5.5-2.7.9-2.7.5 0 1.7-1.8 2.8-4 2.2-4.7 3.5-4.6 5 .1zm-26 11.4c.3 9.7 4.6 30.4 6.7 32.2 2 1.8 2 1.7 1.3-.9-.6-2.7-.6-2.7 2.1-1.3 1.6.8 4.5 2.2 6.6 3 6.1 2.3 4.1 3.8-8.6 6.2-7.6 1.4-13.2 3.1-16 4.7-5.9 3.5-8.4 3.4-9.2-.4-1.2-5.4-4.6-7-14.7-7-14 0-20.7-3.8-10.5-6 11.1-2.4 13.7-2.4 13.7-.4 0 4.9 3.2-2 5.1-11.1 2.5-11.5 2.6-11.7 4.6-9 1.5 2 1.5 2 1-.3-.4-1.8.1-2.6 2.6-3.8 2.1-1.1 2.8-1.2 2-.3-.7.7-1.3 2-1.3 2.8 0 1.1.5.9 2-.7 1.1-1.2 2-2.5 1.9-2.9-.3-2 .2-2.7 1.1-1.3.8 1.2 1.1 1.1 1.7-.9.5-2 .8-2.1 1.7-1 .9 1.2 1.5 1 3.6-1 2.5-2.4 2.5-2.4 0-1.8-2.5.6-2.5.6 0-1.3 1.4-1.1 2.5-2 2.5-2s.1 2 .1 4.5zm-53.8 41.6c3.3 22.2 21.3 41.9 38.2 41.9 20.4 0 37.3-14.7 44.1-38.3 2.2-7.7 3.4-8.9 6.7-6.9 1.6 1.1-1.6 13.8-5.4 21.4-14.2 28.2-42.7 38-66.5 22.8-5.1-3.3-13.9-13.1-13.9-15.5 0-.7-1.1-3.2-2.4-5.6-4.5-8-8.7-20.8-7.6-22.9.6-1 1-2.8 1-3.9 0-1.6.5-2 2.3-1.7 2 .3 2.3 1.2 3.5 8.7zm80.2-4.4c-.2 6.1-11.1 27.5-16.5 32.2-10.1 8.8-24.6 12.3-34.3 8.1-10.8-4.7-24-23.4-25-35.5-.4-5.4-.4-5.4 3.9-3.3 3.3 1.6 6.8 2.3 14 2.6 9.6.4 9.6.4 11.3 3.8.9 2 2.3 3.4 3.3 3.4 3.6 0 5 1.8 2.8 3.4-1.9 1.5-1.9 1.5.7 1.6 2.1 0 2.9-.6 3.3-2.3.7-2.7 7.7-5.7 20.3-8.6 5.3-1.3 9.3-2.9 11.3-4.5 3.6-3 4.9-3.3 4.9-.9z"/>
        <path d="M243.5 54.5c-.5.2-4.5 1.1-8.8 2.1-4.3.9-8 2.1-8.3 2.5-1 1.6 1.5 1.7 7.2.2 3.2-.8 8.8-1.8 12.3-2.2 7.6-.7 9.9-3.1 2.9-3-2.3 0-4.7.2-5.3.4zm-41.2 17.2c-3.8 3.6-8.6 11.8-8.1 13.9.2 1.1 1.9-.7 4.8-5.2 2.5-3.8 5.5-7.3 6.8-7.9 2.4-1.1 3-3.5.8-3.5-.8 0-2.7 1.2-4.3 2.7zm6.7 15.5c-1.6 2.2-3 4.9-3 5.9 0 2.3-5.2 8.3-9.1 10.6-2.7 1.6-4 4.3-2.1 4.3 2.6 0 9.6-6.9 12.2-11.9 1.6-3.1 3.8-7 4.9-8.6 4.1-6 1.4-6.3-2.9-.3zm11 56.4c-3.6.8-8 1.7-9.7 2-2.3.5-3.3 1.2-3.3 2.5 0 2.8 1.1 2.9 7 .9 7.4-2.6 8-2.5 8 1 0 4.1 2.6 10 4.3 10 3.6 0 6.8-8.1 4.7-12-1-1.9-.9-2 1.5-1.4 1.9.5 2.4.3 2-.8-.5-1.2-6.2-4-7.6-3.7-.2.1-3.3.7-6.9 1.5zm35 12.9c0 9.1-1.3 13.8-4.9 16.9-3 2.7-2.6 5.8 1.4 10.6 5.3 6.4 2.3 14-5.6 14-3.4 0-4.1 3.3-1.1 4.8 2.5 1.4 23.3.8 26-.7 3.3-1.8 2.9-4.5-.5-3.8-6 1.2-13.8-4.1-14.1-9.6-.3-4.7-.3-4.7 3.3-4.7 4.3 0 5.4-2 3.1-5.5-1.1-1.7-2.6-2.5-4.6-2.5-3.6 0-3.6 0-1-7.3 3-8.5 2.7-20.7-.6-20.7-1.1 0-1.4 1.9-1.4 8.5zm-4.5 51c-4.1 3.1 3.7 7.7 8.9 5.3 2.2-.9 4.4-4.4 3.4-5.2-1.5-1.4-10.7-1.4-12.3-.1zm84.6 37.6c-1.9 5.5-1.4 10.4 1.5 13.8 2.8 3.4 2.8 4.5.4 13.3-2.2 7.4 2.3 17.8 7.5 17.8 1.2 0 .7-.8-1.4-2.6-5.6-4.6-6-11.1-1.6-22.7.3-.7-.8-3.3-2.5-5.8-3.1-4.6-3.7-8-2-12.5.7-1.6.7-3.1.2-3.6-.6-.6-1.4.3-2.1 2.3zm-87.6 212.1c-.2.7-.6 4.1-.8 7.5-.3 3.7-1.4 7.7-2.7 10.1-2.6 4.6-1.6 8.2 2.4 8.2 3.5 0 5.1-2.4 3-4.4-1.1-1.2-1.4-2.5-.9-4.4 2.1-7.9 1.2-24-1-17zm-.9 34.3c-.3.9-1.9 1.5-4.1 1.5-4.5 0-4.8 2.7-.5 4.3 2.5.9 3 1.6 2.6 3.3-.8 2.9 1.5 4.6 5.6 4.2 5.1-.5 5.4-4.8.4-4.8-2 0-3.6-.5-3.6-1.1 0-.8 1.2-1 3.6-.6 3.5.6 8.4-.8 8.4-2.5v-1.5c0-.5-1.1-.9-2.5-1-1.4-.1-4-.9-5.7-1.7-3.8-1.9-3.5-1.9-4.2-.1z"/>
      </g>
    </svg>
  ),
}
