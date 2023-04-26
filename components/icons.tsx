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
  
  headImg: (props: LucideProps) => {
    if (Math.floor(Math.random() * 2)===0) {
      return (
        <svg viewBox="0 0 473 512" {...props}>
          <path d="M286.753 2.037c0 2.193 1.098 3.179 5.601 5.043 5.601 2.412 5.601 2.412 4.832 7.565-1.867 13.046-7.029 18.637-25.37 27.627-30.422 15.019-70.62.109-74.573-27.518-.879-5.81-.659-6.029 6.809-7.893 7.578-1.973 7.798-4.495.329-3.508-3.734.548-6.04.329-6.479-.439-.769-1.206-3.185-.548-18.561 4.714-9.556 3.399-9.885 3.399-9.665 1.097.439-5.043-95.002 27.846-95.441 29.161-.33 1.206-76.331 26.312-74.191 192.259 2.069 160.424 56.177 153.686 72.214 188.159 1.388 2.983 3.405 5.153.22 12.06-11.752 25.653-12.081 33.327-1.758 48.785 2.417 3.618 4.833 7.784 5.272 9.319.879 2.521.989 2.521.549-.548-.219-1.864-.659-4.276-1.098-5.482-1.098-2.96 1.208-.109 3.954 4.934 3.405 6.139 11.312 7.893 27.018 6.029 6.479-.767 6.809-.877 6.15-3.398-.769-2.96.549-3.399 3.954-1.316 1.757 1.206 2.416.987 3.734-.767 2.087-2.741 2.197-1.206.439 7.345-1.537 7.126-.329 10.196 2.966 7.455 1.427-1.096 1.647-.987 1.647.877 0 4.166 11.203 5.043 17.353 1.315 3.514-2.192 3.514-2.192 3.514 1.097 0 3.398 0 3.398 27.238 3.069 14.936-.109 27.896.22 28.665.658 3.185 1.974 37.232.11 40.966-2.302 2.965-1.754 15.815-2.302 18.122-.767 1.318.877 3.404 1.534 4.503 1.534 1.208 0 3.404.987 4.832 2.193 2.746 2.083 3.075 2.083 8.017.329 4.394-1.425 5.931-1.535 8.897-.439 2.745.987 5.271.987 9.994.22 3.405-.658 10.214-1.206 15.046-1.206 4.943 0 12.631-.548 17.134-1.206 16.474-2.193 25.919-3.289 31.191-3.837 3.075-.22 6.919-1.206 8.676-2.083 2.416-1.206 3.625-1.316 4.723-.439.878.658 2.196.987 2.965.658 2.197-.877 1.428-6.578-6.26-42.975-4.283-20.172-4.173-21.378 1.977-21.378 1.208 0 4.393-1.096 7.139-2.412 3.404-1.644 5.052-1.973 5.381-1.096.659 2.192 2.417 1.425 2.417-.987 0-1.973.439-2.193 2.745-1.644 2.416.657 2.746.328 2.746-2.083 0-2.083.549-2.741 1.977-2.522 4.722.767 2.746-26.64-5.382-74.768-6.48-38.261-7.798-52.074-6.37-67.094 1.428-16.006 1.318-15.787 5.162-7.455 1.867 3.947 3.405 6.249 3.515 5.043 0-1.096-1.867-6.029-4.284-10.963-4.612-9.757-5.93-16.664-13.728-72.685-.659-4.385 0-4.824 12.52-8.003 21.087-5.372 29.654-6.578 29.654-3.947.22 20.94 4.613 66.437 7.578 78.496 4.832 19.514 6.37 41.111 4.613 63.476-2.856 34.972-3.075 40.673-2.197 64.572.659 18.089.549 24.996-.329 26.531-1.099 1.644-.33 5.81 3.844 21.597 5.601 20.72 6.26 26.202 3.514 25.106-.878-.329-1.647-.11-1.647.548s1.318.986 3.075.767c4.503-.548 3.954-9.209-1.867-29.271-4.174-14.471-4.503-15.897-2.856-17.651 1.428-1.644 20.428-3.289 20.319-21.926 42.833-288.328 15.376-297.099-5.492-337.662-28.947-56.269-127.401-58.8-127.401-55.802 0 .658.55 2.083 1.099 3.179 1.208 2.193-4.174.329-16.694-5.92-2.966-1.425-5.272-2.192-5.272-1.644 0 1.644-4.832 1.096-7.468-.767-2.307-1.535-2.416-1.535-2.416.986Zm29.763 10.634c4.503 1.864 11.312 4.605 15.266 6.03 3.954 1.425 9.116 3.399 11.532 4.385 2.416 1.097 8.347 3.07 13.179 4.385 16.035 4.605 41.625 15.239 44.371 18.528 1.318 1.644 1.318 2.412-.22 5.701-2.526 5.043-2.306 6.358.22 1.644 1.977-3.727 1.977-3.727 4.174-.548 6.26 8.88 10.982 24.228 14.058 45.497 3.514 24.776 10.982 54.048 14.826 58.543 5.272 6.139 5.602 13.813.659 16.444-2.086 1.206-3.624 2.412-3.294 2.96.329.439-1.318 1.535-3.515 2.522-4.942 1.973-4.942 1.973-4.173 0 .878-2.193-1.099-2.083-8.128.548-5.711 2.192-24.601 7.674-36.353 10.524-5.491 1.316-5.931 1.316-6.37-.767-.659-2.522-2.196-2.741-2.746-.439-.219.987-.878 1.206-1.757.768-2.196-1.425-2.855-26.969-.769-28.723.879-.768 1.648-1.864 1.648-2.412 0-.768-.549-.658-1.428.109-.879.658-1.757.877-2.087.658-.659-.767-5.272 9.648-5.272 11.95 0 .877-.658 1.864-1.317 2.083-.769.329-.33.658 1.098.658 2.087.109 2.416-.439 2.416-3.618 0-2.083.439-4.057.989-4.495 1.647-.987.549 30.916-1.428 40.563-.989 4.824-2.197 16.116-2.746 25.215-2.087 31.026-3.405 46.922-4.613 51.636-.988 3.837-.878 5.701.769 10.525 1.208 3.727 1.867 8.551 1.757 13.375-.11 5.372.22 8.112 1.428 9.428.879.987 2.856 6.139 4.393 11.402 1.538 5.371 3.295 10.634 3.844 11.73.659 1.096 1.098 3.727 1.098 5.81 0 3.728 7.469 35.74 12.082 51.636 1.208 4.166 2.196 7.784 2.196 7.894 0 .109-1.537 1.096-3.405 2.083-4.612 2.302-3.953 8.88 2.087 20.501.44.986-12.74 7.345-15.376 7.345-.988 0-1.977-.548-2.196-1.206-.33-.877-1.977-.877-6.37 0-6.37 1.316-26.798 3.179-37.891 3.618-4.174.109-1.977.438 6.04.877 12.191.658 11.972.658-7.688.987-11.202.109-21.746.438-23.613.657-1.757.11-12.191.439-23.064.658-12.959.11-18.231.548-15.375 1.096 3.514.658 3.294.768-1.648.329-3.295-.329-32.509-.877-64.799-1.425-61.943-.877-70.509-1.754-69.411-6.578.549-2.412-.988-5.591-2.526-5.591-3.624 0-.439-16.335 6.15-31.793 2.526-6.029 3.185-8.88 2.636-11.401-1.867-8.332 4.723-42.756 12.85-67.423 4.393-13.375 5.382-83.21 1.648-112.591-1.099-8.551-1.648-16.773-1.318-18.198.768-2.851-3.076-18.089-4.943-19.953-1.427-1.425-1.318-.439.44 7.236 1.318 5.152 1.318 6.468.109 7.454-1.098.877-1.537.768-1.867-.767-.329-1.535-2.745-2.193-15.815-3.727-8.566-1.097-17.682-2.632-20.318-3.509-10.104-3.508-17.133-6.577-22.076-9.757-2.855-1.754-6.699-3.398-8.566-3.508-3.954-.329-7.908-3.618-5.821-4.824.659-.438 1.208-1.535 1.098-2.412-.219-1.973 2.307-10.414 8.018-27.407 4.612-13.923 10.324-35.192 11.532-42.756 1.318-8.222 6.919-24.338 10.323-29.71 1.758-2.85 3.405-6.03 3.625-7.016.769-3.947 29.873-16.774 55.573-24.558 8.127-2.521 17.023-5.591 19.769-6.906 5.931-2.631 12.411-5.263 13.729-5.263.439 0 .768 2.193.768 4.824 0 16.006 13.18 34.095 31.301 43.085 7.139 3.508 17.134 6.359 19.44 5.482.988-.439.879-.658-.33-.658-16.364-.768-41.405-20.172-46.347-35.74-4.174-13.375-3.515-18.199 2.855-19.733 2.966-.768 2.966-.768 2.966 4.604 0 13.485 7.468 24.886 20.977 32.122 33.717 17.87 86.215-.987 85.556-30.697-.11-3.289-.11-6.468-.11-6.906.11-.549 1.758.109 3.735 1.315 1.976 1.206 7.358 3.728 11.861 5.591ZM88.513 175.911c.329.548 3.404 1.645 6.919 2.302 3.404.768 6.809 2.083 7.578 2.96.659.878 1.757 1.316 2.416.987.989-.658 21.966 2.083 22.625 2.851.219.328-2.307 25.653-5.052 50.21-2.087 19.076-3.954 27.956-8.128 38.371-2.196 5.372-3.844 10.415-3.624 11.073.22.767 1.538-1.645 2.856-5.372 5.82-15.897 7.248-17.87 8.017-11.731 1.208 8.113 1.098 24.009-.11 33.986-1.867 16.335-5.381 40.563-7.688 53.171-8.566 47.031-8.896 73.891-1.208 75.974 1.538.328 1.977 1.206 1.538 2.85-.44 1.644-.11 2.302 1.208 2.302.988 0 1.757.439 1.757 1.097 0 .548-.549 1.096-1.208 1.096-.549 0-.769.548-.439 1.096.329.658 2.086 1.096 3.734 1.096 2.087 0 3.734.878 4.942 2.632 1.208 1.863 2.416 2.521 3.954 2.083 2.636-.658 2.636-.877.549 10.086-4.723 25.105-6.041 29.052-9.445 29.052-3.075 0-3.185-.22-3.185-5.263 0-5.371-1.428-8.989-2.966-7.454-.439.438-.878 3.617-.878 7.016 0 6.249 0 6.249-9.885 8.113-12.63 2.521-13.399 2.192-18.451-5.482-3.844-6.139-8.457-11.292-8.457-9.647 0 1.096 7.798 12.936 10.873 16.444 2.526 2.851 2.636 2.96.549 1.973-3.185-1.644-7.029-6.358-12.74-15.567-2.965-4.714-5.491-7.674-6.589-7.674-3.734 0-1.208-12.06 6.919-33.438 5.052-13.484 5.381-30.586 1.537-90.006-2.965-45.387-1.976-65.998 3.844-84.196 3.295-10.306 3.295-10.306 3.735-44.62.549-37.055 1.208-43.523 4.503-38.371ZM295.1 443.19c-1.099 1.097-116.089 2.522-128.609 1.645-5.382-.439 19.329-.987 54.914-1.316 35.694-.329 66.995-.657 69.631-.877 2.636-.109 4.503.11 4.064.548Z" />
          <path d="M311.574 15.412c-6.041 23.461-20.648 37.494-47.007 45.058-12.52 3.508-13.399 4.495-1.977 2.193 25.7-5.372 53.157-31.683 50.192-48.238-.33-1.973-.549-1.754-1.208.987ZM101.143 58.826c0 .329 1.428 3.837 3.185 7.674 1.647 3.837 4.173 10.634 5.491 15.129 3.075 10.196 4.393 9.319 1.758-1.206-2.197-8.99-10.214-25.654-10.434-21.597Zm116.967 43.633c-1.757.438-5.821 2.192-9.006 3.727-6.919 3.618-20.758 6.797-29.104 6.797-5.821 0-10.215 5.263-6.371 7.674.989.549.55 57.228-.439 62.49-.878 4.385-.878 4.385.989 1.096 1.537-2.85 1.867-7.455 1.977-32.779.219-21.049.549-29.601 1.427-29.93.769-.219 1.099-1.315.769-2.521-.659-2.302 9.555-5.81 20.099-6.907 3.514-.438 8.566-2.192 13.179-4.714 8.896-4.714 23.503-4.824 42.723-.548 14.388 3.289 16.145 2.631 2.746-.987-12.081-3.398-32.509-5.152-38.989-3.398Zm81.163 8.332c5.162 2.083 6.919 2.412 8.676 1.425 1.867-.987 2.636-.768 4.284 1.315 1.537 1.974 2.416 2.193 3.295 1.316 1.208-1.206 9.664-1.864 9.664-.877 0 .329-.439 1.754-.988 3.289-.769 1.754-.769 2.85.11 3.07.659.219 1.537 7.893 2.087 18.966 1.427 23.899 2.416 24.776 2.086 1.644-.219-9.976 0-21.268.33-24.996.549-6.797.549-7.016-1.757-6.249-5.492 1.645-11.972 1.864-14.388.549-1.867-.987-3.185-.987-4.723-.22-1.537.877-3.624.768-7.468-.329-7.908-2.411-8.457-1.973-1.208 1.097Z" />
          <path d="M230.74 120.219c-2.746.548-5.931 1.206-7.029 1.315-1.208.22-2.416 1.206-2.855 2.303-.33.986-3.515 3.508-7.139 5.481-4.942 2.631-7.139 4.605-8.896 8.113-2.307 4.495-3.734 4.933-3.734 1.096 0-4.056-1.977-1.864-2.746 3.07-.659 4.275-1.208 5.262-3.954 6.358-1.757.658-3.514 2.193-3.844 3.509-.329 1.315-1.757 2.85-3.075 3.508-6.041 2.741-9.116 17.102-5.162 23.79 2.306 3.946 2.306 3.946.11 8.222-3.734 7.455-2.526 14.471 2.745 15.787 2.307.548 2.636 1.096 1.648 2.85-1.648 3.07-1.318 6.249.659 7.016 1.977.768 5.491-.877 6.15-2.85.22-.658 1.099-.877 1.757-.438 1.868 1.096 1.648 2.85-.329 2.85-.879 0-1.647.987-1.647 2.193 0 1.315.768 2.192 1.976 2.192 1.538 0 1.868 1.096 2.087 5.591.11 7.017 2.197 11.84 5.382 13.156 2.636.877 2.636.877-.11 3.618-3.295 3.289-3.405 4.385-.439 9.867 1.757 3.398 2.086 5.371 1.537 9.428-.439 3.289-.329 5.481.44 6.029 2.526 1.535.988 3.618-3.954 5.482-2.966 1.096-9.116 3.837-13.729 6.139-9.665 4.824-13.509 5.482-12.41 2.193.329-1.206.109-2.412-.55-2.851-.549-.328-1.098.11-1.098.987s-.988 2.631-2.306 3.837c-3.185 2.96-1.867 4.385 3.404 3.399 3.076-.548 4.723-.329 5.602.658.988 1.206 1.537 1.096 3.075-.549 6.919-7.783 24.272-13.703 24.272-8.332 0 1.535.549 2.741 1.098 2.741.659 0 1.099-.548 1.099-1.206 0-.657 1.427-.109 3.185 1.097 3.734 2.74 5.491 2.85 10.543.767 5.052-2.193 5.052-1.206-.549 11.84-5.052 11.731-5.272 13.814-2.087 18.966 2.746 4.495 3.954 4.166 1.538-.329-1.757-3.398-2.087-6.797-.989-9.647.989-2.522 2.636-2.193 2.636.438 0 5.92 7.908 15.678 13.948 17.103 8.347 2.192 26.579-3.508 32.729-10.086 4.283-4.605 3.185-5.482-1.537-1.206-11.313 10.195-30.972 12.278-38.001 3.946-3.624-4.385-3.514-6.468 0-3.179 12.74 11.95 49.533-6.797 57.111-28.942 2.086-5.92 3.075-7.236 4.283-5.153.329.548 1.977 1.316 3.624 1.645 1.758.438 8.787 3.398 15.706 6.577 14.607 6.797 17.572 7.894 17.572 6.249 0-.657.769-1.206 1.758-1.206 1.208 0 1.537-.548.988-1.973-.439-.987-.879-7.016-1.098-13.375-.22-6.358-1.208-14.69-2.087-18.637-1.757-7.126-1.757-7.126-1.208-.548.329 3.618.878 10.086 1.318 14.361.988 12.608-.22 18.309-3.844 17.432-3.405-.768-7.139-3.837-4.833-3.837.769 0 1.099-.549.769-1.097-.988-1.644-2.746-1.315-2.746.548 0 2.083.769 2.303-9.115-2.631-4.723-2.302-10.654-4.933-13.399-5.701-3.405-.986-4.943-2.082-5.162-3.727-.33-1.864-.989-2.083-4.393-1.864-3.515.329-4.284 0-5.711-2.96-2.307-4.385-2.307-4.495 1.317-4.495 3.625 0 5.712-1.754 5.712-4.933 0-1.973.549-2.193 4.283-1.864 4.613.439 6.59-1.096 4.393-3.727-.659-.877-1.098-1.645-.879-1.864.22-.109 2.307-1.206 4.723-2.412 5.382-2.74 7.798-6.249 6.26-9.099-.878-1.644-.549-2.631 1.538-4.604 3.624-3.399 4.393-7.894 2.306-12.169-2.196-4.386-2.196-6.907 0-8.661 1.208-1.097 1.538-2.522.989-5.701-.44-2.412-.11-7.565.659-11.511 1.208-6.249 1.208-7.346-.22-8.442-1.208-.877-1.538-2.521-1.208-5.92.329-3.618-.11-5.591-1.757-7.784-1.209-1.644-3.515-5.591-5.053-8.66-5.601-11.073-16.474-19.295-24.931-19.076-2.306 0-3.294-.768-4.832-4.166-3.624-8.113-12.411-13.156-22.734-13.156-2.526 0-5.382-.767-6.37-1.644-2.417-2.193-7.249-2.741-13.18-1.535Zm18.341 45.606c-.219 2.741.11 3.07 3.076 3.07 3.295 0 3.295 0 3.514 10.963.22 10.963.22 10.963 4.393 14.91 3.954 3.727 4.174 4.056 3.185 8.112-.659 2.851-.549 5.372.33 7.784.988 2.631.988 4.276.219 5.811-.659 1.205-1.208 3.179-1.208 4.385 0 7.126-11.641 18.747-19.22 19.185-3.624.11-4.393 2.85-3.514 13.156.659 7.784.659 7.784-.879 3.398-.878-2.412-1.647-4.495-1.647-4.714-.11-1.864-2.746.877-4.393 4.714-2.087 4.934-4.393 6.578-4.393 3.18 0-3.18-2.746-.877-3.405 2.96-.439 2.083-.769 2.85-.879 1.644-.11-1.425-.659-1.754-1.977-1.206-6.479 2.631-7.688.877-3.514-4.933 3.514-4.714 2.196-8.771-2.856-8.771-3.844 0-3.844 0-4.063 5.153-.11 4.385-.22 4.604-.549 1.425-.22-2.083-.989-4.933-1.648-6.249-1.537-3.179-.659-4.166 2.416-2.521 2.087 1.096 2.966.986 5.382-.877 2.855-2.083 2.855-2.083 5.711.986 2.416 2.631 3.405 2.96 7.688 2.412 7.139-.767 7.578-1.096 7.578-4.714 0-1.864-.659-3.508-1.318-3.727-9.335-2.522-14.607-4.824-16.145-7.126-1.647-2.522-1.647-2.631.659-1.426 1.868.987 2.636.987 3.185 0 .989-1.425-5.381-7.454-7.907-7.454-1.867 0-1.538-3.18 1.318-11.84 1.867-5.701 1.867-7.894.219-15.239-1.537-6.468-2.306-6.797-8.566-3.618-6.041 3.07-6.7 2.741-4.284-2.193 1.099-2.302 2.087-5.152 2.087-6.358 0-7.016 12.301-23.351 15.376-20.501 2.307 2.083 13.839 1.425 20.868-1.206 5.271-1.973 5.381-1.864 5.161 1.425Zm-32.399 40.564c-.11 6.358-1.318 9.866-5.821 16.444-2.636 3.728-3.295 5.701-2.745 8.113.768 3.727-.659 4.056-3.844.877-2.417-2.412-2.197-12.937.219-17.651 1.208-2.192.22-7.455-1.318-7.455-.549 0-.988-.986-.988-2.192 0-1.754.769-2.193 3.624-2.193 1.867-.109 4.723-.767 6.26-1.644 3.625-1.974 4.613-.768 4.613 5.701Zm69.851 8.441c.769 6.03-6.7 15.896-14.607 19.514-1.428.658-3.625 3.07-4.833 5.482-1.647 3.289-2.196 3.837-2.745 2.302-.44-1.096.109-3.07 1.537-4.933 1.428-1.864 2.197-4.714 2.197-7.674 0-4.824 3.734-12.937 6.26-13.704.879-.329.879 1.096-.33 5.372-2.635 10.195-1.317 11.182 5.492 4.275 4.723-4.824 5.052-8.551.659-10.744-2.636-1.315-2.636-1.315 0-2.411 4.173-1.645 6.04-.987 6.37 2.521Zm-11.093 50.211c2.636 5.81 5.382 8.332 7.139 6.578 4.503-4.495 3.295 1.096-2.087 9.647-16.144 25.544-45.578 34.534-53.157 16.225-3.514-8.441 3.076-28.065 7.469-22.145 1.318 1.864 1.428 1.754 1.428-.438 0-1.426.659-2.412 1.757-2.412 1.867 0 7.468-2.851 10.543-5.372 1.538-1.206 2.307-1.206 3.625-.11 1.318 1.097 1.647 1.097 1.647-.219 0-.987.989-1.535 2.306-1.535 1.318.11 2.636-.548 2.856-1.315.33-.768-.439-1.316-1.757-1.316-3.405 0-2.746-2.193.988-3.618 1.867-.658 3.295-1.644 3.295-2.192 0-.439 1.867-2.851 4.174-5.263 4.612-5.043 5.491-6.687 5.82-11.401.11-1.864.55 1.973 1.099 8.441.549 7.565 1.537 13.266 2.855 16.445Z" />
          <path d="M231.838 190.163c0 .658-1.208 1.206-2.635 1.206-4.284 0-6.151 1.206-6.151 3.837 0 2.302.769 2.522 10.763 3.837 5.821.768 13.509 2.303 17.024 3.289 7.029 2.193 8.676 1.316 6.26-3.179-1.647-3.289-6.37-5.372-14.937-6.688-4.063-.657-8.127-1.754-8.896-2.411-.988-.768-1.428-.768-1.428.109Zm-58.648 22.036c-.439 13.484-1.428 30.258-2.306 37.165-1.757 14.032-2.087 26.421-.769 26.421.439 0 .659-1.645.439-3.618-.219-1.864.659-11.402 1.977-21.049 2.526-19.734 4.064-56.679 2.526-60.736-.769-1.863-1.318 4.495-1.867 21.817ZM94.443 468.844c-1.208 3.837-1.098 4.933.33 7.345 4.173 6.797 7.468 2.851 4.722-5.372-2.416-7.016-3.404-7.454-5.052-1.973Zm290.167-4.385c-.44 1.425-1.318 4.714-1.758 7.235-.439 2.851-1.318 4.715-2.196 4.715-2.746 0-2.966 2.192-.549 5.481 1.318 1.973 3.294 3.289 4.722 3.289 1.318 0 4.613 1.206 7.249 2.741 5.491 3.179 15.376 3.837 17.682 1.206 1.318-1.645 7.688-4.276 13.729-5.591 2.636-.658 2.855-.987 1.318-1.535-1.648-.658-1.428-1.316 1.977-6.469 3.844-5.591 3.844-7.783 0-3.508-1.099 1.206-2.307 1.974-2.526 1.645-.33-.329.768-1.974 2.416-3.728 2.306-2.412 2.636-3.179 1.318-2.96-1.099.11-2.856 1.754-4.064 3.508-2.306 3.509-2.746 5.372-.988 4.276.659-.329 1.098-.329 1.098.219-.11 1.754-9.006 8.332-12.411 9.1-1.977.438-5.381 1.644-7.578 2.631-4.064 1.754-4.064 1.754-9.116-2.193-2.855-2.083-6.37-4.275-7.907-4.933-2.636-.987-2.746-1.316-1.977-6.249 1.098-7.674 3.075-9.867 2.306-2.741-.659 6.688-.329 7.126 2.087 2.631 1.757-3.618.988-7.345-2.087-9.866-1.428-1.206-1.867-1.097-2.745 1.096Z" />
          <ellipse cx="211.52" cy="207.266" rx="2.746" ry="3.837" />
          <ellipse cx="232.388" cy="207.814" rx="3.844" ry="4.385" />
        </svg>
      )
    } else {
      return (
        <svg viewBox="0 0 473 512" {...props}>
          <path d="M35.692 60.247c-86.243 81.998 8.269 343.54 28.954 341.005 5.757 3.971 7.308 67.848 6.09 86.001-1.44 21.67-1.108 24.393 3.543 24.393 3.986 0 2.104-72.159.996-85.206-.553-5.9-1.661-21.104-2.546-33.924-.886-12.821-2.215-31.201-2.99-40.845-1.771-25.074-.553-63.196 2.547-73.747.664-2.269 1.439-23.713 1.882-49.922.554-28.704 1.218-46.858 1.993-48.219.665-1.248.886-2.95.665-3.744-.333-.681-.222-1.362.221-1.362 1.439 0 18.27 7.148 18.27 7.829 0 .34 3.764.567 8.304.34 4.65-.227 11.143.074 11.033.641 1.097 2.269.704 4.805.15 10.705-1.55 17.926-1.993 73.861-.664 84.299.886 7.375.886 11.346.111 12.253-.554.795-1.218 7.035-1.44 13.842-.443 12.027-3.875 46.631-8.636 85.093-1.218 9.985-2.215 21.33-2.215 25.188 0 5.106-.443 7.261-1.661 7.942-1.218.794-1.771 3.971-2.104 13.388-.332 7.148-1.439 22.011.665 27.91 1.218 3.404 2.768 8.169 3.322 10.665 1.55 5.9 2.989 7.716 4.761 6.241 1.771-1.475 4.318 1.475 6.09 7.374.775 2.496 2.214 6.014 3.321 7.942 1.108 1.816 2.547 6.127 3.322 9.304 1.329 6.013 1.329 6.013 62.117 6.013 67.653 0 57.403 3.085 58.352-8.963-.664-1.929 4.638-6.556 5.634-7.237 4.208-2.609 4.774 6.102 3.888 11.889-.775 4.311-.775 4.311 60.678 4.311 61.341 0 61.341 0 62.781-8.736 1.993-12.934 4.429-19.628 8.415-23.486 9.079-8.963 13.73-33.016 9.079-47.992-.996-3.291-1.439-13.729-4.207-18.38-1.218-2.156-2.436-4.766-2.658-5.673a776.918 776.918 0 0 0-3.322-14.182c-1.55-6.694-3.321-15.204-3.764-18.721-.554-3.517-1.993-12.48-3.211-19.968-1.218-7.489-2.768-18.721-3.543-24.961-.776-6.24-2.104-14.863-2.879-19.061-.886-4.311-1.55-11.119-1.55-15.317s-.776-14.749-1.772-23.485c-.886-8.737-2.104-28.932-2.657-44.816-.554-15.884-1.329-30.407-1.772-32.222-.664-2.95-.554-3.177 1.329-2.383 7.64 3.291 10.186 3.291 17.273.341 5.536-2.383 18.048-5.787 19.044-6.127.997-.34 1.772-.227 1.772.454 0 .567.886 3.744 1.55 29.499 1.107 34.831 3.211 58.43 6.533 70.116 2.325 8.169 4.429 30.18 3.543 36.988-.553 4.198-.443 6.013.665 6.694 1.771 1.021 1.66 43.454-.111 67.961-1.329 18.493-.775 55.027.775 58.998.996 2.269.775 3.517-.775 6.24-2.658 4.651-3.543 17.586-2.215 30.406 1.883 17.019 2.104 17.813 5.094 17.813 3.1 0 3.1.454.885-15.203-1.439-9.757-1.55-12.934-.442-14.636.996-1.702.885-2.61-.554-4.198-2.436-2.723-1.44-7.942 2.436-12.48 2.768-3.404 2.768-3.404.886-11.346-2.104-8.85-1.993-29.045.553-76.017 1.661-31.881.332-61.04-3.986-84.526-2.989-15.884-2.989-15.884 1.993-21.103 50.436-91.8 81.6-179.918 33.569-229.798C423.943 16.211 358.885-.229 302.594.52c-51.737.689-191.04-12.401-266.902 59.727ZM278.677.52c3.1 5.446 7.419 10.098 4.983 5.333-2.104-4.085-1.107-3.971 6.311.453 7.64 4.652 7.64 4.766 4.761 11.233-16.055 35.512-67.099 49.013-97.77 25.755-9.744-7.375-17.605-18.381-11.072-15.544 10.076 4.425 35.653 5.559 35.653 1.588 0-.454-4.318-.567-9.744-.227-25.466 1.702-42.629-12.253-23.806-19.514 2.879-1.135 7.53-3.291 10.076-4.879 3.654-2.156 5.094-2.496 5.758-1.475M177.917 18.9c-.332 29.953 48.387 50.375 82.712 34.718 21.813-9.871 40.304-26.889 41.965-38.348.443-2.723 1.328-3.291 4.429-2.497 2.768.795 2.325 9.417-.886 17.246-2.436 6.013-1.107 6.24 2.104.34 2.546-4.538 4.761-11.686 4.318-13.728-.332-1.361 7.529 1.702 19.377 4.992 10.408 2.95 47.501 19.174 53.923 23.599 4.65 3.177 7.197 9.644 17.937 46.064 3.876 13.275 6.533 20.649 18.824 53.212 4.853 12.657 6.181 17.863 5.585 20.176-1.922 7.469-42.9 22.484-58.29 22.484-13.066 0-16.277-3.404-9.634-10.325 2.215-2.383 4.208-6.013 4.983-9.19.775-2.95 2.436-7.148 3.654-9.417 2.657-4.425 2.104-6.467-.886-3.744-8.415 7.375-7.529-1.815 2.215-22.351 4.318-9.077 4.539-11.913.443-5.106-6.201 10.211-9.633 13.388-9.633 9.19 0-3.744 1.55-8.169 4.539-12.707 2.547-3.744 6.755-14.636 6.201-16.111-.111-.567-2.658 3.858-5.536 9.984-4.429 9.417-5.426 10.779-6.865 9.644-1.44-1.248-1.883 5.106-2.768 1.702-.776-2.95-.886-3.063-.997-.794-.332 7.942-15.01 116.654-14.388 146.306.426 20.288 6.527 35.449 6.527 35.68 0 2.155 3.432.567 7.529-3.744 4.54-4.539 4.54-4.539 5.204-.795 1.218 7.375 4.872 34.492 5.536 41.185.332 3.745 2.104 13.388 3.986 21.557 10.298 45.043 17.495 109.714 11.405 103.587-.997-1.134-5.979-37.895-5.315-39.483.997-2.383.665-8.169-1.218-18.153-.886-4.652-2.104-12.367-2.768-17.019-.664-4.652-3.654-17.813-6.643-29.045-2.99-11.346-6.755-26.663-8.305-34.037-1.993-9.531-3.543-14.182-5.204-15.771-3.1-3.063-2.547 1.589 4.097 30.974 2.768 12.253 5.979 26.436 7.086 31.428 1.108 4.992 2.879 13.388 3.876 18.72.996 5.333 2.657 13.275 3.654 17.586 2.325 10.779 1.882 12.254-3.544 13.161-2.436.454-7.418 1.362-11.072 2.042-3.654.795-12.623 2.043-19.931 2.95-14.837 1.702-29.01 3.858-52.04 8.169-24.471 4.425-43.405 5.446-73.632 3.858-14.284-.794-31.003-1.589-37.093-1.815-13.509-.454-43.847-4.425-49.827-6.581-2.435-.908-4.982-1.361-5.757-1.135-1.218.454-8.083-2.609-8.083-3.517 0-.34 1.218-34.15 10.408-58.203 3.322-8.623 6.754-19.742 7.751-24.734.886-4.992 2.879-14.409 4.429-20.99 4.318-18.72 6.533-43.114 5.757-62.401-.775-17.246-1.328-23.032-5.757-55.708-1.55-11.005-2.436-20.763-1.993-21.784.332-1.021-.775-5.332-2.436-9.53-2.436-6.354-3.101-9.871-3.433-20.196-.443-14.069-1.107-17.926-2.546-17.018-.554.34-1.329-.454-1.661-1.816-.554-1.475-.222-2.836.664-3.404 1.107-.68.664-1.248-1.55-2.042-1.661-.68-2.99-2.042-2.99-3.177-.11-1.134-.775-3.29-1.661-4.878-2.325-4.198-2.325 1.134.111 5.786.886 1.929 1.55 4.538 1.329 5.9-.332 2.042-.997 1.248-3.543-3.517-5.537-11.006-4.54-4.539 1.55 10.551 2.214 5.333 2.436 7.375.664 6.694-.996-.34-1.771-1.588-1.771-2.723 0-1.248-.554-2.496-1.108-2.836-1.882-1.248-5.757-9.758-9.079-19.855-2.768-8.85-2.99-9.19-2.436-3.971.443 3.403 3.1 11.119 6.643 18.834 3.322 7.374 5.98 13.842 5.98 14.522 0 2.383-2.104 1.248-4.097-2.155-1.993-3.631-3.654-4.425-3.654-1.929 0 .794 1.439 2.95 3.211 4.652 1.771 1.815 2.989 3.857 2.768 4.651-.332.795.443 1.816 1.772 2.269 3.1 1.022 4.429 4.879 3.654 10.665-.554 4.425-2.658 6.127-4.208 3.518-.332-.681-2.768-1.135-5.315-1.135-7.418 0-40.968-11.459-47.279-15.884-10.187-7.261-14.704-10.674-14.086-13.981 1.522-8.134 8.551-29.013 15.636-44.903 3.322-7.262 8.304-19.855 11.072-27.911 7.862-22.351 9.08-25.074 12.955-30.066 6.201-7.829 30.339-17.813 53.812-22.238 4.429-.794 12.845-3.29 18.713-5.559s11.294-3.858 11.958-3.631c.775.34 2.215-.113 3.433-1.021 3.875-2.95 4.539-1.929 4.539 6.013Zm80.609 100.644c-.332.227-6.643 1.475-14.173 2.836-7.529 1.248-18.269 3.858-23.916 5.673-5.647 1.929-11.626 3.404-13.398 3.404-11.072 0-28.678 15.997-23.474 21.33.886.907.222 2.723-2.768 7.261-6.2 9.19-5.757 20.536.886 23.145.775.341 1.218 1.362.886 2.269-.332 1.022.221 1.589 1.661 1.589 1.328 0 3.1 1.134 4.097 2.496.996 1.588 1.993 2.156 2.546 1.475.443-.681 1.772-1.248 2.99-1.475 2.104-.34 2.104-.34.332 1.588-.997 1.021-2.768 2.043-3.875 2.156-5.094.34-5.869 5.106-.775 5.106 5.757 0 6.311 6.694.553 7.147-4.761.341-4.429 3.064.443 3.064 4.651 0 5.536 4.538 1.772 9.19-1.993 2.609-1.993 2.723.553 6.126 1.44 1.929 3.876 6.581 5.537 10.212 4.65 10.551 15.058 26.662 17.605 27.343 1.329.34 4.982-.454 8.193-1.815 7.419-2.95 8.194-2.383 7.308 4.992-1.107 8.849-9.633 16.565-18.38 16.565-1.55 0-3.875.794-5.204 1.815-1.55 1.021-3.654 1.588-5.093 1.134-1.661-.453-5.094.454-8.858 2.156-3.433 1.589-6.976 2.837-7.862 2.837-1.993 0-2.214 2.155-.221 2.949.775.227 4.761-.794 8.858-2.382 10.519-3.971 10.297-4.085 11.072 4.992.554 7.034 3.433 17.019 4.54 15.884.332-.227-.222-4.084-1.107-8.396-1.772-8.736-1.661-15.43.221-16.111.775-.227 1.55 1.702 1.882 4.765 3.765 27.911 25.024 40.505 50.27 29.726 6.864-2.836 6.864-2.836 5.093.114-1.882 3.063-1.882 3.063.886.681 8.525-7.489 11.072-10.552 17.605-20.763 7.972-12.594 7.751-12.367 12.29-9.077 1.883 1.362 6.644 3.517 10.741 4.765 6.311 2.156 7.64 3.064 9.301 6.467 1.771 3.631 1.882 3.745 1.882 1.135 0-4.652-9.19-13.728-12.069-11.913-.554.34-3.765-1.135-7.197-3.404-3.322-2.155-6.533-3.971-6.976-3.971-.553 0-2.104-1.248-3.432-2.723-2.104-2.269-2.99-2.609-4.54-1.588-2.215 1.475-15.834-6.581-17.052-9.984-1.107-2.837-.775-34.265.332-34.945.554-.341 2.215.34 3.765 1.588 1.993 1.702 2.99 1.929 3.322.908.664-2.042 2.104-.341 2.436 2.95.775 6.807 3.875 5.786 3.875-1.248 0-3.518.111-3.631 2.879-2.61 3.986 1.589 7.086 1.362 7.086-.34 0-.908.997-2.496 2.215-3.631 1.772-1.702 2.214-3.517 2.214-9.53 0-7.602 0-7.602 5.98-10.552 15.39-7.715 24.359-31.768 15.612-41.752-1.993-2.269-1.993-2.496.553-8.736 3.765-9.304 2.215-11.573-11.294-17.359-4.429-1.816-5.314-2.723-5.314-5.22 0-1.928-.665-3.176-2.215-3.517-1.218-.34-2.214-1.021-2.214-1.475 0-1.928-9.08-11.232-12.844-13.047-3.544-1.702-24.803-3.631-26.021-2.269Zm50.491 29.045c7.64 2.95 8.969 5.105 6.533 11.232-2.658 6.807-4.872 4.311-4.872-5.9 0-2.723-.775-3.63-4.651-5.446-6.422-2.836-4.65-2.836 2.99.114Zm-2.768 4.651c0 2.156-.222 2.27-1.108.908-1.439-2.156-1.439-3.404 0-3.404.665 0 1.108 1.135 1.108 2.496Zm-87.805 8.964c3.322 5.786 10.629 10.778 17.937 12.253 3.765.794 7.308 2.269 8.415 3.517 1.108 1.248 2.768 2.269 3.765 2.269.996 0 2.768.795 3.875 1.702 1.218.908 2.99 1.702 4.097 1.702 2.436 0 8.747 7.375 8.858 10.552.111 1.361.222 6.353.332 11.232.111 10.325.997 11.573 4.651 7.148 2.104-2.61 2.657-2.837 2.214-1.135-1.882 7.602-1.993 8.509-.775 8.509 4.54 0 8.083-9.076 4.983-12.593-1.661-1.929-1.661-2.156 1.218-3.517 4.54-2.043 6.643-.114 6.865 6.58.221 3.744 0 4.765-.665 3.29-.775-1.928-.885-1.928-1.66.908-.333 1.702-1.218 2.836-1.772 2.496-.554-.34-1.329 0-1.772.681-.443.907-.332 1.021.443.567.775-.454 1.329-.34 1.329.34 0 1.475-6.09 6.581-9.08 7.602-1.439.34-5.314 3.631-8.747 7.261-11.404 11.8-40.082 27.911-45.84 25.642-2.214-.794-12.401-16.678-16.941-26.436-4.207-9.076-4.54-12.594-3.1-25.641.996-8.85 2.879-10.211 2.879-1.929 0 10.438 5.536 9.077 6.422-1.588.553-7.035-1.661-8.85-7.972-6.467-3.765 1.474-5.094 1.588-5.094.226 0-1.248 3.211-3.176 12.512-7.601 7.972-3.858 8.637-6.694 1.218-5.56-4.097.568-5.093.454-4.65-.794.332-.794 1.661-5.673 3.1-10.778 2.657-9.417 2.657-9.417 6.865-8.737 4.54.795 4.872.454 3.1-3.063-1.993-3.631.775-2.496 2.99 1.362Zm-18.491 25.414c-.775.908-1.883 1.702-2.436 1.702-.665 0-.554-.794.221-1.702.775-.908 1.883-1.702 2.436-1.702.665 0 .554.794-.221 1.702Zm92.344 37.781c-.443 2.043-1.107 3.631-1.661 3.631-1.218 0-1.218-.113.222-4.425 1.55-4.538 2.325-3.971 1.439.794Zm-29.231 35.626c.886 7.715 1.55 14.409 1.661 15.09.111.567.332 2.156.443 3.404.11 2.496 4.429 10.211 5.093 9.417.332-.227-.443-2.496-1.661-4.879-4.872-9.757-3.211-10.325 8.083-2.836 9.522 6.353 9.19 5.899 6.644 9.984a153.271 153.271 0 0 0-3.211 5.219c-.554 1.248-11.627 19.741-21.703 22.805-17.715 5.332-32.996.34-39.639-13.048-2.768-5.673-2.879-5.219 1.993-4.878 3.1.226 3.432.113 1.439-.568-3.543-1.134-6.643-5.559-7.418-10.551-.664-4.085-.664-4.085 4.65-5.446 2.99-.794 7.087-2.383 9.08-3.631 4.429-2.609 4.65-2.609 4.872-.227 0 1.135.443-3.29.885-9.757.776-13.388.554-13.048 13.066-20.196 4.761-2.723 7.419-3.744 7.751-2.836.332 1.021.996.908 2.657-.34 3.543-2.383 3.765-1.816 5.315 13.274Zm-29.683-71.409c-2.325 2.836 3.433 4.425 16.941 4.425 2.215 0 4.097.34 4.097.794 0 .907 6.201 3.29 8.636 3.29 1.883 0-3.211-6.127-6.643-8.055-3.765-2.043-21.37-2.496-23.031-.454Zm6.072 12.171c-2.879 3.631-4.589 9.887-1.6 13.745 2.879 3.63 6.584-2.269 6.584-2.269 1.317-1.816.442-8.412 1.77-9.32.554-.34 3.101.454 5.536 1.702 4.762 2.61 7.198 2.95 8.194 1.361 1.993-3.403-17.937-8.395-20.484-5.219Zm-25.724 10.445c.443 5.105.332 9.53-.222 9.984-5.425 3.971-6.311 6.808-3.211 9.304 1.661 1.361 3.986 4.084 5.094 6.013 2.103 3.517 2.103 3.517 2.103-.567 0-2.723-.553-4.425-1.661-4.879-1.771-.681-2.325-2.95-.664-2.95.554 0 1.772.794 2.768 1.702.886.907 2.104 1.702 2.768 1.702 2.436 0 1.108-2.95-2.768-6.014-2.657-2.269-3.543-3.63-2.768-4.538 3.1-3.971 2.658-18.947-.554-18.947-1.439 0-1.55 1.475-.885 9.19Zm1.025 31.743c-5.758.908-2.215 5.22 3.986 4.993 2.878-.114 3.543.113 2.325.907-.886.568-2.547 1.135-3.654 1.135-2.768 0-1.772 2.723 1.107 3.177 1.44.227 3.211-1.021 5.094-3.631 3.321-4.311 3.875-6.921 1.439-6.013-.886.34-2.99.34-4.761-.114-1.661-.454-4.208-.68-5.536-.454Z" />
        </svg>
      )
    }
  }
    

}
