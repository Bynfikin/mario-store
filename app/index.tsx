import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import Button from './auth/_components/button';

const InitialLoginScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      {/* Logo y Título */}
      <View className="items-center justify-center mt-12 mb-8">
        <View className="w-24 h-24 mb-4">
          {/* Aquí agregar el logo de la escuela 
              <Image
          source={require('')}
          className="w-full h-full"
          resizeMode="contain"
          />  
          */}
        </View>
        <Text className="text-2xl font-bold text-center">
          Escuela Tecnica N1{'\n'}Otto Krause
        </Text>
      </View>
      
      {/* Texto de bienvenida */}
      <View className="px-6 mb-8">
        <Text className="text-center text-gray-600">
          Iniciar sesión o registrarse
        </Text>
      </View>
      
      {/* Botones */}
      <View className="px-6 gap-4">
        <Button 
          label="Ingresar" 
          variant="primary"
          onPress={() => router.push('/auth/Login')}
        />
        <Button 
          label="Registrarse" 
          variant="secondary"
          onPress={() => router.push('/auth/Register')}
        />
      </View>
      
      {/* Decoración inferior */}
      <View className="mt-auto">
        {/* Aquí agregar la foto inferior */}
      </View>
    </View>
  );
};

export default InitialLoginScreen;