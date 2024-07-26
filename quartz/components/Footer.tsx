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
        <a href="https://law.vanlalvena.in">VanLawVena</a> by <a href="https://vanlalvena.in">Benjamin Vanlalvena</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"> CC BY 4.0</a> <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""></img><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></img>. Created with <a href="https://quartz.jzhao.xyz/">Quartz</a>.
      </footer>
      
//Old - <footer> Created by <a href="https://vanlalvena.in">Benjamin Vanlalvena</a> © {year} with{" "} <a href={quartzUrl}>Quartz</a> © {year} </footer>
//test -  <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://law.vanlalvena.in">VanLawVena</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://vanlalvena.in">Benjamin Vanlalvena</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a></p>
// How it should look like- VanLawVena © 2024 by Benjamin Vanlalvena is licensed under CC BY 4.0 
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
