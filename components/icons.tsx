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
<svg xmlns="http://www.w3.org/2000/svg" {...props}viewBox="-22 -.357 388 403.357">
  <path d="M218.057.843c-1.704 1-9.823 3.7-18.042 5.9-24.256 6.6-36.986 5.7-61.242-4l-7.918-3.1c-10.826 2.6-71.767 20.7-77.681 23.7-1.996 1.036-48.547 37.506-67.376 52.835-4.8 3.908-7.798 6.442-7.798 6.665 0 .5 42 65.657 43 67.157 3.608-1.6 42.298-27 43-27 .2 0-1.501 279.6-1 280h218c0 1 .399-279 1-279 .702 0 43 26.5 43.005 26.243L366 83.143c-21.35-16-65.151-55.2-69.361-57.4-9.522-4.7-74.974-27.3-78.582-24.9Zm-34.881 79c.301 1.1.902 1.8 1.303 1.5.401-.3 1.403.3 2.105 1.2 1.203 1.5 1.203 1.6-.401 1-1.203-.5-1.704-.3-1.504.5.602 1.6 3.709 1.9 6.014.5 1.704-1.1 2.506-.6 6.315 3.6 9.522 10.3 12.329 22.2 9.021 37.3-2.406 10.9-3.107 11.7-3.909 4.5-.401-3.3-1.103-6.1-1.604-6.1-.401 0-.601-1-.401-2.3.201-1.2.201-1.6-.2-1-.802 1.8-2.406 1.6-2.406-.2 0-.8-.401-1.5-.902-1.5s-.702 1-.401 2.2c.301 1.3-.902-.6-2.706-4-1.804-3.5-4.811-7.9-6.615-9.8l-3.408-3.3 1.804-3.8c.902-2.1 1.904-4 2.205-4.3 1.002-1 .401-6.3-.702-6.7-.902-.3-1.303.7-1.303 3.4 0 2.1-.902 5.1-2.004 6.8-1.805 2.8-2.005 2.8-2.005.7 0-1.2-.401-2.2-1.002-2.2-.502 0-1.003 1-1.003 2.3 0 1.5-.902 2.9-2.405 3.7-1.404.7-2.707 1.9-3.007 2.7-.401.9.501.6 2.205-.7l2.706-2.2.501 2.9c.501 2.7.602 2.7 1.805.8 1.202-1.9 1.403-1.8 5.011 2.1 2.005 2.3 4.711 6.2 6.014 8.7 2.205 4.3 6.916 12 7.417 12.3 1.404.9.902 7.9-.701 10-1.404 1.8-1.404 1.7-.502-.9 1.203-3.5-.601-3.7-2.205-.1-1.102 2.2-1.804 4.5-1.804 4.8 0 1-6.515 10.2-8.52 11.9-3.307 2.9-17.841 11.7-19.344 11.7-1.905 0-11.226-7.1-15.136-11.5-4.109-4.7-4.811-6.6-5.713-15.6-.3-4.2-1.303-8.1-2.105-9.1-2.105-2.3 7.418-9.5 14.334-12.9 4.41-2.2 7.818-4.8 10.324-7.8 2.004-2.5 4.811-5.7 6.414-7.2 3.208-3.2 3.709-5.9.502-2.9-1.504 1.4-2.406 1.7-2.707.9-.2-.7.501-1.9 1.504-2.7 1.704-1.3 1.603-1.4-1.504-.8-1.904.3-4.209 1.2-5.011 2-.902.7-2.205 1.1-2.907.9-2.506-.9-6.315 2.9-9.422 9.3-1.704 3.5-4.611 7.8-6.515 9.4-3.809 3.4-11.326 7.3-15.837 8.4l-3.007.8 3.107 1.3c3.809 1.6 5.112 3.4 3.308 4.6-1.604 1-.802 1.2 1.504.3.902-.3 1.603-1.2 1.603-2 0-2 1.805-1.7 3.007.5 1.303 2.4 1.303 8.8.101 9.6-1.604.9-2.206-1.3-1.003-3.3.702-1.1.902-2.7.501-3.8-.701-1.7-1.002-1.5-2.305 1.2-.902 1.8-3.408 4.2-5.713 5.4-4.511 2.5-7.117 5.2-8.821 9-1.002 2.4-1.102 2.4-1.804.5-.902-2.4.201-6.5 2.907-11.1 2.005-3.4 1.604-4.5-.702-2.2-1.303 1.3-1.503.8-1.203-4 .201-3.7-1.704-4.3-2.606-.7-.501 2.1-3.408 5.7-3.408 4.2 0-2.5 3.509-8 5.814-8.9l2.706-1.1-4.21-.9c-5.011-1.1-9.421-5.6-9.221-9.6.1-2.1.201-2.3.601-.7.602 2.5 5.213 7.5 7.819 8.5 2.205.8 6.314-.8 8.419-3.4 1.905-2.2.501-2-2.806.5l-2.807 2.1-3.408-2.2c-3.007-1.9-3.107-2.1-.802-1.6 1.504.3 3.408-.1 4.711-1 3.108-2.1 2.807-3.6-.401-2.3-4.31 1.6-4.009.2 1.303-5.4 4.912-5.2 5.513-6.4 6.816-15.5.802-4.7 3.709-8.8 8.42-11.5 3.809-2.2 4.009-.9.501 2.4-3.608 3.2-6.415 9.7-5.713 13.2.701 3.7 2.004 4.3 1.503.7-.601-3.9 3.107-11.2 7.217-14.4 8.72-6.6 17.44-9.4 29.468-9.5 7.618-.1 8.42.1 8.921 1.9Zm-22.352 29.7c-2.406 5.7-1.503 5.2 2.907-1.6 2.907-4.6 4.711-5.1 4.711-1.4 0 3.5-4.711 8.4-10.424 10.7-2.105.9-3.91 1.6-4.01 1.6-.1 0 1.404-3.4 3.408-7.5 4.21-8.9 7.117-10.4 3.408-1.8Zm50.317 42c1.704 3.9 1.704 5.9 0 9.8l-1.303 3v-4.5c0-2.5-.501-5.5-1.103-6.5-1.002-1.7-1.102-1.5-1.203 1.9 0 2.2-1.002 6-2.104 8.4-2.105 4.3-2.206 4.4-3.408 2.3-1.003-2-1.303-2.1-2.406-.7-2.606 3.1-3.308 1.7-2.806-5.5.3-5.1 0-7.2-.903-7.6-1.403-.5 1.303-5.9 4.912-10l1.904-2.2 3.609 4.2c1.904 2.3 4.109 5.6 4.811 7.4Zm-75.776-6.4c0 .1-.902 2.9-2.105 6.2-1.203 3.4-1.904 7.6-1.704 9.7.301 3.4.201 3.6-1.403 2.1-3.608-3.2-3.408-11 .301-15.8 1.603-2 4.911-3.5 4.911-2.2Zm3.408 5.9c1.804 14.2.501 19.9-2.807 11.8-1.904-4.8-2.104-9.9-.401-13.5 1.604-3.6 2.607-3.1 3.208 1.7Zm3.508-.1c-1.002.6.702 5.3 4.31 12.3.702 1.3.702 1.6-.1 1.1-.802-.5-1.002.1-.501 2.1 1.002 3.7-1.103 2.4-3.508-2.4-2.406-4.6-2.707-18.8-.401-15.6.902 1.2 1.002 2 .2 2.5Zm5.112 5.3c3.007 4.4 3.709 6.6 2.205 6.6-.401 0-1.904-2.1-3.207-4.8-3.308-6.4-3.208-6.2-2.606-6.2.3 0 1.904 2 3.608 4.4Zm46.508 4.3c-.201 9.3 0 8.8-1.905 7.3-1.904-1.6-1.904-5.4.101-10.7.902-2.4 1.704-4.3 1.804-4.3.1 0 .1 3.5 0 7.7Zm-12.629 19.9c-.201 6.4 0 8.7.701 7.7.902-1.2 1.604-1.2 4.711.2 5.513 2.2 8.119 1.8 2.907-.5-2.406-1.1-4.912-2-5.713-2-1.404 0-1.905-2.1-.802-3.2.3-.3 2.806.7 5.713 2.3 2.907 1.6 6.214 2.9 7.517 2.9 2.907 0 2.807 2.1-.2 8.5-4.21 9.1-11.427 13.5-22.151 13.5-10.926-.1-22.653-7.5-24.156-15.3-.201-1.2-1.304-2.9-2.406-3.7-2.305-1.8-1.704-3 1.403-3 1.203 0 4.009-.9 6.415-2 2.305-1 4.21-1.5 4.21-1.1 0 .4-1.905 1.6-4.11 2.7-2.305 1-3.708 2-3.107 2.2 1.303.4 7.417-2.6 8.42-4.2.401-.6.801-4.9.801-9.6l.101-8.5 2.906 3.3c1.704 1.8 3.007 4.1 3.007 5.1 0 1.4 1.805.2 6.816-4.5l6.716-6.3.301 3.2c.2 1.8.2 7.3 0 12.3Zm-45.406 10.9c-5.011 1.7-7.818 3.3-9.722 5.7-1.504 1.8-3.709 4.2-4.812 5.4-1.102 1.1-4.911 8.3-8.62 16-5.913 12.6-8.118 16-9.221 14.9-.301-.2 1.103-3.2 3.007-6.7 2.005-3.5 6.315-11.7 9.823-18.3 7.618-14.6 9.722-17 15.937-18.3 9.121-1.9 11.025-1.2 3.608 1.3Zm85.298 2.6c1.904 1.9 4.711 6.5 6.515 10.8 1.704 4.2 5.814 12.9 9.021 19.3 3.208 6.5 5.914 12 5.914 12.3 0 4.2-8.72-12.2-15.135-28.5-1.604-4.1-3.609-8.6-4.411-10l-1.403-2.5-.1 3-.1 3-1.504-3.7c-1.704-4-5.112-5.8-11.025-5.8-3.609 0-6.415-.8-6.415-1.9 0-.4 3.408-.4 7.617 0 6.816.7 8.019 1.1 11.026 4Z" />
</svg>
  ),
}
