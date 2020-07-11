import React ,{useState,useEffect}from 'react';
import {View,Text,StyleSheet} from 'react-native';
import yelp from '../api/yelp';
const ResultsShowScreen = ({navigation}) => {
    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');
    


    const getResult = async (id) => {
        try{
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getResult(id);
    },[]);
    console.log(result);
    return (
    <View>
        <Text>Result Show Screen</Text>
    </View>
    );
}

export default ResultsShowScreen;