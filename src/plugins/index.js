import { Button ,Field, CellGroup,Swipe, SwipeItem } from 'vant';
let plugins = [Button ,Field, CellGroup,Swipe, SwipeItem ]

export default function getVant(app){
  plugins.forEach((item)=>{
    return app.use(item)
  })
}