import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';
import appStyles2 from '../assets/appStyles2';

export default function MenuScreen() {
  // State to hold selected values for dropdowns
  const [performance, setPerformance] = useState('default');
  const [cpu, setCpu] = useState('');
  const [gpu, setGpu] = useState('');
  const [ram, setRam] = useState('');
  const [motherboard, setMotherboard] = useState('');
  const [powerSupply, setPowerSupply] = useState('');
  const [storage, setStorage] = useState('');

  // Options for CPUs, GPUs, and other components based on performance tier
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

  // Set CPU and GPU options based on performance
  const performanceTier = performance !== 'default' ? performanceOptions[performance] : {};

  return (
    <View style={appStyles2.container}>
      <Text style={appStyles2.title}>Choose Your Components</Text>
      
      {/* Performance Tier Dropdown */}
      <Picker
        style={appStyles2.dropdown}
        selectedValue={performance}
        onValueChange={setPerformance}
      >
        <Picker.Item label="Select Performance Tier" value="default" />
        <Picker.Item label="Low" value="low" />
        <Picker.Item label="Mid" value="mid" />
        <Picker.Item label="High" value="high" />
      </Picker>

      {/* CPU Dropdown based on Performance */}
      {performance !== 'default' && (
        <Picker
          style={appStyles2.dropdown}
          selectedValue={cpu}
          onValueChange={setCpu}
        >
          <Picker.Item label="Select CPU" value="default" />
          {performanceTier.cpu.map((cpuOption, index) => (
            <Picker.Item key={index} label={cpuOption} value={cpuOption} />
          ))}
        </Picker>
      )}

      {/* GPU Dropdown based on Performance */}
      {performance !== 'default' && (
        <Picker
          style={appStyles2.dropdown}
          selectedValue={gpu}
          onValueChange={setGpu}
        >
          <Picker.Item label="Select GPU" value="default" />
          {performanceTier.gpu.map((gpuOption, index) => (
            <Picker.Item key={index} label={gpuOption} value={gpuOption} />
          ))}
        </Picker>
      )}

      {/* RAM Dropdown */}
      <Picker
        style={appStyles2.dropdown}
        selectedValue={ram}
        onValueChange={setRam}
      >
        <Picker.Item label="Select RAM" value="default" />
        <Picker.Item label="8GB" value="8GB" />
        <Picker.Item label="16GB" value="16GB" />
        <Picker.Item label="32GB" value="32GB" />
      </Picker>

      {/* Motherboard Dropdown */}
      <Picker
        style={appStyles2.dropdown}
        selectedValue={motherboard}
        onValueChange={setMotherboard}
      >
        <Picker.Item label="Select Motherboard" value="default" />
        <Picker.Item label="ASUS ROG Strix B550-F Gaming" value="ASUS ROG Strix B550-F Gaming" />
        <Picker.Item label="MSI MAG Z690 TOMAHAWK WIFI" value="MSI MAG Z690 TOMAHAWK WIFI" />
        <Picker.Item label="Gigabyte AORUS X570 Elite" value="Gigabyte AORUS X570 Elite" />
        <Picker.Item label="ASRock Z690 Taichi" value="ASRock Z690 Taichi" />
        <Picker.Item label="EVGA Z590 FTW WIFI" value="EVGA Z590 FTW WIFI" />
      </Picker>

      {/* Power Supply Dropdown */}
      <Picker
        style={appStyles2.dropdown}
        selectedValue={powerSupply}
        onValueChange={setPowerSupply}
      >
        <Picker.Item label="Select Power Supply" value="default" />
        <Picker.Item label="500W" value="500W" />
        <Picker.Item label="750W" value="750W" />
        <Picker.Item label="1000W" value="1000W" />
      </Picker>

      {/* Storage Dropdown */}
      <Picker
        style={appStyles2.dropdown}
        selectedValue={storage}
        onValueChange={setStorage}
      >
        <Picker.Item label="Select Storage" value="default" />
        <Picker.Item label="500GB" value="500GB" />
        <Picker.Item label="1TB" value="1TB" />
        <Picker.Item label="2TB" value="2TB" />
      </Picker>
    </View>
  );
}
