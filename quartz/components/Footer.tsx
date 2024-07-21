import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const authorName = "Benjamin Vanlalvena"
    const quartzUrl = "https://quartz.jzhao.xyz/"; 
    const links = opts?.links ?? []
    return (
      <footer>
        Created by {authorName}  © {year} with{" "} <a href={quartzUrl}>Quartz</a> © {year}
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
