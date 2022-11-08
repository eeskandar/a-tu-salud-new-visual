const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      /////////////////////////////// new stuff
      image: "",
      activeUser: [
        {
          id: "Guest",
          name: "Pedro",
          last_name: "Mapache",
          city: "Narnia",
          email: "holyjohnny@gmail.com",
          phone: "(424) 1112233",
          profile_picture:
            "https://images.hola.com/imagenes/mascotas/20220811215146/mapaches-curiosidades-dn/1-124-915/mapaches-curiosidades-mascota-t.jpg",
        },
      ],
      /////////////////////////////// new stuff
      donations: undefined,
      requests: undefined,
    },
    actions: {
      setImg: (img) => {
        setStore({
          image: img,
        });
      },
      setActiveUser: (user) => {
        setStore({
          activeUser: [user],
        });
      },
      getPosts: async (urlParams) => {
        try {
          const res = await fetch(
            process.env.BACKEND_URL + "/api/posts?" + urlParams,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!res.ok) {
            return false;
          }
          const body = await res.json();
          console.log(body);
          return true;
        } catch (error) {}
      },
      ///////////////////////////////// register below
      register: async (name, lastName, city, phone, email, password, image) => {
        try {
          let new_user;
          new_user = {
            name: name,
            last_name: lastName,
            city: city,
            phone: phone,
            email: email,
            password: password,
            profile_picture: image,
          };
          const response = await fetch(
            process.env.BACKEND_URL + "/api/register",
            {
              method: "POST",
              body: JSON.stringify(new_user),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            return false;
          }
          return true;
        } catch (error) {}
      },
      ///////////////////////////////// login below
      login: async (email, password) => {
        try {
          let user;
          user = { email: email, password: password };
          const response = await fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            new Error("Ocurrió un error en la solicitud");
          }
          const body = await response.json();
          if (body.token == undefined) {
            return false;
          } else {
            getActions().setActiveUser(body);
            localStorage.setItem("token", body.token);
            localStorage.setItem("id", body.id);
            return true;
          }
        } catch (error) {}
      },
      getUser: async (userid) => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + `/api/user/${userid}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          if (response.status == "401") {
            getActions().logout();
            return false;
          } else if (!response.ok) {
            new Error("Ocurrió un error en la solicitud");
          }
          const body = await response.json();
          getActions().setActiveUser(body);
          return true;
        } catch (error) {}
      },
      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        getActions().setActiveUser({ id: "Guest" });
      },
      ////////////////////////////////////////////////// vista post below ////////////////////

      post: async (
        presentation,
        dosis,
        image,
        active_component,
        quantity,
        name,
        description,
        expiration_date
      ) => {
        try {
          let medicine;
          medicine = {
            name: name,
            description: description,
            presentation: presentation,
            active_component: active_component,
            expiration_date: expiration_date,
            quantity: quantity,
            type: "Donation",
            medicine_picture: image,
            user_id: getStore().activeUser[0].id, // referencia a la linea 20
            dosis: dosis,
          };
          const response = await fetch(
            process.env.BACKEND_URL + "/api/donation",
            {
              method: "POST",
              body: JSON.stringify(medicine),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            getActions().setImg("");
            return false;
          }
          const body = await response.json();
          medicine = body;
          getActions().setImg("");

          return true;
        } catch (error) {
          console.log(error);
        }
      },
      ////////////////////////////////////////////////// get donations below ////////////////////
      // getDonations: async () => {
      //   try {
      //     const response = await fetch(
      //       process.env.BACKEND_URL + "/api/donation",
      //       {
      //         method: "GET",
      //         headers: {
      //           "Content-Type": "application/json",
      //         },
      //       }
      //     );
      //     if (!response.ok)
      //       throw new Error(
      //         `invalid response. Response status: ${response.status}`
      //       );
      //     const body = await response.json();

      //     setStore({ donations: body });
      //     console.log(donations);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
      ////////////////////////////////////////////////// post request below ////////////////////
      request: async (
        presentation,
        dosis,
        image,
        active_component,
        quantity,
        name,
        description,
        expiration_date
      ) => {
        try {
          let medicineR;
          medicineR = {
            name: name,
            description: description,
            presentation: presentation,
            active_component: active_component,
            expiration_date: expiration_date,
            quantity: quantity,
            type: "Request",
            medicine_picture: image,
            user_id: getStore().activeUser[0].id, // referencia a la linea 20
            dosis: dosis,
          };
          const response = await fetch(
            process.env.BACKEND_URL + "/api/request",
            {
              method: "POST",
              body: JSON.stringify(medicineR),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            getActions().setImg("");
            return false;
          }
          const body = await response.json();
          medicineR = body;
          getActions().setImg("");

          return true;
        } catch (error) {
          console.log(error);
        }
      },
      ////////////////////////////////////////////////// trading post below ////////////////////
      trade: async (
        nameA,
        nameB,
        quantityA,
        quantityB,
        dosisA,
        dosisB,
        expDateA,
        expDateB,
        activeCompA,
        activeCompB,
        presentA,
        presentB,
        description
      ) => {
        try {
          let user = getStore().activeUser;
          let trade;
          trade = {
            nameA: nameA,
            nameB: nameB,
            quantityA: quantityA,
            quantityB: quantityB,
            dosisA: dosisA,
            dosisB: dosisB,
            expDateA: expDateA,
            expDateB: expDateB,
            activeCompA: activeCompA,
            activeCompB: activeCompB,
            presentA: presentA,
            presentB: presentB,
            description: description,
            type: "trade",
            userid: user[0].id,
          };
          const response = await fetch(
            process.env.BACKEND_URL + "/api/user/trade",
            {
              method: "POST",
              body: JSON.stringify(trade),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            new Error("Ocurrió un error en la solicitud");
          }
        } catch (error) {}
      },

      //////////////////////// old stuff below ////////////////////////////
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
