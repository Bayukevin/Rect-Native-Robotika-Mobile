import { useRoute } from '@react-navigation/native'
import { Text, View, Image, ScrollView } from 'react-native'

const Event = () => {
    const {params: { data}} = useRoute();

  return (
    <ScrollView>
    <View>
        {data.map(({judul, image, author}) => (
        <View style={{flexDirection:'row', padding: 20, backgroundColor: '#1746A2', marginTop: 20}}>
            <Image source={image} style={{width: 150, height: 150, borderRadius: 5, marginBottom: 10}} resizeMode= "contain"/>
            <View style={{padding: 20, justifyContent:'center', marginLeft: 10}}>       
            <Text style={{color:'#ffffff', fontWeight: 'bold', fontSize: 20}}>{judul}</Text>
            <Text style={{color:'#ffffff', fontSize: 15, width: 130}}>{author}</Text>
            </View>
        </View>
        ))}
    </View>
    </ScrollView>
  )
}

export default Event