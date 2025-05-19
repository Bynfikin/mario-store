import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Button from './_components/button';
import Form, { FormField } from './_components/form';

const RegisterScreen = () => {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        {/* Botón de cerrar */}
        <TouchableOpacity 
          className="p-2 mb-6" 
          onPress={() => router.back()}
        >
          <Text className="text-2xl">×</Text>
        </TouchableOpacity>
        
        <Text className="text-xl font-bold mb-6">Tus datos</Text>
        <Text className="mb-6 text-gray-600">
          Ingresa tus datos para registrarte y disfrutar de mario
        </Text>
        
        <Form>
          <FormField
            placeholder="Nombre"
            value={nombre}
            onChangeText={setNombre}
          />
          
          <FormField
            placeholder="Apellido"
            value={apellido}
            onChangeText={setApellido}
          />
          
          <FormField
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <FormField
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Text className="text-gray-400 text-xs -mt-3 mb-4">
            Debes tener al menos 6 caracteres{'\n'}
            Debe incluir una mayúscula{'\n'}
            y al menos 1 número
          </Text>
          
          <FormField
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          
          <View className="mt-6">
            <Button 
              label="Ingresar" 
              variant="primary"
              onPress={() => {
                // Solo para visualización, no hay lógica de registro
                console.log('Datos de registro:', { nombre, apellido, email, password });
              }}
            />
          </View>
        </Form>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;