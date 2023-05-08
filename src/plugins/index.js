import { Button, Field, CellGroup, Swipe, SwipeItem, Popup } from 'vant';
let plugins = [Button, Field, CellGroup, Swipe, SwipeItem, Popup]

export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item)
  })
}