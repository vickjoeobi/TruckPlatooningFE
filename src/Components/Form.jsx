import { useState } from "react"
import { useForm } from "react-hook-form"
import Header from "./Header"
import axios from "axios"
import "./form.css"

const Form = () => {
    const { register, handleSubmit } = useForm()
    const [leadTruck, setLeadTruck] = useState(null)
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

    const postData = async (data) => {
        console.log("awaiting response", data)

      var TruckName =  (data.TruckName === "") ? "Truck 1" : data.TruckName
      var Distance_Covered = (data.Distance_Covered === "") ? 0 : Number(data.Distance_Covered)
      var Match_of_Route =
        data.Match_of_Route === "" ? 0 : Number(data.Match_of_Route)
      var Fuel_Consumption =
        data.Fuel_Consumption === "" ? 0 : Number(data.Fuel_Consumption)
      var Body_Characteristics =
        data.Body_Characteristics === "" ? 0 : Number(data.Body_Characteristics)
      var Equipment_Sensors =
        data.Equipment_Sensors === "" ? 0 : Number(data.Equipment_Sensors)
      var Efficiency = data.Efficiency === "" ? 0 : Number(data.Efficiency)

      var TruckName2 = data.TruckName === "" ? "Truck 2" : data.TruckName2
      var Distance_Covered2 =
        data.Distance_Covered2 === "" ? 0 : Number(data.Distance_Covered2)
      var Match_of_Route2 =
        data.Match_of_Route2 === "" ? 0 : Number(data.Match_of_Route2)
      var Fuel_Consumption2 =
        data.Fuel_Consumption2 === "" ? 0 : Number(data.Fuel_Consumption2)
      var Body_Characteristics2 =
        data.Body_Characteristics2 === ""
          ? 0
          : Number(data.Body_Characteristics2)
      var Equipment_Sensors2 =
        data.Equipment_Sensors2 === "" ? 0 : Number(data.Equipment_Sensors2)
      var Efficiency2 = data.Efficiency2 === "" ? 0 : Number(data.Efficiency2)

      var TruckName3 = data.TruckName3 === "" ? "Truck 3" : data.TruckName3
      var Distance_Covered3 =
        data.Distance_Covered3 === "" ? 0 : Number(data.Distance_Covered3)
      var Match_of_Route3 =
        data.Match_of_Route3 === "" ? 0 : Number(data.Match_of_Route3)
      var Fuel_Consumption3 =
        data.Fuel_Consumption3 === "" ? 0 : Number(data.Fuel_Consumption3)
      var Body_Characteristics3 =
        data.Body_Characteristics3 === ""
          ? 0
          : Number(data.Body_Characteristics3)
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
        const response = await axios.post(
          "https://truckplatooningapi.herokuapp.com/predict",
          JSON.stringify(newData),
        )
        console.log(response)
      setLeadTruck(response.data)
    }
    
    const onSubmit = (data, e) => {
        e.target.reset();
        setData(data)
        console.log("jsonData", JSON.stringify(data))

        postData(data)

        
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
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              flex: "1",
              marginRight: "10px",
              marginLeft: "10px",
              "@media (max-width: 500px)": {
                display: "none",
              },
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
              <input {...register("TruckName")} placeholder='Truck Name' />
              <input
                {...register("Distance_Covered")}
                placeholder='Distance Covered (Km)'
              />
              <select {...register("Match_of_Route")}>
                <option value=''>Does the route match?</option>
                <option value='1'>True</option>
                <option value='0'>False</option>
              </select>
              <input
                {...register("Fuel_Consumption")}
                placeholder='Fuel Consumption (l)'
              />
              <select {...register("Body_Characteristics")}>
                <option value=''>How good is the body?</option>
                <option value='1'>Bad</option>
                <option value='2'>Good</option>
                <option value='3'>Better</option>
                <option value='4'>Best</option>
              </select>
              <input
                {...register("Equipment_Sensors")}
                placeholder='How many Sensors?'
              />
              <select {...register("Efficiency")}>
                <option value=''>Rate the efficiency?</option>
                <option value='1'>Bad</option>
                <option value='2'>Good</option>
                <option value='3'>Better</option>
                <option value='4'>Best</option>
              </select>
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
              <input {...register("TruckName2")} placeholder='Truck Name' />
              <input
                {...register("Distance_Covered2")}
                placeholder='Distance Covered (Km)'
              />
              <select {...register("Match_of_Route2")}>
                <option value=''>Does the route match?</option>
                <option value='1'>True</option>
                <option value='0'>False</option>
              </select>
              <input
                {...register("Fuel_Consumption2")}
                placeholder='Fuel Consumption (l)'
              />
              <select {...register("Body_Characteristics2")}>
                <option value=''>How good is the body?</option>
                <option value='1'>Bad</option>
                <option value='2'>Good</option>
                <option value='3'>Better</option>
                <option value='4'>Best</option>
              </select>
              <input
                {...register("Equipment_Sensors2")}
                placeholder='How many Sensors?'
              />
              <select {...register("Efficiency2")}>
                <option value=''>Rate the efficiency?</option>
                <option value='1'>Bad</option>
                <option value='2'>Good</option>
                <option value='3'>Better</option>
                <option value='4'>Best</option>
              </select>
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
        <input style={{ display: "absolute" }} type='submit' />
      </form>
    </div>
  )
}

export default Form
