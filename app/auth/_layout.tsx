import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NotFound" options={{ title: 'No Encontrado' }} />      
      <Stack.Screen name="Login" options={{ title: 'Iniciar Sesión' }} />
      <Stack.Screen name="Register" options={{ title: 'Registrarse' }} />

    </Stack>
  );
}