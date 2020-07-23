import React from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

import logoImage from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImage} />

            <View>
              <Title>Log In</Title>
            </View>

            <Input name="email" icon="mail" placeholder="Email" />
            <Input name="password" icon="lock" placeholder="Password" />

            <Button
              onPress={() => {
                console.log('button');
              }}
            >
              Enter
            </Button>

            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Forgot Password</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Register Now</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
