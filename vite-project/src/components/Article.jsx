import HomeImg from '../images/home-image.jpg'

export const Article = () => {
    return (
        <>
          <div>
            <div>
                <div>
                  <h1>
                    Home
                  </h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro, velit, exercitationem error quidem aspernatur est laudantium, quod dolore tempore sequi repudiandae non delectus officiis maxime eligendi rem odit nostrum?</p>
                </div>
                <div>
                    <button>Explore</button>
                    <button>Learn More</button>
                </div>
            </div>
            <div>
                <img src={HomeImg}/>
            </div>
          </div>
        </>
    )
}