import bannerImage from '../../assets/Purple and Yellow E-commerce Success Modern Facebook Cover.png'

const Banner = () => {
    return (
        <div className='mb-10'>
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage:`url(${bannerImage})`, backgroundPosition:'center', backgroundSize:'Cover', borderRadius:'32px'
  }}>
 


   
</div>
        </div>
    );
};

export default Banner;