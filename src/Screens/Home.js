import { StyleSheet,Text, View, navigation, TouchableOpacity, FlatList, Image, ScrollView, StatusBar } from 'react-native'
// import {Text} from 'native-base'
import React, { useState, useEffect, } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();


    const [dataInformasi, setDataInformasi] = useState([
      {judul: 'Visi & Misi UKM Robotika', author: 'Visi & Misi UKM Robotika', image: require('../images/visimisi.jpg'),},
      {judul: 'Hari Batik Nasional', image: require('../images/batik.jpg'), author: 'Selamat Hari Batik Nasional 2022',},
      {judul: 'Apa Itu Big Data?', image: require('../images/BigData.jpg'), author: 'Sudah tahukah kalian apa itu Big Data?',},
      {judul: 'Peringatan Imlek', image: require('../images/imlek.jpg'), author: 'Selamat Tahun Baru Imlek 2022',},
      {judul: 'Artifical Intelligence?', image: require('../images/artifical.jpg'), author: 'Tahukah kalian apa itu Artifical Intelligence?',},
      {judul: 'Lomba Robotika', image: require('../images/robotica.jpg'), author: 'Perlombaan robotika se Jawa Timur',},
      {judul: 'Robotik Magazine', image: require('../images/rm1.jpg'), author: 'Get To Know Robotik Research',},
      {judul: 'Robotik Magazine', image: require('../images/rm2.jpg'), author: 'Get To Know VTOL',},
      {judul: 'Robotik Magazine', image: require('../images/rm3.jpg'), author: 'Get To Know UKM Robotika',},
    ])

    const [dataEvent, setDataEvent] = useState([
      {judul: 'WorkShop', image: require('../images/workshop.jpg'), author: 'Big Data Application with Computer Vision',},
      {judul: 'Wellcome Party', image: require('../images/Welpart.jpg'), author: 'WellPart Anggota Baru UKM Robotika',},
      {judul: 'Live Report', image: require('../images/Live.jpg'), author: 'Sharing Session With VTOL & KRSRI Team',},
      {judul: 'Pelatihan', image: require('../images/pelatihan.jpg'), author: 'Pelatihan Penerapan IOT Dalam Kehidupan',},
      {judul: 'Wellcome Party 2021', image: require('../images/welpart2.jpg'), author: 'WellPart Anggota Baru UKM Robotika 2021',},
    ])

    const [dataAnggota, setDataAnggota] = useState([
      {judul: 'Ketua Umum', image: require('../images/ketua.jpg'), author: 'Rizki Andreass',},
      {judul: 'Wakil Ketua Umum', image: require('../images/wakil.jpg'), author: 'Anak Agung. K. J',},
      {judul: 'Sekretaris', image: require('../images/sekretaris.jpg'), author: 'Jesica F Nura',},
      {judul: 'Bendahara', image: require('../images/bendahara.jpg'), author: 'Dwi Suci. W',},
      {judul: 'Koor Vajraakasha', image: require('../images/koorvaj.jpg'), author: 'Muhammad Rizqi',},
      {judul: 'Koor Robotik Research', image: require('../images/koorres.jpg'), author: 'M. Raffly Putra',},
      {judul: 'Koor Relation', image: require('../images/koorrel.jpg'), author: 'Nurina Devi. A',},
      {judul: 'Koor Jurnalistik', image: require('../images/koorjur.jpg'), author: 'Tiur Imanuela. A',},
      {judul: 'Koor PSDM', image: require('../images/koorps.jpg'), author: 'Hera Aisyah. R',},
    ])


    const [daftarRekomendasi, setDaftarRekomendasi] = useState([
      {judul: 'Open Recruitment UKM Robotika', deskripsi: 'UKM Robotika sudah memulai Open Recruitment keanggotaan baru nih!', image: require('../images/oprec.jpg'),},
      {judul: 'Visi & Misi UKM Robotika', deskripsi: 'Visi & Misi UKM Robotika IT Telkom Surabaya', image: require('../images/visimisi.jpg'),},
      {judul: 'Coming Soon', deskripsi: 'Introduce our members KRSRI Team & VTOL Team', image: require('../images/coming.jpg'),},
      {judul: 'Robot Canggih Pembantu Pekerjaan Manusia', deskripsi: 'Berikut 4 robot canggih untuk membantu pekerjaan manusia', image: require('../images/4robotCanggih.jpg'),},
      {judul: 'Twibbon UKM Robotika', deskripsi: 'Apakah kamu siap menjadi anggota UKM Robotika?', image: require('../images/twibon.jpg'),},
    ])

    return (

      // Head Start
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <StatusBar backgroundColor="#3880ff" barStyle= "light-content"/>
        <View style={{flex: 1}}>
          <View style= {{backgroundColor: '#00005C', paddingBottom: 10}}>
            <View style={{marginHorizontal: 20, marginTop: 50}}>
              <Text style={{color: '#ffffff', fontSize: 18}}>Selamat Datang</Text>
              <Text style={{fontSize: 32, fontWeight: 'bold', color: '#ffffff',}}>Robotika ITTS</Text>
            </View>

          <View style={{marginLeft: 20, marginTop: 15}}>
              <FlatList data={daftarRekomendasi} horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => <TouchableOpacity style={{backgroundColor: '#ffffff', marginTop: 10, flexDirection: 'row', marginRight: 20, elevation: 3, padding: 10, marginBottom:10, borderRadius: 5}} onPress={() => navigation.navigate('Registrasi')}>
                <View style= {{marginRight: 10, width: 200}}>
                  <Text style={{fontWeight: 'bold', fontSize: 22}}>{item.judul}</Text>
                  <Text style={{fontSize: 14}}>{item.deskripsi}</Text>
                </View>
                <View>
                <Image source={item.image} style={{width: 150, height: 150, borderRadius: 10}} resizeMode= "contain"/> 
                </View>
              </TouchableOpacity>}/>
            </View>
          </View>
          {/* Head End */}


          <ScrollView>

          {/* List 1 Start */}
          <View style={{marginLeft: 20, marginTop: 5}}>
            <View style= {{flexDirection: 'row', marginRight: 10}}>
            <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 22}}>Informasi</Text>
            <TouchableOpacity style= {{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}} onPress={() => navigation.navigate('Informasi', {data: dataInformasi})}>
              <Text style={{marginTop: 20}}>Lihat Semua </Text>
            </TouchableOpacity>
            </View>

            <FlatList data={dataInformasi} horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => <TouchableOpacity style={{width: 150, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'flex-start', marginTop: 10, marginRight: 20}} onPress={() => navigation.navigate('Visimisi')}>
              <Image source={item.image} style={{width: 150, height: 150, borderRadius: 5, marginBottom: 10}} resizeMode= "contain"/>
              <Text style={{fontWeight: 'bold'}}>{item.judul}</Text>
              <Text style={{fontSize: 14}}>{item.author}</Text>
            </TouchableOpacity>}/>
          </View>
          {/* List 1 End */}

          {/* List 2 Start */}
          <View style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>
            <View style= {{flexDirection: 'row', marginRight: 10}}>
            <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 22}}>Event</Text>
            <TouchableOpacity style= {{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}} onPress={() => navigation.navigate('Event', {data: dataEvent})}>
              <Text style={{marginTop: 20}}>Lihat Semua </Text>
            </TouchableOpacity>
            </View>

            <FlatList data={dataEvent} horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => <TouchableOpacity style={{width: 150, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'flex-start', marginTop: 10, marginRight: 20}} onPress={() => alert('Maaf data belum bisa digunakan')}>
              <Image source={item.image} style={{width: 150, height: 150, borderRadius: 5, marginBottom: 10}} resizeMode= "contain"/>
              <Text style={{fontWeight: 'bold'}}>{item.judul}</Text>
              <Text style={{fontSize: 14}}>{item.author}</Text>
            </TouchableOpacity>}/>
          </View>
          {/*List 2 End  */}

          {/* List 3 Start */}
          <View style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>
            <View style= {{flexDirection: 'row', marginRight: 10}}>
            <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 22}}>Keanggotaan</Text>
            <TouchableOpacity style= {{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}} onPress={() => navigation.navigate('Anggota', {data: dataAnggota})}>
              <Text style={{marginTop: 20}}>Lihat Semua </Text>
            </TouchableOpacity>
            </View>

            <FlatList data={dataAnggota} horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => <TouchableOpacity style={{width: 150, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'flex-start', marginTop: 10, marginRight: 20}} onPress={() => alert('Maaf data belum bisa digunakan')}>
              <Image source={item.image} style={{width: 150, height: 150, borderRadius: 5, marginBottom: 10}} resizeMode= "contain"/>
              <Text style={{fontWeight: 'bold'}}>{item.judul}</Text>
              <Text style={{fontSize: 14}}>{item.author}</Text>
            </TouchableOpacity>}/>
          </View>
          {/*List 3 End  */}
          </ScrollView>

        </View>

      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3880ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});