import React from 'react';
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title,results,navigation}) => {
    return (
        <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
        horizontal
        data={results}
        keyExtractor={result=>result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>{
            return (
                <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id: item.id})}>
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
            )
        }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);