import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';

import { StyleSheet, Text, View ,FlatList,SafeAreaView} from 'react-native';

import axios from 'axios';

export default function App() {

  const [userData, setuserData] = useState([]);
  const [Data, setData] = useState([]);


  const [postData,setPostData] = useState([]);
  const [extraData,setExtraData] = useState(false);






  useEffect(() => {
    // Update the document title using the browser API
    api1();

    api2();
  

   modifyData(userData,postData)


  },[userData]);

  const api1 =()=> 
  {
    axios.get('https://jsonplaceholder.typicode.com/users')
  .then(   async(response)=> {

    if(response.status == 200)
    {
      await setPostData(response.data)
   
    }
    // handle success
    // console.log(setuserData);

    


  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }

  const api2 =()=> 
  {
    axios.get('https://jsonplaceholder.typicode.com/posts')
  .then( async  (response)=> {

    // handle success
    if(response.status == 200)
    {
      await setuserData(response.data)
    await setExtraData(true)
    }
    // console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }


 var DATA= [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const renderItem = ({ item }) => {
  return (
    <View style={{borderWidth:1}}>
  <Text >
      {item.id}
    </Text>
    <Text>
      {item.title}
    </Text>
    <Text>
      {item.companyName}
    </Text>
    </View>
  
  )
  }

//   var sample1=[{
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
// ]




// var sample1= [{
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },
// ]

  const modifyData= async ( userData,PostData ) => {

    
   var dataArr=[];
     for (item of userData)
     {
      var obj ={}
       for (data of PostData)
       {
      
       if(item.id==data?.id)
       {
         obj.title=item?.title
         item.id=item.id
         obj.companyName=data.company.name
         dataArr.push(obj);

        //  console.log(obj)

       }
       }
     }
    
// console.log((dataArr))
await setData(dataArr)
     

  }
  
  
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={extraData}
        
      />

      {/* <Text>demo</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
