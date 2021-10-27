import siteMetadata from '@/data/siteMetadata'
import SocialMedia from './socialMedia'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4"><SocialMedia /></div>
        <p className="text-md tracking-wide text-gray-500 dark:text-gray-400 mb-2">
          {`${siteMetadata.author} @gndx  • Todos los izquierdos reservados © ${new Date().getFullYear()}.`}
        </p>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">Non Terrae Plus Ultra</div>
      </div>
    </footer>
  )
}
