import React, { useState } from "react";
import {
  faCamera,
  faCity,
  faGreaterThan,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Form,
  Input,
  FormGroup,
  CustomInput,
} from "reactstrap";
import CustomButton from "./CustomButton";
import BreadCrumb from "./BreadCrumb";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const POST = {};

const AddPost = (props) => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [fuel, setFuel] = useState("");
  const [registered, setRegistered] = useState("");
  const [areaUnit, setAreaUnit] = useState("");
  const [area, setArea] = useState("");
  const [furnished, setFurnished] = useState("");
  const [condition, setCondition] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [subCategoryOptions, setSubCategoryOptions] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const formStyle = {
    width: "100%",
    minHeight: "248px",
    border: "1px solid #CCD5D6",
  };
  const handleCategory = (e) => {
    setCategory(e.target.outerText);
    POST.category = e.target.outerText;
    if (POST.category !== "") {
      let subCat = SubCategories[POST.category].map((value, key) => {
        return (
          <ListGroupItem
            className="categoryItem"
            key={key}
            onClick={handleSubCategory}
          >
            {value}
          </ListGroupItem>
        );
      });
      setSubCategoryOptions(subCat);
    } else {
      setSubCategoryOptions(null);
    }
    // console.log(e.target);
    // console.log("'" + e.target.outerText + "'");
  };

  const SubCategories = {
    Mobiles: ["Tablets", "Accessories", "Mobile Phones"],
    Vehicles: ["Cars", "Busses", "Vans", "Trucks", "Rikshaw"],
    Property: ["Land and Plots", "Houses", "Shops"],
    Electronics: [
      "Computers and Accessories",
      "TV - Video - Audio",
      "Cameras",
      "AC",
      "Fridge",
      "Washing Machines",
    ],
    Bikes: ["Motor cycles", "Bicycles"],
    Animals: ["Cats", "Dogs", "Hourses", "Birds"],
    Furniture: ["Sofa", "Chairs", "Beds", "Tables", "Mirrors"],
    Books: ["Books", "Magzines"],
    Kids: ["Toys", "Prams and Walkers", "Kids Bikes"],
    Sports: ["Sports Equipments"],
  };
  const handleSubCategory = (e) => {
    setSubCategory(e.target.outerText);
    setIsSelected(true);
    POST.subCategory = subCategory;
  };
  const handleCompany = (e) => {
    setCompany(e.target.value);
    POST.company = company;
  };
  const handleType = (e) => {
    setType(e.target.value);
    POST.type = type;
  };
  const handleFuel = (e) => {
    setFuel(e.target.value);
    POST.fuel = fuel;
  };
  const handleRegistered = (e) => {
    setRegistered(e.target.value);
    POST.registered = registered;
  };
  const handleAreaUnit = (e) => {
    setAreaUnit(e.target.value);
    POST.areaUnit = areaUnit;
  };
  const handleArea = (e) => {
    setArea(e.target.value);
    POST.area = area;
  };
  const handleFurnished = (e) => {
    setFurnished(e.target.value);
    POST.furnished = furnished;
  };
  const handleCondition = (e) => {
    setCondition(e.target.value);
    POST.condition = condition;
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
    POST.title = title;
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
    POST.description = description;
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
    POST.price = price;
  };
  const handleImageUrl = (e) => {
    setImageUrl(e.target.value);
    POST.imageUrl = imageUrl;
  };
  const handleState = (e) => {
    setState(e.target.value);
    POST.state = state;
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    POST.city = city;
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
    POST.mobile = mobile;
  };
  const handleWhatsapp = (e) => {
    setWhatsapp(e.target.value);
    POST.whatsapp = whatsapp;
  };
  const handleChangeCategory = () => {
    setIsSelected(false);
  };
  const handlePost = () => {
    console.log(POST);
    console.log(
      'category: "' + category + '"',
      'subCategory: "' + subCategory + '"',
      'company: "' + company + '"',
      'type: "' + type + '"',
      'fuel: "' + fuel + '"',
      'registered: "' + registered + '"',
      'areaUnit: "' + areaUnit + '"',
      'area: "' + area + '"',
      'furnished: "' + furnished + '"',
      'condition: "' + condition + '"',
      'title: "' + title + '"',
      'description: "' + description + '"',
      'price: "' + price + '"',
      'imageUrl: "' + imageUrl + '"',
      'state: "' + state + '"',
      'city: "' + city + '"',
      'mobile: "' + mobile + '"',
      'whatsapp: "' + whatsapp + '"'
    );
  };
  const Categories = [
    "Mobiles",
    "Vehicles",
    "Property",
    "Electronics",
    "Bikes",
    "Animals",
    "Furniture",
    "Books",
    "Kids",
    "Sports",
  ];
  const ICONS = [
    "mobile-alt",
    "car-alt",
    "landmark",
    "tv",
    "motorcycle",
    "paw",
    "couch",
    "book",
    "futbol",
    "baby-carriage",
  ];
  let mainCat = Categories.map((category, index) => {
    return (
      <ListGroupItem
        className="categoryItem"
        key={index}
        onClick={handleCategory}
      >
        <FontAwesomeIcon style={{ width: "5%" }} icon={["fas", ICONS[index]]} />
        <span
          style={{ display: "inline-block", width: "90%", paddingLeft: "17px" }}
          // onClick={handleCategory}
        >
          {category}
        </span>
        <FontAwesomeIcon style={{ width: "5%" }} icon={faGreaterThan} />
      </ListGroupItem>
    );
  });

  
  const tabTypes = [
    "Apple",
    "Danny Tabs",
    "Q Tabs",
    "Samsung",
    "Other Tablets",
  ];
  const accessoriesTypes = ["Mobolie", "Tablets"];
  const mobileCompanies = [
    "Apple",
    "Huawei",
    "Infinix",
    "Nokia",
    "OPPO",
    "QMobile",
    "Samsung",
    "Tecno",
    "Vivo",
    "Xiaomi",
  ];
  const carCompnaies = [
    "Audi",
    "BMW",
    "Honda",
    "KIA",
    "Nisan",
    "Sozuki",
    "Toyota",
    "RAnge Rover",
  ];
  const _fuel = ["CNG", "Diesel", "Hybrid", "LPG", "Petrol"];
  const landType = [
    "Agriculture Land",
    "Commercial Plots",
    "Files",
    "Industrial Lands",
    "Residetial Plots",
  ];
  const _areaUnit = [
    "Kanal",
    "Marla",
    "Square Feet",
    "Square Meter",
    "Square Yards",
  ];
  const _furnished = ["Yes", "No"];
  const shopType = ["Office", "Shop", "Warehouse", "Factory", "Building"];
  const applianceType = [
    "Computer",
    "Hard Disk",
    "Internet",
    "Laptops",
    "Monitors",
    "Printers",
    "Others",
  ];
  const videoType = ["TV", "Video-Audio"];
  const cameraTypes = ["Cameras", "Lens", "Other accessories"];
  const bikeCompanies = [
    "Honda",
    "KaWasaki",
    "Road Prince",
    "Suzuki",
    "United",
    "VESPA",
    "Yamaha",
    "Eagle",
    "Crown",
  ];
  const dogTypes = [
    "Beagle",
    "Boxer",
    "Bulldog",
    "Pug",
    "Russian",
    "Other Breeds",
  ];
  const bookType = [
    "Education",
    "Training",
    "Literature",
    "Fiction",
    "Professional",
    "Other Books",
  ];
  const cities = [
    "Faisalabad",
    "Lahore",
    "Islamabad",
    "Karachi",
    "Multan",
    "Sukkur",
    "Abottabad",
    "Peshawar",
    "Hyderabad",
    "Okara",
    "Quetta",
    "Rahim Yar Khan",
    "Sargodha",
    "Sahiwal",
    "Wazirbad",
  ];
  const states = [
    "Azad Kashmir",
    "Balochistan",
    "Islamabad",
    "Khyber Pakhtunkhwah",
    "Nothern Areas",
    "Punjab",
    "Sindh",
  ];

  const _AREAUNIT = _areaUnit.map((_areaUnit, index) => {
    return (
      <option key={index} value={_areaUnit}>
        {_areaUnit}
      </option>
    );
  })

  return (
    <div className="post">
      <Container>
        <h1 className="text-center" style={{ textTransform: "uppercase" }}>
          Post Your Ad
        </h1>
        {isSelected ? (
          <div className="postDetails">
            <div>
              <h5 className="chooseCategory">Seleted Category</h5>
              <BreadCrumb
                category={category}
                subCategory={subCategory}
                handleChangeCategory={handleChangeCategory}
              />
            </div>

            <Form style={formStyle}>
              <h4 className="h4Heading">includes some details</h4>
              {subCategory === "Mobile Phones" ? (
                <Input
                  onChange={handleCompany}
                  style={{ width: "95%" }}
                  className="m-3"
                  type="select"
                  name="categories"
                  bsSize="lg"
                >
                  <option value="default">Company</option>
                  {mobileCompanies.map((company, index) => {
                    return (
                      <option key={index} value={company}>
                        {company}
                      </option>
                    );
                  })}
                </Input>
              ) : subCategory === "Tablets" ? (
                <Input
                  onChange={handleType}
                  style={{ width: "95%" }}
                  className="m-3"
                  type="select"
                  name="categories"
                  bsSize="lg"
                >
                  <option value="default">Type</option>
                  {tabTypes.map((type, index) => {
                    return (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    );
                  })}
                </Input>
              ) : subCategory === "Accessories" ? (
                <Input
                  onChange={handleType}
                  style={{ width: "95%" }}
                  className="m-3"
                  type="select"
                  name="categories"
                  bsSize="lg"
                >
                  <option value="default">Type</option>
                  {accessoriesTypes.map((type, index) => {
                    return (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    );
                  })}
                </Input>
              ) : subCategory === "Cars" ? (
                <>
                  <Input
                    onChange={handleCompany}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="select"
                    name="categories"
                    bsSize="lg"
                  >
                    <option value="default">Company</option>
                    {carCompnaies.map((company, index) => {
                      return (
                        <option key={index} value={company}>
                          {company}
                        </option>
                      );
                    })}
                  </Input>
                  <Input
                    onChange={handleFuel}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="select"
                    name="categories"
                    bsSize="lg"
                  >
                    <option value="default">Fuel</option>
                    {_fuel.map((_fuel, index) => {
                      return (
                        <option key={index} value={_fuel}>
                          {_fuel}
                        </option>
                      );
                    })}
                  </Input>
                  <Input
                    onChange={handleRegistered}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="select"
                    name="categories"
                    bsSize="lg"
                  >
                    <option value="default">Registered In</option>
                    {cities.map((city, index) => {
                      return (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      );
                    })}
                    <option value="Not Registered">Not Registered</option>
                  </Input>
                </>
              ) : subCategory === "Land and Plots" ? (
                <>
                  <Input
                    onChange={handleType}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="select"
                    name="categories"
                    bsSize="lg"
                  >
                    <option value="default">Type</option>
                    {landType.map((landType, index) => {
                      return (
                        <option key={index} value={landType}>
                          {landType}
                        </option>
                      );
                    })}
                  </Input>
                  <Input
                    onChange={handleAreaUnit}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="select"
                    name="categories"
                    bsSize="lg"
                  >
                    <option value="default">Area Unit</option>
                    {_AREAUNIT}
                  </Input>
                  <Input
                    onChange={handleArea}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="text"
                    name="area"
                    placeholder="Enter Area"
                    bsSize="lg"
                  />
                </>
              ) : subCategory === "Houses" ? (
                <>
                  <Input
                    onChange={handleFurnished}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="select"
                    name="categories"
                    bsSize="lg"
                  >
                    <option value="default">Furnished</option>
                    {_furnished.map((_furnished, index) => {
                      return (
                        <option key={index} value={_furnished}>
                          {_furnished}
                        </option>
                      );
                    })}
                  </Input>
                  <Input
                    onChange={handleAreaUnit}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="select"
                    name="categories"
                    bsSize="lg"
                  >
                    <option value="default">Area Unit</option>
                    {_AREAUNIT}
                  </Input>
                  <Input
                    onChange={handleArea}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="text"
                    name="area"
                    placeholder="Enter Area"
                    bsSize="lg"
                  />
                </>
              ) : subCategory === "Shops" ? (
                <>
                  <Input
                    onChange={handleType}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="select"
                    name="categories"
                    bsSize="lg"
                  >
                    <option value="default">Type</option>
                    {shopType.map((type, index) => {
                      return (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      );
                    })}
                  </Input>
                  <Input
                    onChange={handleAreaUnit}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="select"
                    name="categories"
                    bsSize="lg"
                  >
                    <option value="default">Area Unit</option>
                    {_AREAUNIT}
                  </Input>
                  <Input
                    onChange={handleArea}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="text"
                    name="area"
                    placeholder="Enter Area"
                    bsSize="lg"
                  />
                </>
              ) : subCategory === "Computers and Accessories" ? (
                <Input
                  onChange={handleType}
                  style={{ width: "95%" }}
                  className="m-3"
                  type="select"
                  name="categories"
                  bsSize="lg"
                >
                  <option value="default">Type</option>
                  {applianceType.map((applianceType, index) => {
                    return (
                      <option key={index} value={applianceType}>
                        {applianceType}
                      </option>
                    );
                  })}
                </Input>
              ) : subCategory === "TV - Video - Audio" ? (
                <Input
                  onChange={handleType}
                  style={{ width: "95%" }}
                  className="m-3"
                  type="select"
                  name="categories"
                  bsSize="lg"
                >
                  <option value="default">Type</option>
                  {videoType.map((videoType, index) => {
                    return (
                      <option key={index} value={videoType}>
                        {videoType}
                      </option>
                    );
                  })}
                </Input>
              ) : subCategory === "Cameras" ? (
                <Input
                  onChange={handleType}
                  style={{ width: "95%" }}
                  className="m-3"
                  type="select"
                  name="categories"
                  bsSize="lg"
                >
                  <option value="default">Type</option>
                  {cameraTypes.map((cameraTypes, index) => {
                    return (
                      <option key={index} value={cameraTypes}>
                        {cameraTypes}
                      </option>
                    );
                  })}
                </Input>
              ) : subCategory === "Motor cycles" ? (
                <Input
                  onChange={handleCompany}
                  style={{ width: "95%" }}
                  className="m-3"
                  type="select"
                  name="categories"
                  bsSize="lg"
                >
                  <option value="default">Company</option>
                  {bikeCompanies.map((company, index) => {
                    return (
                      <option key={index} value={company}>
                        {company}
                      </option>
                    );
                  })}
                </Input>
              ) : subCategory === "Dogs" ? (
                <Input
                  onChange={handleType}
                  style={{ width: "95%" }}
                  className="m-3"
                  type="select"
                  name="categories"
                  bsSize="lg"
                >
                  <option value="default">Type</option>
                  {dogTypes.map((dogTypes, index) => {
                    return (
                      <option key={index} value={dogTypes}>
                        {dogTypes}
                      </option>
                    );
                  })}
                </Input>
              ) : subCategory === "Books" ||
                subCategory === "Magzines" ? (
                <Input
                  onChange={handleType}
                  style={{ width: "95%" }}
                  className="m-3"
                  type="select"
                  name="categories"
                  bsSize="lg"
                >
                  <option value="default">Type</option>
                  {bookType.map((bookType, index) => {
                    return (
                      <option key={index} value={bookType}>
                        {bookType}
                      </option>
                    );
                  })}
                </Input>
              ) : (
                <></>
              )}

              <Input
                onChange={handleCondition}
                style={{ width: "95%" }}
                className="m-3"
                type="select"
                name="categories"
                bsSize="lg"
              >
                <option value="default">Condition</option>
                <option value="New">New</option>
                <option value="Old">Old</option>
              </Input>
              <FormGroup>
                <Input
                  onChange={handleTitle}
                  style={{ width: "95%" }}
                  className="m-3"
                  type="text"
                  name="title"
                  placeholder="Enter Title"
                  bsSize="lg"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={handleDescription}
                  type="textarea"
                  name="description"
                  placeholder="Write Description..."
                  style={{ width: "95%", height: "200px" }}
                  className="m-3"
                  bsSize="lg"
                />
              </FormGroup>
              <hr />
              <h4 className="h4Heading">Set Price</h4>

              <FormGroup>
                <div className="input-group-prepend">
                  <div className="input-group-text">Rs</div>
                  <Input
                    onChange={handlePrice}
                    style={{ width: "92%" }}
                    className="m-3"
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    bsSize="lg"
                  />
                </div>
              </FormGroup>
              <hr />
              <h4 className="h4Heading">Select Photo (Just 1 Photo)</h4>

              <FormGroup>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faCamera} />
                  </div>
                  <CustomInput
                    onChange={handleImageUrl}
                    style={{ width: "90%" }}
                    id=""
                    className="m-3"
                    type="file"
                    name="coverPicture"
                    label="Yo, pick a picture of your product!"
                  />
                </div>
              </FormGroup>
              <hr />
              <h4 className="h4Heading">Address</h4>

              <FormGroup>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faCity} />
                  </div>
                  <Input
                    onChange={handleState}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="select"
                    name="state"
                    bsSize="lg"
                  >
                    <option value="default">State</option>
                    {states.map((state, index) => {
                      return (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      );
                    })}
                  </Input>
                </div>
              </FormGroup>
              <FormGroup>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faCity} />
                  </div>
                  <Input
                    onChange={handleCity}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="select"
                    name="city"
                    bsSize="lg"
                  >
                    <option value="default">City</option>
                    {cities.map((city, index) => {
                      return (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      );
                    })}
                  </Input>
                </div>
              </FormGroup>
              <hr />
              <h4 className="h4Heading">Your Contacts</h4>

              <FormGroup>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <Input
                    onChange={handleMobile}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    bsSize="lg"
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <Input
                    onChange={handleWhatsapp}
                    style={{ width: "95%" }}
                    className="m-3"
                    type="text"
                    name="whatsapp"
                    placeholder="Whatsapp"
                    bsSize="lg"
                  />
                </div>
              </FormGroup>
              <hr />
              <Col sm={{size: '4', offset: '4'}}>
                <CustomButton
                  text="Post"
                  icon={faPaperPlane}
                  color="info"
                  handleClick={handlePost}
                  btnStyle={{ width: "100%" }}
                />
              </Col>
            </Form>
          </div>
        ) : (
          <div className="postCategories">
            <h5 className="chooseCategory">Choose Category</h5>
            <Row>
              <Col>
                <ListGroup>{mainCat}</ListGroup>
              </Col>
              <Col>
                <ListGroup>{subCategoryOptions}</ListGroup>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};
export default AddPost;
