import './index.css'

const AppItem = props => {
  const {AppDetails} = props
  const {appName, imageUrl, category} = AppDetails
  return (
    <li className="app-item">
      <img src={imageUrl} className="img" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
