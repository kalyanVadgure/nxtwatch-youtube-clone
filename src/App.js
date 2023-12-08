import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginRoute'
import Home from './components/HomeRoute'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetailsRoute'
import NotFound from './components/NotFound'

import ProtectedRoute from './components/ProctectedRoute'

import NxtwatchContext from './context/NxtwatchContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: true, savedVideos: [], activeTab: 'Home'}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  addVideoToSavedVideos = videoDetails => {
    const {savedVideos} = this.state

    const isAlreadySaved = savedVideos.find(
      eachVideo => videoDetails.id === eachVideo.id,
    )

    if (isAlreadySaved) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos],
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoDetails],
      }))
    }
  }

  removeSavedVideo = id => {
    const {savedVideos} = this.state

    const filterdSavedList = savedVideos.filter(each => each.id !== id)

    this.setState({savedVideos: filterdSavedList})
  }

  activeTabItem = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {isDark, savedVideos, activeTab} = this.state

    return (
      <NxtwatchContext.Provider
        value={{
          isDark,
          savedVideos,
          activeTab,
          changeTheme: this.changeTheme,
          addVideoToSavedVideos: this.addVideoToSavedVideos,
          removeSavedVideo: this.removeSavedVideo,
          activeTabItem: this.activeTabItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </NxtwatchContext.Provider>
    )
  }
}

export default App
