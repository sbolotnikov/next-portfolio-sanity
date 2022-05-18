import Link from 'next/link'

type IProps = {
  icon: string
  title: string
  url: string
}
function NavItem({ icon, title, url }: IProps) {
  return (
    <Link href={url} className=""
    >
      <div className="group flex  cursor-pointer tr   flex-row items-end  md:hover:scale-125 text-gray-800 dark:text-gray-100 md:w-12 md:flex-col md:items-center ">
        <img
          className="order-1 h-8 w-8 mx-1 group-hover:animate-bounce  md:order-none md:mb-1 dark:invert "
          src={icon}
          alt={`${icon}`}
        />
        <p className="hidden tracking-widest mx-3 transition duration-300 ease-in-out opacity-100 group-hover:inline-flex md:block md:opacity-0 md:group-hover:opacity-100">
          {title}
        </p>
      </div>
    </Link>
  )
}

export default NavItem
