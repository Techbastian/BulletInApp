import { Wrapper } from "../styledComponents/containers"
import save from "../assets/img/save.svg"
import "../styles/home.css"
import location from '../assets/img/location.svg'
import Map from '../assets/img/Map.png'
import NavBar from "./containers/NavBar"

const ItemDetail = () => {
  return (
    <>
    <Wrapper>
      <div className="d-flex-column header__item">
        <figure className="d-flex">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSptRJG11GhSezkSsV9eLpFyWc13BApJ0bZJA&s" alt="" />
        </figure>
        <div className="d-flex-column w100 p-1">
          <div className="d-flex-row w100 j-content-space-between ">
            <p>Macbook air 2015 core i3</p>
            <img src={save} alt="" />
          </div>
          <div className="d-flex-row w100 j-content-space-between">
            <strong>price</strong>
          </div>
          <div className="d-flex-row div_button">
            <button>Call</button>
            <button>Send SMS</button>
          </div>
          <div className="d-flex-column m-top-1">
            <h3>Description</h3>
            <p className="m-top-1" style={{ color: '#474747' }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae turpis. In nulla posuere sollicitudin aliquam ultrices. Purus faucibus ornare suspendisse sed. In iaculis nunc sed augue. Elementum sagittis vitae et leo duis ut diam quam nulla. Facilisi morbi tempus iaculis urna id volutpat. Congue eu consequat ac felis donec et odio. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Amet aliquam id diam maecenas. Velit aliquet sagittis id consectetur purus ut faucibus.</p>
          </div>
          <div className="d-flex-row m-top-1 div_location gap-1em">
            <div><img src={location} alt="" /></div>
            <div className="d-flex-column ">
              <h4>Denver, Colorado USA</h4>
              <small>Denver, Colorado USA</small>
            </div>
            <div>
              <img src={Map} alt="" />
            </div>
          </div>
        </div>

      </div>
      
    </Wrapper>
    <NavBar />
    </>
  )
}

export default ItemDetail