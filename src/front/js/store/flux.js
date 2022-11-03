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
      posts: [
        {
          title: "",
          description: "",
          presentation: "",
          active_component: "",
          expiration_date: "",
          dosis: "",
          quantity: "",
          name: "",
          medicine_picture: "",
          typeof: "",
          description: "",
          user_id: "",
          id: "",
        },
      ],
      tradingPost: [
        {
          title: "",
          description: "",
          presentation: "",
          active_component: "",
          expiration_date: "",
          dosis: "",
          quantity: "",
          name: "",
          medicine_picture: "",
          typeof: "",
          description: "",
          user_id: "",
          id: "",
        },
      ],
    },
    actions: {
      setActiveUser: (user) => {
        setStore({
          activeUser: [user],
        });
      },

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
            return true;
          }
        } catch (error) {}
      },
      logout: () => {
        localStorage.removeItem("token");
        getActions().setActiveUser({ id: "Guest" });
      },
      ////////////////////////////////////////////////// vista post

      post: async (title, description, presentation, active_component, expiration_date, quantity) => {
        try {
          let medicine;
          medicine = { title: title, description: description, presentation: presentation, active_component: active_component, expiration_date: expiration_date, quantity: quantity };
          const response = await fetch(process.env.BACKEND_URL + "/api/solicitud", {
            method: "POST",
            body: JSON.stringify(medicine),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) throw new Error (`invalid response. Response status: ${response.status}`)
					const body = await response.json()
          medicine = body
				}catch(error){
					console.log(error)
				}
			},
      ////////////////////////////////////////////////// vista post
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
