import { Button, Field, CellGroup, Cell, Swipe, SwipeItem, Popup, Search, Radio, RadioGroup, Notify, PasswordInput, NumberKeyboard, Skeleton, SkeletonTitle, SkeletonImage, SkeletonAvatar, SkeletonParagraph } from 'vant';
let plugins = [Button, Field, CellGroup, Cell, Swipe, SwipeItem, Popup, Search, Radio, RadioGroup, Notify, PasswordInput, NumberKeyboard, SkeletonTitle, Skeleton, SkeletonImage, SkeletonAvatar, SkeletonParagraph]

export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item)
  })
}