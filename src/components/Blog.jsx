import tibet from "../assets/images/tibet.png";
import hawai from "../assets/images/hawai.png";
import iceland from "../assets/images/iceland.png";
import i from "../assets/images/image6.png";

function Blogs() {
  return (
    <div className="grid grid-cols-1  justify-items-center font-roboto font-medium text-xl leading-[23px] tablet:grid-cols-2 lg:grid-cols-3 ">
      <div>
        <img
          src={tibet}
          alt="blog_img"
          className="w-[340px] h-[226px] tablet:w-[350px] desktop:w-[513px] desktop:h-[341px]"
        />
        <p>Interesting Tibetan Traditions</p>
      </div>
      <div>
        <img
          src={hawai}
          alt="blog_img"
          className="w-[340px] h-[226px] tablet:w-[350px] desktop:w-[513px] desktop:h-[341px]"
        />
        <p>Are There Volcanos In Hawaii?</p>
      </div>
      <div>
        <img
          src={iceland}
          alt="blog_img"
          className="w-[340px] h-[226px] tablet:w-[350px] desktop:w-[513px] desktop:h-[341px]"
        />
        <p>Winter in Iceland</p>
      </div>
      <div>
        <img
          src={tibet}
          alt="blog_img"
          className="w-[340px] h-[226px] tablet:w-[350px] desktop:w-[513px] desktop:h-[341px]"
        />
        <p>Interesting Tibetan Traditions</p>
      </div>
      <div>
        <img
          src={hawai}
          alt="blog_img"
          className="w-[340px] h-[226px] tablet:w-[350px] desktop:w-[513px] desktop:h-[341px]"
        />
        <p>Are There Volcanos In Hawaii?</p>
      </div>
      <div>
        <img
          src={iceland}
          alt="blog_img"
          className="w-[340px] h-[226px] tablet:w-[350px] desktop:w-[513px] desktop:h-[341px]"
        />
        <p>Winter in Iceland</p>
      </div>
    </div>
  );
}
export default Blogs;
