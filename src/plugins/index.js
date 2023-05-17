import { Button, Field, CellGroup, Swipe, SwipeItem, Popup, Search, Radio, RadioGroup, Notify, PasswordInput, NumberKeyboard } from 'vant';
let plugins = [Button, Field, CellGroup, Swipe, SwipeItem, Popup, Search, Radio, RadioGroup, Notify, PasswordInput, NumberKeyboard]

export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item)
  })
}