import React from "react";
import { MdPeople } from "react-icons/md";
import CountUp from "react-countup";
import PersonIcon from "@mui/icons-material/Person";
import SportsSoccerIcon from "@mui/icons-material/Sports";

function CountUpComponent({ data }) {
  const countTypes = (data) => {
    const initialCounts = { User: 21 };
    return data.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, initialCounts);
  };

  const typeCounts = countTypes(data);

  // Define a mapping of types to icons and descriptions
  const typeInfo = {
    User: {
      icon: (
        <PersonIcon style={{ marginRight: "5px", verticalAlign: "middle" }} />
      ),
      description:
        "Enthusiasts from diverse backgrounds who share a common love for sports and community engagement.",
    },
    Community: {
      icon: (
        <MdPeople style={{ marginRight: "5px", verticalAlign: "middle" }} />
      ),
      description:
        "Vibrant groups that foster connections, organize events, and promote active lifestyles.",
    },
    "Sports Area": {
      icon: (
        <SportsSoccerIcon
          style={{ marginRight: "5px", verticalAlign: "middle" }}
        />
      ),
      description:
        "State-of-the-art venues where members can meet, play, and enjoy their favorite sports.",
    },
    // Add more mappings as needed
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#3B5B5D",
        padding: "0 20%",
        width: "100%",
        border: "2px solid #3B5B5D", // Add a border around the main container
        borderRadius: "10px",
        boxSizing: "border-box", // Ensure padding is included in the element's total width and height
      }}
    >
      {Object.entries(typeCounts).map(([type, count]) => (
        <div
          key={type}
          style={{
            textAlign: "center",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: " #dae4df",
            width: "250px", // Increase width of the boxes
            height: "250px", // Set fixed height for the boxes
            margin: "30px", // Add space between the boxes
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Space out the content evenly
          }}
        >
          <div
            style={{
              color: "#333",
              fontSize: "26px",
              fontWeight: "bold",
              marginBottom: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {typeInfo[type]?.icon || (
              <MdPeople
                style={{ marginRight: "5px", verticalAlign: "middle" }}
              />
            )}
            <CountUp end={count} duration={1.5} />
          </div>
          <div
            style={{
              color: "#666",
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            {type}
          </div>
          <div
            style={{
              color: "#666",
              fontSize: "14px",
              marginTop: "5px",
              textAlign: "center",
            }}
          >
            <div>{typeInfo[type]?.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountUpComponent;
