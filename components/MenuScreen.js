import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import appStyles2 from '../assets/appStyles2';

// CustomPicker component
const CustomPicker = ({ label, options, selectedValue, onValueChange }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={appStyles2.dropdownContainer}>
      <TouchableOpacity
        style={appStyles2.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={appStyles2.dropdownText}>
          {selectedValue || `Select ${label}`}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={appStyles2.modalContainer}>
          <View style={appStyles2.modalContent}>
            <Text style={appStyles2.modalTitle}>{label}</Text>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={appStyles2.modalOption}
                  onPress={() => {
                    onValueChange(item);
                    setModalVisible(false);
                  }}
                >
                  <Text style={appStyles2.modalOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default function MenuScreen() {
  const [performance, setPerformance] = useState('default');
  const [cpu, setCpu] = useState('');
  const [gpu, setGpu] = useState('');
  const [ram, setRam] = useState('');
  const [motherboard, setMotherboard] = useState('');
  const [powerSupply, setPowerSupply] = useState('');
  const [storage, setStorage] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);



  const prices = {
    cpu: {
      // Low
    'Ryzen 3 1200': 15, 
    'Ryzen 3 1300X': 30, 
    'Ryzen 3 2200G': 22, 
    'Ryzen 3 2300X': 35, 
    'Ryzen 3 3100': 45, 
    'Ryzen 3 3300X': 55, 
    'Ryzen 3 3200G': 35, 
    'Ryzen 3 4100': 55, 
    'Ryzen 3 4300G': 80, 
    'Ryzen 3 4350G': 100, 
    'Ryzen 3 5300G': 90, 
    'Ryzen 3 5100': 80, 
    'Core i3-7100': 1, 
    'Core i3-7300': 30, 
    'Core i3-8100': 12, 
    'Core i3-8300': 18, 
    'Core i3-9100': 32, 
    'Core i3-9300': 40, 
    'Core i3-10100': 52, 
    'Core i3-10300': 55, 
    'Core i3-11100': 60, 
    'Core i3-12100': 75, 
    'Core i3-13100': 100,
      // Mid
    'Ryzen 5 4500': 55, 
    'Ryzen 5 4600G': 65, 
    'Ryzen 5 4600GE': 70, 
    'Ryzen 5 5500': 82, 
    'Ryzen 5 5600': 110, 
    'Ryzen 5 5600X': 120, 
    'Ryzen 5 5600G': 110, 
    'Ryzen 5 5600GE': 110, 
    'Ryzen 5 7600': 160, 
    'Ryzen 5 7600X': 180, 
    'Ryzen 5 7600G': 185, 
    'Core i5-12600KF': 200, 
    'Core i5-13400': 190, 
    'Core i5-13400F': 207, 
    'Core i5-13500': 230, 
    'Core i5-13600': 220, 
    'Core i5-13600K': 286, 
    'Core i5-13600KF': 279,
      // High
    'Ryzen 9 5950X': 300, 
    'Ryzen 9 7900X': 360, 
    'Ryzen 9 7900': 320, 
    'Ryzen 9 7900X3D': 470, 
    'Ryzen 9 7950X': 420, 
    'Ryzen 9 7950X3D': 650, 
    'Core i9-12900KF': 240, 
    'Core i9-12900KS': 250, 
    'Core i9-13900K': 400, 
    'Core i9-13900KF': 380, 
    'Core i9-13900KS': 500 ,
    },
    gpu: {
      // Low
    'GeForce GTX 1050': 50,
    'GeForce GTX 1050 Ti': 75, 
    'GeForce GTX 1060': 110, 
    'GeForce GTX 1070': 135, 
    'GeForce GTX 1070 Ti': 155, 
    'GeForce GTX 1080': 175, 
    'GeForce GTX 1080 Ti': 265, 
      // Mid
    'GeForce GTX 1650': 100, 
    'GeForce GTX 1650 Super': 175, 
    'GeForce GTX 1660': 130, 
    'GeForce GTX 1660 Super': 175, 
    'GeForce GTX 1660 Ti': 160, 
    'GeForce RTX 3050': 240, 
    'GeForce RTX 3060': 310, 
    'GeForce RTX 3060 Ti': 310, 
    'GeForce RTX 3070': 420, 
    'GeForce RTX 3070 Ti': 420, 
    'GeForce RTX 3080': 520, 
    'GeForce RTX 3080 Ti': 620, 
    'GeForce RTX 3090': 700, 
    'GeForce RTX 3090 Ti': 850,
      // High
    'GeForce RTX 4060': 400, 
    'GeForce RTX 4060 Ti': 400, 
    'GeForce RTX 4070': 500, 
    'GeForce RTX 4070 Ti': 750, 
    'GeForce RTX 4080': 1000, 
    'GeForce RTX 4090': 1570
    },
    ram: {
      '8GB': 20,
      '16GB': 59,
      '32GB': 90,
      '64GB': 150,
    },
    motherboard: {
      'ASUS ROG Strix B550-F Gaming': 180,
      'MSI MAG Z690 TOMAHAWK WIFI': 192,
      'Gigabyte AORUS X570 Elite': 229,
      'ASRock Z690 Taichi': 271,
      'EVGA Z590 FTW WIFI': 180,
    },
    powerSupply: {
      '500W': 57,
      '650W': 76,
      '750W': 120,
      '1000W': 200,
      '1600W': 505,
    },
    storage: {
      '500GB': 20,
      '1TB': 62,
      '2TB': 70,
      '4TB': 120,
      '8TB': 205,
      '12TB': 307,
    }
  };

  const performanceOptions = {
    low: {
      cpu: [
        'Ryzen 3 1200','Ryzen 3 1300X',
        'Ryzen 3 2200G','Ryzen 3 2300X',
        'Ryzen 3 3100','Ryzen 3 3300X',
        'Ryzen 3 3200G','Ryzen 3 4100',
        'Ryzen 3 4300G','Ryzen 3 4350G',
        'Ryzen 3 5300G','Ryzen 3 5100',
        'Core i3-7100','Core i3-7300',
        'Core i3-8100','Core i3-8300',
        'Core i3-9100','Core i3-9300',
        'Core i3-10100','Core i3-10300',
        'Core i3-11100','Core i3-12100','Core i3-13100',
      ],
      gpu: [
        'GeForce GTX 1080 Ti', 'GeForce GTX 1080', 
        'GeForce GTX 1070 Ti', 'GeForce GTX 1070', 
        'GeForce GTX 1060' , 'GeForce GTX 1050 Ti', 'GeForce GTX 1050'
      ],
    },
    mid: {
      cpu: [
        'Ryzen 5 4500', 'Ryzen 5 4600G', 
        'Ryzen 5 4600GE', 'Ryzen 5 5500', 
        'Ryzen 5 5600', 'Ryzen 5 5600X', 
        'Ryzen 5 5600G', 'Ryzen 5 5600GE', 
        'Ryzen 5 7600', 'Ryzen 5 7600X', 'Ryzen 5 7600G',
        'Core i5-12600KF', 'Core i5-13400', 
        'Core i5-13400F', 'Core i5-13500', 
        'Core i5-13600', 'Core i5-13600K', 
        'Core i5-13600KF',
      ],
      gpu: [
        'GTX 1650', 'GTX 1650 Super', 
        'GTX 1660', 'GTX 1660 Super', 'GTX 1660 Ti',
        'RTX 3050', 'RTX 3060', 
        'RTX 3060 Ti', 'RTX 3070', 
        'RTX 3070 Ti', 'RTX 3080', 
        'RTX 3080 Ti', 'RTX 3090', 'RTX 3090 Ti',
      ],
    },
    high: {
      cpu: [
        'Ryzen 9 5950X', 'Ryzen 9 7900X', 
        'Ryzen 9 7900', 'Ryzen 9 7900X3D', 
        'Ryzen 9 7950X', 'Ryzen 9 7950X3D',
        'Core i9-12900KF', 'Core i9-12900KS', 
        'Core i9-13900K', 'Core i9-13900KF', 'Core i9-13900KS',
      ],
      gpu: [
        'RTX 4060', 'RTX 4060 Ti', 
        'RTX 4070', 'RTX 4070 Ti', 
        'RTX 4080', 'RTX 4090',
      ],
    }
  };
  const ramOptions = ['8GB', '16GB', '32GB','64GB'];

  const motherboardOptions = [
    'ASUS ROG Strix B550-F Gaming', 
    'MSI MAG Z690 TOMAHAWK WIFI', 
    'Gigabyte AORUS X570 Elite',
    'ASRock Z690 Taichi',
    'EVGA Z590 FTW WIFI',
];

  const powerSupplyOptions = ['500W','650W', '750W', '1000W','1600W'];
  
  const storageOptions = ['500GB', '1TB', '2TB', '4TB', '8TB', '12TB'];

/*
  const calculateTotalPrice = () => {
    let total = 0;

    // Add the selected CPU price
    if (cpu) total += prices.cpu[cpu] || 0;

    // Add the selected GPU price
    if (gpu) total += prices.gpu[gpu] || 0;

    // Add RAM price
    if (ram) total += prices.ram[ram] || 0;

    // Add motherboard price
    if (motherboard) total += prices.motherboard[motherboard] || 0;

    // Add power supply price
    if (powerSupply) total += prices.powerSupply[powerSupply] || 0;

    // Add storage price
    if (storage) total += prices.storage[storage] || 0;

    // Set the total price state
    setTotalPrice(total);
  };

*/

  const calculateTotalPrice = () => {
    let total = 0;
    total += prices.cpu[cpu] || 0;
    total += prices.gpu[gpu] || 0;
    total += prices.ram[ram] || 0;
    total += prices.motherboard[motherboard] || 0;  
    total += prices.powerSupply[powerSupply] || 0;
    total += prices.storage[storage] || 0;
    setTotalPrice(total);
  };
  const availableCPUs = performanceOptions[performance]?.cpu || [];
  const availableGPUs = performanceOptions[performance]?.gpu || [];

  return (
    <View style={appStyles2.container}>
      <Text style={appStyles2.title}>Choose Your Components</Text>
      <CustomPicker
        label="Performance Tier"
        options={['low', 'mid', 'high']}
        selectedValue={performance !== 'default' ? performance : ''}
        onValueChange={setPerformance}
      />
      {performance !== 'default' && (
        <>
          <CustomPicker
            label="CPU"
            options={availableCPUs}
            selectedValue={cpu}
            onValueChange={setCpu}
          />
          <CustomPicker
            label="GPU"
            options={availableGPUs}
            selectedValue={gpu}
            onValueChange={setGpu}
          />
        </>
      )}
      <CustomPicker
        label="RAM"
        options={ramOptions}
        selectedValue={ram}
        onValueChange={setRam}
      />

      <CustomPicker
        label="Motherboard"
        options={motherboardOptions}
        selectedValue={motherboard}
        onValueChange={setMotherboard}
      />
      <CustomPicker
        label="PowerSupply"
        options={powerSupplyOptions}
        selectedValue={powerSupply}
        onValueChange={setPowerSupply}
      />
      <CustomPicker
        label="Storage"
        options={storageOptions}
        selectedValue={storage}
        onValueChange={setStorage}
      />


      <TouchableOpacity style={appStyles2.button} onPress={calculateTotalPrice}>
        <Text style={appStyles2.buttonText}>Calculate Total Price</Text>
      </TouchableOpacity>

      {totalPrice > 0 && (
        <Text style={appStyles2.priceText}>Total Price: €{totalPrice}</Text>
      )}
    </View>
  );
}
