fetch("userData.json")
  .then((response) => response.json())
  .then((userData) => {
    /////////////////  Print respective name, username, email or "I'm Odd" /////////////
    userData.forEach((data) => {
      if (data.id % 2 === 0) {
        console.log(
          `Name: ${data.name}, Username: ${data.username}, Email: ${data.email}`
        );
      } else {
        console.log("I'm Odd");
      }
    });

    /////////////////  Print address keys and values for each id ////////////////
    userData.forEach((data) => {
      console.log(`Address for ID ${data.id}:`);
      for (const key in data.address) {
        console.log(`${key}: ${data.address[key]}`);
      }
    });

    //////////////////// Print name if email ends with .biz //////////////////
    userData.forEach((data) => {
      if (data.email.endsWith(".biz")) {
        console.log(`Name with .biz email: ${data.name}`);
      }
    });

    ///////////////// Print city details for specified cities/////////////////
    const citiesToCheck = ["Aliyaview", "Howemouth", "Gwenborough"];
    userData.forEach((data) => {
      if (citiesToCheck.includes(data.address.city)) {
        console.log(
          `The Zipcode and Geo of cityname ${data.address.city} is: ${data.address.zipcode} and ${data.address.geo.lat}, ${data.address.geo.lng}`
        );
      }
    });

    /////////// ////  Print CatchPhrase with max 15 letters  //////////////////////
    userData.forEach((data) => {
      const catchPhrase = data.company.catchPhrase.slice(0, 15);
      console.log(`CatchPhrase: ${catchPhrase}`);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));
