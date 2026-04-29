import React, { useState, useEffect } from 'react';
import { View, Text, Image, Switch, Alert } from 'react-native';
import ScreenWrapper from './src/components/ScreenWrapper';
import FormInput from './src/components/FormInput';
import FormButton from './src/components/FormButton';
import { styles } from './App.styles';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [form, setForm] = useState({
    produto: '',
    quantidade: '',
    fornecedor: '',
    urgente: false
  });
  const [errors, setErrors] = useState({
    produto: '',
    quantidade: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log("Sistema Carregado...");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const produtoValido = form.produto.trim().length >= 3;
    const quantidadeValida = Number(form.quantidade) > 0;
    const fornecedorValido = form.fornecedor.trim().length >= 3;

    if (form.produto && !produtoValido) {
      setErrors(prev => ({ ...prev, produto: 'Nome muito curto' }));
    } else {
      setErrors(prev => ({ ...prev, produto: '' }));
    }

    setIsFormValid(produtoValido && quantidadeValida && fornecedorValido);
  }, [form.produto, form.quantidade, form.fornecedor]);

  const handleSubmit = () => {
    console.log("Dados do Formulário:", form);
    Alert.alert("Sucesso", "Pedido registrado na Feira!");
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando Feira de Alimentos...</Text>
      </View>
    );
  }

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2329/2329865.png' }} 
          style={styles.logo} 
        />
        <Text style={styles.title}>Cadastro de Mercadoria</Text>
      </View>

      <FormInput 
        label="Nome do Produto"
        placeholder="Ex: Tomate Cereja"
        value={form.produto}
        onChangeText={(val) => setForm({ ...form, produto: val })}
        error={errors.produto}
      />

      <FormInput 
        label="Quantidade (kg)"
        placeholder="Ex: 10"
        keyboardType="numeric"
        value={form.quantidade}
        onChangeText={(val) => setForm({ ...form, quantidade: val })}
      />

      <FormInput 
        label="Fornecedor"
        placeholder="Nome da Fazenda ou Distribuidor"
        value={form.fornecedor}
        onChangeText={(val) => setForm({ ...form, fornecedor: val })}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Pedido Urgente?</Text>
        <Switch 
          value={form.urgente}
          onValueChange={(val) => setForm({ ...form, urgente: val })}
          trackColor={{ false: "#767577", true: "#2D2D2D" }}
          thumbColor={form.urgente ? "#FFF" : "#f4f3f4"}
        />
      </View>

      <FormButton 
        title="Finalizar Cadastro" 
        onPress={handleSubmit}
        disabled={!isFormValid}
      />
    </ScreenWrapper>
  );
}