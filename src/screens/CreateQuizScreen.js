import React, {useState} from 'react';
import {View, Text, SafeAreaView, ToastAndroid} from 'react-native';
import {COLORS} from '../values/values';
import FormButton from '../components/shared/FormButton';
import InputForm from '../components/shared/InputForm';
import {createQuizFun} from '../tools/database';

const CreateQuizScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleQuizSave = async () => {
    const QuizIdNow = Math.floor(100000 + Math.random() * 9000).toString();
    // Save to firestore
    await createQuizFun(QuizIdNow, title, description);

    // Navigate to Add Question string
    navigation.navigate('AddQuestionScreen', {
      currentQuizId: QuizIdNow,
      currentQuisTitle: title,
    });

    // Reset
    setTitle('');
    setDescription('');
    ToastAndroid.show('Quiz Saved', ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 20,
          fontWeight: 'bold',
          color: COLORS.black,
        }}>
        Create Quiz
      </Text>

      <InputForm
        labelText="Title"
        placeholderText="enter quiz title"
        onChangeText={val => setTitle(val)}
        value={title}
      />
      <InputForm
        labelText="Description"
        placeholderText="enter quiz description"
        onChangeText={val => setDescription(val)}
        value={description}
      />

      <FormButton labelText="Save Quiz" handleOnPress={handleQuizSave} />

      {/* Temporary button - navigate without saving quiz*/}
      {/* <FormButton
        labelText="Navigate to AddQuestionScreen"
        style={{
          marginVertical: 20,
        }}
        handleOnPress={() => {
          navigation.navigate('AddQuestionScreen', {
            currentQuizId: '103404',
            currentQuizTitle: 'Demo quiz',
          });
        }}
      /> */}
    </SafeAreaView>
  );
};

export default CreateQuizScreen;
