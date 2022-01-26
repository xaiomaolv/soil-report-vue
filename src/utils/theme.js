import variables from "@/assets/styles/variables.scss";
import store from '@/store';
import logoEjkjImg from '@/assets/logo/logo.png'
import logoIcbcImg from '@/assets/logo/icbc_logo.png'
const version = require('element-ui/package.json').version

// 获取主题名称
function getThemeCssName(val) {
  const name = val.substring(6, 7).toUpperCase() + val.substring(7)
  return name == "Dark" ? "" : name
}

// 设置主题名称
function set(val) {
  // 根据主题风格更换主题颜色
  if (val === 'theme-dark') {
    setColor(variables.primary)
  }
  if (val === 'theme-light') {
    setColor(variables.tiffany)
  }
  if (val === 'theme-icbc') {
    setColor(variables.icbcRed)
  }


  //设置侧边菜单栏主题
  store.dispatch('settings/changeSetting', {
    key: 'sideTheme',
    value: val
  })
}

// 设置主题颜色
function setColor(val) {
  store.dispatch('settings/changeSetting', {
    key: 'theme',
    value: val
  })
}

// 获取侧边栏颜色
function sideBgColor() {
  const val = store.state.settings.sideTheme
  const cssName = "menu" + getThemeCssName(val) + "Bg"
  return variables[cssName]
  // if (val === 'theme-dark') {
  //   return variables.menuBg
  // }
  // if (val === 'theme-light') {
  //   return variables.menuLightBg
  // }
  // if (val === 'theme-icbc') {
  //   return variables.menuIcbcBg
  // }
}

// 获取侧边栏文字颜色
function sideTextColor() {
  const val = store.state.settings.sideTheme
  const cssName = "menu" + getThemeCssName(val) + "Text"
  return variables[cssName]
  // if (val === 'theme-dark') {
  //   return variables.menuText
  // }
  // if (val === 'theme-light') {
  //   return variables.menuLightText
  // }
  // if (val === 'theme-icbc') {
  //   return variables.menuIcbcText
  // }
}

// 获取侧边栏标题颜色
function sideTitleColor() {
  const val = store.state.settings.sideTheme
  const cssName = "sidebar" + getThemeCssName(val) + "Title"
  return variables[cssName]
  // if (val === 'theme-dark') {
  //   return variables.sidebarTitle
  // }
  // if (val === 'theme-light') {
  //   return variables.sidebarLightTitle
  // }
  // if (val === 'theme-icbc') {
  //   return variables.sidebarIcbcTitle
  // }
}

// 获取logo
function logo() {
  const val = store.state.settings.sideTheme
  if (val.indexOf("-icbc") > -1) {
    return logoIcbcImg
  }
  return logoEjkjImg
}

// 以下加载已保存的换主题颜色 ======================================================
// restoreCss()

const handleRestore = function (id) {
  const ORIGINAL_THEME = '#409EFF'
  const val = store.state.settings.theme
  const themeCluster = getThemeCluster(val.replace('#', ''))
  const originalCluster = getThemeCluster(ORIGINAL_THEME.replace('#', ''))
  const newStyle = updateStyle(chalk, originalCluster, themeCluster)

  let styleTag = document.getElementById(id)
  if (!styleTag) {
    styleTag = document.createElement('style')
    styleTag.setAttribute('id', id)
    document.head.appendChild(styleTag)
  }
  styleTag.innerText = newStyle
}

// 替换颜色
function updateStyle(style, oldCluster, newCluster) {
  let newStyle = style
  oldCluster.forEach((color, index) => {
    newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
  })
  return newStyle
}

// 获取主题颜色数组
function getThemeCluster(theme) {
  const tintColor = (color, tint) => {
    let red = parseInt(color.slice(0, 2), 16)
    let green = parseInt(color.slice(2, 4), 16)
    let blue = parseInt(color.slice(4, 6), 16)

    if (tint === 0) { // when primary color is in its rgb space
      return [red, green, blue].join(',')
    } else {
      red += Math.round(tint * (255 - red))
      green += Math.round(tint * (255 - green))
      blue += Math.round(tint * (255 - blue))

      red = red.toString(16)
      green = green.toString(16)
      blue = blue.toString(16)

      return `#${red}${green}${blue}`
    }
  }

  const shadeColor = (color, shade) => {
    let red = parseInt(color.slice(0, 2), 16)
    let green = parseInt(color.slice(2, 4), 16)
    let blue = parseInt(color.slice(4, 6), 16)

    red = Math.round((1 - shade) * red)
    green = Math.round((1 - shade) * green)
    blue = Math.round((1 - shade) * blue)

    red = red.toString(16)
    green = green.toString(16)
    blue = blue.toString(16)

    return `#${red}${green}${blue}`
  }

  const clusters = [theme]
  for (let i = 0; i <= 9; i++) {
    clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
  }
  clusters.push(shadeColor(theme, 0.1))
  return clusters
}

// 获取在线element主题
var chalk = ""

function restoreCss() {
  const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      chalk = xhr.responseText.replace(/@font-face{[^}]+}/, '')
      handleRestore('chalk-style')
    }
  }
  xhr.open('GET', url)
  xhr.send()
}


export default { set, setColor, sideBgColor, sideTextColor, sideTitleColor, logo, restoreCss }