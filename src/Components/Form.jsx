import { useState } from "react"
import { useForm } from "react-hook-form"
import Header from "./Header"
import axios from "axios"
import { useMediaQuery } from "react-responsive"
import "./form.css"

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
} = useForm()
  const [master, setMaster] = useState("")
  const [slave1, setSlave1] = useState("")
  const [slave2, setSlave2] = useState("")
    const isDesktopOrLaptop = useMediaQuery({
      query: "(min-width: 1224px)",
    })
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  const [data, setData] = useState({
    TruckName: "",
    Distance_Covered: "0",
    Match_of_Route: "0",
    Fuel_Consumption: "0",
    Body_Characteristics: "0",
    Equipment_Sensors: "0",
    Efficiency: "0",
    TruckName2: "",
    Distance_Covered2: "0",
    Match_of_Route2: "0",
    Fuel_Consumption2: "0",
    Body_Characteristics2: "0",
    Equipment_Sensors2: "0",
    Efficiency2: "0",
    TruckName3: "",
    Distance_Covered3: "0",
    Match_of_Route3: "0",
    Fuel_Consumption3: "0",
    Body_Characteristics3: "0",
    Equipment_Sensors3: "0",
    Efficiency3: "0",
  })

  var postResponse

  const splitTruckName = (truckName) => {
    var truckNameArray = truckName.split(" ")
    return truckNameArray[0]
  }

  const postData = async (data) => {
    console.log("awaiting response", data)

    var TruckName = data.TruckName === "" ? "Truck1" : data.TruckName
    var Distance_Covered =
      data.Distance_Covered === "" ? 0 : Number(data.Distance_Covered)
    var Match_of_Route =
      data.Match_of_Route === "" ? 0 : Number(data.Match_of_Route)
    var Fuel_Consumption =
      data.Fuel_Consumption === "" ? 0 : Number(data.Fuel_Consumption)
    var Body_Characteristics =
      data.Body_Characteristics === "" ? 0 : Number(data.Body_Characteristics)
    var Equipment_Sensors =
      data.Equipment_Sensors === "" ? 0 : Number(data.Equipment_Sensors)
    var Efficiency = data.Efficiency === "" ? 0 : Number(data.Efficiency)

    var TruckName2 = data.TruckName === "" ? "Truck2" : data.TruckName2
    var Distance_Covered2 =
      data.Distance_Covered2 === "" ? 0 : Number(data.Distance_Covered2)
    var Match_of_Route2 =
      data.Match_of_Route2 === "" ? 0 : Number(data.Match_of_Route2)
    var Fuel_Consumption2 =
      data.Fuel_Consumption2 === "" ? 0 : Number(data.Fuel_Consumption2)
    var Body_Characteristics2 =
      data.Body_Characteristics2 === "" ? 0 : Number(data.Body_Characteristics2)
    var Equipment_Sensors2 =
      data.Equipment_Sensors2 === "" ? 0 : Number(data.Equipment_Sensors2)
    var Efficiency2 = data.Efficiency2 === "" ? 0 : Number(data.Efficiency2)

    var TruckName3 = data.TruckName3 === "" ? "Truck3" : data.TruckName3
    var Distance_Covered3 =
      data.Distance_Covered3 === "" ? 0 : Number(data.Distance_Covered3)
    var Match_of_Route3 =
      data.Match_of_Route3 === "" ? 0 : Number(data.Match_of_Route3)
    var Fuel_Consumption3 =
      data.Fuel_Consumption3 === "" ? 0 : Number(data.Fuel_Consumption3)
    var Body_Characteristics3 =
      data.Body_Characteristics3 === "" ? 0 : Number(data.Body_Characteristics3)
    var Equipment_Sensors3 =
      data.Equipment_Sensors3 === "" ? 0 : Number(data.Equipment_Sensors3)
    var Efficiency3 = data.Efficiency3 === "" ? 0 : Number(data.Efficiency3)

    var newData = {
      TruckName: TruckName,
      Distance_Covered: Distance_Covered,
      Match_of_Route: Match_of_Route,
      Fuel_Consumption: Fuel_Consumption,
      Body_Characteristics: Body_Characteristics,
      Equipment_Sensors: Equipment_Sensors,
      Efficiency: Efficiency,
      TruckName2: TruckName2,
      Distance_Covered2: Distance_Covered2,
      Match_of_Route2: Match_of_Route2,
      Fuel_Consumption2: Fuel_Consumption2,
      Body_Characteristics2: Body_Characteristics2,
      Equipment_Sensors2: Equipment_Sensors2,
      Efficiency2: Efficiency2,
      TruckName3: TruckName3,
      Distance_Covered3: Distance_Covered3,
      Match_of_Route3: Match_of_Route3,
      Fuel_Consumption3: Fuel_Consumption3,
      Body_Characteristics3: Body_Characteristics3,
      Equipment_Sensors3: Equipment_Sensors3,
      Efficiency3: Efficiency3,
    }

    postResponse = await axios.post(
      "https://truckplatooningapi.herokuapp.com/predict",
      newData
    )
    setMaster(postResponse.data)

    console.log("responsiveData", postResponse)
    console.log("Type of Data", typeof postResponse.data)
  }

  const onSubmit = (data, e) => {
    e.target.reset()
    setData(data)
    console.log("jsonData", JSON.stringify(data))
    postData(data)
  }

  const formStyle = {
    display: "flex",
    backgroundColor: "#f5f5f5",
    "@media only screen and (max-width: 768px)": {
      flexDirection: "column",
      backgroundColor: "yellow",
    },
  }

  return (
    <div>
      <div>
        <h2
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "20px",
            backgroundColor: "#f5f5f5",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          Please enter the details of the truck below to get the best truck to
          use
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isDesktopOrLaptop && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                flex: "1",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            >
              <label
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {" "}
                First Truck{" "}
              </label>
              <div>
                <input
                  {...register("TruckName", {
                    required: true,
                    pattern: /^[a-zA-Z]+$/i,
                  })}
                  placeholder='Truck Name'
                />
                {errors?.TruckName?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                <input
                  {...register("Distance_Covered", {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  })}
                  placeholder='Distance Covered (Km)'
                />
                {errors?.Distance_Covered?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                {errors?.Distance_Covered?.type === "pattern" && (
                  <p className='error'>Please enter a valid number</p>
                )}
                <select
                  {...register("Match_of_Route", {
                    required: true,
                  })}
                >
                  <option value=''>Does the full route match?</option>
                  <option value='1'>True</option>
                  <option value='0'>False</option>
                </select>
                {errors?.Match_of_Route?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                <input
                  {...register("Fuel_Consumption", {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  })}
                  placeholder='Fuel Consumption (l)'
                />
                {errors?.Fuel_Consumption?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                {errors?.Fuel_Consumption?.type === "pattern" && (
                  <p className='error'>Please enter a valid number</p>
                )}
                <select
                  {...register("Body_Characteristics", {
                    required: true,
                  })}
                >
                  <option value=''>How good is the body?</option>
                  <option value='1'>Bad</option>
                  <option value='2'>Good</option>
                  <option value='3'>Better</option>
                  <option value='4'>Best</option>
                </select>
                {errors?.Body_Characteristics?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                <input
                  {...register("Equipment_Sensors", {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  })}
                  placeholder='How many Sensors?'
                />
                {errors?.Equipment_Sensors?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                {errors?.Equipment_Sensors?.type === "pattern" && (
                  <p className='error'>Please enter a valid number</p>
                )}
                <select
                  {...register("Efficiency", {
                    required: true,
                  })}
                >
                  <option value=''>Rate the efficiency?</option>
                  <option value='1'>Bad</option>
                  <option value='2'>Good</option>
                  <option value='3'>Better</option>
                  <option value='4'>Best</option>
                </select>
                {errors?.Efficiency?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
              </div>
            </div>

            <div
              style={{
                flex: "1",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            >
              <label
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {" "}
                Second Truck{" "}
              </label>
              <div>
                <input
                  {...register("TruckName2", {
                    required: true,
                    pattern: /^[a-zA-Z]+$/i,
                  })}
                  placeholder='Truck Name'
                />
                {errors?.TruckName2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                <input
                  {...register("Distance_Covered2", {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  })}
                  placeholder='Distance Covered (Km)'
                />
                {errors?.Distance_Covered2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                {errors?.Distance_Covered2?.type === "pattern" && (
                  <p className='error'>Please enter a valid number</p>
                )}
                <select
                  {...register("Match_of_Route2", {
                    required: true,
                  })}
                >
                  <option value=''>Does the full route match?</option>
                  <option value='1'>True</option>
                  <option value='0'>False</option>
                </select>
                {errors?.Match_of_Route2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                <input
                  {...register("Fuel_Consumption2", {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  })}
                  placeholder='Fuel Consumption (l)'
                />
                {errors?.Fuel_Consumption2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                {errors?.Fuel_Consumption2?.type === "pattern" && (
                  <p className='error'>Please enter a valid number</p>
                )}
                <select
                  {...register("Body_Characteristics2", {
                    required: true,
                  })}
                >
                  <option value=''>How good is the body?</option>
                  <option value='1'>Bad</option>
                  <option value='2'>Good</option>
                  <option value='3'>Better</option>
                  <option value='4'>Best</option>
                </select>
                {errors?.Body_Characteristics2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                <input
                  {...register("Equipment_Sensors2", {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  })}
                  placeholder='How many Sensors?'
                />
                {errors?.Equipment_Sensors2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                {errors?.Equipment_Sensors2?.type === "pattern" && (
                  <p className='error'>Please enter a valid number</p>
                )}
                <select
                  {...register("Efficiency2", {
                    required: true,
                  })}
                >
                  <option value=''>Rate the efficiency?</option>
                  <option value='1'>Bad</option>
                  <option value='2'>Good</option>
                  <option value='3'>Better</option>
                  <option value='4'>Best</option>
                </select>
                {errors?.Efficiency2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
              </div>
            </div>

            <div
              style={{
                flex: "1",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            >
              <label
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {" "}
                Third Truck{" "}
              </label>
              <div>
                <input {...register("TruckName3")} placeholder='Truck Name' />
                <input
                  {...register("Distance_Covered3")}
                  placeholder='Distance Covered (Km)'
                />
                <select {...register("Match_of_Route3")}>
                  <option value=''>Does the route match?</option>
                  <option value='1'>True</option>
                  <option value='0'>False</option>
                </select>
                <input
                  {...register("Fuel_Consumption3")}
                  placeholder='Fuel Consumption (l)'
                />
                <select {...register("Body_Characteristics3")}>
                  <option value=''>How would you rate the body?</option>
                  <option value='1'>Bad</option>
                  <option value='2'>Good</option>
                  <option value='3'>Better</option>
                  <option value='4'>Best</option>
                </select>
                <input
                  {...register("Equipment_Sensors3")}
                  placeholder='How many Sensors?'
                />
                <select {...register("Efficiency3")}>
                  <option value=''>Rate the efficiency?</option>
                  <option value='1'>Bad</option>
                  <option value='2'>Good</option>
                  <option value='3'>Better</option>
                  <option value='4'>Best</option>
                </select>
              </div>
            </div>
          </div>
        )}
        {isTabletOrMobile && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                flex: "1",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            >
              <label
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {" "}
                First Truck{" "}
              </label>
              <div>
                <input
                  {...register("TruckName", {
                    required: true,
                    pattern: /^[a-zA-Z]+$/i,
                  })}
                  placeholder='Truck Name'
                />
                {errors?.TruckName?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                <input
                  {...register("Distance_Covered", {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  })}
                  placeholder='Distance Covered (Km)'
                />
                {errors?.Distance_Covered?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                {errors?.Distance_Covered?.type === "pattern" && (
                  <p className='error'>Please enter a valid number</p>
                )}
                <select
                  {...register("Match_of_Route", {
                    required: true,
                  })}
                >
                  <option value=''>Does the full route match?</option>
                  <option value='1'>True</option>
                  <option value='0'>False</option>
                </select>
                {errors?.Match_of_Route?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                <input
                  {...register("Fuel_Consumption", {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  })}
                  placeholder='Fuel Consumption (l)'
                />
                {errors?.Fuel_Consumption?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                {errors?.Fuel_Consumption?.type === "pattern" && (
                  <p className='error'>Please enter a valid number</p>
                )}
                <select
                  {...register("Body_Characteristics", {
                    required: true,
                  })}
                >
                  <option value=''>How good is the body?</option>
                  <option value='1'>Bad</option>
                  <option value='2'>Good</option>
                  <option value='3'>Better</option>
                  <option value='4'>Best</option>
                </select>
                {errors?.Body_Characteristics?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                <input
                  {...register("Equipment_Sensors", {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  })}
                  placeholder='How many Sensors?'
                />
                {errors?.Equipment_Sensors?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                {errors?.Equipment_Sensors?.type === "pattern" && (
                  <p className='error'>Please enter a valid number</p>
                )}
                <select
                  {...register("Efficiency", {
                    required: true,
                  })}
                >
                  <option value=''>Rate the efficiency?</option>
                  <option value='1'>Bad</option>
                  <option value='2'>Good</option>
                  <option value='3'>Better</option>
                  <option value='4'>Best</option>
                </select>
                {errors?.Efficiency?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
              </div>
            </div>

            <div
              style={{
                flex: "1",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            >
              <label
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {" "}
                Second Truck{" "}
              </label>
              <div>
                <input
                  {...register("TruckName2", {
                    required: true,
                    pattern: /^[a-zA-Z]+$/i,
                  })}
                  placeholder='Truck Name'
                />
                {errors?.TruckName2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                <input
                  {...register("Distance_Covered2", {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  })}
                  placeholder='Distance Covered (Km)'
                />
                {errors?.Distance_Covered2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                {errors?.Distance_Covered2?.type === "pattern" && (
                  <p className='error'>Please enter a valid number</p>
                )}
                <select
                  {...register("Match_of_Route2", {
                    required: true,
                  })}
                >
                  <option value=''>Does the full route match?</option>
                  <option value='1'>True</option>
                  <option value='0'>False</option>
                </select>
                {errors?.Match_of_Route2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                <input
                  {...register("Fuel_Consumption2", {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  })}
                  placeholder='Fuel Consumption (l)'
                />
                {errors?.Fuel_Consumption2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                {errors?.Fuel_Consumption2?.type === "pattern" && (
                  <p className='error'>Please enter a valid number</p>
                )}
                <select
                  {...register("Body_Characteristics2", {
                    required: true,
                  })}
                >
                  <option value=''>How good is the body?</option>
                  <option value='1'>Bad</option>
                  <option value='2'>Good</option>
                  <option value='3'>Better</option>
                  <option value='4'>Best</option>
                </select>
                {errors?.Body_Characteristics2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                <input
                  {...register("Equipment_Sensors2", {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  })}
                  placeholder='How many Sensors?'
                />
                {errors?.Equipment_Sensors2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
                {errors?.Equipment_Sensors2?.type === "pattern" && (
                  <p className='error'>Please enter a valid number</p>
                )}
                <select
                  {...register("Efficiency2", {
                    required: true,
                  })}
                >
                  <option value=''>Rate the efficiency?</option>
                  <option value='1'>Bad</option>
                  <option value='2'>Good</option>
                  <option value='3'>Better</option>
                  <option value='4'>Best</option>
                </select>
                {errors?.Efficiency2?.type === "required" && (
                  <p className='error'>This field is required</p>
                )}
              </div>
            </div>

            <div
              style={{
                flex: "1",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            >
              <label
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {" "}
                Third Truck{" "}
              </label>
              <div>
                <input {...register("TruckName3")} placeholder='Truck Name' />
                <input
                  {...register("Distance_Covered3")}
                  placeholder='Distance Covered (Km)'
                />
                <select {...register("Match_of_Route3")}>
                  <option value=''>Does the route match?</option>
                  <option value='1'>True</option>
                  <option value='0'>False</option>
                </select>
                <input
                  {...register("Fuel_Consumption3")}
                  placeholder='Fuel Consumption (l)'
                />
                <select {...register("Body_Characteristics3")}>
                  <option value=''>How would you rate the body?</option>
                  <option value='1'>Bad</option>
                  <option value='2'>Good</option>
                  <option value='3'>Better</option>
                  <option value='4'>Best</option>
                </select>
                <input
                  {...register("Equipment_Sensors3")}
                  placeholder='How many Sensors?'
                />
                <select {...register("Efficiency3")}>
                  <option value=''>Rate the efficiency?</option>
                  <option value='1'>Bad</option>
                  <option value='2'>Good</option>
                  <option value='3'>Better</option>
                  <option value='4'>Best</option>
                </select>
              </div>
            </div>
          </div>
        )}
        <input style={{ display: "absolute" }} type='submit' />
      </form>
      <div>
        {master !== "" && (
          <div>
            <h2
              style={{
                textAlign: "center",
                marginTop: "50px",
                marginBottom: "20px",
                backgroundColor: "#f5f5f5",
                padding: "20px",
                borderRadius: "5px",
              }}
            >
              Result
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  color: "#DDF781",
                  marginRight: "20px",
                  marginLeft: "20px",
                }}
              >
                Lead Truck: <span>{splitTruckName(master)}</span>
              </h2>
            </div>
            <p style={{ color: "white" }}>{console.log(typeof master)}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Form
