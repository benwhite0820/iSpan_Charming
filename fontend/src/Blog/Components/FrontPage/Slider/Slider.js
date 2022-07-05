import classes from './Slider.module.css'

// render 單張的 slider
const Slider = ({ src }) => {
  // 接收上面傳下來的三張 slider

  return (
    <div className={classes.slide}>
      <img className={classes['slider--image']} src={src} alt=""></img>
    </div>
  )
}

export default Slider
