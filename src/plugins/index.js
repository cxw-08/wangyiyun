import { Button, Field, CellGroup, Swipe, SwipeItem, Popup, Search } from 'vant';
let plugins = [Button, Field, CellGroup, Swipe, SwipeItem, Popup, Search]

export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item)
  })
}