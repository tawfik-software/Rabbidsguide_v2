import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';

const ContactUsForm = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!FirstName || !email || !message) {
      Alert.alert('Please fill out all fields');
      return;
    }

    // Handle form submission logic here, e.g., send data to server
    Alert.alert('Thank you for your message!');
  };

  return (
    <View className="flex-1 p-5 justify-center mb-11">
      <View className="items-center mt-10 justify-center">
        <Image
          source={require("../assets/images/firstmage.png")}
          className="h-32 w-32 rounded-full"
        />

        <Text className="font-mRegular text-sm p-5">Rayman Raving Rabbids</Text>
      </View>
      <Text className="text-center text-xl mb-5">Contact Us</Text>
      <TextInput
        placeholder="First Name"
        value={FirstName}
        onChangeText={setFirstName}
        className="border-red-600 border-2 rounded-md py-3 mb-3 h-10"
      />
      <TextInput
        placeholder="Last Name"
        value={LastName}
        onChangeText={setLastName}
        className="border-red-600 border-2 rounded-md py-3 mb-3 h-10"
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        className="border-red-600 border-2 rounded-md py-3 mb-3 h-10"
      />
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
        className="border-red-600 border-2 rounded-md py-3 mb-3 h-10"
      />
      <TouchableOpacity onPress={handleSubmit} className="bg-[#E87472] p-3 rounded-md items-center">
        <Text className="text-white text-base">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactUsForm;
