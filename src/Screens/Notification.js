import { StyleSheet, Text, View, Animated, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import React, {useState} from 'react';

const Notification = () => {

  const [daftarHargaKoin, setDaftarHargaKoin] = useState([
    {judul: 'Zoom Meeting', deskripsi: 'Pelatihan Arduino', button: 'Join'},
    {judul: 'Perubahan Jadwal', deskripsi: 'Jadwal baru UKM', button: 'Lihat'},
    {judul: 'Tagihan KAS Mingguan', deskripsi: 'Rp. 10.000', button: 'Bayar'},
    {judul: 'Zoom Meeting', deskripsi: 'Bimbingan Online', button: 'Join'},
    {judul: 'Project Baru', deskripsi: 'Lomba Robotik Jatim', button: 'Lihat'},
    {judul: 'Zoom Meeting', deskripsi: 'Wellcome Party', button: 'Join'},
    {judul: 'Zoom Meeting', deskripsi: 'Bimbingan Online', button: 'Join'},
    {judul: 'Zoom Meeting', deskripsi: 'Rapat Mingguan', button: 'Join'},
    {judul: 'Materi Pembelajaran', deskripsi: 'Belajar Arduino', button: 'Lihat'},
    {judul: '<Materi Pembelajaran>', deskripsi: 'Design Rangka Robot', button: 'Lihat'},
  ]);

  return (
    <View style={{ backgroundColor: '#00005C', padding: 20, borderRadius: 6,}}>
      <FlatList
              data={daftarHargaKoin}
              renderItem={({item}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    marginBottom: 10,
                    backgroundColor: '#1746A2',
                    borderRadius: 6,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 10,
                    }}>
                    <Image
                      source={require('../images/insia.png')}
                      style={{width: 35, height: 38}}
                    />
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
                      {item.judul}
                    </Text>
                    <Text style={{color: '#FFFFFF'}}>{item.deskripsi}</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#FFE15D',
                      width: 90,

                      borderRadius: 50,
                    }} onPress={() => alert('Maaf data belum bisa digunakan')}>
                    <Text style={{color: '#000000', fontWeight: 'bold'}}>
                      {item.button}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
  </View>
  )
}

export default Notification

const styles = StyleSheet.create({})