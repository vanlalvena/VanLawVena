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
    const quartzUrl = "https://quartz.jzhao.xyz/"; 
    const links = opts?.links ?? []
    return (
      <footer>
        Created by <a href="https://vanlalvena.in">Benjamin Vanlalvena</a> © {year} with{" "} <a href={quartzUrl}>Quartz</a> © {year}
      </footer>
      
//Sample - <footer class><p>Created by <a href="https://vanlalvena.in/">Benjamin Vanlalvena</a> with <a href="https://quartz.jzhao.xyz/">Quartz v4.2.3</a> © 2024</p></footer>

    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
