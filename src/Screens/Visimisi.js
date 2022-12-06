import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native'

const Visimisi = () => {
  return (
    <View style={{flex: 1, backgroundColor:'#00005C', alignItems: 'center'}}>
        <ScrollView>
            <View style={{alignItems: 'center', marginTop: 40, backgroundColor: '#ffffff', width: 380, borderRadius: 10}}>
                <Text style={{fontSize: 35, fontWeight: 'bold', padding: 20}}>Visi & Misi</Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 30, backgroundColor: '#ffffff', width: 380, borderRadius: 10}}>
                <Text style={{fontSize: 35, fontWeight: 'bold', marginTop: 20}}>Visi</Text>
                <Text style={{padding: 20, fontSize: 20}}>Mewujudkan dan meningkatkan sumber daya manusia berbasis rekayasa teknologi robotika dengan berfokus pada industri maritim, transportasi, dan logistik untuk peningkatan daya saing bangsa indonesia</Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 30, backgroundColor: '#ffffff', width: 380, borderRadius: 10}}>
                <Text style={{fontSize: 35, fontWeight: 'bold', marginTop: 20}}>Misi</Text>
                <View style={{padding: 20}}>
                    <Text style={{fontSize: 20}}>1. Mengikuti Kompetisi dalam bidang robotika dalam skala Nasional maupun Internasional</Text>
                    <Text style={{fontSize: 20}}>2. Menjadikan UKM Robotika sebagai wadah untuk mengembangkan bakat dan prestasi dibidang robotika</Text>
                    <Text style={{fontSize: 20}}>3. Memanfaatkan ilmu pengetahuan teknologi robotika untuk pelatihan atau pembelajaran dibidang rekayasa teknologi robotika yang berfokus pada bidang teknologi industri maritim, transportasi, dan logistik</Text>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default Visimisi
