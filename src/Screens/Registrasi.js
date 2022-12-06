import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native'
import LoginButton from '../components/LoginButton';
import TextInputEmail from '../components/TextInputEmail';

function Registrasi() {
    const [name, setName] = useState('');
    const [telp, setTelp] = useState('');
    const [prodi, setProdi] = useState('');
    const [angkatan, setAngkatan] = useState('');
    const [divisi, setDivisi] = useState('');

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#dbe4f3'}}>
      <StatusBar backgroundColor={'#dbe4f3'} barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Image
          source={require('../images/splash.png')}
          style={{width: 220, height: 200}}
        />
        <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 28, marginBottom: 10}}>
          OPEN RECRUITMENT
        </Text>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>
          UKM <Text style={{color: '#1746A2'}}>ROBOTIKA</Text>
        </Text>
      </View>

      <TextInputEmail
        state={name}
        set={setName}
        icon="address-card"
        placeholder="Nasukkan Nama"
        isPassword={false}
      />
      <TextInputEmail
        state={telp}
        set={setTelp}
        icon="whatsapp"
        placeholder="No Whatsapp"
        isPassword={false}
      />
      <TextInputEmail
        state={prodi}
        set={setProdi}
        icon="graduation-cap"
        placeholder="Fakultas & Prodi"
        isPassword={false}
      />
      <TextInputEmail
        state={angkatan}
        set={setAngkatan}
        icon="university"
        placeholder="Angkatan"
        isPassword={false}
      />
      <TextInputEmail
        state={divisi}
        set={setDivisi}
        icon="users-cog"
        placeholder="Divisi yang dipilih"
        isPassword={false}
      />

      <LoginButton text="Daftar" color="#1746A2"/>

    </ScrollView>
  )
}

export default Registrasi