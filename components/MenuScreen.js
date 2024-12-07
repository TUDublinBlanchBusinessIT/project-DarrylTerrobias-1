import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';
import appStyles2 from '../assets/appStyles2'; 

export default function MenuScreen() {
  // State to hold selected values for dropdowns
  const [performance, setPerformance] = useState('low');
  const [cpu, setCpu] = useState('');
  const [gpu, setGpu] = useState('');
  const [ram, setRam] = useState('');
  const [motherboard, setMotherboard] = useState('');
  const [powerSupply, setPowerSupply] = useState('');
  const [storage, setStorage] = useState('');

  // Options for CPUs, GPUs, and other components based on performance tier
  const performanceOptions = {
    low: {
      cpu: ['Ryzen 3', 'Intel i3'],
      gpu: ['GTX 10', 'Radeon RX 6000'],
      // Keep these fields as 'preference'
    },
    mid: {
      cpu: ['Ryzen 5', 'Intel i5'],
      gpu: ['GTX 1600', 'RTX 3000', 'Radeon RX 6000 XT'],
      // Keep these fields as 'preference'
    },
    high: {
      cpu: ['Ryzen 9', 'Intel i9'],
      gpu: ['RTX 3000', 'Radeon RX 7000 XT'],
      // Keep these fields as 'preference'
    }
  };

  // Set CPU and GPU options based on performance
  const performanceTier = performanceOptions[performance];

  return (
    <View style={appStyles2.container}>
      <Text style={appStyles2.title}>Choose Your Components</Text>
      
      {/* Performance Dropdown */}
      <Picker style={appStyles2.dropdown} selectedValue={performance} onValueChange={setPerformance}>
        <Picker.Item label="Low" value="low" />
        <Picker.Item label="Mid" value="mid" />
        <Picker.Item label="High" value="high" />
      </Picker>

      {/* CPU Dropdown based on Performance */}
      <Picker style={appStyles2.dropdown} selectedValue={cpu} onValueChange={setCpu}>
        {performanceTier.cpu.map((cpuOption, index) => (
          <Picker.Item key={index} label={cpuOption} value={cpuOption} />
        ))}
      </Picker>

      {/* GPU Dropdown based on Performance */}
      <Picker style={appStyles2.dropdown} selectedValue={gpu} onValueChange={setGpu}>
        {performanceTier.gpu.map((gpuOption, index) => (
          <Picker.Item key={index} label={gpuOption} value={gpuOption} />
        ))}
      </Picker>

      {/* Ram, Motherboard, Power Supply, and Storage - Preferences */}
      <Picker style={appStyles2.dropdown} selectedValue={ram} onValueChange={setRam}>
        <Picker.Item label="8GB" value="8GB" />
        <Picker.Item label="16GB" value="16GB" />
        <Picker.Item label="32GB" value="32GB" />
      </Picker>

      <Picker style={appStyles2.dropdown} selectedValue={motherboard} onValueChange={setMotherboard}>
        <Picker.Item label="Motherboard A" value="A" />
        <Picker.Item label="Motherboard B" value="B" />
        <Picker.Item label="Motherboard C" value="C" />
      </Picker>

      <Picker style={appStyles2.dropdown} selectedValue={powerSupply} onValueChange={setPowerSupply}>
        <Picker.Item label="500W" value="500W" />
        <Picker.Item label="750W" value="750W" />
        <Picker.Item label="1000W" value="1000W" />
      </Picker>

      <Picker style={appStyles2.dropdown} selectedValue={storage} onValueChange={setStorage}>
        <Picker.Item label="500GB" value="500GB" />
        <Picker.Item label="1TB" value="1TB" />
        <Picker.Item label="2TB" value="2TB" />
      </Picker>
    </View>
  );
}