// 本地

// 存
const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
    localStorage.setItem(key, value)
  }
  localStorage.setItem(key, value)
}

// 取
const getItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

// 删
const removeItem = (key) => {
  localStorage.removeItem(key)
}

export default {
  setItem,
  getItem,
  removeItem
}
