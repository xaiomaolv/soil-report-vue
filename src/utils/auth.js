import Cookies from 'js-cookie'
import { getStorageItem, setStorageItem, delStorageItem } from '@/utils/report/storage'

const TokenKey = process.env.VUE_APP_KEY + '-' + 'token'
const RKey = process.env.VUE_APP_KEY + '-' + 'rKey'
const ShareTokenKey = 'shareToken'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getRKey() {
  return Cookies.get(RKey)
}

export function setRKey(rKey) {
  return Cookies.set(RKey, rKey)
}

export function removeRKey() {
  return Cookies.remove(RKey)
}
export function setShareToken(shareToken) {
  return setStorageItem(ShareTokenKey, shareToken)
}
export function delShareToken() {
  return delStorageItem(ShareTokenKey)
}
