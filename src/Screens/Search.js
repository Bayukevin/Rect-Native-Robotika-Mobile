import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import SearchDropDown from '../components/SearchDropDown'

export default function Search() {
  const [dataSource] = useState(['oprec', 'lomba', 'wellpart', 'twibon', 'anggota', 'workshop', 'pelatihan', 'meeting', 'visi & misi'])

  const [filtered, setFiltered] = useState(dataSource)
  const [searching, setSearching] = useState(false)
  const onSearch = (text) => {
    if (text) {
      setSearching(true)
      const temp = text.toLowerCase()

      const tempList = dataSource.filter(item => {
        if (item.match(temp))
          return item
      })
      setFiltered(tempList)
    }
    else {
      setSearching(false)
      setFiltered(dataSource)
    }

  }
  return (
    <View style={styles.container}>

      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor='#aeaeae'
        onChangeText={onSearch}

      />

      <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, marginTop: 80, marginBottom: 20, color: '#FDFF00', fontWeight: 'bold' }}> List of data</Text>
        <View style={{
          flexWrap: 'wrap', flexDirection: 'row',
          justifyContent: 'center'

        }}>
          {
            dataSource.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => alert('Maaf data belum bisa digunakan')}>
                  <View style={{
                    margin: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    height: 100, width: 100, backgroundColor: '#1746A2'
                  }}>
                    <Text style={{ fontSize: 15, color:'#fff', fontWeight: 'bold' }}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

      {
        searching &&
        <SearchDropDown
          onPress={() => setSearching(false)}
          dataSource={filtered} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#00005C'
  },
  textInput: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 70,
  },
});