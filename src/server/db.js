import {initializeApp} from 'firebase/app'
import { getFirestore,collection,doc, getDocs,getDoc } from "firebase/firestore";
export const config = { 
  apiKey: "AIzaSyBc4L-aTepKbQQkrAKJdocqCvtUo0al6Lo",
  authDomain: "qrder-eceb9.firebaseapp.com",
  projectId: "qrder-eceb9",
  storageBucket: "qrder-eceb9.appspot.com",
  messagingSenderId: "757947766402",
  appId: "1:757947766402:web:db1477a0a2d368a3a3869b",
  measurementId: "G-84189P3BP7" 
}


const firebaseApp = initializeApp(config);

const db = getFirestore(firebaseApp);
const restaurantsCollection = collection(db,"restaurants")

export const getRestaurants = async () => {
  const Restaurants = await getDocs(restaurantsCollection);
  let res = []
  Restaurants.forEach((doc) => {
    res.push({
      id : doc.id,
      ...doc.data()
    })
  });
  return res;
}

export const getRestaurantMenu = async(id) => {
  console.log(id)
  const restaurant = collection(db,"restaurants",id,"menu")
  let menu = await getDocs(restaurant);
  let res = []
  menu.forEach((doc) => {
    res.push({
      id : doc.id,
      ...doc.data()
    })
  });
  const type = [];
  let menuDictionary = {}
  console.log(res)
  res.map(r => {
    if(!type.includes(r.type)){
      const temp = r.type
      type.push(temp);
      const ItemsWithSameType = res.filter(x => x.type === temp);
      menuDictionary[temp] = {
        title : temp.toUpperCase(),
        menu_items : [...ItemsWithSameType]
      }
    };

  })
  return menuDictionary;
  // return res;
  // menu = await collection(menu,"menu");
  // menu = await getDocs(menu)
  // console.log(menu);
  // menu_type.forEach((doc) => {

  // })
}