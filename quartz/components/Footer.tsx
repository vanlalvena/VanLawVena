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
    const links = opts?.links ?? []
    return (
      <footer>
        <a href="https://law.vanlalvena.in">VanLawVena</a> is created by <a href="https://vanlalvena.in">Benjamin Vanlalvena</a>© {year} and is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"> CC BY 4.0</a>. Created with <a href="https://quartz.jzhao.xyz/">Quartz</a> v{version}.
        <a href="https://github.com/vanlalvena/VanLawVena/">GitHub Repository of VanLawVena</a>.
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
