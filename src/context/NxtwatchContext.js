import React from 'react'

const NxtwatchContext = React.createContext({
  isDark: true,
  savedVideos: [],
  activeTab: '',
  changeTheme: () => {},
  addVideoToSavedVideos: () => {},
  removeSavedVideo: () => {},
  activeTabItem: () => {},
})

export default NxtwatchContext
