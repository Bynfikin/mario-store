import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Button from './_components/button';
import Form, { FormField } from './_components/form';

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-white p-6">
      {/* Botón de cerrar */}
      <TouchableOpacity 
        className="p-2 mb-6" 
        onPress={() => router.back()}
        >
        <Text className="text-2xl">×</Text>
      </TouchableOpacity>
      
      <View className="flex-1 justify-center">
        <Form title="Iniciar sesión">
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
          
          <View className="mt-6">
            <Button 
              label="Ingresar" 
              onPress={() => {
                // Solo para visualización, no hay lógica de autenticación
                console.log('Intentando iniciar sesión con:', email, password);
              }}
            />
          </View>

          
          {/* Botón de olvidar contraseña por hacerse, despues del martes */}
          <TouchableOpacity className="mt-4 items-center">
            <Text className="text-gray-600">¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          
          <View className="flex-row justify-center mt-8">
            <Text className="text-gray-600">¿No tienes cuenta? </Text>
            <TouchableOpacity onPress={() => router.push('/auth/Register')}>
              <Text className="text-red-600 font-medium">Regístrate</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </View>
    </View>
  );
};

export default LoginScreen;