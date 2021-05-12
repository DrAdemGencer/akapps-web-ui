import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>
            
            <li>
              <Link to="/dashboard" className=" ">
                <i className="bx bx-grid-alt"></i>
                <span>{props.t("Giriş")}</span>
              </Link>
            </li>

            <li className="menu-title">{props.t("Uygulamalar")}</li>

            <li>
              <Link to="/news" className=" ">
                <i className="bx bx-pointer"></i>
                <span>{props.t("Akademik ilanlar")}</span>
              </Link>
            </li>

            <li>
              <Link to="/archive" className=" ">
                <i className="bx bx-layer"></i>
                <span>{props.t("Faaliyet arşivi")}</span>
              </Link>
            </li>

            <li>
              <Link to="/docent" className=" ">
                <i className="bx bx-award"></i>
                <span>{props.t("Doçentlik")}</span>
              </Link>
            </li>

            <li>
              <Link to="/terms" className=" ">
                <i className="bx bx-select-multiple"></i>
                <span>{props.t("Başvuru şartları")}</span>
              </Link>
            </li>

            <li>
              <Link to="/scores" className=" ">
                <i className="bx bx-customize"></i>
                <span>{props.t("Puan hesaplama")}</span>
              </Link>
            </li>

            <li className="menu-title">{props.t("Diğer işlemler")}</li>

            <li>
              <Link to="/profile" className=" ">
                <i className="bx bx-user"></i>
                <span>{props.t("Profilim")}</span>
              </Link>
            </li>

            <li>
              <Link to="/settings" className=" ">
                <i className="bx bx-cog"></i>
                <span>{props.t("Ayarlar")}</span>
              </Link>
            </li>

            <li className="menu-title">{props.t("Yönetim paneli")}</li>

            <li>
              <Link to="/adm_users" className="">
                <i className="bx bx-user-voice"></i>
                <span className="badge rounded-pill bg-success float-end">
                  {props.t("Admin")}
                </span>
                <span>{props.t("Kullanıcılar")}</span>
              </Link>
            </li>
            <li>
              <Link to="/adm_news" className="">
                <i className="bx bx-rss"></i>
                <span className="badge rounded-pill bg-success float-end">
                  {props.t("Admin")}
                </span>
                <span>{props.t("İlanlar")}</span>
              </Link>
            </li>

          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
